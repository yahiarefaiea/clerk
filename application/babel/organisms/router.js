var Router = {
	classes: [],
	location: null,

	route: function(location, callback) {
		Clerk.wait()

		var session = Auth.session()
		var location = Router.location.split('/')

		//	unauthorized
		if(session == null) {
			Router.unauthorized(location)

		else if(session.permission == 'applicant')
			Router.applicant(location)

		else if(session.permission == 'company')
			Router.company(location)


		Router.processLocation(location)

		// recieve and update data
		//	and update title


		setTimeout(function() {
			Clerk.stop(function() {
				Router.shift()
				Router.updateLocation()

				if(typeof callback === 'function' && callback)
					callback()
			})
		}, 200)
	},

	push: function(classes) {
		classes = classes.split(' ')

		for (i = 0; i < classes.length; i++) {
			Router.classes.push(classes[i])
		}
	},

	pull: function(classes) {
		var classes = classes.split(' ')

		for (i = 0; i < classes.length; i++) {
			var index = Router.classes.indexOf(classes[i])
			Router.classes.splice(index, 1)
		}
	},

	shift: function(push, pull) {
		if(push) Router.push(push)
		if(pull) Router.pull(pull)

		var classes = Router.classes.toString().replace(/,/g, ' ')
		$('.wrapper').attr('class', 'wrapper ' + classes)
	},

	//	PROCESS LOCATION
	processLocation: function(location) {
		if(location == '')
			location = window.location.hash

		// if location is undefined => copy window.location.hash
		// else if location is defined & it's an empty string => redirect to home
		// else => redirect to the router

		Router.location = location.replace('#', '')
		// Router.location = location.split('#')[0]
	},

	updateLocation: function() {
		if(Router.location != '')
			window.location.hash = Router.location
		else
			window.location.href.split('#')[0]
	},

	//	LISTEN
	listen: function() {
		$('.router').on('click', function(e) {
			var location = $(this).attr('href')
			var push = $(this).attr('data-push')
			var pull = $(this).attr('data-pull')

			if(!$(this).hasClass('push'))
				Router.route(location, function() {})
			else
				Router.shift(push, pull, function() {})

			e.preventDefault()
		})
	}
}

$(document).ready(function() {
	Router.listen()
})
