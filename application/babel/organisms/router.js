var Router = {
	classes: [],
	session: null,

	location: null,

	// user: {
	// 	permission: null,
	// 	id: null
	// },

	authorized: false,
	permission: 'user',

	user: {
		permission: 'unauthorized',
		id: null
	},


	//	save user object info

	//	todo: check language and grammer

	route: function(location, callback) {
		Clerk.wait()

		//  Router will return authorized == true && user == company || user == applicant
		// Router.checkSession()

		Router.processLocation(location)

		if(Router.user.permission == 'unauthorized') {
			Router.permissions('unauthorized')
		} else {
			if(Router.user.permission == 'company')
				Router.permissions('company')
			else if(Router.user.permission == 'applicant')
				Router.permissions('applicant')
		}


		// if(location == 'home') {
		// 	if(authorized == true) {
		// 		if(user == 'applicant') {
		// 			Router.classes= ['app', 'authorizedAsApplicant', 'vacancy', 'apply']
		// 		} else if(user == 'company') {
		// 			Router.classes= ['app', 'authorizedAsCompany', 'vacancy', 'apply']
		// 		}
		// 	} else {
		// 		Router.classes= ['app', 'authorizedAsApplicant', 'vacancy', 'apply']
		// 	}
		// }


		// recieve and update data

		//	and update title

		//	These classes should be added
		var classes = Router.classes.toString().replace(/,/g, ' ')
		// location =

		setTimeout(function() {
			Clerk.stop(function() {
				$('.wrapper').attr('class', 'wrapper ' + classes)
				window.location.hash = Router.location

				//	IF NOT EMPTY STRING.. THEN REMOVE THE HASH FROM THE URL
				// if(Router.location != '')
				// 	window.location.hash = Router.location
				// else
				// 	window.location.href.split('#')[0]
				callback()
			})
		}, 200)
		//	add callback somewhere
	},

	//	PROCESS LOCATION
	processLocation: function(location) {
		if(location == '')
			location = window.location.hash

		Router.location = location.replace('#', '')
		// Router.location = location.split('#')[0]
	},

	//	PERMISSIONS
	permissions: function(permission) {
		var location = Router.location.split('/')

		// if location is undefined => copy window.location.hash
		// else if location is defined & it's an empty string => redirect to home
		// else => redirect to the router
		// if not found => redirect to not found

		//	unauthorized
		if(permission == 'unauthorized') {
			Router.classes = ['unauthorized']

			//	AUTH
			//	Problem with 'home', '', & undefined
			if(location[0] == '' || location[0] == 'auth') {
				Router.classes.push('auth')

				//	switch
				if(location[0] == '') {
					Router.classes.push('intro')

					setTimeout(function() {
						var intro = Router.classes.indexOf('intro')
						Router.classes.splice(intro, 1)
						Router.classes.push('switch')

						var classes = Router.classes.toString().replace(/,/g, ' ')
						$('.wrapper').attr('class', 'wrapper ' + classes)
					}, 5000)
				}

				else if(location[0] == 'auth') {
					//	signin
					if(location[1] == '' || location[1] == undefined)
						Router.classes.push('signIn')

					//	forgot
					else if(location[1] == 'forgot')
						Router.classes.push('forgot')

					//	applicant
					else if(location[1] == 'applicant')
						Router.classes.push('applicant')

					//	company
					else if(location[1] == 'company')
						Router.classes.push('company')

					//	notfound
					else
						Router.classes.push('notFound')
				}
			}

			else {
				Router.classes.push('app')

				//	VACANCIES
				if(location[0] == 'vacancies') {
					Router.classes.push('vacancies')
				}

				//	COMPANY
				else {
					var company = location[0]
					Router.classes.push('company')

					//	VACANCY
					if(location[1] != undefined) {
						var vacancy = location[1]
						Router.classes.push('vacancy')
					}
				}
			}
			//  Add route for 404
		}

		//	COMPANY
		else if(permission == 'company') {
			// Router.classes = ['app', 'company']
			// console.log('inside company')
		}

		//	APPLICANT
		else if(permission == 'applicant') {
			// Router.classes = ['app', 'applicant']
			// console.log('inside applicant')
		}
	},

	//	LISTEN
	listen: function() {
		$('.router').on('click', function(e) {
			var location = $(this).attr('href')
			Router.route(location, function() {})
			e.preventDefault()
		})
	}
}

$(document).ready(function() {
	Router.listen()
})
