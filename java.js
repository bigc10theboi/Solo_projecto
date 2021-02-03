//API call
const settings = {
	"async": true,
    "crossDomain": true,
    //must determine how to input variables into url or if another endpoint is needed
	"url": "https://api-hockey.p.rapidapi.com/teams/statistics/?league=57&season=2019&team=17",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a86b8e2882msh6b7eddee6341815p15350cjsnce424e112305",
		"x-rapidapi-host": "api-hockey.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});