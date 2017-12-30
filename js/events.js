//define functions here

function getIt() {
  $('p').on('click',function() {
    return alert('Hey!')
    console.log('clicked')
});
}

$(document).ready(function(){
getIt()

})
