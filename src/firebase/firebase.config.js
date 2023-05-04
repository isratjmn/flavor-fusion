// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY,
	authDomain: import.meta.env.VITE_AUTHDOMAIN,
	projectId: import.meta.env.VITE_PROJECTID,
	storageBucket: import.meta.env.VITE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);






/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAEQD6sHWKaj5NuNB3T7ClJKw-Q__lE6S4",
	authDomain: "flavor-fusion-3b6cc.firebaseapp.com",
	projectId: "flavor-fusion-3b6cc",
	storageBucket: "flavor-fusion-3b6cc.appspot.com",
	messagingSenderId: "835989320976",
	appId: "1:835989320976:web:4553bcdaaa9fbca2dbe195",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; */