import React from 'react';
import { ArrowRight, GithubLogo, LinkedinLogo } from 'phosphor-react';

import Head from 'next/head';
import Link from 'next/link';

import { ButtonLink } from '../components/ButtonLinks';
import logoHome from '../../public/images/logo-home.png';

import styles from '../styles/pages/home.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Breno Dev</title>
      </Head>

      <main className={styles.homeContainer}>
        <section className={styles.contentContainer}>
          <div className={styles.introduction}>
            <h1><span>Breno Fernandes</span>, <br /> desenvolvedor ReactJS</h1>
            <p>
              Olá, nesse site você vai conhecer mais
              sobre mim e sobre o meu trabalho.
            </p>
            <div>
              <ButtonLink 
                link={'https://www.linkedin.com/in/breno-f/'}
                tituloButton={'Linkedin'}
                iconButton={<LinkedinLogo size={18}/>} 
              />
              <ButtonLink 
                link={'https://github.com/brenofdev'}
                tituloButton={'Github'} 
                iconButton={<GithubLogo size={18}/>} 
              />
            </div>
          </div>

          <div className={styles.logoHome}>
            <Image src={logoHome} width={400} height={282}/>
          </div>
        </section>

        <section className={styles.footerContainer}>
          <div>
            <Link href="">
              <a className={styles.curriculum}>
                Baixe meu CV
                <hr />
              </a>
            </Link>
          </div>
          <div className={styles.arrows}>
            <Link href="/about">
              <a>
                Sobre mim
                <ArrowRight size={40}/>
              </a>
            </Link>
          </div>
          
        </section>
      </main>
    </>
  )
}
