
// import ferdzImg from '../../public/images/ferdzImg.png';
import { gql } from 'graphql-request';
// import { useEffect, useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { getGraphCMS } from '../services/graphcms';

import styles from './projects.module.scss';

// const graphcms = new GraphQLClient(
//   process.env.GRAPHCMS_CONTENT_API
// );

const QUERY = gql`
  {
    posts{
      id, 
      title,
      slug,
      category
      subContent
      content {
        html
      }
      coverPhoto{
        url
      }
      projectPhoto{
        url
      }
    }
  }
`

export async function getStaticProps(){
  const graphcms = getGraphCMS()
  const {posts} = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  }
}


export default function Projects({ posts }) {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        {posts.map((post) => (
          <ProjectCard 
            key={post.id}
            slug={post.slug}
            title={post.title} 
            coverPhoto={post.coverPhoto}
            subContent={post.subContent}
            category={post.category}
          />
        ))}
      </div>
    </main>
  )
}

