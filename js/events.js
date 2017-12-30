//define functions here

function getIt() {
  $('p').on('click',function() {
    return alert('Hey!')
    console.log('clicked')
});
}

function frameIt() {
  $(document).on('load',function(){
    $('img').addClass("tasty")
  });
}

function submitIt() {
  $("form").on("submit", function() {
    return alert("Your form is going to be submitted now")
  });
}

$(document).ready(function(){
getIt()
frameIt()
submitIt()
})
