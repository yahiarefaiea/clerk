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

  },

  //  SIGN IN
  signIn: function(e) {

  },

  //  SIGN OUT
  signOut: function(e) {

  }
}
