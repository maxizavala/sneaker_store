import "firebase/firestore"

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGYp0qiRCSTLcy8kTj-cXbaEQ--I7_HMo",
  authDomain: "sneaker-store-6db54.firebaseapp.com",
  projectId: "sneaker-store-6db54",
  storageBucket: "sneaker-store-6db54.appspot.com",
  messagingSenderId: "335646166748",
  appId: "1:335646166748:web:b41e16c2a13bd4c74c6e19"
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)