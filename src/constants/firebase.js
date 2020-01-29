import {initializeApp} from 'firebase/app';

const fbConfig = {
  apiKey: 'AIzaSyC1ENp6jWf9ap6vvROxYin1tSGOmAKX9JU',
  authDomain: 'servesmart-45ed1.firebaseapp.com',
  databaseURL: 'https://servesmart-45ed1.firebaseio.com',
  projectId: 'servesmart-45ed1',
  storageBucket: 'gs://servesmart-45ed1.appspot.com',
  messagingSenderId: '446735924467',
  appId: '1:446735924467:android:bf227f9b95621518b34b86',
};

const app = initializeApp(fbConfig);
export const auth = app.auth();
export const db = app.firestore();
