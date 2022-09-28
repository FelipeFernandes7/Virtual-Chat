import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = ({
  apiKey: "AIzaSyCXFqwZq4IJE8VPv4KlR_p8l-zrsCx1YWc",
  authDomain: "chatvirtual-c2151.firebaseapp.com",
  databaseURL: "https://chatvirtual-c2151-default-rtdb.firebaseio.com",
  projectId: "chatvirtual-c2151",
  storageBucket: "chatvirtual-c2151.appspot.com",
  messagingSenderId: "934055512642",
  appId: "1:934055512642:web:2378a58753a69382517bdb"
});

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore()