import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routing } from './components/routes/Routing';
import { BrowserRouter } from 'react-router-dom';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { AuthProvider } from './components/providers/AuthProvider';

const firebaseConfig = {
  apiKey: "AIzaSyDSdu2UbdkhUQ0TBncBh15Toil-c1AA8HU",
  authDomain: "social-network-33753.firebaseapp.com",
  projectId: "social-network-33753",
  storageBucket: "social-network-33753.appspot.com",
  messagingSenderId: "92571388191",
  appId: "1:92571388191:web:0a96c974e0da832b77482a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter basename="/social-network">
        <Routing />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);