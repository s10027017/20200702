// autoimg 為圖片的id
// 在 Array 改圖片的檔名
// 在 curimg 改圖片的路徑

$(function(){
	setInterval(function(){
		next();
	}, 1000);
});
var i=0;
var curimg;
var aryimg = new Array("t1.jpg","t2.jpg","t3.jpg","t4.jpg","t5.jpg","t6.jpg");

function next(){
	i--;
	if (i < 0) {
		i = 5;
	}
	curimg = "images/"+aryimg[i];
	$("#autoimg").attr("src",curimg);
};