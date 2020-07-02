$(function(){
	$("#back").bind('click',back);
	$("#next").bind('click',next);
});
var index=0;
var curimg,curname,cururl;
var aryimg=new Array("t4.jpg","t5.jpg","t6.jpg");
var aryname=new Array("test1","test2","test3");
var aryurl=new Array("https://www.google.com.tw/","https://tw.yahoo.com/","https://github.com/");
function back()
{
	index--;
	if(index<0){index=2;}
	curimg="images/" + aryimg[index];
	curname=aryname[index];
	cururl=aryurl[index];
	$("#img1").attr("src",curimg);
	$("#href1").attr("href",cururl);
	$("#namebox").text(curname);
}
function next()
{
	index++;
	if(index>2){index=0;}
	curimg="images/" + aryimg[index];
	curname=aryname[index];
	cururl=aryurl[index];
	$("#img1").attr("src",curimg);
	$("#href1").attr("href",cururl);
	$("#namebox").text(curname);
}