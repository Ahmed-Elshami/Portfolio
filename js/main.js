
var typed = new Typed('#element', {
  strings: ['Ahmed', ' Elshamy'],
  typeSpeed: 300,
  backSpeed: 300,
  loop:true
});

new WOW().init();


// Top Icon smoth and
let advOffsetTop=$("#AboutMe").offset().top
$(window).scroll(function(){
  let currentScroll= $(window).scrollTop()
  if(currentScroll>advOffsetTop){
    $(".navbar").css({"background-color":"rgba(0,0,0,0.6)", "transition":"all 2s"})
    $("#topBtn").fadeIn(2000)
  }
  else
  {
    $(".navbar").css("background-color","transparent")
    $("#topBtn").fadeOut(2000)
  }
})

$("#topBtn").click(function(){
  $("body,html").animate({scrollTop: 0},1000)
})





// Loading screen
$(document).ready(function(){
  $("#loading").fadeOut(2000,function(){
    $("body").css("overflow","auto")
  })
})
// 

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
