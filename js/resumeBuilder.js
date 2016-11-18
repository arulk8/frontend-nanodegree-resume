var skill = ["HTML", "Javascripts", "C++", "C"];
var bio = {
    "name": "Arulmurugan Kanagasabapathi",
    "role": "Web Developer",
    contacts: {
        "email": "arulmurugan194@gmail.com",
        "mobile": "9003568965",
        "github": "arulk8",
        "location": "Chennai,India"
    },

    "biopic": "images/002.jpg",
    "skills": skill,
    "welcomeMessage": "Enthustiatic programmer,who seeks new things",
    "display": function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#topContacts").append(formattedmobile, formattedgithub, formattedemail, formattedlocation);
        $("#header").append(formattedbioPic);
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedskills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedskills);
        }
        $("#skills").append(formattedMsg);

        $("#footerContacts").append(formattedmobile, formattedemail, formattedgithub);
    }
};

var education = {
    "schools": [{
            "name": "Madras Institute of technology",
            "degree": "Bachelore of Engineering",
            "location": "Chennai,India",
            "majors": "Electronics and Communication",
            "dates": "2012-2016",
            "url": "http://www.mitindia.edu"
        }, {
            "name": "SRV Boys Higher Secondary school",
            "degree": "12TH grade",
            "location": "Salem,India",
            "majors": "Higher Secondary",
            "dates": "2010-2012",
            "url": "http://www.srvacademy.org/hitechboys"
        }, {
            "name": "Sri Vidya Mandir Higher Secondary School Rasipuram",
            "degree": "10TH grade",
            "location": "Salem,India",
            "majors": "Matriculation Board",
            "dates": "2006-2010",
            "url": "http://www.srividyamandirrspm.org/"
        }

    ],

    "onlineCourses": [{
            "title": "Introduction to HTML ans CSS",
            "school": "udacity",
            "url": "https://classroom.udacity.com/courses/ud304",
            "date": "2016"
        }, {
            "title": "Basics of Javascripts",
            "school": "udacity",
            "url": "https://classroom.udacity.com/courses/ud804",
            "date": "2016"
        }, {
            "title": "Introduction to ComputerScience",
            "school": "udacity",
            "url": "https://classroom.udacity.com/courses/cs101",
            "date": "2016"
        }

    ],

    "display": function() {
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(i) {

            var formattedschoolName = HTMLschoolName.replace("%data%", i.name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", i.degree);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", i.location);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", i.dates);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", i.majors);
            var formattedschoolURL = HTMLschoolURL.replace("%data%", i.url);

            var formattedSchoolandDegree = formattedschoolName + formattedschoolDegree;

            //$("#education").append(formattedschoolName);
            $(".education-entry:last").append(formattedSchoolandDegree);
            $(".education-entry:last").append(formattedschoolLocation);
            $(".education-entry:last").append(formattedschoolDates);
            $(".education-entry:last").append(formattedschoolMajor);
            $(".education-entry:last").append(formattedschoolURL);

        });

        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(i) {

                var formattedonlineTitle = HTMLonlineTitle.replace("%data%", i.title);
                // $("#education").append(formattedonlineTitle);
                var formattedonlineSchool = HTMLonlineSchool.replace("%data%", i.school);
                var formattedonlineDates = HTMLonlineDates.replace("%data%", i.date);
                var formattedonlineURL = HTMLonlineURL.replace("%data%", i.url);
                var TitleandSchool = formattedonlineTitle + formattedonlineSchool;

                $(".education-entry:last").append(TitleandSchool);
                $(".education-entry:last").append(formattedonlineDates);
                $(".education-entry:last").append(formattedonlineURL);
            }

        );
    }

};



var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "system Analyst",
        "dates": "2016-Present",
        "location": "Banglore,India",
        "description": "Not working presently in training"

    }],

    "display": function() {
        $("#workExperience").append(HTMLworkStart);

        work.jobs.forEach(function(job) {



            var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
            var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedworkDates);
            $(".work-entry:last").append(formattedworkLocation);
            $(".work-entry:last").append(formattedworkDescription);
            $(".work-Entry:last").append(formattedEmployerTitle);
        });
    }

};

var projects = {
    "projects": [

        {
            "title": " Designing a Responsive Portfolio Site ",
            "dates": "2016",
            "description": "To Design a portfolio site using responsive design",
            "images": ["images/project10_450.png", "images/project11_450.png"]
        },

        {
            "title": "Ultra Low Power SRAM Design Using 9nm TFET",
            "dates": "2016",
            "description": "To show TFET as superior alternative to MOSFET",
            "images": ["images/project20.png", "images/project21.png"]
        },

        {
            "title": "Traffic Congestion Detection in Arterial Road Using RF Technology",
            "dates": "2015",
            "description": "To reduce the traffic in Arterial Road using RF id and adaptive Algorithm",
            "images": ["images/project30.png", "images/project31.png"]
        }
    ],
    "display": function() {
        $("#projects").append(HTMLprojectStart);

        projects.projects.forEach(function(i) {

            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", i.title);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", i.dates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", i.description);

            $(".project-entry:last").append(formattedprojectTitle);
            $(".project-entry:last").append(formattedprojectDates);
            $(".project-entry:last").append(formattedprojectDescription);

            for (var j = 0; j < i.images.length; j++) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", i.images[j]);
                $(".project-entry:last").append(formattedprojectImage);
            }
        });

    }

};

bio.display();
education.display();
work.display();
projects.display();


function inName(name) {
    var a = [];
    a = name;
    a = a.split(" ");
    console.log(a);
    a[1] = a[1].toUpperCase();
    a[0] = a[0].slice(0, 1).toUpperCase() + a[0].slice(1).toLowerCase();
    return a[0] + " " + a[1];

}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


$(document).ready(function() {
    $(".work-entry").hide();
    //toggles
    $(".heading").click(function() {
        $(this).next(".work-entry").slideToggle(500);
    });

});
$(document).ready(function() {
    $(".project-entry").hide();
    //toggles
    $(".heading").click(function() {
        $(this).next(".project-entry").slideToggle(500);
    });

});
$(document).ready(function() {
    $(".education-entry").hide();
    $(".heading").click(function() {
        $(this).next(".education-entry").slideToggle(500);
    });

});