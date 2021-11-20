import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed'


const config = {
    apiKey: "AIzaSyDMYmh8AyqDjpW1IVDRI87__baV07CWAeE",
    authDomain: "netflix-acbbc.firebaseapp.com",
    projectId: "netflix-acbbc",
    storageBucket: "netflix-acbbc.appspot.com",
    messagingSenderId: "827188005045",
    appId: "1:827188005045:web:dc1fdf4633e9e7beca16fc"


}



const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
