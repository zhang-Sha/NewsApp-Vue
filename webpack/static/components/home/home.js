	var TouchSlide = require('../../lib/TouchSlide.1.1.js')
	var Vue = require('../../lib/vue.js')
	var Util = require('../../util/util');
	module.exports = Vue.extend({
		template:"#home_tpl",
		data:function() {
			return{
				focus:[],
				data:[]
			}
		},
		//组件创建完成后执行的方法，一般用于请求数据
		created:function() {
			console.log('created')
			var me = this;
			Util.ajax('data/index.json', function(res) {
				me.focus = res.focus;
				me.data = res.data;
				console.log('data')
			})
		},
		method:{
			
		},
		//视图渲染完后执行的方法
		mounted:function() {
			console.log('mounted')
			/*setTimeout(function() {
				TouchSlide({ slideCell:"#carousel", autoPlay:true, effect:'leftLoop'});
			},200)*/
			//疑问：为什么mounted之后视图还没有渲染出来？
			
		}
	})
	//所以放到window.onload中就可以解决啦~~
	window.onload = function(){
		console.log(111)
		TouchSlide({ slideCell:"#carousel", autoPlay:true, effect:'leftLoop'});
	}