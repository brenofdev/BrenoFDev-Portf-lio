import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from 'phosphor-react';

import styles from './certificates.module.scss';

export default function Certificates() {
  return (
    <>
      <Head>
        <title>Certificados | FrontLine</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.content}>
          <h2>Certificado</h2>
        </section>

        <section className={styles.arrows}>
          <Link href="/about">
            <a className={styles.arroRight}>
            <ArrowLeft size={40}/>
            Sobre mim
            </a>
          </Link>
        </section>
        
      </main>

      
    </>
  )
}