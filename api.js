
// //call for games result
// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: "https://api-hockey.p.rapidapi.com/games/?date=2020-10-02",
// 	method: "GET",
//   headers: {
// 		"x-rapidapi-key": "a86b8e2882msh6b7eddee6341815p15350cjsnce424e112305",
// 		"x-rapidapi-host": "api-hockey.p.rapidapi.com"
// 	},
//   data: {
//     league = 57,
//     season = 2020,
//     team = ""
//   }
// };

// $(document).ready(function () {
// 	$("#teamSelect").click(function (event) {
// 		data.target = $(this).attr("nhlTeam");
// 		postGame();
// 		$("#teamSelect").html($(this).html());
// 	});
// });

// function postGame() {
// 	$.ajax(settings).done(function (response) {
// 		console.log(response);

// 		var nextGame = response.data[0].nextGame;

// 		$(".nhlGame").text(nextGame);
// 	});
// }
