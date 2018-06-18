var Request = {

  //  FETCH
  fetch: function(data, callback) {
    $.ajax({
      type: 'POST',
      url: 'includes/php/file.php',
      data: {data: JSON.stringify(data)},
      dataType: 'json',

      //  ERROR
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        Router.error()
      },

      //  SUCCESS
      success: function(data) {
        Request.inject(data, callback)
      }
    })
  },

  //  INJECT
  inject: function(data, callback) {
    console.log(data)

    if(typeof callback === 'function' && callback)
      callback()
  },

  //  SUBMIT
  submit: function(data, callback) {

  },

  //  PREPARE
  prepare: function(data, callback) {

  }
}
