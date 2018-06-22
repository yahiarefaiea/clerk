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

  //  VACANCY
  else if(location[0] == 'vacancy' && location[1] != undefined) {
    var company = location[0]

    //  CREATE
    if(location[1] == 'create') {
      Router.push('v create')
    }

    //  VACANCY
    else {
      var vacancy = location[1]

      if(location[2] === undefined) {
        Router.push('vacancy')
      }

      else if(location[2] == 'applicants') {

        //  APPLICANTS
        if(location[3] === undefined) {
          Router.push('applicants')
        }

        //  APPLICANT
        else {
          var applicant = location[3]

          if(location[3] === undefined) {
            Router.push('vacancy')
          }

          else Router.push('notFound')
        }
      }

      else Router.push('notFound')
    }
  }

  //  VACANCIES
  else if(location[0] == 'vacancies' && location[1] === undefined) {
    Router.push('vacancies')
  }

  //  COMPANY
  else {
    var company = location[0]

    if(location[1] === undefined) {
      Router.push('company')
    }

    //  VACANCY
    else {
      var vacancy = location[1]

      if(location[2] === undefined) {
        Router.push('vacancy')
      }

      else Router.push('notFound')
    }
  }

  //  CALLBACK
  Router.callback(callback)
}
