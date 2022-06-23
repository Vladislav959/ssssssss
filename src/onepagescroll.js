window.onceWheel = function onceWheel(scrollDownHandler, scrolUpHandler) {
	let wheelPower = 0
	let wheelLock = false
	let wheelTimeStamp = 0
	let wheelLockTimer = null
	const deltaThreshold = 50
	const noiseThreshold = 20
	const wheelEvent =
	  'onwheel' in document
		? 'wheel'
		: 'onmousewheel' in document
		? 'mousewheel'
		: 'DOMMouseScroll'
  
	document.addEventListener(wheelEvent, event => {
	  const delta = event.wheelDelta !== undefined ? event.wheelDelta : event.deltaY * -1
	  const absDelta = Math.abs(delta)
  
	  if (absDelta < noiseThreshold) return
	  if (event.timeStamp - wheelTimeStamp < 300 && wheelLock) return
  
	  wheelTimeStamp = event.timeStamp
  
	  if (wheelPower < absDelta && !wheelLock) {
		if (delta < -deltaThreshold) scrollDownHandler()
		else if (delta > deltaThreshold) scrolUpHandler()
  
		lock(absDelta)
  
		clearTimeout(wheelLockTimer)
		wheelLockTimer = setTimeout(() => {
		  if (wheelPower !== absDelta) return
		  unlock()
		}, 1000)
	  } else if (absDelta < deltaThreshold && wheelLock) {
		unlock()
	  }
	})
  
	function lock(absDelta) {
	  wheelPower = absDelta
	  wheelLock = true
	}
  
	function unlock() {
	  wheelPower = deltaThreshold
	  wheelLock = false
	}
  }
/*
 * onepagescroll.js v1.0.0
 * Athuor : Mystika
 * Fork this script on github https://github.com/mystika/onepagescroll
 * http://mystika.me
*/
function css(obj,styles){
	for (var _style in styles)
		if(obj.style[_style] !== undefined)
			obj.style[_style] = styles[_style];
	
}
function changePage(compare,edge,increase){
	if(isPageChanging) return;

	if(currentPage==compare){
		if(setting.infinite)
			currentPage = edge;
		else
			return;
	}
	else{
		currentPage+=increase;
	}

	if(setting.animationTime) isPageChanging = true;

	if(setting.pagination){
		document.querySelector('a.active[data-targetindex]').classList.remove('active');
		document.querySelector('a[data-targetindex="' + currentPage +'"]').classList.add('active');
	}
	if(setting.direction == 'vertical'){
		css(document.querySelector(selector),{
			transform:'translate3d(0,' + -(currentPage-1)*100 + '%,0)'
		});
	}
	else if(setting.direction == 'horizontal'){
		css(document.querySelector(selector),{
			transform:'translate3d(' + -(currentPage-1)*100 + '%,0,0)'
		});	
	}
}
let pages,isPageChanging,currentPage,setting,selector;
onceWheel(()=>{
		changePage(pages.length,1,1);},()=>{
			changePage(1,pages.length,-1);})
function onScrollEventHandler(e){
	var delta = e.wheelDelta;
    var timeNow = performance.now();
	console.log(e)
	if (delta > 0 && ( scrollingDirection != 1 || timeNow > lastScroll + scrollIdleTime) ) {
       
		changePage(1,pages.length,-1);
        scrollingDirection = 1;
    } else if (delta < 0 && ( scrollingDirection != 2 || timeNow > lastScroll + scrollIdleTime)) {
      
		changePage(pages.length,1,1);
        scrollingDirection = 2;
    }
	
	
	}
function onepagescroll(selector1, options) {
	pages = [];
	selector = selector1
	currentPage = 1;
	isPageChanging = false;
	var keyUp = {38:1,33:1};
	var keyDown = {40:1,34:1};
	
	var def = {
		pageContainer: 'section',
		animationType: 'ease-in-out',
		animationTime: 500,
		infinite: true,
		pagination: true,
		keyboard: true,
		direction: 'vertical',
	};

	 setting = extend({},def,options);

	/* initialization */
	function init(){

		//window.addEventListener('wheel',onScrollEventHandler);

		css(document.querySelector(selector),{
			transition: 'transform ' + setting.animationTime + 'ms ' + setting.animationType
		});
		
		//allow keyboard input
		if(setting.keyboard){
			addEventListener('keydown', function(e){
				if(keyUp[e.keyCode])
					changePage(1,pages.length,-1);
				else if(keyDown[e.keyCode])
					changePage(pages.length,1,1);
			});
		}

		document.querySelector(selector).classList.add('ops-container');
		
		detectTransitionEnd() && document.querySelector(selector).addEventListener(detectTransitionEnd(), function(){
			isPageChanging = false;
		});

		var bullet_list_container = null;
		/* create navigation bullets */
		if(setting.pagination){
			bullet_list_container = document.createElement("ul");
			bullet_list_container.classList.add('ops-navigation');
		}
		
		var index=1;
		[].forEach.call(document.querySelectorAll(selector + ' > ' + setting.pageContainer), function(obj){
			if(setting.pagination){
				var bullet_list = document.createElement('li');
				var bullet = document.createElement('a');
				bullet.setAttribute('data-targetindex',index);
				bullet.href='#';
				bullet_list.appendChild(bullet);
				bullet_list_container.appendChild(bullet_list);	
			}

			obj.classList.add('ops-page');
			
			if(setting.direction == 'horizontal'){
				css(obj,{
					left:(index-1)*100 + '%',
					position:'absolute'
				});
			}

			pages.push(obj);
			obj.setAttribute('data-pageindex',index++);
		});

		if(setting.pagination){
			document.body.appendChild(bullet_list_container);
			document.querySelector('a[data-targetindex="' + currentPage +'"]').classList.add('active');
		}

		
	}

	/* wheel event handler */
	

	/* dected transitions completion for block duplicated scrolling */
	function detectTransitionEnd(){
	    var t;
	    var el = document.createElement('fakeelement');
	    var transitions = {
	      'transition':'transitionend',
	      'OTransition':'oTransitionEnd',
	      'MozTransition':'transitionend',
	      'WebkitTransition':'webkitTransitionEnd'
	    }

	    for(t in transitions)
	        if( el.style[t] !== undefined )
	            return transitions[t];
	    return true;
	}


	/* css setter */
	

	/* extend function for user customization */
	function extend(){
	    for(var i=1; i<arguments.length; i++)
	        for(var key in arguments[i])
	            if(arguments[i].hasOwnProperty(key))
	                arguments[0][key] = arguments[i][key];
	    return arguments[0];
	}

	//function for page transition
	

	/* swipe */
	var fpos = 0;
	var lpos = 0;
	var _n = 90;

	//bind touch
	document.addEventListener('touchstart', function(e) {
		e.preventDefault();
		if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
		var touch = e.touches[0] || e.changedTouches[0];
			if(setting.direction == 'vertical')
				fpos = touch.pageY;
			else if(setting.direction == 'horizontal')
				fpos = touch.pageX;
		}
	});

	document.addEventListener('touchend', function(e) {
		e.preventDefault();

		if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
			var touch = e.touches[0] || e.changedTouches[0];
			if(setting.direction == 'vertical')
				lpos = touch.pageY;
			else if(setting.direction == 'horizontal')
				lpos = touch.pageX;
		}
		if(fpos + _n < lpos)
			changePage(1,pages.length,-1);
		else if(fpos > lpos + _n)
			changePage(pages.length,1,1);
	});


	/* check documents ready statement and do init() */
	if(document.readyState === 'complete')
		init();
	else
		window.addEventListener('onload', init(), false);
	
}