import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyALHuvkGUlDfjOGIv8XRGyzm1Jg9Zonoi0',
	authDomain: 'netflix-clone38.firebaseapp.com',
	projectId: 'netflix-clone38',
	storageBucket: 'netflix-clone38.appspot.com',
	messagingSenderId: '917218237032',
	appId: '1:917218237032:web:bc01ff9be2098e8e5a79dd',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
