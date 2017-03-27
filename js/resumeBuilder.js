var bio = {
"name" : "Eric Stenger",
"role" : "Web Developer Superhero",
"contacts":
[
{
"mobile": "940-555-5555",
"email": "ericcstenger@gmail.com",
"github": "e-stenger",
"twitter": "@eric_stenger",
"location": "Justin, Tx"
}
],
"welcomeMessage": "Welcome to my page, why oh why am i doing this..oh yeah she's in the swing!",
"skills": ["Awesomeness","Playing Guitar","Super Dad","Woodworking","Breaking this page!!","Not forEach loops"],
"biopic": "images/bio_pic.jpg"
};
bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBiopic);
$("#header").append(formattedWelcome);
$("#header").append(HTMLskillsStart);
if (bio.skills.length > 0) {
bio.skills.forEach(function(skill) {
var formattedSkills = HTMLskills.replace("%data%",skill);
$("#skills").append(formattedSkills);
});
}
if (bio.contacts.length > 0) {
bio.contacts.forEach(function(info) {
var formattedMobile = HTMLmobile.replace("%data%",info.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%",info.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%",info.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%",info.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%",info.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);
});
}
};
bio.display();
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
};
work.display = function () {
$("#workExperience").append(HTMLworkStart);
if(work.jobs.length > 0) {
work.jobs.forEach(function(job) {
var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
$(".work-entry:last").append(formattedEmployerWorkTitle);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
$(".work-entry:last").append(formattedWorkLocation);
var formattedDates = HTMLworkDates.replace("%data%", job.dates);
$(".work-entry:last").append(formattedDates);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
$(".work-entry:last").append(formattedWorkDescription);
});
}
};
work.display();
var education = {
"schools": [
{
"name": "Sanger High School",
"location": "Sanger, Tx",
"degree": "HS Diploma",
"majors": "High School Stuff",
"dates": "1987-1999",
"url": "http://www.sangerisd.net/Domain/32"
},
{
"name": "FC Electonics A-School US Navy",
"location": "Great Lakes,Il",
"degree": "Certificate",
"majors": "Marching and Schooling",
"dates": 2001,
"url": "https://www.cnic.navy.mil/GreatLakes/"
},
{
"name": "FC Radar C-School US Navy",
"location": "Great Lakes, Il",
"degree": "Certificate",
"majors": "Radar Troublshooting",
"dates": 2003,
"url": "https://www.cnic.navy.mil/GreatLakes/"
},
{
"name": "North Central Texas College",
"location": "Corinth, Tx",
"degree": "EMT Basic",
"majors": "Break in Business Management Degree, EMT Stuff",
"dates": "2005-2007",
"url": "http://www.nctc.edu/"
},
{
"name": "North Central Texas College",
"location": "Corinth, Tx",
"degree": "AAS Business Management",
"majors": "Business Management",
"dates": "2003-2009",
"url": "http://www.nctc.edu/"
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
};
education.display = function() {
$("#education").append(HTMLschoolStart);
if(education.schools.length > 0) {
education.schools.forEach(function(school) {
var formattedName = HTMLschoolName.replace("%data%",school.name);
$(".education-entry:last").append(formattedName);
var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
$(".education-entry:last").append(formattedLocation);
var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
$(".education-entry:last").append(formattedDegree);
var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
$(".education-entry:last").append(formattedDates);
var formattedUrl = HTMLonlineURL.replace("%data%",school.url);
$(".education-entry:last").append(formattedUrl);
});
}
$("#education").append(HTMLonlineClasses);
$("#education").append(HTMLschoolStart);
if(education.onlineClasses.length > 0) {
education.onlineClasses.forEach(function(online) {
var formattedTitle = HTMLonlineTitle.replace("%data%",online.title);
var formattedSchool = HTMLonlineSchool.replace("%data%", online.school);
var formattedSchoolTitle = formattedTitle + formattedSchool;
$(".education-entry:last").append(formattedSchoolTitle);
var formattedDates = HTMLonlineDates.replace("%data%", online.dates);
$(".education-entry:last").append(formattedDates);
var formattedUrl = HTMLonlineURL.replace("%data%", online.url);
$(".education-entry:last").append(formattedUrl);
});
}
};
education.display();
var projects = {
"projects": [
{
"title": "Raylyn's Architect Desk",
"date": "September 2, 2014",
"description": "Miniture architect desk i made for my daughter.",
"image": ["images/KidsDesk.jpg"]
},
{
"title": "Nate's Platform Bed",
"date": "October 24, 2014",
"description": "Platform bed i made for my son, photo from bottom.",
"image": ["images/PlatformBed.jpg"]
}
]
};
projects.display = function() {
if(projects.projects.length > 0) {
projects.projects.forEach(function(project) {
$("#projects").append(HTMLprojectStart);
var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
$(".project-entry:last").append(formattedTitle);
var formattedDate = HTMLprojectDates.replace("%data%", project.date);
$(".project-entry:last").append(formattedDate);
var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
$(".project-entry:last").append(formattedDescription);
var formattedImage = HTMLprojectImage.replace("%data%", project.image);
$(".project-entry:last").append(formattedImage);
});
}
};
projects.display();

$("#mapDiv").append(googleMap);