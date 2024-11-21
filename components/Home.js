import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Link from 'next/link'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherPointed, faXmark } from '@fortawesome/free-solid-svg-icons';

import Tweets from './Tweets';

import styles from '../styles/Home.module.css';
import stylesBtn from '../styles/Button.module.css';

function Home() {

  return (
    <div className={styles.containerHome}>

      <div className={styles.containerProfil}>
        <div>
        <Link href="/">
        <FontAwesomeIcon icon={faFeatherPointed} style={{color: "whitesmoke"}} className={styles.logo}/>
        </Link>
        </div>

        <div className={styles.contentProfil}>
          <div className={styles.avatar}>
            <Image src="/logo-s.png" alt="Avatar"width={50} height={50} title='Logout'/>
          </div>
              <div className={styles.profil}>
                  <p className={styles.username}>username</p>
                  <p className={styles.nickname}>nickname</p>
              </div>
        </div>

      </div>

      <div className={styles.containerTweet}>
      <p className={styles.titleSection}>Home</p>
        <div className={styles.wrapTweet}>
          <input className={styles.inputTweet} type="text" placeholder="Hola reinas :) Como esta ?" maxlength="280"/>

          <div className={styles.wrap}>
            <div className={styles.counterLetterTweet}>
                <span className={styles.counterLetterTweet}>0</span>/280
            </div>
            <button className={stylesBtn.signM}>Hackatweet</button>   
          </div>
        </div>

        <div className={styles.allTweets}></div>
        <Tweets/>
      </div>

      <div className={styles.containerTrends}>
        <div>
          <p className={styles.titleSection}>Trends</p>

          <div className={styles.wrapTrends}>
            <div className={styles.contentTrends}>
                <p className={styles.hashtag}>#riseandshine</p>
                <p className={styles.counterHashtag}>1000</p>
            </div>

            <div className={styles.contentTrends}>
                <p className={styles.hashtag}>#amazing</p>
                <p className={styles.counterHashtag}>1000</p>
            </div>  
          </div>

        </div>

      </div>


    </div>
  );
}

export default Home;
