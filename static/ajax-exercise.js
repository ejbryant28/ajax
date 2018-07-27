"use strict";

// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div

    // this says: don't submit the form and refresh the page at event
    evt.preventDefault();

    // this says: when evt happens,
    // call this route from the server, 
    // pass those results into next function
    $.get('/fortune', printFortune);

}

// this takes the result of the get request and replaces
// the html in the div of fortune-text
function printFortune(results) {
	$('#fortune-text').html(results);
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
	// if you take this out...html has a default action to 
	// go to the page you're already on, using a get request.
	// in laymen's terms, it just refreshes the page.
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    //get request takes data from weather json(from URL), and also takes in
    // formData as an arg, then moves to success function getWeather
    $.get(url, formData, getWeather)


    // TODO: request weather with that URL and show the forecast in #weather-info
}

function getWeather(results) {
	// we're indexing into results object, which is weather json
	// with zipcode from formdata as the "key"
	// and then overwriting html.
	$('#weather-info').html(results['forecast']);
}

// the scheduling of this event...when this happens, start this off.
$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form

    // let formData = {"zipcode": $("#zipcode-field").val()};

    let userData = {
    	"code" : $.get("#code").val(),
    	"msg" : $.get("#msg").val()
    };

    $.post("/order-melons.json", userData, showMessage)
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

}

function showMessage(results) {
	$("#order-status").html(results['msg']);
}

$("#order-form").on('submit', orderMelons);


