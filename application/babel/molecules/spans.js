function turnSpans(elements) {

  //  LOOP THROUGH ELEMENTS
  for (i = 0; i < elements.length; i++) {
    var content = $(elements[i]).contents()

    //  LOOP THROUGH CONTENTS
    for (j = 0; j < content.length; j++) {
      var processed = $.trim($(content[j]).text()).replace(/\s\s+/g, ' ')

      //  ESCAPE EMPTY CONTENT
      if(processed != '') {

        //  CHECK IF CONTENT IS TEXT OR TAG
        if($(content[j]).html() === undefined) {
          var spans = processed.split(' ')

          //  WRAP AND APPEND SPANS
          $.each(spans, function(k, span) {
            $(content[j]).before($('<span>' + span + '</span>'))
          })

          $(content[j]).remove()
        } else {
          $(content[j]).text(processed)
        }
      }
    }
  }
}
