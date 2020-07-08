console.log("Hello,World");

$(function(){
   $('.title').hide().fadeIn(1500);
});

$(function(){
   $('.title2').hide().fadeIn(2500);
});

$(function(){
  $('.title3').hide().fadeIn(5000);
});

$(function(){
  $('.icon').hide().fadeIn(2000);
});

$(function(){
  $('.button1').hide().fadeIn(1500);
});

$(function(){
  $('.button2').hide().fadeIn(2000);
});

$(function(){
  $('.button3').hide().fadeIn(2500);
});

$(function(){
  $('.button4').hide().fadeIn(3000);
});

/*-------------------*/
$(function(){

$('.image2').hover(function() {
  // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
  $('.hidebox1').addClass('activebox');
  console.log("aaaaaaa")
},
function() {
  // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
  $('.hidebox1').removeClass('activebox');
});


$('.image3').hover(function() {
  // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
  $('.hidebox2').addClass('activebox');
  console.log("aaaaaaa")
},
function() {
  // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
  $('.hidebox2').removeClass('activebox');
});


$('.image4').hover(function() {
  // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
  $('.hidebox3').addClass('activebox');
  console.log("aaaaaaa")
},
function() {
  // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
  $('.hidebox3').removeClass('activebox');
});


$('.image5').hover(function() {
  // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
  $('.hidebox4').addClass('activebox');
  console.log("aaaaaaa")
},
function() {
  // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
  $('.hidebox4').removeClass('activebox');
});


});

/*-------------------*/

$(function(){

$('.i_toptxt').hide().fadeIn('slow');
// --------------------------------
$('.i_nenkinimg').hover(function() {
    // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
    $('.i_hidebox').addClass('i_activebox');
    console.log("Hello world");
    },
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
    $('.i_hidebox').removeClass('i_activebox');
    });

$('.i_byeboy').hover(function(){
    $('.i_bye').css('background-color','rgb(245, 117, 117)');
    },
    function(){
    $('.i_bye').css('background-color','white');
    });

$('.hum_nav').on('click',function(){
  $('.sp_globalmenu').toggleClass('is_active');
  });
  // $('#btn').on('click', function() {
  //   $(this).toggleClass('is-active');


});
