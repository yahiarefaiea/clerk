var Prepare = {
  data: {},

  //  prepare
  prepare: function(parent) {
    var fields = $(parent).find('input')

    for (i = 0; i < fields.length; i++) {
      var field = $(fields[i])

      Prepare.data[field.attr('name')] = field.val()
      // Prepare.data.push({
      //   name: field.attr('name'),
      //   value: field.val()
      // })
    }
  },

  //  PUSH
  push: function(parent, callback) {
    Prepare.prepare(parent, function() {})

    callback()
    Prepare.clean()
  },

  //  PUSH
  clean: function() {
    Prepare.data = {}
  }
  // ,

	//	LISTEN
  //  Do we really need to listen?
	// listen: function() {
	// 	$('.request').on('click', function(e) {
	// 		var request = $(this).attr('href').replace('#', '')
  //     var parent = $(this).closest('[data-request="' + request + '"]')
  //
	// 		Prepare.push(parent, function() {})
	// 		e.preventDefault()
	// 	})
	// }
}
