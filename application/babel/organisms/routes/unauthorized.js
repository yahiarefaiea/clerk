Router.unauthorized = function(location) {

  console.log('location from unauthorized:')
  console.log(location)
  location = location.split('/')

  console.log('location array:')
  console.log(location)

  // Router.wrapper = ['unauthorized']

  // Router.push('app')

  // if(location[0] == '' || location[0] == undefined) {
  //   Router.push('auth intro')
  //
  //   setTimeout(function() {
  //     Router.push('switch')
  //     Router.pull('intro')
  //   }, 5000)
  // }

  // else {
  //   Router.push('app')
  //
  //   //	VACANCIES
  //   if(location[0] == 'vacancies') {
  //     Router.push('vacancies')
  //   }
  //
  //   //	COMPANY
  //   else {
  //     var company = location[0]
  //
  //     if(location[1] == undefined) {
  //       Request.fetch({
  //         type: 'company',
  //         companyName: company
  //       }, function(data) {
  //         Request.inject(data, function() {
  //           Router.push('company')
  //         })
  //       })
  //     }
  //
  //     //	VACANCY
  //     else {
  //       var vacancy = location[1]
  //
  //       if(location[2] == undefined) {
  //         Request.fetch({
  //           type: 'company',
  //           companyName: company
  //         }, function(data) {
  //           Request.inject(data, function() {
  //             Router.push('company vacancy')
  //           })
  //         })
  //       }
  //
  //       else {
  //         Router.push('notFound')
  //       }
  //     }
  //
  //   }
  // }
}
