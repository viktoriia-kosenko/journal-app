import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAwvmL7-G96hmjOCGOircScEWZiX-Hxh_s",
  authDomain: "journal-app-6de86.firebaseapp.com",
  databaseURL: "https://journal-app-6de86.firebaseio.com",
  projectId: "journal-app-6de86",
  storageBucket: "",
  messagingSenderId: "952471302583",
  appId: "1:952471302583:web:c8ac737d8028e5ca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
