import firebaseConfig from "./Config";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import { GoogleAuthProvider } from "firebase/auth";

firebase.initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider();
const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export {auth , db , provider , storage}