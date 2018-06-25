var Prepare = {
  data: {},

  //  MAKE
  make: function(form, callback) {
    var data = {}
    var fields = $('.form#' + form).find('input')

    for (i = 0; i < fields.length; i++) {
      var field = $(fields[i])
      if(field.val() != '')
        data[field.attr('name')] = field.val()
    }

    if(typeof callback === 'function' && callback) callback(data)
  }
}
