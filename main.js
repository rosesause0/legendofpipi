// seaches for <div data-include="subpage"></div> and appends the found html file on the tag
$(function () {
    var includes = $('[data-include]');
    $.each(includes, function () {
      var file = '/' + $(this).data('include') + '.html'
      $(this).load(file)
    });
  });