var Inject = {
  data: {},

  //  UPDATE
  update: function(template, data, callback) {
    // clear everything that has 'data-inject'
    // $()

    // var elements = $('.template[data-template="' + template + '"]').find('[data-inject]')

    // for (var i = 0; i < elements.length; i++) {
    //   var element = $(elements[i])
    //   var type = $(element).attr('data-inject')
    //   // change type to key
    //
    //   if(element.hasClass('links')) {
    //     element.empty()
    //     if(!Array.isArray(data)) data = findObject(data, type)
    //
    //     for (var j = 0; j < data.length; j++) {
    //       var href, title, subtitle
    //       if(element.closest('.template[data-template="applicants"]').length != 0) {
    //         href = 'vacancy/' + data[j].VacancyID + '/applicants/' + data[j].UserID
    //         title = data[j].FirstName + ' ' + data[j].SurName
    //         subtitle = data[j].Major
    //       }
    //       else {
    //         if(Mock.Session) {
    //           console.log('passing..')
    //           if(Mock.Session.UserID == data[j].CompanyID) {
    //             href = 'vacancy/' + data[j].VacancyID
    //             title = data[j].Title
    //             subtitle = data[j].Hours + ' at ' + data[j].CompanyName
    //           }
    //         }
    //         else {
    //           href = data[j].CompanyID + '/' + data[j].VacancyID
    //           title = data[j].Title
    //           subtitle = data[j].Hours + ' at ' + data[j].CompanyName
    //         }
    //       }
    //
    //       var linkGroup = $('<a class="link-group router" href="#' + href + '" title="' + title + '"></a>')
    //       linkGroup.append('<div class="h3"><span>' + title + '</span></div>')
    //       linkGroup.append('<div class="p"><span>' + subtitle + '</span></div>')
    //
    //       linkGroup.wrap('<li></li>')
    //       element.append(linkGroup.parent())
    //     }
    //   }
    //
    //   else if(element.hasClass('list')) {
    //     element.empty()
    //     var items = findObject(data, type)
    //
    //     for (var j = 0; j < items.length; j++) {
    //       element.append('<li>' + items[j] + '</li>')
    //     }
    //   }
    //
    //   else if(element.hasClass('link')) {
    //     if(element.hasClass('router')) {
    //       // var linkText = data[type].replace('www.', '').split('://')[1]
    //       element.text(data[type])
    //       element.attr('title', data[type])
    //       // element.attr('href', data[type])
    //
    //       // element.text(data.CompanyID)
    //       // element.attr('title', data.CompanyID)
    //       var router = element.attr('data-router')
    //       if(router == 'company') element.attr('href', data.CompanyID)
    //     }
    //     else {
    //       var linkText = data[type].replace('www.', '').split('://')[1]
    //       element.text(linkText)
    //       element.attr('title', linkText)
    //       element.attr('href', data[type])
    //     }
    //   }
    //
    //   else {
    //     if(type.includes('.')) element.text(findObject(data, type))
    //     else element.text(data[type])
    //   }
    // }

    // tippyInit()
    // Router.push(template)
    // if(typeof callback === 'function' && callback)
    //   callback()
  },

  //  SEPARATE
  separate: function() {
    // function findObject(o, s) {
    //   //  convert indexes to properties
    //   s = s.replace(/\[(\w+)\]/g, '.$1')
    //   //  strip a leading dot
    //   s = s.replace(/^\./, '')
    //   var a = s.split('.')
    //   for (var i = 0, n = a.length; i < n; ++i) {
    //     var k = a[i]
    //     if (k in o) {
    //       o = o[k]
    //     } else {
    //       return
    //     }
    //   }
    //   return o
    // }
  }
}
