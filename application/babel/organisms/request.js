var Request = {
  baseUrl: 'http://clerk.technology/',

  //  FETCH
  fetch: function(template, data, url, callback) {
    $.ajax({
      type: 'GET',
      url: Request.baseUrl + url,
      data: {data: JSON.stringify(data)},
      dataType: 'json',

      //  ERROR
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        Router.error()
      },

      //  SUCCESS
      success: function(data) {
        Request.inject(template, data, callback)
      }
    })
  },

  //  INJECT
  inject: function(template, data, callback) {
    var elements = $('.template[data-template="' + template + '"]').find('[data-inject]')

    for (i = 0; i < elements.length; i++) {
      var type = $(elements[i]).attr('data-inject')
      $(elements[i]).text(data[type])
    }

    Router.push(template)
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
