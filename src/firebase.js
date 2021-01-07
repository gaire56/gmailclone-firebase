import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCzcntad6YfPSpIXW8Q0d66FK-mE2NJC18",
    authDomain: "clone-af032.firebaseapp.com",
    projectId: "clone-af032",
    storageBucket: "clone-af032.appspot.com",
    messagingSenderId: "654589131703",
    appId: "1:654589131703:web:12016561aab1965287c632",
    measurementId: "G-7ME65R7LMT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };