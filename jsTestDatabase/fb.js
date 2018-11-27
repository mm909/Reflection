
var mainText = document.getElementById("textForSubmit")
var submitBtn = document.getElementById("submitButton")

var db = firebase.firestore()
console.log(db);
var usersRef = db.collection("users");
console.log(usersRef);
// var query = usersRef.where("name", "==", "Mikian");
// console.log(query);

// NOTE: THIS WORKS FOR INSERTING USERS
// usersRef.doc().set({
//     name: "TestName",
//     numAnswers: 0,
//     numReflections: 2,
//     settings: {
//        darkMode: false,
//        remenberMe: true
//      }
// });

var docRef = db.collection("users").doc("e4WIMtJYVE7PTjHzf2E0");

let userName = "";
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        userName = (doc.data().name);
        console.log(userName);

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});



// let output =
// // [START get_all_users]
// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });

// console.log(output);

function submitClick() {
  // console.log("work");
  // var firebaseRef = firebase.firestore().ref()
}



// console.log(dbUsers);

// let temp = db.ref().child('users')

// db.collection("users").get().then((querySnapshot) => {
//   console.log("users:");
//     querySnapshot.forEach((doc) => {
//         console.log(doc);
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });






//eof
