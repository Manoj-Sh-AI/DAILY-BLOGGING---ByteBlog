
const firebaseConfig = {
  apiKey: "AIzaSyD4Buj_RhhNLpdn3Ih7PotFUnJbGMDVJ5A",
  authDomain: "crime-blogging-website.firebaseapp.com",
  projectId: "crime-blogging-website",
  storageBucket: "crime-blogging-website.appspot.com",
  messagingSenderId: "216082030830",
  appId: "1:216082030830:web:d193ae4c5deeefd1f413ff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



let db = firebase.firestore();