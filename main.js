'use strict'

$(function() {
  //スクロールしたときに実行される
  $(window).scroll(function () {
     //目的のスクロール量は350px
     var purpose = 350;
     //現在のスクロール量を取得
     var current = $(window).scrollTop();
     //現在位置が目的のスクロール量以上かどうかを判断
     if( current >= purpose) {
        //以上であれば表示
        $("#pointing").fadeIn();
     }
     else {
        //以下であれば非表示
        $("#pointing").fadeOut();
     }
  });
});

{
   const open=document.getElementById('open');
   const overlay=document.querySelector('.overlay');
   const close=document.getElementById('close');
   
   // openをクリックしたらという処理
   open.addEventListener('click', ()=> {
      overlay.classList.add('show');
      open.classList.add('hide');
   });
   
   close.addEventListener('click', ()=> {
      overlay.classList.remove('show');
      open.classList.remove('hide');
   });
}
