import firebase from 'firebase/app';

export default (() => {
  const config = {
    apiKey: 'AIzaSyBhk0v8fIadSNwM4s8gNOmgHHacmbWzOEE',
    authDomain: 'keepo-163714.firebaseapp.com',
    databaseURL: 'https://keepo-163714.firebaseio.com',
    projectId: 'keepo-163714',
    storageBucket: 'keepo-163714.appspot.com',
    messagingSenderId: '112553000603',
  };

  firebase.initializeApp(config);
})();
