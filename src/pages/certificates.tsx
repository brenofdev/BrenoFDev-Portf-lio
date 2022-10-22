import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from 'phosphor-react';

import logoStartse from '../../public/images/logo-startse.png';
import logoRocketseat from '../../public/images/logo-rocketseat.png';

import { CertificateCardCarousel } from "../components/CertificateCardCarousel";

import styles from './certificates.module.scss';

export default function Certificates() {
  return (
    <>
      <Head>
        <title>Certificados | Breno Dev</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.content}>
          <h4>Certificado</h4>

          
          
          <div className={styles.certificateCarouselContainer}>
            <CertificateCardCarousel 
              iconLogo={logoStartse}
              name={'StartSe - Tech Academy'}
              date={'22/07/2022'}
              description={'O currículo de aprendizado inclui: fundamentos básicos de front-end e back-end. 100h de Formação online.'}
            />

            <CertificateCardCarousel 
              iconLogo={logoRocketseat}
              name={'RocketSeat - Discover'}
              date={'13/08/2022'}
              description={'O currículo de aprendizado inclui: HTML CSS avançado, e fundamentos básicos de APIs, ReactJS, Typescript e mais. 42h de Formação online. '}
            />
          </div>
        </section>

        <section className={styles.arrows}>
          <Link href="/about">
            <a className={styles.arroLeft}>
            <ArrowLeft size={40}/>
            Sobre mim
            </a>
          </Link>
        </section>
        
      </main>

      
    </>
  )
}