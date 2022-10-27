import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ContactModalButton/index';

import logoImg from '../../../public/images/logo.svg';

import styles from './styles.module.scss';

interface ModalOpenProps {
  onOpenModal: () => void;
}

export function Header({onOpenModal}: ModalOpenProps) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImg} alt="logo brenodev" width={127} height={20}/>
        <nav>
          <Link href="/">
            <a className={styles.active} >Home</a> 
          </Link>
          <Link href="/projects"> 
            <a>Projetos</a> 
          </Link>
        </nav>
      </div>
      <div className={styles.headerButtons}>
        <Button onOpenModal={onOpenModal} />
      </div>
    </header>
  )
}