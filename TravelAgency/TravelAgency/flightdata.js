/*  var travelDest = document.getElementById("destination");
  var priceRangelow = document.getElementById("flights-lowprice");
  var priceRangehigh = document.getElementById("flights-highprice");
  var startDate = document.getElementById("start-date");
  var endDate = document.getElementById("end-date");
  var activityLowprice = document.getElementById("activities-lowprice");
  var activityHighprice = document.getElementById("activities-highprice");
*/   


var obj = JSON.parse(sessionStorage.getItem('data'));

alter(obj.priceRangelow);

