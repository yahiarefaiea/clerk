var Router = {
	wrapper: [],

	//	ROUTE
	route: function(location, callback) {
		Clerk.wait()
		Router.location(location)

		var session = Auth.session()
		var location = Router.location.split('/')

		//	unauthorized
		if(session == null)
			Router.unauthorized(location)

		// else if(session.permission == 'applicant')
		// 	Router.applicant(location)
		//
		// else if(session.permission == 'company')
		// 	Router.company(location)

		Clerk.stop(function() {
			Router.shift()
			Router.updateLocation()

			if(typeof callback === 'function' && callback)
				callback()
		})
	},

	//	LOCATION
	location: function(location) {
		if(location == '')
			location = window.location.hash

		// if location is undefined => copy window.location.hash
		// else if location is defined & it's an empty string => redirect to home
		// else => redirect to the router

		location = location.split('#')[0]
		return location
	},

	//	UPDATE LOCATION
	updateLocation: function() {
		if(Router.location != '')
			window.location.hash = Router.location
		else
			window.location.href.split('#')[0]
	},

	//	SHIFT
	shift: function(push, pull) {
		if(push) Router.push(push)
		if(pull) Router.pull(pull)

		var wrapper = Router.wrapper.toString().replace(/,/g, ' ')
		$('.wrapper').attr('class', 'wrapper ' + wrapper)
	},

	//	PUSH
	push: function(items) {
		items = items.split(' ')

		for (i = 0; i < items.length; i++) {
			Router.wrapper.push(items[i])
		}
	},

	//	PULL
	pull: function(items) {
		var items = items.split(' ')

		for (i = 0; i < items.length; i++) {
			var index = Router.wrapper.indexOf(items[i])
			Router.wrapper.splice(index, 1)
		}
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

//	DOCUMENT READY
$(document).ready(function() {
	Router.listen()
})
