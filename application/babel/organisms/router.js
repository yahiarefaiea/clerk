var Router = {
	wrapper: [],

	//	ROUTE
	route: function(location, callback) {
		// Clerk.wait()
		//
		// var session = Auth.session()
		// var location = Router.location(location)
		//
		// //	UNAUTHORIZED
		// if(session == null)
		// 	Router.unauthorized(location)
		//
		// //	APPLICANT
		// else if(session.permission == 'applicant')
		// 	Router.applicant(location)
		//
		// //	COMPANY
		// else if(session.permission == 'company')
		// 	Router.company(location)
		//
		// //	CALLBACK
		// setTimeout(function() {
		// 	Clerk.stop(function() {
		// 		Router.updateWrapper()
		// 		Router.updateLocation(location)
		// 		Router.reset()
		//
		// 		if(typeof callback === 'function' && callback)
		// 			callback()
		// 	})
		// }, 200)
	},

	//	SHIFT
	shift: function(push, pull) {
		// Clerk.wait()
		//
		// setTimeout(function() {
		// 	Clerk.stop(function() {
		// 		Router.updateWrapper(push, pull)
		// 	})
		// }, 200)
	},

	//	PROCESS LOCATION
	processLocation: function(location) {
		// if(location == undefined)
		// 	location = window.location.hash
		//
		// return location.split('#')[0]
	},

	//	UPDATE LOCATION
	updateLocation: function(location) {
		// if(location == '')
		// 	window.location.href.split('#')[0]
		// else
		// 	window.location.hash = location
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

  //  RESET
  reset: function() {
    Router.wrapper = []
  },

	//	LISTEN
	listen: function() {
		// $('.router').on('click', function(e) {
		// 	var location = $(this).attr('href')
		// 	var push = $(this).attr('data-push')
		// 	var pull = $(this).attr('data-pull')
		//
		// 	if(!$(this).hasClass('push'))
		// 		Router.route(location, function() {})
		// 	else
		// 		Router.shift(push, pull, function() {})
		//
		// 	e.preventDefault()
		// })
	}
}

//	DOCUMENT READY
$(document).ready(function() {
	Router.listen()
})
