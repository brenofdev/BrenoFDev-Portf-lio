import Link from 'next/link';
import { Button } from '../ContactModalButton/index';

import styles from './styles.module.scss';

interface ModalOpenProps {
  onOpenModal: () => void;
}

export function Header({onOpenModal}: ModalOpenProps) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <p>FrontLine</p>
        <nav>
          <Link href="/" className={styles.active}>Home</Link>
          <Link href="/projects">Projetos</Link>
        </nav>
        <Button onOpenModal={onOpenModal} />
      </div>
      <div>
        
      </div>
    </header>
  )
}