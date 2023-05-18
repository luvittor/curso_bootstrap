// valores das progressbars
let circleACounter = 61;
let circleBCounter = 255;
let circleCCounter = 33;
let circleDCounter = 5321;

$(document).ready(function () {
  //////////////////////////////////
  // Progress bar
  //////////////////////////////////
  let containerA = document.getElementById("circleA");

  let circleA = new ProgressBar.Circle(containerA, {
    color: "#65DAF9",
    strokeWidth: 8,
    duration: 1400,
    from: { color: "#aaa" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * circleACounter);
      circle.setText(value);
    },
  });

  let containerB = document.getElementById("circleB");

  let circleB = new ProgressBar.Circle(containerB, {
    color: "#65DAF9",
    strokeWidth: 8,
    duration: 1600,
    from: { color: "#aaa" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * circleBCounter);
      circle.setText(value);
    },
  });

  let containerC = document.getElementById("circleC");

  let circleC = new ProgressBar.Circle(containerC, {
    color: "#65DAF9",
    strokeWidth: 8,
    duration: 1800,
    from: { color: "#aaa" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * circleCCounter);
      circle.setText(value);
    },
  });

  let containerD = document.getElementById("circleD");

  let circleD = new ProgressBar.Circle(containerD, {
    color: "#65DAF9",
    strokeWidth: 8,
    duration: 2000,
    from: { color: "#aaa" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * circleDCounter);
      circle.setText(value);
    },
  });

  // iniciando o loader quando o usuário chega no elemento
  let dataAreaOffset = $("#data-area").offset();
  // stop serve para a animação não carregar mais que uma vez
  let stop = 0;

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();

    if (scroll > dataAreaOffset.top - 500 && stop == 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

      stop = 1;
    }
  });

  //////////////////////////////////
  // Parallax
  //////////////////////////////////

  // setTimeout serve para a animação não carregar mais que uma vez
  setTimeout(function () {
    $("#data-area").parallax({ imageSrc: "img/cidadeparallax.png" });
    $("#apply-area").parallax({ imageSrc: "img/pattern.png" });
  }, 250);


  //////////////////////////////////
  // Filtro do portfólio
  //////////////////////////////////
  $(".filter-btn").on("click", function () {
    $(".main-btn").removeClass("active");
    $(this).addClass("active");

    let type = $(this).attr("id");

    switch (type) {
      case "dsg-btn":
        showBoxes("dsg");
        break;
      case "dev-btn":
        showBoxes("dev");
        break;
      case "seo-btn":
        showBoxes("seo");
        break;
      default:
        showBoxes("all");
        break;
    }
  });

  function showBoxes(type) {
    let boxes = $(".project-box");

    if (type == "all") {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function () {
        if (!$(this).hasClass(type)) {
          $(this).fadeOut("slow");
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

});
