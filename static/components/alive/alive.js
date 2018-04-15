define(function(require,exports,module) {
	//vue中各个组件是相互独立的
	var Util = require('util/util');
	var alive = Vue.extend({
		template:"#alive_tpl",
		data:function() {
			return{
				focus:[],
				now:[],
				now_title:'',
				now_subtitle:'',
				back:[],
				back_title:''
			}
		},
		created: function() {
			var me = this;
			Util.ajax('data/alive.json', function(res) {
				me.focus = res.focus;
				me.now = res.special[0].data;
				me.now_title = res.special[0].title;
				me.now_subtitle = res.special[0].subtitle;
				me.back = res.special[1].data;
				me.back_title = res.special[1].title;
				
			})
		},
		mounted: function() {
			setTimeout(function() {
				TouchSlide({slideCell:'#carousel2',autoPlay:true,effect:'leftLoop'})
			},200)
			
		}
	})
	return alive
})