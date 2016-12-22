function animations(firstLine, firstColor, secondLine, secondColor) {

  $("#first-img").mouseenter(function(){
    //$("#first-img").attr("src", "../../images/img-people/img-rockets/ColorCarrie.png");
    $("#first-img").attr("src", firstColor);
    $("#first-name p").css('opacity', '1.0');
  });

  $("#first-img").mouseleave(function(){
    //$("#first-img").attr("src", "../../images/img-people/img-rockets/LineCarrie.png");
    $("#first-img").attr("src", firstLine);
    $("#first-name p").css('opacity', '0');
  });

  $("#second-img").mouseenter(function(){
    //$("#second-img").attr("src", "../../images/img-people/img-rockets/ColorBen.png");
    $("#second-img").attr("src", secondColor);
    $("#second-name p").css('opacity', '1.0');
  });

  $("#second-img").mouseleave(function(){
    //$("#second-img").attr("src", "../../images/img-people/img-rockets/LineBen.png");
    $("#second-img").attr("src", secondLine);
    $("#second-name p ").css('opacity', '0');
  });

}
