define(function(require,exports,module) {
	var app = require('components/app')
	var router = function() {
		var hash = location.hash;
		hash = hash.replace(/^#\/?/,'').split('/');
		if(hash[0] === 'videos'){
			app.view = 'videos';
			$('#footer li').eq(1).addClass('on').siblings('li').removeClass('on')
		}else if(hash[0] === 'alive'){
			app.view = 'alive';
			$('#footer li').eq(2).addClass('on').siblings('li').removeClass('on')
		}else if(hash[0] === 'mine'){
			app.view = 'mine';
			$('#footer li').eq(3).addClass('on').siblings('li').removeClass('on')
		}else{
			app.view = 'home';
			$('#footer li').eq(0).addClass('on').siblings('li').removeClass('on')
		}
		app.router = hash.slice(1)
	}
	router();
	//hash修改后重新判断
	window.addEventListener('hashchange',router)
	
	
})