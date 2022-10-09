import React from 'react';
import { ArrowRight, GithubLogo, LinkedinLogo } from 'phosphor-react';

import Head from 'next/head';
import Link from 'next/link';

import styles from './home.module.scss';
import { ButtonLink } from '../components/ButtonLinks';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | FrontLine</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.contentContainer}>
          <span>Hi, Eu sou</span>
          <h1>FrontLine</h1>
          <p>
            Desenvolvedor ReactJS <br />
            Front-End
          </p>
          <div>
            <ButtonLink 
              link={'https://www.linkedin.com/in/breno-f/'}
              tituloButton={'Linkedin'}
              iconButton={<LinkedinLogo size={18}/>} 
            />
            <ButtonLink 
              link={'https://www.linkedin.com/in/breno-f/'}
              tituloButton={'Github'} 
              iconButton={<GithubLogo size={18}/>} 
            />
          </div>
        </section>

        <section className={styles.arrows}>
          <Link href="/about">
            <a>
              Sobre mim
              <ArrowRight size={40}/>
            </a>
          </Link>
        </section>
      </main>
    </>
  )
}
