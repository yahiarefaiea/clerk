var Router = {
	wrapper: [],
	location: null,

	//	ROUTE
	route: function(location, callback) {
		Clerk.wait()
		Router.location = Router.processLocation(location)

		Auth.session(function(session) {
			//	UNAUTHORIZED
			if(session === null)
				Router.unauthorized(callback)

			//	APPLICANT
			else if(session.Permission === 'applicant')
				Router.applicant(callback)

			//	COMPANY
			else if(session.Permission === 'company')
				Router.company(callback)
		})
	},

	//	PROCESS LOCATION
	processLocation: function(location) {
		if(location === undefined)
			location = window.location.hash

		return location.replace('#', '')
	},

	//	CALLBACK
	callback: function(callback) {
		setTimeout(function() {
			Clerk.stop(function() {
				Router.updateWrapper()
			  window.location.hash = Router.location
			  Router.location = null

				if(typeof callback === 'function' && callback) callback()
			})
		}, 200)
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
		$('.wrapper').on('click', '.router', function(e) {
			if($(this).hasClass('shift'))
				Router.shift($(this).attr('data-push'), $(this).attr('data-pull'))
			else
				Router.route($(this).attr('href'))

			e.preventDefault()
		})
	}
}
