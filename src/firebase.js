import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDMvwk937HASQNDU1qgzNyi9iChKtxHBnk',
	authDomain: 'portfolio-project-aec62.firebaseapp.com',
	databaseURL: 'https://portfolio-project-aec62-default-rtdb.firebaseio.com',
	projectId: 'portfolio-project-aec62',
	storageBucket: 'portfolio-project-aec62.appspot.com',
	messagingSenderId: '296924057644',
	appId: '1:296924057644:web:a7150939f9cb61ffee4189',
	databaseURL: 'https://portfolio-project-aec62-default-rtdb.firebaseio.com',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
