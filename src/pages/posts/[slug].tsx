import { GraphQLClient, gql } from 'graphql-request';

import styles from './slug.module.scss';

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/cl905gwq71ckm01t620nj3dzs/master"
);

const QUERY = gql`
  query Post($slug: String!){
    post(where: {slug: $slug}){
      id
      title
      slug
      category
      coverPhoto {
        id
        url
      }
      content {
        html
      }
      projectPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts{
      slug
    }
  }
`;

export async function getStaticPaths() {
  const {posts} = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({params: {slug: post.slug}})),
    fallback: false,
  };
}

export async function getStaticProps({params}){
  const slug = params.slug;
  const data = await graphcms.request(QUERY, {slug});
  const post = data.post
  return {
    props: {
      post,
    },
    revalidate: 30,
  }
}

export default function ProjectPost({post}){
  return (
    <main className={styles.container}>
      <h3>{post.title}</h3>
      <div>
        
        <h6>Descrição Geral do Projeto:</h6>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </div>
      <img src={post.projectPhoto.url} alt="" />
    </main>
  )
}