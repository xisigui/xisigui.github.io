  var config = {
    apiKey: "AIzaSyAiUgRmczVU9Nf9gdrdHsTIQZ9zUc-8KA8",
    authDomain: "prj-data.firebaseapp.com",
    databaseURL: "https://prj-data.firebaseio.com",
    projectId: "prj-data",
    storageBucket: "prj-data.appspot.com"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var spent = database.ref('Spent');//
  var earn = database.ref('Earned');
   var d = 2;
  //spent.push();
  earn.push(d);//saving the data