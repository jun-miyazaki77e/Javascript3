$(function () {
  filtering = function(){
    let inputText = $("#oninput").val(),
        keyword;
    $(".keyword").each(function() {
      keyword = $(this).text();

      if (keyword.indexOf(inputText) != -1) {
        $(this).parent().removeClass("add_hidden");
      } else {
        $(this).parent().addClass("add_hidden");
      }
    });
  };
  
  $("#oninput").on("input", filtering);
});