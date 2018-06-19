Router.applicant = function(callback) {
  if(Router.location == '') Router.location = 'personality'
  var location = Router.location.split('/').filter(Boolean)
  Router.wrapper = ['authorizedAsApplicant app']

  //  PERSONALITY
  if(location[0] == 'personality') {

    //  INSIGHTS
    if(location[1] === undefined) {
      // TODO: Add a fetch request
      Router.push('personality applicant insights')
    }

    //  UPDATE
    else if(location[1] == 'update' && location[2] === undefined) {
      // TODO: Add a fetch request
      // Take care.. this one is a bit different.
      Router.push('personality update')
    }

    else Router.push('notFound')
  }

  //  VACANCIES
  else if(location[0] == 'vacancies' && location[1] === undefined) {
    // TODO: Add a fetch request
    Router.push('vacancies')
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
