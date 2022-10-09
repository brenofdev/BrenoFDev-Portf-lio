import Link from 'next/link';
import { GraphQLClient, gql } from 'graphql-request';

import styles from './styles.module.scss';

const graphcms = new GraphQLClient(
  'https://api-sa-east-1.hygraph.com/v2/cl905gwq71ckm01t620nj3dzs/master'
);

const QUERY = gql`
  {
    posts{
      id, 
      title,
      slug,
      subContent
      coverPhoto{
        url
      }
    }
  }
`


export async function getStaticProps(){
  const {posts} = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  }
}

export function ProjectCard({ 
    title, 
    coverPhoto, 
    slug, 
    subContent,
    category
  }) {
  return (
    <Link href={`/posts/${slug}`} >
      <div className={styles.projectCard}>
        <img src={coverPhoto.url} alt="" />

        <div className={styles.projectDescription}>
          <strong>{title}</strong>
          <div className={styles.content}>
            {subContent}
          </div>
         
          <div className={styles.category}>
            {category}
          </div>
        </div>
      </div>    
    </Link>
  )
}