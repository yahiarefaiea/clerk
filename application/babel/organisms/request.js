var Request = {
  origin: 'http://beta.clerk.technology/v4/',

  //  CLAIM
  claim: function(method, url, body, onSuccess, onError) {
    $.ajax({
      type: method,
      url: Request.origin + url + '.php',
      data: body,
      dataType: 'json',

      //  SUCCESS
      success: function(response) {
        if(response.success === 1 && typeof onSuccess === 'function' && onSuccess)
          onSuccess(response.message)
        else Request.error(response, onError)
      },

      //  ERROR
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        Request.error(textStatus, onError)
      }
    })
  },

  //  FETCH
  fetch: function(template, url, body, callback) {
    Request.claim('POST', url, body, function(response) {
      Inject.update(template, response, callback)
    })
  },

  //  PUSH
  push: function(form, url, callback) {
    Prepare.make(form, function(body) {
      Request.claim('POST', url, body, function(response) {
        if(typeof callback === 'function' && callback) callback(response)
      })
    })
  },

  //  ERROR
  error: function(error, callback) {
    Clerk.stop(function() {
      if(typeof callback === 'function' && callback) callback(error)
    })
  }
}
