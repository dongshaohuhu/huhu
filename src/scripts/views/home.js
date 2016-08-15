var homeTpl=require("../templates/home.string");
var util=require("../util/util");

SPA.defineView("home",{
	html:homeTpl,
	init:{
		mySwiper:null
	},
	bindEvents:{
		show:function(){
			$.ajax({
				url:"/josn/livelist.json",
				async:false,
				success:function(e){
					//console.log(e.data)
					var obj=e.data;
					var str="";
					for(var i in obj){
						if(i%2==0 && i==obj.length-1){
							str+="<ul><li><img src='"+obj[i].img+"'/><b>"+obj[i].title+"</b></li><li></li><li></li></ul>";
						}else if(i%2==0){
							str+="<ul><li><img src='"+obj[i].img+"'/><b>"+obj[i].title+"</b></li><li></li>";
						}else{
							str+="<li><img src='"+obj[i].img+"'/><b>"+obj[i].title+"</b></li></ul>";
						}
					}
					$('.sect1').html(str);				
				}
			})
			 this.mySwiper=new Swiper('#swiper-slide',{
				loop:false,
				//autoplay:3000,
				 onSlideChangeStart:function(swiper){
                    var index = swiper.activeIndex;
                    var $tags = $(".m-home nav li");
                    util.setFocus($tags.eq(index));
                }
				
			})

		}

	}
})