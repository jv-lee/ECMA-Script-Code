class AudioPlayer{
	constructor(container){
		this.container = document.querySelector(container);

		this.songsList = {};
		this.dom = null;
		this.audio = new Audio(); // audio对象 播放音频
		this._status = 0;//标记播放器状态

		this.getSongs();
		this.createElement();
		this.bindEvents();
		this.render();
	}

	get status(){
		return this._status;
	}

	set status(val){
		const STATUS_MAP = {
			0:'播放', //当前伟暂停状态 - 设置text 显示播放
			1:'暂停', //当前为播放状态 - 设置text 显示暂停 
			2:'加载中'
		};
		document.querySelector('#app .btn').innerText = STATUS_MAP[val];
		this._status = val;
	}

	getSongs(){
		//ajax 
		this.songsList = [
			{
				cover:'',//封面
				url:'.mp3',//资源地址
				singer:{},//歌手的信息
				name:''//歌曲的名字
			}
		];
	}

	createElement(){
		//生成dom元素
		const div = document.createElement('div');
		div.innerHTML = `
			<div class="btn">播放</div>
			<div>进度条</div>
		`;

		this.dom = div;
	}

	bindEvents(){
		this.dom.querySelector('.btn').addEventListener('click',()=>{
			if(this.status == 0){
				this.status = 1;
				console.log('开始播放');
			}else if(this.status == 1){
				this.status = 0;
				console.log('暂停播放');
			}
			
		});
	}

	render(){
		this.container.appendChild(this.dom);
	}

}

new AudioPlayer('#app');