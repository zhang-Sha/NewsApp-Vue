	var $ = require('../../lib/jquery-1.12.2.js')
	var Vue = require('../../lib/vue.js')
	var Util = require('../../util/util');
	module.exports = Vue.extend({
		template:"#video_tpl",
		data: function() {
			return{
				classical:[],
				data:[],
				startX:0,
				nowX:0,
				offsetLeft:0,
				endX:0,
				ulWidth:0
			}
		},
		created: function() {
			var me = this;
			Util.ajax('/data/video.json', function(res) {
				me.classical = res.video_album;
				me.data = res.data;
				var width = me.classical.length*228-8;
				me.ulWidth = width;
				$('#video  .classical .nav ul').css({'width':width+'px'})
			})
		},
		methods: {
			touchstart: function(e) {
				this.startX = e.touches[0].clientX;
			},
			touchmove: function(e) {
				this.nowX = e.touches[0].clientX;
				var result = this.nowX - this.startX;
				$('.nav ul').css({'left': this.offsetLeft + result+'px'});
				if(this.offsetLeft + result >= 0){
					$('.nav ul').css({'left':0});

				}else if(this.offsetLeft + result <= ($(window).width()-20)-this.ulWidth) {
					$('.nav ul').css({'left':$(window).width()-20-this.ulWidth + 'px'});
				}
			},
			touchend: function(e) {
				this.endX = e.changedTouches[0].clientX;
				var result = this.endX - this.startX;
				this.offsetLeft += result;

			},
			play: function(e) {
				var lis = $('.list video');
				if(e.target.paused){
					for(var i=0;i<lis.length;i++){
						lis[i].pause();
					}
					e.target.play()
				}else{
					e.target.pause();
				}

			}
		}
	})