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
  }
}
