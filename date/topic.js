var topic = [
    "warriors vs cavs",
    "warriors vs cavs",
    "cavs vs warriors",
    "cavs vs warriors",
    "warriors vs cavs",
    "cavs vs warriors",
    "warriors vs cavs"
    
];

var startDate = new Date();

function setmonthandday(startMonth, startday)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startday);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setmonthandday(6,1);