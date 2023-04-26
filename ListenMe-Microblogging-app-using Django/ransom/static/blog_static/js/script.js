$(".tabs-stage div").hide();
$(".tabs-stage div:first").show();
$(".tabs-nav li:first").addClass("tab-active");

// Change tab class and display content
$(".tabs-nav a").on("click", function (event) {
  event.preventDefault();
  $(".tabs-nav li").removeClass("tab-active");
  $(this).parent().addClass("tab-active");
  $(".tabs-stage div").hide();
  $($(this).attr("href")).show();
});