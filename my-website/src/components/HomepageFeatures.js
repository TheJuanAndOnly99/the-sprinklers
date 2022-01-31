import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Portal Inversor',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Si buscas no quedarte fuera de este barco pero no dispones de tiempo ni conocimientos o simplemente no tienes ganas de complicarte este es el portal para ti.
      Como inversor en juegos P2E solo deberás contar con el capital inicial y nosotros haremos todo el trabajo para que te encargues simplemente de ver los resultados.
      </>
    ),
  },
  {
    title: 'Portal Manager',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Si queres sumarte a los juegos P2E pero no sabes como hacerlo te ofrecemos ayudarte y acompañarte en todo el proceso, gestionar junto a vos y tus NFT, y brindarte todas las herramientas que necesites para que puedas armar tu propio negocio dentro de este maravilloso mundo.
      </>
    ),
  },
  {
    title: 'Portal Jugador',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Si tienes ganas y tiempo pero no cuentas con capital para poder empezar no te preocupes! No vas a quedarte fuera. Tenemos la opción de becarte como scholar, enseñarte a jugar y que pases a formar parte de nuestro team de jugadores de juegos P2E.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
