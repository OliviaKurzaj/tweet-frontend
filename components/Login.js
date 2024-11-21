import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Login.module.css';
import stylesBtn from '../styles/Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherPointed, faXmark } from '@fortawesome/free-solid-svg-icons';

function Login() {
	// *************** CODE MODALE ********************************
	const [isModalInVisible, setIsModalInVisible] = useState(false);
	const [isModalUpVisible, setIsModalUpVisible] = useState(false);
	// fonction pour ouvrir la modale SignIn
	const ouvertureModalIn = () => {
		setIsModalInVisible(true)
	}
	// fonction pour fermer la modale SignIn
	const fermetureModalIn = () => {
		setIsModalInVisible(false)
	}
	// fonction pour ouvrir la modale SignUp
	const ouvertureModalUp = () => {
		setIsModalUpVisible(true)
	}
	// fonction pour fermer la modale SignUp
	const fermetureModalUp = () => {
		setIsModalUpVisible(false)
	}

// ****************** CODE INSCRIPTION / LOGIN *********************	
	// input SignIn
	const [userIn, setUserIn] = useState('');
	const [passwordIn, setPasswordIn] = useState('');
	const [nickIn, setNickIn] = useState('');

	// input SignUp
	const [userUp, setUserUp] = useState('');
	const [passwordUp, setPasswordUp] = useState('');
	const [nickUp, setNickUp] = useState('');

	const handleSubmitConnect = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			// on écrit le nom dans mangoose: le nom de l'état
			body: JSON.stringify({ username: userIn, password: passwordIn, nickname: nickIn }),
		}).then(response => response.json())
			.then(data => {
				if(data.result){
					console.log(data.result);
					setUserIn('');
					setPasswordIn('');
					setNickIn('');
				}
			});
	};

	const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: userUp, password: passwordUp, nickname: nickUp }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					setUserUp('');
					setPasswordUp('');
					setNickUp('');
				}
			});
	};

	return (
		<>
		<div className={styles.contenuGlobal}>
			<div className={styles.imgPigeon}><img src='Logo-l.png' alt='Pigeon' className={styles.grosPigeon}/></div>
			<div className={styles.contenuLog}>
				<div className={styles.contenuTexte}>
					<FontAwesomeIcon icon={faFeatherPointed} className={styles.plume} style={{color: "white"}} />	
					<h1 className={styles.titre}>See what's happening !</h1>
					<h2 className={styles.soustitre}>Join Hackatweet today.</h2>
				</div>
				<div className={styles.log}>
				<p>Already have an account ?</p>
				<button className={stylesBtn.sign} onClick={() => ouvertureModalIn()}>SignIn</button>
				{ isModalInVisible &&
					<div className={styles.modalSignIn}>
						<FontAwesomeIcon icon={faXmark} onClick={() => fermetureModalIn()}/>
						<FontAwesomeIcon icon={faFeatherPointed} style={{color: "#0e8ff3"}} />
						<h3>Create your Hackatweet account</h3>
						<input type="text" placeholder="Username" id="inputUser" onChange={(e) => setUserIn(e.target.value) } value={userIn}/>
						<input type="text" placeholder="Nickname" id="inputNick" onChange={(e) => setNickIn(e.target.value)} value={nickIn}/>
						<input type="password" placeholder="Password" id="inputPassword" onChange={(e) => setPasswordIn(e.target.value)} value={passwordIn}/>
						<button className={stylesBtn.signM} onClick={() => handleSubmitConnect()}>SignIn</button>
					</div>
				}
				<p>No ? SignUp here !</p>
				<button className={stylesBtn.sign} onClick={() => ouvertureModalUp()}>SignUp</button>
				{ isModalUpVisible &&
					<div className={styles.modalSignIn}>
						<FontAwesomeIcon icon={faXmark} onClick={() => fermetureModalUp()}/>
						<FontAwesomeIcon icon={faFeatherPointed} style={{color: "#0e8ff3"}} />
						<h3>Create your Hackatweet account</h3>
						<input type="text" placeholder="Username" id="inputUser" onChange={(e) => setUserUp(e.target.value) } value={userUp}/>
						<input type="text" placeholder="Nickname" id="inputNick"onChange={(e) => setNickUp(e.target.value) } value={nickUp}/>
						<input type="password" placeholder="Password" id="inputPassword" onChange={(e) => setPasswordUp(e.target.value) } value={passwordUp}/>
						<button className={stylesBtn.signM} onClick={() => handleRegister()}>SignUp</button>
					</div>
				}
				</div>
			</div>
		</div>
		</>
	);
}

export default Login;
