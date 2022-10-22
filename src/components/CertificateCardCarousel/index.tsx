import Image from 'next/image';

import styles from './styles.module.scss';

interface CertificateProps {
  iconLogo: any;
  name: string;
  date: string;
  description: string;
}

export function CertificateCardCarousel({ iconLogo, name, date, description }: CertificateProps) {
  return (
    <div className={styles.certificateCardContainer}>
      <div className={styles.certificateCardHeader}>
        <Image src={iconLogo} alt="logo dos cursos"/>
        <strong>{name}</strong>
        <hr />
        <small>{date}</small>
      </div>
      <div className={styles.certificateCardFooter}>
        <p>{description}</p>
      </div>
    </div>
  )
}