import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import languagesAbout from '../../public/images/languages.svg';
import logoStartse from '../../public/images/logo-startse.png';
import logoRocketseat from '../../public/images/logo-rocketseat.png';
import logoMeta from '../../public/images/logo-meta.png';

import { CertificateCard } from '../components/CertificateCard';

import styles from '../styles/pages/about.module.scss';

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre mim | Breno Dev</title>
      </Head>

      <main className={styles.aboutContainer}>
        <section className={styles.contentContainer}>
          <div className={styles.about}>
            <h4>Sobre mim</h4>

            <p>
              Oi xD, me chamo Breno Fernandes e tenho 22 anos.
              <br /> <br />
              Desde meus 18 anos, eu já trabalhei como copywriter, ux designer e gestor de tráfego, mas foi na programação onde me prendi e levarei essa área como uma carreira.
              <br /> <br />
              Atualmente sou freelancer, tenho <span>três projetos</span> reais que estão aqui no site como portfólio, e estou em busca da minha <span>primeira oportunidade</span> no mercado.
            </p>

            <div>
              <Image src={languagesAbout} width={350} height={70} alt="icones linguagens de programação" />
            </div>
          </div>

          <div className={styles.aboutCertificates}>
            <h4>Certificados</h4>

            <CertificateCard 
              iconLogo={logoStartse}
              name={'StartSe - Tech Academy'}
              date={'22/07/2022'}
            />

            <CertificateCard 
              iconLogo={logoRocketseat}
              name={'RocketSeat - Discover'}
              date={'13/08/2022'}
            />

            <CertificateCard 
              iconLogo={logoRocketseat}
              name={'RocketSeat - Ignite'}
              date={'Em andamento'}
            />

            <CertificateCard 
              iconLogo={logoMeta}
              name={'Front-End da Meta'}
              date={'Em breve'}
            />

          </div>
        </section>

        <section className={styles.footerContainer}>
          <div className={styles.arrows}>
            <Link href="/">
              <a className={styles.arroRight}>
                <ArrowLeft size={40}/>
                Início
              </a>
            </Link>
          </div>
          
          <div className={styles.arrows}>
            <Link href="/certificates">
              <a className={styles.arroRight}>
                Certificados
                <ArrowRight size={40}/>
              </a>
            </Link>
          </div>
          
        </section>
      </main>

      
    </>
  )
}