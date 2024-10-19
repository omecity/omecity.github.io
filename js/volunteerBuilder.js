
// list of dictionary for volunteer
var teals_volunteer = {
	"jobs" : [
		{
			"title" : "Virtual Teacher",
			"employer" : "Callaway High School",
			"url" : "https://www.jackson.k12.ms.us/callaway",
			"dates" : "August 2024 - Present",
			"location" : "Jackson, MS",
			"description" : "Teaching the implications of Artificial Intelligence (AI) on society and develop a series " + 
							"of projects that illustrate the variety of ways AI can be used to optimize and predict " + 
							"information. Introduce how chatbots are developed to interact with humans and create an " + 
							"informational chatbot of their own. Explaining how to make predictive models using linear " + 
							"and logistical regression and clustering. Students create their own predictive models using complex data sets."
		},
		{
			"title" : "Virtual Teaching Assistant",
			"employer" : "Beecher High School",
			"url" : "https://www.beecherschools.org/o/bhs",
			"dates" : "2023/2024",
			"location" : "Detroit, MI",
			"description" : "Taught students programming using Microsoft MakeCode Arcade."
		},
		{
			"title" : "Java & Python Instructor",
			"employer" : "Radford School",
			"url" : "http://www.radfordschool.org",
			"dates" : "2019/2020, 2020/2021",
			"location" : "El Paso, TX",
			"description" : "Ensured students understand the syntax and semantics of Java and python languages. " + 
							"Helped students develop independent learning skills and conﬁdence to write computer programs."
		}
	]
}

var startalk_volunteer = {
	"jobs" : [
		{
			"title" : "Russian Tutor",
			"employer" : "STARTALK Summer Programs",
			"url" : "https://utepstartalk.wordpress.com/",
			"dates" : "June 3 - 21, 2019",
			"location" : "El Paso, TX",
			"description" : "Tutored students in grades 9-12 on Russian grammar and proper pronunciation of Russian words. " + 
							"Assisted students with their Russian Language skills in writing, speaking, reading and listening skills. " + 
							"Conducted short conversations with students in Russian to foster language fluency."
		}
	]
}

// function to display volunteer job
function displayTealsVolunteer(volunteer){
	for (job in volunteer.jobs){

		$('#TealsVolunteerExperience').append(HTMLTealsVolunteerStart);
		$('.teals-volunteer-entry').hide();

		var formattedEmployer = HTMLTealsVolunteerEmployer.replace('%data%', volunteer.jobs[job].employer).replace('#', volunteer.jobs[job].url),
			formattedLocation = HTMLTealsVolunteerLocation.replace('%data%', volunteer.jobs[job].location),
			formattedTitle = HTMLTealsVolunteerTitle.replace('%data%', volunteer.jobs[job].title),
			formattedDates = HTMLTealsVolunteerDates.replace('%data%', volunteer.jobs[job].dates),				
			formattedDescription = HTMLTealsVolunteerDescription.replace('%data%', volunteer.jobs[job].description);

		$('.teals-volunteer-entry:last').append(formattedEmployer);
		$('.teals-volunteer-entry:last').append(formattedLocation);
		$('.teals-volunteer-entry:last').append('<div><br></div>');
		$('.teals-volunteer-entry:last').append(formattedTitle);
		$('.teals-volunteer-entry:last').append(formattedDates);
		$('.teals-volunteer-entry:last').append(formattedDescription);
		$('.teals-volunteer-entry:last').append('<div><br></div>');

	}
}


function displayStartalkVolunteer(volunteer){
	for (job in volunteer.jobs){

		$('#StartalkVolunteerExperience').append(HTMLStartalkVolunteerStart);
		$('.startalk-volunteer-entry').hide();

		var formattedEmployer = HTMLStartalkVolunteerEmployer.replace('%data%', volunteer.jobs[job].employer).replace('#', volunteer.jobs[job].url),
			formattedLocation = HTMLStartalkVolunteerLocation.replace('%data%', volunteer.jobs[job].location),
			formattedTitle = HTMLStartalkVolunteerTitle.replace('%data%', volunteer.jobs[job].title),
			formattedDates = HTMLStartalkVolunteerDates.replace('%data%', volunteer.jobs[job].dates),				
			formattedDescription = HTMLStartalkVolunteerDescription.replace('%data%', volunteer.jobs[job].description);

		$('.startalk-volunteer-entry:last').append(formattedEmployer);
		$('.startalk-volunteer-entry:last').append(formattedLocation);
		$('.startalk-volunteer-entry:last').append('<div><br></div>');
		$('.startalk-volunteer-entry:last').append(formattedTitle);
		$('.startalk-volunteer-entry:last').append(formattedDates);
		$('.startalk-volunteer-entry:last').append(formattedDescription);
		$('.startalk-volunteer-entry:last').append('<div><br></div>');

	}
}

// function call to display volunteer job	
displayTealsVolunteer(teals_volunteer);
displayStartalkVolunteer(startalk_volunteer);


$('.accordion').on('click', 'h4', function(e) {
	var self = e.target,
		parent = self.parentElement,
		$parent = $(parent),
		$section = $parent.children('div');

	if ($section.is(':hidden')) {
		$section.slideDown('slow');
	} else {
		$section.slideUp('slow');
	}
});