var Router = {
	wrapper: [],
	location: null,

	//	ROUTE
	route: function(location, callback) {
		Clerk.wait()

		var session = Auth.session()
		Router.location = Router.processLocation(location)

		//	UNAUTHORIZED
		if(session == null)
			Router.unauthorized(location, Router.callback(callback))

		//	APPLICANT
		else if(session.permission == 'applicant')
			Router.applicant(location, Router.callback(callback))

		//	COMPANY
		else if(session.permission == 'company')
			Router.company(location, Router.callback(callback))
	},

	//	CALLBACK
	callback: function(callback) {
		setTimeout(function() {
			Clerk.stop(function() {
				Router.updateWrapper()
			  window.location.hash = Router.location

				if(typeof callback === 'function' && callback)
					callback()
			})
		}, 200)
	},

	//	PROCESS LOCATION
	processLocation: function(location) {
		if(location === undefined)
			location = window.location.hash

		return location.replace('#', '')
	},

	//	SHIFT
	shift: function(push, pull) {
		Clerk.wait()

		setTimeout(function() {
			Clerk.stop(function() {
				Router.updateWrapper(push, pull)
			})
		}, 200)
	},

	//	UPDATE WRAPPER
	updateWrapper: function(push, pull) {
		if(push) Router.push(push)
		if(pull) Router.pull(pull)

		var wrapper = Router.wrapper.toString().replace(/,/g, ' ')
		$('.wrapper').attr('class', 'wrapper ' + wrapper)
	},

	//	PUSH
	push: function(items) {
		items = items.split(' ')

		for (i = 0; i < items.length; i++) {
			if(!Router.wrapper.includes(items[i]) && items[i] != '')
				Router.wrapper.push(items[i])
		}
	},

	//	PULL
	pull: function(items) {
		items = items.split(' ')

		for (i = 0; i < items.length; i++) {
			if(Router.wrapper.includes(items[i]) && items[i] != '')
				Router.wrapper.splice(Router.wrapper.indexOf(items[i]), 1)
		}
	},

	//	LISTEN
	listen: function() {
		$('.router').on('click', function(e) {
			if($(this).hasClass('shift'))
				Router.shift($(this).attr('data-push'), $(this).attr('data-pull'))
			else
				Router.route($(this).attr('href'))

			e.preventDefault()
		})
	}
}
