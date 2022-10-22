import Image from 'next/image';



import styles from './styles.module.scss';

interface CertificateProps {
  iconLogo: any;
  name: string;
  date: string;
}

export function CertificateCard({ iconLogo, name, date }: CertificateProps) {
  return (
    <div className={styles.certificateCardContainer}>
      <Image src={iconLogo} />
      <strong>{name}</strong>
      <hr />
      <small>{date}</small>
    </div>
  )
}