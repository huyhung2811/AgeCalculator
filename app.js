// Variables For Datepicker

var datePicker = document.getElementById('datePicker');
var choseDate = document.getElementById('choseDate');

// Variables For Prinitng Values

var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageSeconds = document.getElementById('ageSeconds');
var ageMiliSeconds = document.getElementById('ageMiliSeconds');

datePicker.addEventListener('change',function(){

	var options = {year: 'numeric', month: 'long', day: 'numeric'};
	var selectedDate = new Date(this.value);
	var DOB = selectedDate.toLocaleDateString('en-US',options);

	
	choseDate.innerHTML = "誕生日: " + " " + DOB;


	var miliSeconds_Btw_DOB = Date.parse(DOB);
	var miliSecond_Btw_Now = Date.now();

	var age_in_MiliSeconds = miliSecond_Btw_Now -  miliSeconds_Btw_DOB;

	var miliSeconds = age_in_MiliSeconds;
	var second = 1000;
	var minute = second*60;
	var hour = minute*60;
	var day = hour*24;
	var month = day*30;
	var year = day*365;

	var years = Math.round(miliSeconds/year);
	var hours = Math.round(miliSeconds/hour);
	var seconds = Math.round(miliSeconds/second);
	var days = Math.floor(hours/24);
	var months = Math.floor(days/30);

	if(months%12 == 0&&days>=365) {
		alert("お誕生日おめでとう")
	}

	ageYear.innerHTML = years
	ageMonth.innerHTML = months
	ageDays.innerHTML = days
	ageHours.innerHTML = hours
	ageSeconds.innerHTML = seconds
	ageMiliSeconds.innerHTML = miliSeconds;

	document.querySelector('.age-calc').classList.add('expand');
})