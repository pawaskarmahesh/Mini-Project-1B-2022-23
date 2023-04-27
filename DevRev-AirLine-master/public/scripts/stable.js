var windw = this;

$.fn.followTo = function (pos) {
  var $this = this,
    $window = $(windw);

  $window.scroll(function () {
    if ($window.scrollTop() > pos) {
      $this.css({
        position: "absolute",
        top: pos + 192,
      });
    } else {
      $this.css({
        position: "fixed",
        top: 192,
      });
    }
  });
};

$(".left-card").followTo(800);
