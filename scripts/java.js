//code for moment date
var now = moment();
var dateFormat = "MM/DDDD/YYYY";
var convertedDate = moment(now, dateFormat);
var newDate = moment();
//function to display date//
function displayCurrentDate() {
  var currentDate = moment().format("MMMM, DD, YYYY");
  $("#currentDay").text(currentDate);
}
displayCurrentDate();

//prevent for title page link
document.getElementById("pageTitle").addEventListener("click", function(event){
	event.preventDefault()
})
