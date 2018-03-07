////// Fire base Hw//////
//// fire base key////
$(document).ready(function () {
var config = {
  apiKey: "AIzaSyD4zvbTu1OBE0WSFtl7l8ieNdfeS88Xcpc",
  authDomain: "fir-assignment-d5f53.firebaseapp.com",
  databaseURL: "https://fir-assignment-d5f53.firebaseio.com",
  projectId: "fir-assignment-d5f53",
  storageBucket: "",
  messagingSenderId: "1090177341910"
};
firebase.initializeApp(config);
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

  $("#clear").on("click", function(newTrain){
    var dataBase = firebase.database().ref()
    $("#tableBody > tbody").empty();

    dataBase.remove()
   
  })

  dataBase.ref().on("child_added", function (childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());
  

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainTrainTime = childSnapshot.val().trainTime;
    var trainFrequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(trainDestination );
    console.log(trainTrainTime);
    console.log(trainFrequency);
    
    
    
    var tFrequency = trainFrequency;

    var firstTime = trainTrainTime;
    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);
    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);
    // Minute Until Train
    var tMinutesTillTrain = trainFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    
    
    
    $("#tableBody > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
    trainTrainTime+ "</td><td>" + trainFrequency + "</td><td>" + tMinutesTillTrain + "</td></tr>");
  });
})
