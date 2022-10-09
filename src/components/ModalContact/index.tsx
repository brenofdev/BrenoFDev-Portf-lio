import { FormEvent, useState } from 'react';
import { X } from 'phosphor-react';

import Modal from 'react-modal';

import styles from './styles.module.scss';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendMail';



interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalContact({isOpen, onRequestClose}: ModalProps) {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  
  async function handleSendEmail(event: FormEvent) {
    event.preventDefault()

    if(!name || !email || !message) {
      toast('Preencha todos os campos para enviar sua mensagem', {
        style: {
          background: '#333',
          color: '#fff',
        }
      });
      return;
    }

    try {
      await sendContactMail(name, email, message);
      setName('');
      setEmail('');
      setMessage('');
      onRequestClose();
      toast('E-mail enviado com sucesso!', {
        style: {
          background: '#fff',
          color: '#333',
        }
      });
    } catch {
      toast('Ocorreu um erro ao tentar ao enviar sua mensagem. Tente novamente!', {
        style: {
          background: '#333',
          color: '#fff',
        }
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
        <X size={20} />
      </button>

      <form 
        className={styles.container} 
        onSubmit={handleSendEmail}
      >
        <h2>Mandar Mensagem</h2>

        <input 
          placeholder="Seu nome"
          value={name}
          onChange={({target}) => setName(target.value)}
          
        />

        <input 
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={({target}) => setEmail(target.value)}
          
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

    </Modal>
  )
}

