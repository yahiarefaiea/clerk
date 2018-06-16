var Auth = {

  session: function() {
    // check session here

    // then return the object
    return {
      permission: 'company',
      user: {
        id: '515'
      }
    }
  }

  signedIn: function() {
    setTimeout(function() {
      Router.route('', function() {
        // callback goes here if you wish to put something..
      })
		}, 200)
  },

  signIn: function(e) {

    Clerk.wait()
    var form = '[data-request="signIn"]'

    Prepare.push(form, function() {
      var data = Prepare.data

      console.log(data)


      var success = true
      if(success == true) {
        Auth.session = 'user'
        Auth.user.permission = 'comp'
        Auth.signedIn()
      } else {
        Clerk.stop()
        console.log('something went wrong..')
      }

      //  TODOS: Ajax request goes here
      // $.ajax({
      //   type: 'POST',
      //   url: '...',
      //   data: {d: JSON.stringify(data)},
      //   dataType: 'json',
      //   error: function(XMLHttpRequest, textStatus, errorThrown) {
      //     console.log('error')
      //   },
      //   success: function(data) {
      //     Auth.session = 'user'
      //     Auth.permission = 'comp'
      //     Auth.signedIn(data.status)
      //   }
      // })

    })

    // e.preventDefault()
  },

  signUpAsApplicant: function(e) {

    // Clerk.wait()
    // var form = '[data-request="signUpAsApplicant"]'
    //
    // Prepare.push(form, function() {
    //   console.log(Prepare.data)
    // })

    // e.preventDefault()
  },

  signUpAsCompany: function(e) {

    // Clerk.wait()
    // var form = '[data-request="signUpAsCompany"]'
    //
    // Prepare.push(form, function() {
    //   console.log(Prepare.data)
    // })

    // e.preventDefault()
  }
}
