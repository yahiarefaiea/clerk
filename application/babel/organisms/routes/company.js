Router.company = function(callback) {
  var location = Router.location.split('/').filter(Boolean)
  Router.wrapper = ['authorizedAsCompany app']

  //  DASHBOARD
  if(location[0] === undefined) {
    Router.push('dashboard')
  }

  //  PROFILE
  else if(location[0] == 'profile') {

    //  COMPANY
    if(location[1] === undefined) {
      Router.push('profile company')
    }

    //  UPDATE
    else if(location[1] == 'update' && location[2] === undefined) {
      Router.push('profile update')
    }

    else Router.push('notFound')
  }

  //  MY VACANCIES
  else if(location[0] == 'vacancy' && location[1] != undefined) {

    //  CREATE
    if(location[1] == 'create' && location[2] === undefined) {
      Router.push('v create')
    }

    //  VACANCY
    else {
      var vacancy = location[1]

      if(location[2] === undefined) {
        Router.push('v vacancy')
      }

      //  APPLICANTS
      else if(location[2] == 'applicants') {

        if(location[3] === undefined) {
          Router.push('v applicants')
        }

        //  APPLICANT
        else {
          var applicant = location[3]

          if(location[4] === undefined) {
            Router.push('v applicant')
          }

          else Router.push('notFound')
        }
      }

      else Router.push('notFound')
    }
  }

  //  VACANCIES
  // else if(location[0] == 'vacancies' && location[1] === undefined) {
  //   Router.push('vacancies')
  // }

  //  COMPANY
  // else {
  //   var company = location[0]
  //
  //   if(location[1] === undefined) {
  //     Router.push('company')
  //   }
  //
  //   //  VACANCY
  //   else {
  //     var vacancy = location[1]
  //
  //     if(location[2] === undefined) {
  //       Router.push('vacancy')
  //     }
  //
  //     else Router.push('notFound')
  //   }
  // }

  //  CALLBACK
  Router.callback(callback)
}
