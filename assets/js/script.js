$(document).ready(function () {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  $("#year-footer").html(currentYear);
  // JavaScript
  window.addEventListener("scroll", function () {
    var backToTop = document.querySelector(".back-to-top");
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
  var currentLocation = window.location.pathname; // Get the current page URL path
  var currentPage = currentLocation.substring(
    currentLocation.lastIndexOf("/") + 1
  );
  $(".main-header .navbar-nav li a").removeClass("active");
  $(".main-header .navbar-nav li a").each(function () {
    var link = $(this).attr("href");
    if (currentPage == link) {
      $(this).addClass("active");
    }
  });
  $(".search-region input,.search-region button").on("click", function () {
    $(".search-region .search-dropdown").addClass("active");
  });
  $(".search-region .search-dropdown li").on("click", function () {
    var value = $(this).html();
    var link = value.split(",")[0];
    link = link.toLowerCase();
    link = link.replace(" ", "-");
    link = "{{ route('front.buy-list') }}/" + link;
    $(".search-region .search-dropdown li").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    $(".search-region input").val(value);
    $(".search-region .search-dropdown").removeClass("active");
    window.open(link, "_blank");
  });
  $(".buy-section .accordion-button").on("click", function () {
    var image = $(this).attr("data-image");
    $(".buy-section .how-it-work-img").attr("src", image);
  });
});
$(".back-to-top").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
$(".option-list input[type='radio']").on("click", function () {
  var value = $(this).val();
  var name = $(this).attr("name");
  if ($(this).is(":checked") && value == "Other") {
    $(this)
      .parent("label")
      .parent("li")
      .find(".other-input")
      .removeClass("d-none");
  } else {
    $(`input[name='${name}']`).each(function () {
      if ($(this).val() == "Other") {
        $(this)
          .parent("label")
          .parent("li")
          .find(".other-input")
          .addClass("d-none");
      }
    });
  }
});
$(".checkbox-option-list input[type='checkbox']").on("click", function () {
  var value = $(this).val();
  var name = $(this).attr("name");
  if (value == "Leased or financed solar panels") {
    if ($(this).is(":checked")) {
      $(this)
        .parent("label")
        .parent("li")
        .find(".Leased-text")
        .removeClass("d-none");
    } else {
      $(this)
        .parent("label")
        .parent("li")
        .find(".Leased-text")
        .addClass("d-none");
    }
  }
});
$(".next-button").click(function () {
  console.log();
  var currentStep = $(this).closest(".wizard-item");
  if (currentStep.attr("data-wizard") < $(".wizard-item").length) {
    var nextStep = currentStep.next(".wizard-item");
    currentStep.removeClass("active");
    nextStep.addClass("active");
  }
});
$(".back-button").click(function () {
  var currentStep = $(this).parent(".wizard-item");
  var nextStep = currentStep.prev(".wizard-item");
  currentStep.removeClass("active");
  nextStep.addClass("active");
});
