setInterval(function(){
    var birthdayString = "02/19/" + new Date().getFullYear() + " 10:01:00 AM";
    var birthday = moment(birthdayString, "MM/DD/YYYY HH:mm:ss A", true);
    $('#birthday-counter').html(birthday.fromNow() + ".");
}, 1000);
