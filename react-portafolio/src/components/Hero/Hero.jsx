/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Santiago</h1>
        <p className={styles.description}>I'm a junior web developer with experience using technologies like React, Node.js. Reach out if you'd like to learn more. </p>
        <a href='mailto:santiagobulla1216@gmail.com' className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl('hero/heroImage.png')} alt='hero-image-of-me' className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;

