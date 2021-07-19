$( document ).ready(function() {
  $(".list").click(function(){
    if ($('.show-list').css('display') == 'none'){
      $(".show-list").css("display", "block")
    }
    else {
      $(".show-list").css("display", "none")
    }
  });

  $(".cart").click(function(){
    if ($('.show-cart').css('display') == 'none'){
      $(".show-cart").css("display", "block")
    }
    else {
      $(".show-cart").css("display", "none")
    }
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}
