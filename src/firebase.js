import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCO7TJ9i63J16EbRlTJiRyGZfKS7LlCxYc",
  authDomain: "myportfolio-dfa2f.firebaseapp.com",
  databaseURL: "https://myportfolio-dfa2f.firebaseio.com",
  projectId: "myportfolio-dfa2f",
  storageBucket: "myportfolio-dfa2f.appspot.com",
  messagingSenderId: "323686786566",
  appId: "1:323686786566:web:134d3662876de692b80587",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
