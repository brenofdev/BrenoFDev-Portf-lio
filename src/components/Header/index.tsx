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
          <a href="/" className={styles.active}>Home</a>
          <a href="/projects">Projetos</a>
        </nav>
        <Button onOpenModal={onOpenModal} />
      </div>
      <div>
        
      </div>
    </header>
  )
}