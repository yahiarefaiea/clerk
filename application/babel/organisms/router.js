var Router = {
	classes: [],
	session: '',

	//	save user object info

	route: function(url) {
		//  this will return identified == true && user == company || user == applicant
		// this.checkSession()

		//  this will process the url and return an array of classes
		this.checkURL(url)

		// recieve and update data

		//	These classes should be added
		var classes = this.classes.toString().replace(/,/g, ' ')
		$('.wrapper').attr('class', 'wrapper ' + classes)

		// this.updateURL(url)
		//	and update title
	},
	checkURL: function(url) {
		//	get url form the browser
		//	validate and check session
		//	do if else statments
		//  and then push an array of classes

		if(url == 'home') {
			this.classes= ['app']
		}

		//	ROUTER TEST!!

		// if(url == 'home') {
		// 	if(identified == true) {
		// 		if(user == 'applicant') {
		// 			this.classes= ['app', 'identified--applicant', 'vacancy', 'apply']
		// 		} else if(user == 'company') {
		// 			this.classes= ['app', 'identified--company', 'vacancy', 'apply']
		// 		}
		// 	} else {
		// 		this.classes= ['app', 'identified--applicant', 'vacancy', 'apply']
		// 	}
		// }

	}
}
