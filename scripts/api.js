//team hisory call
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-hockey.p.rapidapi.com/teams/?",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a86b8e2882msh6b7eddee6341815p15350cjsnce424e112305",
		"x-rapidapi-host": "api-hockey.p.rapidapi.com"
	},
    data: {
        id: '',
    },
};

$(document).ready(function () {
	$(".dropdown-item").click(function (event) {
		settings.data.id = $(this).attr("team");
        console.log(settings.data.id);
		postTeam();
	});
});

function postTeam() {
	$.ajax(settings).done(function (response) {
		console.log(response);

		var searchTeam = response.data[0].name;

		$(".teamName").text(searchTeam);
	});
}


// The original plan for this app was to pull current/upcoming games, but I was ramming my head into a wall until realizing the API doesn't store any future games
// // call for games result
// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: "https://api-hockey.p.rapidapi.com/games/?date=" + $(date) + "&league=57&season=2020&team=" + $("data.team"),
//     method: "GET",
//     headers: {
// 		"x-rapidapi-key": "a86b8e2882msh6b7eddee6341815p15350cjsnce424e112305",
// 		"x-rapidapi-host": "api-hockey.p.rapidapi.com"
// 	},
//     data: {
//         team: "",
//     },
// };


// example call
// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://api-hockey.p.rapidapi.com/games/?date=2021-03-14&league=57&season=2020&team=681",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "a86b8e2882msh6b7eddee6341815p15350cjsnce424e112305",
// 		"x-rapidapi-host": "api-hockey.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });