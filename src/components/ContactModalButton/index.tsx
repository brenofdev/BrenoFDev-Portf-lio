import { User } from 'phosphor-react';

import styles from './styles.module.scss';

interface ButtonModalProps {
  onOpenModal: () => void;
}

export function Button({onOpenModal}: ButtonModalProps) {
  return (
    <button type="button" className={styles.button} onClick={onOpenModal}> 
      <User size={17}/>
      Contato
    </button>
  )
}