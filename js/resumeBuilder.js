var bio = {
	"name" : "Eric Stenger",
	"role" : "Web Developer Superhero",
	"contacts": {
	    "mobile": "940-555-5555",
	    "email": "ericcstenger@gmail.com",
	    "github": "e-stenger",
	    "twitter": "@eric_stenger",
},
	"welcomeMessage": "Welcome to my page!",
	"skills": ["Awesomeness","Playing Guitar","Super Dad","Woodworking"],
	"bioPic": "images/bio_pic.jpg"
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%",bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%",bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%",bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%",bio.contacts.twitter));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBiopic);
$("#header").append(formattedWelcome);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(i in bio.skills){
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
	}
}

for(i in formattedContactInfo){
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

var work = {
	"jobs": [
	{
	"title": "Fire Control Electronics Tech",
	"employer": "USNavy",
	"location": "Charleston, SC",
	"dates": "1990-1994",
	"description": "Fire controlmen provide system employment recommendations; perform organizational and intermediate maintenance on digital computer equipment, subsystems, and systems; operate and maintain combat and weapons direction systems."
	},	
	{
	"title": "Electronics Technician",
	"employer": "Boeing",
	"location": "Corinth, Tx",
	"dates": "1994-1999",
	"description": "Repair, test, and troubleshoot military and commercial electronics to component level."
	},
	{
	"title": "Network and Field Technician",
	"employer": "AT&T",
	"location": "Ft. Worth, Tx",
	"dates": "1999-2014",
	"description": "Troubleshoot network issue, and install and repair various telecom sercies."
	},
	{
	"title": "Load Balance Manager ",
	"employer": "AT&T",
	"location": "Dallas, Tx",
	"dates": "2014-Present",
	"description": "Maintain and direct work load for special services installation and repair technicians daily workload to meed customer commits."
	}
	]
}

function locationizer(work_obj) {
	var locationArray = [];

	for(job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}
displayWork();

var education = {
	"schools": [
	{
	"name": "Sanger High School",
	"location": "Sanger, Tx",
	"degree": "HS Diploma",
	"date": "1987-1999"
	},
	{
	"name": "FC Electonics A-School US Navy",
	"location": "Great Lakes,Il",
	"degree": "Certificate",
	"date": 2001
	},
	{
	"name": "FC Radar C-School US Navy",
	"location": "Great Lakes, Il",
	"degree": "Certificate",
	"date": 2003
	},
	{
	"name": "North Central Texas College",
	"location": "Corinth, Tx",
	"degree": "EMT Basic",
	"date": "2005-2007"
	},
	{
	"name": "North Central Texas College",
	"location": "Corinth, Tx",
	"degree": "AAS Business Management",
	"date": "2003-2009"
	}
	],
	"onlineClasses":[
	{
	"title": "Front-End Nanodegree",
	"school": "Udacity",
	"dates": "Nov16-Present",
	"url": "https://www.udacity.com/"
	}
	]
}

function displayEducation (){

	if(education.schools.length > 0) {

		$("#education").append(HTMLschoolStart);

		for(i in education.schools) {
			var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].date);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].city);

			$(".education-entry:last").append(formattedName);
			$(".education-entry:last").append(formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);

		}	
	}
}

displayEducation();

function displayOnlineClasses () {
	$("#education").append(HTMLonlineClasses);	
	$("#education").append(HTMLschoolStart);
		for (i in education.onlineClasses) {
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineClasses[i].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineClasses[i].school);
			var formattedSchoolTitle = formattedTitle + formattedSchool

			$(".education-entry:last").append(formattedSchoolTitle);
			
			var formattedDates = HTMLonlineDates.replace("%data%",education.onlineClasses[i].dates);
			var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineClasses[i].url);

			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedUrl);

		}
}

displayOnlineClasses();

var projects = {
	"projects": [
	{
	"title": "Raylyn's Architect Desk",
	"date": "September 2, 2014",
	"description": "Raylyn's Desk",
	"image": ["images/KidsDesk.jpg"]
	},
	{
	"title": "Platform Bed",
	"date": "October 24, 2014",
	"description": "Nate's Bed",
	"image": ["images/PlatformBed.jpg"]
	}
	]
}

projects.display = function(){
	for(i in projects.projects) {
		$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[i].date);
			$(".project-entry:last").append(formattedDate);
			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
			$(".project-entry:last").append(formattedDescription);
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].image);
			$(".project-entry:last").append(formattedImage);

			if(projects.projects[i].image.length > 0) {
				for(image in projects.projects[i].image) {
					var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].image);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
};

projects.display();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);});

$("#mapDiv").append(googleMap);
