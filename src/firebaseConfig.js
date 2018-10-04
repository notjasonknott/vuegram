import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCN65DZb4iHKz2JKI6FIFCDewNoDhCzoLA",
    authDomain: "vuegram-20268.firebaseapp.com",
    databaseURL: "https://vuegram-20268.firebaseio.com",
    projectId: "vuegram-20268",
    storageBucket: "vuegram-20268.appspot.com",
    messagingSenderId: "131455411689"
  };
  firebase.initializeApp(config);

//firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}