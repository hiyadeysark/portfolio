
// Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDscDWignkmgxRa2H9oJRfVjtxWriWaCcg",
        authDomain: "portfolio-234fa.firebaseapp.com",
        databaseURL: "https://portfolio-234fa-default-rtdb.firebaseio.com",
        projectId: "portfolio-234fa",
        storageBucket: "portfolio-234fa.appspot.com",
        messagingSenderId: "83282753946",
        appId: "1:83282753946:web:342ebccccd3ec21cdc2223"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();
    //reference messages collection
    var messagesRef = firebase.database().ref('messages');

        