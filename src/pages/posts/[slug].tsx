import { gql, GraphQLClient } from 'graphql-request';
import Image from 'next/image';


import styles from './slug.module.scss';

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/cl905gwq71ckm01t620nj3dzs/master"
)

const QUERY = gql`
  query Post($slug: String!){
    post(where: {slug: $slug}){
      id
      slug
      title
      tools
      functions
      coverPhoto {
        id
        url
      }
      content {
        html
      }
      mockupPhoto {
        id
        url
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
    posts {
      slug
    }
  }
`;

export default function ProjectPost({post}){
  return (
    <main className={styles.container}>
      <h4>{post.title}</h4>
      <div>
        <h6>Descrição Geral do Projeto:</h6>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
        <h6>Ferramentas:</h6>
        <p>{post.tools}</p>
        <h6>Funcionalidades:</h6>
        <p>{post.functions}</p>
      </div>
      <div className={styles.projectPhoto}>
        <Image 
          src={post.mockupPhoto.url}
          alt="mockup do projeto"
          width={1300}
          height={400}
        />
        <Image
          src={post.projectPhoto.url} 
          alt="banner do projeto"
          width={1300}
          height={750} 
        />
      </div>
    </main>
  )
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post: { slug: string; }) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}