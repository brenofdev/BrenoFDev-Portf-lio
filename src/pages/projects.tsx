
// import ferdzImg from '../../public/images/ferdzImg.png';
import { gql, GraphQLClient } from 'graphql-request';
// import { useEffect, useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';

import styles from './projects.module.scss';

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/cl905gwq71ckm01t620nj3dzs/master"
)

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

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
    // revalidade: 30,
  };
}

