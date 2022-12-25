import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLUokQm5MLxs-Jy0OLSDk0pLQjlbFZpmM",
  authDomain: "moderntodolist-abc60.firebaseapp.com",
  projectId: "moderntodolist-abc60",
  storageBucket: "moderntodolist-abc60.appspot.com",
  messagingSenderId: "680024406767",
  appId: "1:680024406767:web:feacbf3da6d9537347b91a",
  measurementId: "G-L9CBF9Z815",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { firebase, auth, app };
