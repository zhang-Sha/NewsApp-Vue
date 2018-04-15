define( function(require,exports,module) {
	//定义vue主组件模块

	var Home = require('./home/home');
	var Video = require('./video/video');
	var Alive = require('./alive/alive');
	var Mine = require('./mine/mine')
	var app = new Vue({
		el:'#app',
		data:{
			view:'view'
			/*tab_bar:[
				{title:'看法',icon:'tab_bar_home.png',icon_hover:'tab_bar_home_selected.png',url:'#/home'},
				{title:'视频',icon:'tab_bar_tv.png',icon_hover:'tab_bar_tv_selected.png',url:'#/videos'},
				{title:'直播',icon:'tab_bar_vr.png',icon_hover:'tab_bar_vr_selected.png',url:'#/alive'},
				{title:'我的',icon:'tab_bar_profile.png',icon_hover:'tab_bar_profile_selected.png',url:'#'}
			],*/
		},
		components:{
			'home':Home,
			'videos':Video,
			'alive':Alive,
			'mine':Mine
		},
		mounted:function() {
			$('body').css({'display':'block'})
		}
	})
	return app
})