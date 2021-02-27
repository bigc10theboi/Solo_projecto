//prevent for title page link
document.getElementById("pageTitle").addEventListener("click", function(event){
	event.preventDefault()
})

//call for games result
const settings = {
	async: true,
	crossDomain: true,
	url: "https://api-hockey.p.rapidapi.com/games/?league=57&season=2020&team=687",
	method: "GET",
  headers: {
		"x-rapidapi-key": "a86b8e2882msh6b7eddee6341815p15350cjsnce424e112305",
		"x-rapidapi-host": "api-hockey.p.rapidapi.com"
	},
  data: {
    league = 57,
    nhlTeam = "",
    season = 2020
  }
};

$.ajax(settings).done(function (response) {
	console.log(response);
});




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