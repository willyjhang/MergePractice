var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件"
];

var startDate = new Date();

function setmonthandday(startMonth,startday)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startday);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setmonthandday(4,1);