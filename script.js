// https://momentjs.com/docs/#/displaying/

var today = moment();

var currentDayHeader = today.format('dddd, MMMM Do');
$("#currentDay").text(currentDayHeader); // using jQuery to avoid typing var _ = document.getElementById('#currentDay');