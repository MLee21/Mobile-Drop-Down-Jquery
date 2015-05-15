var $select = $("<select></select>");
$("#menu").append($select);

$("#menu a").each(function(){
  var $anchor = $(this);
  var $option = $("<option></option");
  $option.text($anchor.text());
  $option.val($anchor.attr("href"));
  $select.append($option);
});

var $button = $("<button>Go</button>");
  $("#menu").append($button);
  $button.click(function(){
  window.location = $select.val();
});