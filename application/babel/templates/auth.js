var Auth = {

  //  TOKEN
  token: function() {
    if(localStorage.getItem('token')) {
      return {
        Token: localStorage.getItem('token')
      }
    } else return null
  },

  //  SESSION
  session: function(callback) {
    Request.claim('POST', 'session', Auth.token(), function(response) {
      if(response === null) localStorage.removeItem('token')
      if(typeof callback === 'function' && callback) callback(response)
    })
  },

  //  SIGN IN
  signIn: function(e) {
    Clerk.wait()
    Request.push('signIn', 'signin', function(response) {
      localStorage.setItem('token', response.Email)
      Router.route('#')
    })
  },

  //  SIGN OUT
  signOut: function(e) {
    Clerk.wait()
    Request.claim('POST', 'signout', Auth.token(), function(response) {
      localStorage.removeItem('token')
      Router.route('#')
    })
  }
}
