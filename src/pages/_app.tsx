import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from '../components/Header/index';
import { ModalContact } from '../components/ModalContact';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  function handleModalOpen() {
    setIsModalOpen(true)
  }

  function handleModalClose() {
    setIsModalOpen(false)
  }

  return (
    <>
      <Header onOpenModal={handleModalOpen} />
      <ModalContact 
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
      />
      <Toaster position="bottom-right"/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
