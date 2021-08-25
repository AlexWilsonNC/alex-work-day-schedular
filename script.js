// https://momentjs.com/docs/#/displaying/

var today = moment();

var currentDayHeader = today.format('dddd, MMMM Do');
$('#currentDay').text(currentDayHeader); // using jQuery to avoid typing var _ = document.getElementById('#currentDay');

$(document).ready(function() {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, text);
})

function timeOfDay() {
    var currentTime = today.hour();

    $('.time-block').each(function() {
        var timeBlock = parseInt($(this).attr('id').split('hour')[1]);
        if (timeBlock < currentTime) {
            
    }
};