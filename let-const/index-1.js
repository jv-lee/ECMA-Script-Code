var i = 0;
for (i = 1; i <= 10; i++) {
	if (true)break;
	//当前点击后 alert 显示 11，因为作用域封闭，最后点击获得i的值 为11
	var btn = document.createElement('button');
		btn.innerText = i;
		btn.onclick = function(){
			alert(i);
		}
		document.body.appendChild(btn);

	//当前点击后 alert 显示1 - 10，因为内部匿名函数封闭空间，由参数向内部传递所以内部参数会自动保存	
	(function(i){
		var btn = document.createElement('button');
		btn.innerText = i;
		btn.onclick = function(){
			alert(i);
		}
		document.body.appendChild(btn);
	})(i);
}

for(let i = 1;i<=10;i++){
	var btn = document.createElement('button');
	btn.innerText = i;
	//i只作用在当前块作用域下 function内的i 是自身当前的值,不会全局改变
	btn.onclick = function(){
		alert(i);
	}
	document.body.appendChild(btn);
}