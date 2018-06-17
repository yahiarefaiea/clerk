var Router = {
	wrapper: [],

	//	ROUTE
	route: function(location, callback) {
		Clerk.wait()

		var session = Auth.session()
		var location = Router.location(location)

		console.log(typeof location)
		console.log(location)
		console.log('\'' + location + '\'')

		//	unauthorized
		// if(session == null)
		// 	Router.unauthorized(location)

		// else if(session.permission == 'applicant')
		// 	Router.applicant(location)
		//
		// else if(session.permission == 'company')
		// 	Router.company(location)

		// Clerk.stop(function() {
		// 	Router.shift()
		// 	Router.updateLocation(location)
		//
		// 	if(typeof callback === 'function' && callback)
		// 		callback()
		// })
	},

	//	LOCATION
	location: function(location) {
		if(location == undefined) {
			console.log('URL')
		}
		else if(location == '') {
			console.log('home')
		}
		else {
			console.log('router')
		}

			// location = window.location.hash

		// if location is  => copy window.location.hash
		// else if location is defined & it's an empty string => redirect to home
		// else => redirect to the router

		// location = location.split('#')[0]
		// return location
	},

	//	UPDATE LOCATION
	updateLocation: function(location) {
		var location = Router.location(location)

		if(location == '')
			window.location.href.split('#')[0]
		else
			window.location.hash = location
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
