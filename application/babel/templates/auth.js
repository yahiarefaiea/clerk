var Auth = {
  token: function() {
    return {
      Token: localStorage.getItem('token')
    }
  },

  //  SESSION
  session: function(callback) {
    callback({Permission: 'company'})
  },

  //  AUTHORIZED
  authorized: function() {

  },

  //  SIGN IN
  signIn: function(e) {

  },

  //  SIGN OUT
  signOut: function(e) {

  },

  //  SIGN UP AS APPLICANT
  signUpAsApplicant: function(e) {

  },

  //  SIGN UP AS COMPANY
  signUpAsCompany: function(e) {

  },

  //  FORGOT
  forgot: function(e) {
    console.log('Not available right now..')
  },

  //  SECURITY CODE
  securityCode: function(e) {
    console.log('Not available right now..')
  },

  //  RESET
  reset: function(e) {
    console.log('Not available right now..')
  }
}
