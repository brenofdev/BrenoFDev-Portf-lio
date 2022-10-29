import { FormEvent, useState } from 'react';
import { X } from 'phosphor-react';
import Modal from 'react-modal';
import toast from 'react-hot-toast';

import { sendContactMail } from '../../services/sendMail';

import styles from './styles.module.scss';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalContact({isOpen, onRequestClose}: ModalProps) {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ number, setNumber ] = useState('');

  
  async function handleSendEmail(event: FormEvent) {
    event.preventDefault()

    if(!name || !email || !message || !number ) {
      toast('Preencha todos os campos para enviar sua mensagem', {
        style: {
          background: '#333',
          color: '#fff',
        },
        position: "bottom-center",
      });
      return;
    }

    try {
      await sendContactMail(name, email, message, number);
      setName('');
      setEmail('');
      setMessage('');
      setNumber('');
      onRequestClose();
      toast('E-mail enviado com sucesso!', {
        style: {
          background: 'var(--pink-primary)',
          color: 'var(--white-secondary)',
        },
        position: "bottom-center",
      });
    } catch {
      toast('Ocorreu um erro ao tentar ao enviar sua mensagem. Tente novamente!', {
        style: {
          background: 'var(--black-primary)',
          color: 'var(--white-secondary',
        },
        position: "bottom-center",
      });
    }
  }    

  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <X size={28} />
      </button>

      <form 
        className={styles.container} 
        onSubmit={handleSendEmail}
      >
        <h2>Vamos conversar</h2>

        <input 
          placeholder="Seu nome"
          value={name}
          onChange={({target}) => setName(target.value)}
          
        />

        <input 
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={({target}) => setEmail(target.value)}
          
        />

        <input 
          placeholder="Seu telefone"
          value={number}
          onChange={({target}) => setNumber(target.value)}
          
        />

        <textarea 
          cols={30} 
          rows={10} 
          placeholder="Mande sua mensagem"
          value={message}
          onChange={({target}) => setMessage(target.value)}
          
        />

        <button 
          type="submit"
        >
          Enviar
        </button>
      </form>

      <div className={styles.footerContactModal}>
        <strong>brenodev@gmail.com</strong>
        <strong>(77) 9 2000-7959</strong>
      </div>
    </Modal>
  )
}

