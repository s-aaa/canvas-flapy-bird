window.onload=function(){
	var bird={
		x:80,
		y:264,
		w:40,
		h:40,
	}
	var guanzi=[{
		top:{x:300,y:0,w:80,h:300},
		bottom:{x:300,y:420,w:80,h:300}
	},{
		top:{x:510,y:0,w:80,h:200},
		bottom:{x:510,y:420,w:80,h:300}
		}]


	var recvsrec =  function(rect0,rect1){
	    if (rect0.x >= rect1.x && rect0.x >= rect1.x + rect1.w) {
	      return false;
	    } else if (rect0.x <= rect1.x && rect0.x + rect0.w <= rect1.x) {
	      return false;
	    } else if (rect0.y >= rect1.y && rect0.y >= rect1.y + rect1.h) {
	      return false;
	    } else if (rect0.y <= rect1.y && rect0.y + rect0.h <= rect1.y) {
	      return false;
	    }
	    return true;
	  };
	var ctx=document.querySelector('#canvas').getContext('2d');
	var r;
	
	var a=1;
	var draw=function(){
		ctx.clearRect(0,0,320,568);
		a+=0.02;
		bird.y+=a;
		var birdimg=document.querySelector('#birdimg');
		ctx.drawImage(birdimg,0,0,116,84,bird.x,bird.y,43,41);
		var vs;
		for (var i = 0; i < guanzi.length; i++) {
			var d=guanzi[i];
			d.top.x-=3;
			d.bottom.x-=3;
			var lingrad=ctx.createLinearGradient(0,0,80,300);
			lingrad.addColorStop(0.9,'#73E28C');
			lingrad.addColorStop(1,'#99F7AC');
			ctx.fillStyle=lingrad;
			ctx.fillRect(d.top.x,d.top.y,d.top.w,d.top.h);
			ctx.fillRect(d.bottom.x,d.bottom.y,d.bottom.w,d.bottom.h);
			if(recvsrec(bird,d.top)||recvsrec(bird,d.bottom)){
				vs=true;
			}
			if(d.top.x<=-d.top.w){
				d.top.x=320;
				d.bottom.x=320;
				d.top.h=Math.random()*100+300;
				d.bottom.y=d.top.h+120;
				d.bottom.h=568+d.top.h-120;

			}
		}
		if (bird.y>=528) {
			ctx.fillRect(140,528,bird.w,bird.h);
		}else if(bird.y<=0){
			ctx.fillRect(140,0,bird.w,bird.h);
		}else if(vs==true){
			return;
		}else{
			r=requestAnimationFrame(draw);
		}
		
		
		/*for(var i in guanzi){
			var data=guanzi[i];
			for (var j = 0; j < data.length; j++) {
				data[j].x-=2;
				ctx.fillRect(d.x,d.y,d.w,d.h);
				ctx.fillRect(d.x,d.y,d.w,d.h)
				if (data[j].x<=-data[j].w) {
					data[j].x=320;
					if(i=='top'){
						var h=Math.random()*80+250;
						data[j].h=h;
					}else if(i=='bottom'){
						data[j].h+80;
					}
				}
			}
		}*/
	}
	
	var b=40;
	canvas.onclick=function(){
		b*=1.03;
		bird.y-=b;
	}



	var button=document.getElementsByTagName('button')[0];
	button.onclick=function(){

		r=requestAnimationFrame(draw);
		

	}
}