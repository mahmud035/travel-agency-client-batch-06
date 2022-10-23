import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDvdvadOxzRtQnI_HRT7GB19XzbpWJ2iOs',
  authDomain: 'travel-agency-client-4c63d.firebaseapp.com',
  projectId: 'travel-agency-client-4c63d',
  storageBucket: 'travel-agency-client-4c63d.appspot.com',
  messagingSenderId: '321031624159',
  appId: '1:321031624159:web:76dbecd6b7b27de825606a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
