import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyAXSn2cmAVdB1zjYAy0y8Z4l6-IeGt8ntk",
  authDomain: "am-blogging-8991.firebaseapp.com",
  projectId: "am-blogging-8991",
  storageBucket: "am-blogging-8991.appspot.com",
  messagingSenderId: "1042363188959",
  appId: "1:1042363188959:web:6ec90b1ffe0709a0538b6a",
  measurementId: "G-50CGP6BZNV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();  