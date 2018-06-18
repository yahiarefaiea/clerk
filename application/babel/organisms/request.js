var Request = {
  url: 'includes/php/file.php',

  //  FETCH
  fetch: function(data, callback) {
    $.ajax({
      type: 'GET',
      url: Request.url,
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
