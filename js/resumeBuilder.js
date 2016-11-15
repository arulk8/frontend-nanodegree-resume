/*
This is empty on purpose! Your code to build the resume will go here.
 */
//var awesomeThoughts = " I am arul i am awesome";

/*var funThoughts = awesomeThoughts.replace("awesome","fun");
$("#main").append(funThoughts); */


var skill =["HTML","Javascripts","C++","C"];
 var bio={
 	"name" :"Arulmurugan Kanagasabapathi",
 	"age" : 22,
 	"role": "Web Developer",
 	contacts:{
 	"email":"arulmurugan194@gmail.com",
 	"phone_no": "9003568965",
  "github" : "arulk8",
  "location":"Chennai,India"
 	},

 	"bioPic": "images/002.jpg",
 	"skills" :skill,
 	"welcome_message":"Enthustiatic programmer,who seeks new things",
 }
 bio.display=function()
 {
 
var formattedName =HTMLheaderName.replace("%data%",bio.name);
var formattedRole =HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedmobile =HTMLmobile.replace("%data%",bio.contacts.phone_no);
$("#topContacts").append(formattedmobile);

var formattedgithub =HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedgithub);

var formattedemail =HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedemail);

var formattedlocation =HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedlocation);

var formattedbioPic =HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedbioPic);

$("#header").append(HTMLskillsStart);

for(var i=0 ;i<bio.skills.length;i++) {
var formattedskills =HTMLskills.replace("%data%",bio.skills[i]);
$("#skills").append(formattedskills);
}

var formattedMsg =HTMLwelcomeMsg.replace("%data%",bio.welcome_message);
$("#skills").append(formattedMsg);

$("#footerContacts").append(formattedmobile,formattedemail,formattedgithub);
}


bio.display();
  /*var work= {};
  work.employer = "xyz";
  work.title = "System Analyst";
  work.location = "xyz city";

  var formattedworkEmployer=HTMLworkEmployer.replace("%data%",work.employer);
  var formattedworkTitle=HTMLworkTitle.replace("%data%",work.title);
  var formattedworkLocation=HTMLworkLocation.replace("%data%",work.location);
  $("#workExperience").append(HTMLworkStart);

  $("#workExperience").append(formattedworkEmployer);
  $("#workExperience").append(formattedworkTitle);
  $("#workExperience").append(formattedworkLocation);*/

  var education= {
    "schools": [
        {
       "Name"     : "Madras Institute of technology",
       "Degree"   : "Bachelore of Engineering",
       "location" : "Chennai,India",
       "major"    :"Electronics and Communication"
     },
     {
        "Name"    : "SRV Boys Higher Secondary school",
       "Degree"   : "12TH grade",
       "location" : "Salem,India",
       "major"    : "Higher Secondary"
     },
     {
       "Name"     : "Sri Vidya Mandir Higher Secondary School Rasipuram",
       "Degree"   : "10TH grade",
       "location" : "Salem,India",
       "major"    : "Matriculation Board"
     }
  ]
  };
  
  /* school["Name"] = "Madras Institute of technology";
     school["Degree"] = "Bachelore of Engineering";
     school["Location"] = "chennai";
     school["major"]= "Electronics and Communication"; */
education.display= function()
{

 education.schools.forEach(function(i)
 {
   $("#education").append(HTMLschoolStart);
  var formattedschoolName=HTMLschoolName.replace("%data%",i.Name);
  var formattedschoolDegree=HTMLschoolDegree.replace("%data%",i.Degree);
  var formattedschoolLocation =HTMLschoolLocation.replace("%data%",i.location );
  var formattedschoolMajor=HTMLschoolMajor.replace("%data%",i.major);

  var formattedSchoolandDegree = formattedschoolName + formattedschoolDegree;
 
  //$("#education").append(formattedschoolName);
  $("#education").append(formattedSchoolandDegree);
  $("#education").append(formattedschoolLocation);
  $("#education").append(formattedschoolMajor);
 }
 );
}

education.display();


  var work={
  	"jobs": [
  		{
  		 "employer":"Infosys",
  		 "title": "system Analyst",
  		 "dates": "2016-Present",
  		 "location":"Banglore,India",
  		 "description":"Not working presently in training"
    	}
 	]
 };

 work.display =function()
 { 

 work.jobs.forEach(function(job)
  {
  	
  	$("#workExperience").append(HTMLworkStart);
  	
  	var formattedworkEmployer = HTMLworkEmployer.replace("%data%",job.employer);
  	var formattedworkTitle = HTMLworkTitle.replace("%data%",job.title);

    var formattedEmployerTitle=formattedworkEmployer+formattedworkTitle;
  	$("#workExperience").append(formattedEmployerTitle);

    var formattedworkDates = HTMLworkDates.replace("%data%",job.dates);
    $("#workExperience").append(formattedworkDates);

  	var formattedworkLocation = HTMLworkLocation.replace("%data%",job.location);
  	$("#workExperience").append(formattedworkLocation);

  	var formattedworkDescription = HTMLworkDescription.replace("%data%",job.description);
  	$("#workExperience").append(formattedworkDescription);

  	
  	$(".work-Entry:last").append(formattedEmployerTitle);
  }
  );
}

work.display();

   var project={
   	  "projects": [
          {
          	"title": "Ultra Low Power SRAM Design Using 9nm TFET",
          	"dates": "2016",
          	"Description": "To show TFET as superior alternative to MOSFET"

          },
          {
          	"title": "Traffic Congestion Detection in Arterial Road Using RF Technology",
          	"dates": "2015",
          	"Description": "To reduce the traffic in Arterial Road using RF id and adaptive Algorithm"
          }
   	  ]

   };

  project.display = function()
  {

   project.projects.forEach( function( i) {

    $("#projects").append(HTMLprojectStart);
  	
  	var formattedprojectTitle = HTMLprojectTitle.replace("%data%",i.title);
  	$("#projects").append(formattedprojectTitle);

  	var formattedprojectDates = HTMLprojectDates.replace("%data%",i.dates);
  	$("#projects").append(formattedprojectDates);

  	var formattedprojectDescription = HTMLprojectDescription.replace("%data%",i.Description);
  	$("#projects").append(formattedprojectDescription);
  	}
);

}

 project.display();

 var onlineclass={
          "classes": [
          {
            "Title" : "Introduction to HTML ans CSS",
            "school": "udacity",
            "URL"   : "https://classroom.udacity.com/courses/ud304",
            "date"  : "2016"
          },
          {
            "Title" : "Basics of Javascripts",
            "school": "udacity",
            "URL"   : "https://classroom.udacity.com/courses/ud804",
            "date"  : "2016"
          },
          {
            "Title" : "Introduction to ComputerScience",
            "school": "udacity",
            "URL"   : "https://classroom.udacity.com/courses/cs101",
            "date"  : "2016"
          }

          ]
 };

$("#education").append(HTMLonlineClasses);

onlineclass.display =function()
{

onlineclass.classes.forEach(function(i)
  {

   var formattedonlineTitle = HTMLonlineTitle.replace("%data%",i.Title);
  // $("#education").append(formattedonlineTitle);

   var formattedonlineSchool = HTMLonlineSchool.replace("%data%",i.school);
   var TitleandSchool = formattedonlineTitle + formattedonlineSchool;

   $("#education").append(TitleandSchool);

   var formattedonlineDates = HTMLonlineDates.replace("%data%",i.date);
   $("#education").append(formattedonlineDates);

   var formattedonlineURL = HTMLonlineURL.replace("%data%",i.URL);
   $("#education").append(formattedonlineURL);
  }

);
}
onlineclass.display();


/* $(document).click(
function(loc)
{
var X= loc.pageX;
var Y= loc.pageY;
console.log("X="+ X);
console.log("Y="+ Y);
}
);*/
 $("#main").append(internationalizeButton);

  function inName(name)
  {
    var a =[];
     a = name;
     a= a.split(" ");
     console.log(a);
     a[1]= a[1].toUpperCase();
     a[0]= a[0].slice(0,1).toUpperCase()+ a[0].slice(1).toLowerCase();
     return a[0]+" "+a[1];

  }
  $("#mapDiv").append(googleMap);