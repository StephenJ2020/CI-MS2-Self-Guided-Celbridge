$(document).ready(function(){
    $('#homeSection').show();
    $('#mapSection').hide();
    $('#textSection').hide();
    $('#contactSection').hide();

    $('#home').click(function(){
        $('#homeSection').show();
        $('#mapSection').hide();
        $('#textSection').hide();
        $('#contactSection').hide();
    });

    $('#mapView').click(function(){
        $('#mapSection').show();
        $('#homeSection').hide();
        $('#textSection').hide();
        $('#contactSection').hide();
    });

    $('#textView').click(function(){
        $('#textSection').hide();
        $('#homeSection').hide();
        $('#mapSection').hide();
        $('#contactSection').hide();
    });

    $('#contactUs').click(function(){
        $('#contactSection').show();
        $('#homeSection').hide();
        $('#mapSection').hide();
        $('#textSection').hide();
    });

    $('#castletown').click(function(){
        $('#mapSection').show();
        $('#homeSection').hide();
        $('#textSection').hide();
        $('#contactSection').hide();
    });

    $('#abbey').click(function(){
        $('#mapSection').show();
        $('#homeSection').hide();
        $('#textSection').hide();
        $('#contactSection').hide();
    });

});

