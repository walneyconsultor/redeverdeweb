import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBg56Q62bQV5j5nx6q2F8Tp_-WFfXxDmzc",
  authDomain: "rede-verde-1536691033130.firebaseapp.com",
  databaseURL: "https://rede-verde-1536691033130.firebaseio.com/",
  projectId: "rede-verde-1536691033130",
  storageBucket: "rede-verde-1536691033130.appspot.com",
  messagingSenderId: "378293266267"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
