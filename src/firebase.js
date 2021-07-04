import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyAiPd2RfgcSQry0bUt93v77nTRwjCjCor4",
  authDomain: "todo-app-44bdd.firebaseapp.com",
  projectId: "todo-app-44bdd",
  storageBucket: "todo-app-44bdd.appspot.com",
  messagingSenderId: "41444599428",
  appId: "1:41444599428:web:e6d62de5ad44f2decc44d1",
  measurementId: "G-3N11B38X60"
});

const db = firebaseApp.firestore();

export { db };  