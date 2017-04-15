function phoneFormat(input){
        input = input.replace(/\D/g,'');
        input = input.substring(0,10);
        var phoneNumber = document.getElementById('phoneNumber');
        
        if(input.charAt(0) == 0 || input == 0){
                phoneNumber.style.color = "red";
        } else {
                phoneNumber.style.color = "black";
        }

        var size = input.length;
        if (size == 0) {
                input = input
        } else if(size < 4){
                input = '('+input;
        } else if(size < 7){
                input = '('+input.substring(0,3)+') '+input.substring(3,6);
        } else{
                input = '('+input.substring(0,3)+') '+input.substring(3,6)+' - '+input.substring(6,10);
        }
        return input;
   }
   document.getElementById('phoneNumber').addEventListener('keyup',function(evt){
        //var phoneNumber = document.getElementById('phoneNumber');
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        phoneNumber.value = phoneFormat(phoneNumber.value);

   });
// const sideNavBar = document.querySelector(".side-navbar");
// const rightArrow = document.getElementById('right-arrow');
// const leftArrow = document.getElementById('left-arrow');
// //const sideLogo = document.querySelector(".side-logo");
// //const sideNavBar = document.querySelector(".side-navbar");
// // function openNav() {
// //   sideNavBar.style.width = '135px';
// //   rightArrow.style.display = 'block';
// //   leftArrow.style.display = 'none';
// // }
// //
// // function closeNav() {
// //   sideNavBar.style.width = '400px';
// //   rightArrow.style.display = 'none';
// //   leftArrow.style.display = 'block';
// // }
// document.addEventListener('click', leftArrow, function() {
//   sideNavBar.style.width = '135px';
//   rightArrow.style.display = 'block';
//   leftArrow.style.display = 'none';
// });
// document.addEventListener('click', rightArrow, function() {
//   sideNavBar.style.width = '400px';
//   rightArrow.style.display = 'none';
//   leftArrow.style.display = 'block';
// });
//  //var open = document.addEventListener('click', openNav);
// //console.log(closeNav)
// $(document).ready({
//   $('#right-arrow').on('click', function() {
//     $('#right-arrow').hide();
//     $('#left-arrow-arrow').show();
//     $('.side-navbar').css('width', '400px')
//   })
//})

// function phoneNumber(input) {
//    input = input.replace(/\D/g,'');
//    input = input.substring(0,10);
//    var input = input.length;
//    if (input == 0) {
//
//    }
// }
//
