import Image from 'next/image';
import { ArrowUpRight } from 'phosphor-react';

import { ButtonLink } from '../ButtonLinks';

import styles from './styles.module.scss';

export function ProjectCard({ 
    title, 
    coverPhoto, 
    slug, 
    subContent,
    category
  }) {
  return (
    <div className={styles.projectCard}>
      <Image
        src={coverPhoto.url} 
        alt="capa do projeto" 
        width={568}
        height={261}
      />

      <div className={styles.projectDescription}>
        <div className={styles.category}>
          {category}
        </div>
        <strong>{title}</strong>
        <div className={styles.content}>
          {subContent}
        </div>
        
        <ButtonLink
          link={`/posts/${slug}`}
          target={''}
          tituloButton={'Ver projeto'}
          iconButton={<ArrowUpRight color='var(--pink-primary)'/>}
        />
      </div>
    </div>
  )
}