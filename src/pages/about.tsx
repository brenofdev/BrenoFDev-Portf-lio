import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import styles from './about.module.scss';

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre mim | FrontLine</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.content}>
          <section className={styles.experience}>
            <h3>Experiência</h3>
            <p>React, Firebase, Sass</p>
            <h3>Experiência prévia</h3>
            <p>ReactNative, Tailwind, Postgresql</p>
          </section>

          <section className={styles.about}>
            Sobre mim
          </section>
        </div>

        <section className={styles.arrows}>
          <Link href="/">
            <a className={styles.arroRight}>
              <ArrowLeft size={40}/>
              Início
            </a>
          </Link>

          <Link href="/certificates">
            <a className={styles.arroRight}>
              Certificados
              <ArrowRight size={40}/>
            </a>
          </Link>
        </section>
      </main>

      
    </>
  )
}