
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
var bio = { "name": "John Doe",
			"role": "Web Developer",
			"contacts": { 	"mobile":"650-555-5555",
							"email": "johndoe@examplecom",
							"github": "johndoe",
							"twitter": "@johndoe",
							"location": "San Fracisco"},
			"welcomeMessage":"lorem ipsum dolor sit amet etc etc etc",
			"biopic":"images/fry.jpg",
			"skills":["awesomeness","delivering things","cryogenic sleep","saving the universe"],
			"display": function(){

				$("#header").prepend(HTMLheaderRole.replace("%data%",this.role));
				$("#header").prepend(HTMLheaderName.replace("%data%",this.name));

				$("#topContacts").append(HTMLmobile.replace("%data%",this.contacts.mobile));
				$("#topContacts").append(HTMLemail.replace("%data%",this.contacts.email));
				$("#topContacts").append(HTMLgithub.replace("%data%",this.contacts.github));
				$("#topContacts").append(HTMLtwitter.replace("%data%",this.contacts.twitter));
				$("#topContacts").append(HTMLlocation.replace("%data%",this.contacts.location));

				$("#header").append(HTMLbioPic.replace("%data%",this.biopic));
				$("#header").append(HTMLWelcomeMsg.replace("%data%",this.welcomeMessage));

				$("#header").append(HTMLskillsStart);

				this.skills.forEach(function(skill){
					$("#skills").append(HTMLskills.replace("%data%",skill));
				});			
			}
		};
bio.display();

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

/*
projects
projects: array of objects with
      title: string 
      dates: string (works with a hyphen between them)
      description: string
      images: array with string urls
display: function
*/