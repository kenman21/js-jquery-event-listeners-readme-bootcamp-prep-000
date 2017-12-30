//define functions here

function getIt() {
  $('p').on('click',function() {
    return alert('Hey!')
    console.log('clicked')
});
}

function frameIt() {
  $(document)'load',function(){
    $('img').addClass("tasty")
  }
}

$(document).ready(function(){
getIt()

})
