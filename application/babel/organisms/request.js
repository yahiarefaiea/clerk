var Request = {
  origin: 'http://beta.clerk.technology/v2/',

  //  CLAIM
  claim: function(method, url, body, onSuccess, onError) {
    $.ajax({
      type: method,
      url: Request.origin + url,
      data: body,
      dataType: 'json',

      //  ERROR
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        if(typeof onError === 'function' && onError) onError()
        else Router.push('error')
      },

      //  SUCCESS
      success: function(response) {
        if(typeof onSuccess === 'function' && onSuccess) onSuccess(response)
      }
    })
  },

  //  FETCH
  fetch: function(template, url, body, callback) {
    Request.claim('POST', url, body, function(response) {
      Request.inject(template, response, callback)
    })
  },

  //  INJECT
  inject: function(template, data, callback) {

  },

  //  SEPARATE
  separate: function() {

  },

  //  SUBMIT
  submit: function(form, url, body, callback) {

  },

  //  PREPARE
  prepare: function(form, data, callback) {

  }
}
