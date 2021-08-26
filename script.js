// https://momentjs.com/docs/#/displaying/ for ref

var today = moment();

var currentDayHeader = today.format('dddd, MMMM Do');
$('#currentDay').text(currentDayHeader); // using jQuery to avoid typing var _ = document.getElementById('#currentDay');

var currentTimePtag = today.format('h:mm a');
$('#currentTime').text(currentTimePtag);

$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var text = $(this).siblings('.decription').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, text);
    })

    function timeOfDay() {
        var currentTime = today.hour();

        $('.time-block').each(function () {
            var timeBlock = parseInt($(this).attr('id').split('hour')[1]);
            if (timeBlock < currentTime) {
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            } else if (timeBlock === currentTime) {
                $(this).removeClass('past');
                $(this).addClass('present');
                $(this).removeClass('future');
            } else if (timeBlock > currentTime) {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        })
    };

    // var hours = 'hour9';

    // for (var i = 0; i < hours.length; i++) {
        
    // }

    $('#hour9 .decription').val(localStorage.getItem('hour9'));
    $('#hour10 .decription').val(localStorage.getItem('hour10'));
    $('#hour11 .decription').val(localStorage.getItem('hour11'));
    $('#hour12 .decription').val(localStorage.getItem('hour12'));
    $('#hour13 .decription').val(localStorage.getItem('hour13'));
    $('#hour14 .decription').val(localStorage.getItem('hour14'));
    $('#hour15 .decription').val(localStorage.getItem('hour15'));
    $('#hour16 .decription').val(localStorage.getItem('hour16'));
    $('#hour17 .decription').val(localStorage.getItem('hour17'));

    timeOfDay();
});