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
        <Image src={logoImg}/>
        <nav>
          <Link href="/" >
            <a className={styles.active}>Home</a> 
          </Link>
          <Link href="/projects">
            <a>Projetos</a> 
          </Link>
        </nav>
        <Button onOpenModal={onOpenModal} />
      </div>
    </header>
  )
}