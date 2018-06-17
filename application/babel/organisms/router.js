var Router = {
	wrapper: [],

	//	ROUTE
	route: function(location, callback) {
		Clerk.wait()

		var session = Auth.session()
		var location = Router.location(location)

		//	UNAUTHORIZED
		// if(session == null)
		// 	Router.unauthorized(location)

		//	CALLBACK
		setTimeout(function() {
			Clerk.stop(function() {
				Router.updateWrapper()
			  window.location.hash = location

				if(typeof callback === 'function' && callback)
					callback()
			})
		}, 200)
	},

	//	LOCATION
	location: function(location) {
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

//	DOCUMENT READY
$(document).ready(function() {
	Router.listen()
})
