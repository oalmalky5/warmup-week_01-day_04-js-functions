cconst leapYear = function(year) {
    if ((year % 4  === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return (year + " is a leap year")
    } else {
        return (year + " is not a leap year")
    }
}
leapYear(1997)
