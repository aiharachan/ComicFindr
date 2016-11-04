console.log("firebase.js ready to roll!")


// connect to the Firebase db (database)
// Initialize Firebase

  var config = {

    apiKey: "AIzaSyDqCowWm_tfPP6BlQZIWiRCWzSwsD1dnFM",

    databaseURL: "https://dynamic-web-template-e91d4.firebaseio.com"

  };

  firebase.initializeApp(config);


// Get a reference to the database service
var database = firebase.database();


// grab only the "people" from the database
var peopleData = database.ref('people');


// create a list of people
var peopleList = []; // empty for now


// load all of the children of "people"
// keep listening for new children
peopleData.on('child_added', function(childData){
    // run the instruction for each child
    console.table(childData.val() );
    var person = childData.val(); // extract data about the person
    peopleList.push( person ); // add the person to the peopleList
})

