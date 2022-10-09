import Image from 'next/image';
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
        <Image 
          // className={styles.coverPhoto} 
          src={coverPhoto.url} 
          alt="capa do projeto" 
          width={400}
          height={200}
        />

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