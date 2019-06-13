'use strict'

<script type="JavaScript">
const notifi = document.getElementById('notification')

$(function(){
	//cokkieのaccessの値で判定
	if($.cookie("access")){//accessの値がある場合
	}else{//accessの値が無い場合
  notifi.addEventListener('mouseenter',() => {
    notifiChar.classList.add('hidden');
  });

	}
	$(window).load(function(){
		//accessというキーで適当な値をcookieに保存。3日間有効
		$.cookie("access","foo", { expires: 3 });
	})
});
</script>
