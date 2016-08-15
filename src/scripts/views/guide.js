var guideTpl=require("../templates/guide.string");

SPA.defineView("guide",{
	html:guideTpl,
	plugins:["delegated"],
	bindEvents:{
		show:function(){
			var mySwiper=new Swiper('.swiper-container',{
				loop:false,
				autoplay:3000
			})
		}
	},
	bindActions:{
		"go_index":function(e){
			SPA.open("index");
		}
	}
})