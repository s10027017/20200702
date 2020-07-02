<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css">
	<script src="jquery-2.1.0.min.js"></script>
	<script src="jquery.mobile-1.4.5.min.js"></script>
	<style>
		.box{
			background-color: blue
		}
	</style>
	<title>Document</title>
</head>
<body>
	<div data-role="page" id="home">
		<div data-role="header" data-theme="b">
			<h1>音樂播放器</h1>
		</div>
		<div role="main" class="ui-content" >
			<div data-role="controlgroup">
				<a href="#" class="ui-btn">于文文</a>
				<img src="s1.jpg" alt="" style="display:block; margin:auto;">
				<br>
				<a href="#" class="ui-btn">Kelly</a>
				<a href="#" class="ui-btn">體面</a>
			</div>
			
			<div data-role="controlgroup" data-type="horizontal" align="center">
				<a href="#" class="ui-btn">播放</a>
				<a href="#" class="ui-btn">退後</a>
				<a href="#" class="ui-btn">暫停</a>
			</div>
				<embed src="m1.mp3" type="" style="display:block; margin:auto;">
				<a href="#" class="ui-btn">歌詞</a>
				<p>別堆砌懷念讓劇情 變得狗血 深愛了多年又何必 毀了經典 都已成年不拖不欠 浪費時間是我情願 像謝幕的演員 眼看著燈光熄滅 來不及 再轟轟烈烈 就保留 告別的尊嚴 我愛你不後悔 也尊重故事結尾 分手應該體面 誰都不要說抱歉 何來虧欠 我敢給就敢心碎 鏡頭前面是從前的我們 在喝彩 流著淚聲嘶力竭 離開也很體面 才沒辜負這些年 愛得熱烈 認真付出的畫面 別讓執念 毀掉了昨天 我愛過你 俐落乾脆 最熟悉的街主角卻 換了人演 我哭到哽咽心再痛 就當破繭 來不及 再轟轟烈烈 就保留 告別的尊嚴 我愛你不後悔 也尊重故事結尾 分手應該體面 誰都不要說抱歉 何來虧欠 我敢給就敢心碎 鏡頭前面是從前的我們 在喝彩 流著淚聲嘶力竭 離開也很體面 才沒辜負這些年 愛得熱烈 認真付出的畫面 別讓執念 毀掉了昨天 我愛過你 俐落乾脆 再見 不負遇見</p>
				<!-- ul改ol會加項目編號 data-insert="true"具有內縮和圓角ListView2 data-filter="true"搜尋功能 data-filter-placeholder="which one u like" 可以改搜尋的文字-->
				<div data-role="content">
					<ol data-role="listview" data-insert="true" data-filter="true" data-filter-placeholder="which one u like">
						<li data-icon="home">A-Lin<span class="ui-li-count">87</span></li>
						<li>艾怡良 <span class="ui-li-aside">97</span></li>
						<li>張惠妹 <span class="ui-li-count">78</span></li>
						<li>陳綺貞 <span class="ui-li-aside">86</span></li>
						<li>戴愛玲 <span class="ui-li-count">77</span></li>
						<li>李千娜 <span class="ui-li-aside">88</span></li>
						<li><a href="javascript:alert('hello, this is java!!')">Java</a> </li>
						 <li><a href="#"><img src="images/11.jpg" class="ui-li-icon" />Home</a><a href="#"data-icon="home"> About</a></li>  
						 <li><a href="#"><img src="images/12.jpg" class="ui-li-icon" />Search</a><a href="#" data-icon="shop">About</a></li> 
					</ol>
					<br><br>
					<ul data-role="listview" data-insert="true" data-filter="true" data-filter-placeholder="Choice">
						<a href="#p06" data-role="button" data-theme="b" data-transition="slide">Lorem ipsum dolor sit amet.</a>
						<li>
							<a href="#"><img src="http://fakeimg.pl/300x350/00CED1/FFF/?text=img01">
								<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptatibus.</h3>
								<p>Lorem ipsum dolor sit amet.</p>
								<span class="ui-li-aside">97</span>
							</a>
								<a href="#"data-icon="recycle">1</a>
						</li>

						<li>
							<a href="#"><img src="http://fakeimg.pl/300x350/00CED1/FFF/?text=img02">
								<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, perspiciatis!</h3>
								<p>Lorem ipsum dolor sit amet.</p>
								<span class="ui-li-count">75</span>
							</a>
								<a href="#"data-icon="refresh">2</a>
								
						</li>

						<li>
							<a href="#"><img src="http://fakeimg.pl/300x350/00CED1/FFF/?text=img03">
								<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, ut.</h3>
								<p>Lorem ipsum dolor sit amet.</p>
								<span class="ui-li-count">76</span>
							</a>
								<a href="#"data-icon="star">3</a>
						</li>

						<li>
							<a href="#"><img src="http://fakeimg.pl/300x350/00CED1/FFF/?text=img04">
								<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, atque.</h3>
								<p>Lorem ipsum dolor sit amet.</p>
								<span class="ui-li-aside">97</span>
							</a>
								<a href="#"data-icon="video">4</a>
						</li>
					</ul>
				</div>

			<!-- <a href="#" class="ui-btn ui-btn-inline">Button 1</a>
			<a href="#" class="ui-btn ui-btn-inline">Button 2</a>
			<a href="#" class="ui-btn ui-btn-inline">Button 3</a>
			<br>
		<div class="ui-grid-c" >
			<div class="ui-block-a box" >
				<a href="" class="ui-btn" style="background-color:yellow">1</a>
			</div>
			<div class="ui-block-b box ">
				<a href="" class="ui-btn" style="background-color:yellow" >2</a>
			</div>
			<div class="ui-block-c box ">
				<a href="" class="ui-btn" style="background-color:yellow">3</a>
			</div>
			<div class="ui-block-d box " >
				<a href="" class="ui-btn" style="background-color:yellow">4</a>
			</div>
		<!-- 1 -->
			<!-- <div class="ui-block-a box">
				<a href="" class="ui-btn">12</a>
			</div>
			<div class="ui-block-b box">
				
			</div>
			<div class="ui-block-c box">
				
			</div>
			<div class="ui-block-d box">
				<a href="" class="ui-btn">5</a>
			</div>
		<!-- 2 -->
			<!-- <div class="ui-block-a box">
				<a href="" class="ui-btn">11</a>
			</div>
			<div class="ui-block-b box">
				
			</div>
			<div class="ui-block-c box">
				
			</div>
			<div class="ui-block-d box">
				<a href="" class="ui-btn">6</a>
			</div> -->
		<!-- 3 -->
			<!-- <div class="ui-block-a box">
				<a href="" class="ui-btn">10</a>
			</div>
			<div class="ui-block-b box">
				<a href="" class="ui-btn">9</a>
			</div>
			<div class="ui-block-c box">
				<a href="" class="ui-btn">8</a>
			</div>
			<div class="ui-block-d box">
				<a href="" class="ui-btn">7</a>
			</div> --> 
		</div>
		<!-- 4 -->
		<div data-role="footer" data-position="fixed" data-theme="b">
			<h1>最佳女歌手</h1>
		</div>

		</div>
<!-- class="ui-grid-c" 一行四個 a2b3c4 下面ui-block-a是第一個-->
		
	</div>
</body>
</html>
