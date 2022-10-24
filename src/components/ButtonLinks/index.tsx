import Link from "next/link";

import styles from './styles.module.scss';

interface ButtonLinkProps {
  link: string;
  tituloButton: string;
  iconButton: any;
}

export function ButtonLink({ link, tituloButton, iconButton }: ButtonLinkProps) {
  return (
    <Link href={link} >
      <a className={styles.buttonLink} target="_blank">
        {tituloButton}
        {iconButton}
      </a>
    </Link>
  )
}