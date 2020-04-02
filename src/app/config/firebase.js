import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyCiUpb2YievTOytID3LF6YBxXYn6pOKlzA",
  authDomain: "revents-f2469.firebaseapp.com",
  databaseURL: "https://revents-f2469.firebaseio.com",
  projectId: "revents-f2469",
  storageBucket: "revents-f2469.appspot.com",
  messagingSenderId: "391177803223"
}




firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;