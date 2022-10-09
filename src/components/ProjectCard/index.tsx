import Link from 'next/link';
// import { GraphQLClient, gql } from 'graphql-request';

import styles from './styles.module.scss';

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