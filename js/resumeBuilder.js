/*
bio
name : string
role : string
contacts : an object with
      mobile: string
      email: string
      github: string
      twitter: string
      location: string
welcomeMessage: string
skills: array of strings
biopic: url
display: function
*/
var bio = {
	name: 'John Doe',
	role: 'Web Developer',
	contacts: {
		mobile: '650-555-5555',
		email: 'johndoe@examplecom',
		github: 'johndoe',
		twitter: '@johndoe',
		location: 'San Fracisco'
	},
	welcomeMessage: 'lorem ipsum dolor sit amet etc etc etc',
	biopic: 'images/fry.jpg',
	skills: ['awesomeness', 'delivering things', 'cryogenic sleep', 'saving the universe'],
	display: function() {
		$("#header").prepend(HTMLheaderRole.replace("%data%",this.role));
		$("#header").prepend(HTMLheaderName.replace("%data%",this.name));

		//contacts format
		$("#topContacts").append(HTMLmobile.replace("%data%",this.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%",this.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%",this.contacts.github));
		$("#topContacts").append(HTMLtwitter.replace("%data%",this.contacts.twitter));
		$("#topContacts").append(HTMLlocation.replace("%data%",this.contacts.location));

		$("#footerContacts").append(HTMLmobile.replace("%data%",this.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%",this.contacts.email));
		$("#footerContacts").append(HTMLgithub.replace("%data%",this.contacts.github));
		$("#footerContacts").append(HTMLtwitter.replace("%data%",this.contacts.twitter));
		$("#footerContacts").append(HTMLlocation.replace("%data%",this.contacts.location));
		
		$("#header").append(HTMLbioPic.replace("%data%",this.biopic));
		$("#header").append(HTMLWelcomeMsg.replace("%data%",this.welcomeMessage));

		if(this.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			this.skills.forEach(function(skill) {
				$("#skills").append(HTMLskills.replace("%data%",skill));
			});
		}
	}
};

/*education
schools: array of objects with
     name: string
     location: string
     degree: string
     majors: array of strings
     dates: integer (graduation date)
     url: string
onlineCourses: array with
     title: string
     school: string
     date: integer (date finished)
     url: string
display: function*/

var education = {
	"schools": [
		{
			name: 'Nova Southeastern University',
			location: 'Fort Lauderdale, FL',
			degree: 'Master',
			major: 'CS',
			dates: 2013
		},
		{
			name: 'Eckerd College',
			location: 'Saint Petersburg, FL',
			degree: 'BA',
			major: 'CS',
			dates: 2003
		}
	],
	onlineCourses: [
		{
			title: 'Javascript Crash Course',
			school: 'Udacity',
			date: 2014,
			url: 'http://www.udacity.com/course/ud804'
		}
	],
	display: function(){
		if(this.schools.length > 0) {
			$("#education").append(HTMLschoolStart);
			this.schools.forEach(function(school) {
				var schoolDiv = $(HTMLschoolStart);
				var formatedSchoolName = HTMLschoolName.replace("%data%", school.name);
				var formatedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
				schoolDiv.append(formatedSchoolName + formatedSchoolDegree);
				schoolDiv.append(HTMLschoolDates.replace("%data%", school.dates));
				schoolDiv.append(HTMLschoolLocation.replace("%data%", school.location));
				schoolDiv.append(HTMLschoolMajor.replace("%data%", school.major));
				$("#education").append(schoolDiv);
			});
		}
		if(this.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			this.onlineCourses.forEach(function(onlineSchool) {
				var schoolDiv = $(HTMLschoolStart);
				var formatedOnlineSchoolTitle = HTMLonlineTitle.replace("%data%", onlineSchool.title);
				var formatedOnlineSchoolName = HTMLonlineSchool.replace("%data%", onlineSchool.school); 
				schoolDiv.append(formatedOnlineSchoolTitle + formatedOnlineSchoolName);
				schoolDiv.append(HTMLonlineDates.replace("%data%", onlineSchool.date));
				schoolDiv.append(HTMLonlineURL.replace("%data%", onlineSchool.url));
				$("#education").append(schoolDiv);
			});
		}
	}
};

/*
work
jobs: array of objects with
     employer: string
     title: string
     location: string
     dates: string (works with a hyphen between them)
     description: string
display: function
*/
var work = {
	jobs: [
		{
			employer: 'Planet Express',
			title: 'Delivery Boy',
			location: 'Brooklyn, NY',
			dates: 'January 2000 - Future',
			description: 'Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes' +
				'out everybody\'s happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella' +
				'cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese' +
				'stinking bishop jarlsberg.'
		},
		{
			employer:'Planet Express',
			title: 'Delivery Boy',
			location: 'Manhattan, NY',
			dates: '1998 - December 31,1999',
			description: 'Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes' +
				'out everybody\'s happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella' +
				'cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese' +
				'stinking bishop jarlsberg.'
		}
	],
	display: function() {
		if(this.jobs.length>0) {
			this.jobs.forEach(function(job){
				var jobDiv = $(HTMLworkStart);
				jobDiv.append(  HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
				jobDiv.append(HTMLworkDates.replace("%data%", job.dates));
				jobDiv.append(HTMLworkLocation.replace("%data%", job.location));
				jobDiv.append(HTMLworkDescription.replace("%data%", job.description));
				$("#workExperience").append(jobDiv);
			});
		}
	}
};

/*
projects
projects: array of objects with
      title: string
      dates: string (works with a hyphen between them)
      description: string
      images: array with string urls
display: function
*/
var projects = {
	projects: [
		{
			title: 'Sample Project 1',
			dates: '2014',
			description: 'Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes' +
				'out everybody\'s happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella' +
				'cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese' +
				'stinking bishop jarlsberg.',
			images: ['images/197x148.gif','images/197x148.gif','images/197x148.gif']
		}
	],
	display: function() {
		if(this.projects.length>0) {
			this.projects.forEach(function(project){
				var projectDiv = $(HTMLprojectStart);
				projectDiv.append(HTMLprojectTitle.replace("%data%",project.title));
				projectDiv.append(HTMLprojectDates.replace("%data%",project.dates));
				projectDiv.append(HTMLprojectDescription.replace("%data%",project.description));
				if(project.images.length>0) {
					project.images.forEach(function(image){
						projectDiv.append(HTMLprojectImage.replace("%data%",image));
					});
				}
				$("#projects").append(projectDiv);
			});
		}
	}
};

var ui = {
	addInternationlize: function() {
		$("#main").append(internationalizeButton);
	},
	addMap: function() {
		$("#mapDiv").append(googleMap);
	},
	display: function() {
		bio.display();
		education.display();
		work.display();
		projects.display();

		this.addInternationlize();
		this.addMap();
	}
};

ui.display();

function inName() {
    var internationalizedName = $("#name").html().trim().split(" ");
    internationalizedName[0][0] = internationalizedName[0][0].toUpperCase();
    internationalizedName[1]=internationalizedName[1].toUpperCase();
    return internationalizedName.join(" ");
}