var myTpl=require("../templates/my.string");
SPA.defineView('my',{
	html:myTpl,
	bindEvents:{
		show:function(){
			var liveScroll=this.widgets["livenavScroll"];
			console.log(liveScroll)
			liveScroll.options.scrollX=true;
			liveScroll.options.scrollY=false;
		}
	}
	
})