var Request = {
  origin: 'http://beta.clerk.technology/v2/',

  //  CLAIM
  claim: function(url, onSuccess, onError, data, method) {
    if(data === undefined) data = null
    if(method === undefined) method = 'POST'

    //  AJAX
    $.ajax({
      type: method,
      url: Request.origin + url,
      data: {data: JSON.stringify(data)},
      dataType: 'json',

      //  ERROR
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        if(typeof onError === 'function' && onError)
          onError()
        else Router.push('notFound')
      },

      //  SUCCESS
      success: function(response) {
        if(typeof onSuccess === 'function' && onSuccess)
          onSuccess(response)
      }
    })
  },

  //  FETCH
  fetch: function(template, url, callback) {
    Request.claim(url, function(response) {
      Request.inject(template, response, callback)
    })
  },

  //  INJECT
  inject: function(template, data, callback) {
  },

  //  INJECT
  separate: function() {
  },

  //  SUBMIT
  // submit: function(data, callback) {
  push: function(parent, callback) {
  },

  //  PREPARE
  // prepare: function(data, callback) {
  prepare: function(parent) {
  }
}
