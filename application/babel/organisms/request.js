var Request = {
  origin: 'http://beta.clerk.technology/v2/',

  //  CLAIM
  claim: function(method, url, body, onSuccess, onError) {
    $.ajax({
      type: method,
      url: Request.origin + url + '.php',
      data: body,
      dataType: 'json',

      //  ERROR
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        Request.error(textStatus, onError)
      },

      //  SUCCESS
      success: function(response) {
        if(response.success === 1 && typeof onSuccess === 'function' && onSuccess)
          onSuccess(response.message)
        else Request.error(response, onError)
      }
    })
  },

  //  FETCH
  fetch: function(template, url, body, callback) {

  },

  //  PUSH
  push: function(form, url, body, callback) {

  },

  //  ERROR
  error: function(error, callback) {
    Clerk.stop(function() {
      if(typeof callback === 'function' && callback) callback()
    })
  }
}
