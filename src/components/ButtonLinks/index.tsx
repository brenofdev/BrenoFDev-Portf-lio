import Link from "next/link";

import styles from './styles.module.scss';

interface ButtonLinkProps {
  link: string;
  tituloButton: string;
  iconButton: any;
  target: any;
}

export function ButtonLink({ link, tituloButton, iconButton, target }: ButtonLinkProps) {
  return (
    <Link href={link} >
      <a className={styles.buttonLink} target={target}>
        {tituloButton}
        {iconButton}
      </a>
    </Link>
  )
}