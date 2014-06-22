$(document).ready ->
  $('div').click ->
    if !($(@).attr('class'))
      if $(@).css('border-color').replace(/\s+/g, '') is 'rgb(255,0,0)'
        $(@).css("border-color", "orange")
      else if $(@).css('border-color').replace(/\s+/g, '') is 'rgb(255,165,0)'
        $(@).css("border-color", "green")
      else
        $(@).css("border-color", "red")