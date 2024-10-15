//Input for birth date
var birthDate = "1995-08-27";
var calculateAge = function (birthDate) {
    var currentDate = new Date();
    console.log(currentDate);
    var currentYear = parseInt(currentDate.getFullYear());
    var currentMonth = parseInt(currentDate.getMonth());
    var currentDay = parseInt(currentDate.getDate());
    var birthYear = parseInt(String(birthDate).substring(0, 4));
    var birthMonth = parseInt(String(birthDate).substring(5, 7));
    var birthDay = parseInt(String(birthDate).substring(8, 10));
    var age = currentYear - birthYear;
    if (currentMonth < birthMonth) {
        age--;
    }
    else if (currentMonth === birthMonth) {
        if (currentDay < birthDay) {
            age--;
        }
    }
    console.log(age);
};
calculateAge(birthDate);
