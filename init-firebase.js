// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyBBjhATrKGW_DXJkrFv3OahAB8rA5tJaho",
  authDomain: "make-form-use-of-firebase.firebaseapp.com",
  projectId: "make-form-use-of-firebase",
  storageBucket: "make-form-use-of-firebase.appspot.com",
  messagingSenderId: "542963582840",
  appId: "1:542963582840:web:3bfdff0e8dc6538ef9aa8d",
  measurementId: "G-J6ESC5HH79"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();