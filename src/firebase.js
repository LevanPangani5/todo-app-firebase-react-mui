import { initializeApp } from "firebase/app";
import { getFirestore ,collection } from "@firebase/firestore";
  const firebaseConfig= {
    apiKey: "AIzaSyA6_A4cnLHIvD1Iq84ITobBDpgeE9e-o_o",
    authDomain: "todo-app-caecc.firebaseapp.com",
    projectId: "todo-app-caecc",
    storageBucket: "todo-app-caecc.appspot.com",
    messagingSenderId: "924309678382",
    appId: "1:924309678382:web:ee03f73c0c7f110fd572bf",
    measurementId: "G-BBPK7NT982"
  };
  const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
   export  const todosCollectionRef =collection(db ,'todos');

    export default db;

 
