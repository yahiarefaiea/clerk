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
        Request.error(textStatus)
      },

      //  SUCCESS
      success: function(response) {
        if(response.success === 1 && typeof onSuccess === 'function' && onSuccess)
          onSuccess(response.message)
        else Request.error(response)
      }
    })
  },

  //  FETCH
  fetch: function(template, url, body, callback) {

  },

  //  SUBMIT
  submit: function(form, url, body, callback) {

  },

  //  ERROR
  error: function(error) {
    Clerk.stop(function() {
      console.log(error)
    })
  }
}
