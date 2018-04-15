
	//创建一个工具库
	module.exports = {
		ajax:function(url,fn) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if(xhr.readyState === 4){
					if(xhr.status === 200){
						fn(JSON.parse(xhr.responseText))
					}
				}
			}
			xhr.open('GET',url,true);
			xhr.send();
		}
	}