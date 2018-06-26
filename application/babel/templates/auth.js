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
  signIn: function() {
    Clerk.wait()
    Request.push('signIn', 'signin', function(response) {
      Auth.authorized(response)
    })
    return false
  },

  //  SIGN UP AS APPLICANT
  signUpAsApplicant: function() {
    Clerk.wait()
    Request.push('signUpAsApplicant', 'User/methods/signup', function(response) {
      Auth.authorized(response)
    })
    return false
  },

  //  SIGN UP AS COMPANY
  signUpAsCompany: function() {
    Clerk.wait()
    Request.push('signUpAsCompany', 'Company/methods/signup', function(response) {
      Auth.authorized(response)
    })
    return false
  },

  //  AUTHORIZED
  authorized: function(user) {
    localStorage.setItem('token', user.Email)
    Router.route('#')
  },

  //  SIGN OUT
  signOut: function() {
    Clerk.wait()
    Request.claim('POST', 'signout', Auth.token(), function(response) {
      localStorage.removeItem('token')
      Router.route('#')
    })
    return false
  },

  //  FORGOT
  forgot: function() {
    return false
  },

  //  SECURITY CODE
  securityCode: function() {
    return false
  },

  //  RESET
  reset: function() {
    return false
  }
}
