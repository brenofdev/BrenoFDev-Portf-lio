import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GithubLogo, LinkedinLogo } from 'phosphor-react';

import logoHome from '../../public/images/logo-home.png';

import { ButtonLink } from '../components/ButtonLinks';

import styles from '../styles/pages/home.module.scss';

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
                target={'_blank'}
                tituloButton={'Linkedin'}
                iconButton={<LinkedinLogo size={18}/>} 
              />
              <ButtonLink 
                link={'https://github.com/brenofdev'}
                target={'_blank'}
                tituloButton={'Github'} 
                iconButton={<GithubLogo size={18}/>} 
              />
            </div>
          </div>

          <div className={styles.logoHome}>
            <Image src={logoHome} width={450} height={282} alt="logo breno dev"/>
          </div>
        </section>

        <footer className={styles.footerContainer}>
          <div>
            <Link href="https://docs.google.com/document/d/1mwxDbGXbSaTtfBMZWSEiX6O8bOxBQZMy8P1Xo4ZzRTw/edit?usp=sharing">
              <a className={styles.curriculum} target="_blank">
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
        </footer>
      </main>
    </>
  )
}
