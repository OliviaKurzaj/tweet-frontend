import styles from "../styles/Tweet.module.css";
import stylesHome from "../styles/Home.module.css";

import Link from 'next/link'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';


function Tweet(props) {
  return (
    <div className={styles.containerComposantTweet}>
	
      <div className={stylesHome.contentProfil}>
        <div className={stylesHome.avatar}>
          <Image src="/logo-s.png" alt="Avatar"
            width={50} height={50}/>
        </div>
        <div className={stylesHome.profil}>
          <p className={stylesHome.username}>username&nbsp;
          <span className={stylesHome.nickname}>nickname</span>&nbsp;
		  <span className={styles.time}>time</span>
		  </p>
        </div>
      </div>

	    <div>
			<p>Ici le datatweet.content</p>
		</div>

		<div>
        <FontAwesomeIcon icon={faHeart} style={{color: "whitesmoke"}} className={styles.icon}/>
		<FontAwesomeIcon icon={faTrash} style={{color: "whitesmoke"}} className={styles.icon}/>
		</div>
    </div>
  );
}

export default Tweet;
