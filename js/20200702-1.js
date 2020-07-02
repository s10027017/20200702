// aryimg 要替換成自己的圖片 setInterval(image,2000); 2000(毫秒)可以自己設定秒數
// $("#img01") 圖片要有個ID 要一致才可以
var flag=0;
var curimg;
var aryimg=new Array("t4.jpg","t5.jpg","t6.jpg");
$(function(){
	setInterval(image,2000);
});
function image()
{
	flag--;
	if(flag<0)
	{
		flag=2;
	}
	curimg="images/" + aryimg[flag];
	$("#img01").attr("src",curimg);
}