(function() {
  $.ajax('angular.md', {
    async: false,
    success: function(data) {
      $.each(data.split('--slide--'), function(i, slide) {
        var section = $('<section></section>');
        $.each(slide.split('--sub--'), function(i, text) {
          var sub = $('<section data-markdown></section>').html(text);
          $(section).append(sub);
        });
        $('.slides').append(section);
      });
    }
  });
})();
