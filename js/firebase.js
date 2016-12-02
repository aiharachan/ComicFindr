console.log("firebase.js ready to roll!")


// connect to the Firebase db (database)
// Initialize Firebase

  var config = {

    apiKey: "AIzaSyAZdFwdMOQAZz7W6HbjldCCWlGsIrMD8kI",
    authDomain: "comic-book-shop-database.firebaseapp.com",
    databaseURL: "https://comic-book-shop-database.firebaseio.com",
    storageBucket: "comic-book-shop-database.appspot.com",
    messagingSenderId: "819752946444"


  };

  firebase.initializeApp(config);


// Get a reference to the database service
var database = firebase.database();


// grab only the "people" from the database
var storesData = database.ref('stores');


// create a list of people
var storesList = []; // empty for now


// load all of the children of "people"
// keep listening for new children
storesData.on('child_added', function(childData){
    // run the instruction for each child
    console.table(childData.val() );
    var shop = childData.val(); // extract data about the person
    storesList.push( shop ); // add the person to the storesList
})

