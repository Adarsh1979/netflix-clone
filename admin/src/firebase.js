import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: "netflix-dbe89.firebaseapp.com",
	projectId: "netflix-dbe89",
	storageBucket: "netflix-dbe89.appspot.com",
	messagingSenderId: "1057470768280",
	appId: "1:1057470768280:web:e000d8dfd09d492a761ced",
	measurementId: "G-BE1SN3J89V",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
