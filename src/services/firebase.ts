import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCXFqwZq4IJE8VPv4KlR_p8l-zrsCx1YWc",
  authDomain: "chatvirtual-c2151.firebaseapp.com",
  projectId: "chatvirtual-c2151",
  storageBucket: "chatvirtual-c2151.appspot.com",
  messagingSenderId: "934055512642",
  appId: "1:934055512642:web:2378a58753a69382517bdb",
};
firebase.initializeApp(firebaseConfig);

export {firebase}