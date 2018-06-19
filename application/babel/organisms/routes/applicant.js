Router.applicant = function(callback) {
  var location = Router.location.split('/').filter(Boolean)
  Router.wrapper = ['authorizedAsApplicant app']

  //  PERSONALITY
  if(location[0] === undefined || location[0] == 'personality') {
    Router.push('applicant personality')

    //  INSIGHTS
    if(location[1] === undefined) {
      // TODO: Add a fetch request
      Router.push('insights')
    }

    //  UPDATE
    else {
      if(location[2] === undefined) {
        // TODO: Add a fetch request
        Router.push('update')
      }

      else Router.push('notFound')
    }
  }

    //  VACANCIES
    else if(location[0] == 'vacancies') {
      if(location[1] === undefined) {
        // TODO: Add a fetch request
        Router.push('vacancies')
      }

      else Router.push('notFound')
    }

    //  COMPANY
    else {
      var company = location[0]

      if(location[1] === undefined) {
        // TODO: Add a fetch request
        Router.push('company')
      }

      //  VACANCY
      else {
        var vacancy = location[1]

        if(location[2] === undefined) {
          // TODO: Add a fetch request
          Router.push('vacancy')
        }

        else Router.push('notFound')
      }
    }

  //  CALLBACK
  Router.callback(callback)
}
