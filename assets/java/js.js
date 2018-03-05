////// Fire base Hw//////
//// fire base key////
var config = {
  apiKey: "AIzaSyD4zvbTu1OBE0WSFtl7l8ieNdfeS88Xcpc",
  authDomain: "fir-assignment-d5f53.firebaseapp.com",
  databaseURL: "https://fir-assignment-d5f53.firebaseio.com",
  projectId: "fir-assignment-d5f53",
  storageBucket: "",
  messagingSenderId: "1090177341910"
};
firebase.initializeApp(config);
$(document).ready(function () {
  /// database var//
  var dataBase = firebase.database()

  $("#submit").on("click", function () {
    var name = $("#input-TrainName").val()
    var destination = $("#input-Destination").val()
    var trainTime = $("#input-TrainTime").val()
    var frequency = $("#input-Frequency").val()



    var newTrain = {
      name: name,
      destination: destination,
      trainTime: trainTime,
      frequency: frequency,
    }

    dataBase.ref().push(newTrain);

    console.log(newTrain.name)
    console.log(newTrain.destination)
    console.log(newTrain.trainTime)
    console.log(newTrain.frequency)

    // clear text fields 
    $("#input-TrainName").val("");
    $("#input-Destination").val("");
    $("#input-TrainTime").val("");
    $("#input-Frequency").val("");

  })

  dateBase.ref().on("child_added", function (childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainTrainTime = childSnapshot.val().trainTime;
    var trainFrequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(trainDestination );
    console.log(trainTrainTime);
    console.log(trainFrequency);

  });

})
