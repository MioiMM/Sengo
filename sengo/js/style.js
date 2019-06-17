$(function(){
	$(".vertical_group_list").mouseover(function(){//鼠标置顶显示隐藏层事件
		$('.hover_button',this).show();
		}).mouseout(function(){
			$('.hover_button',this).hide();
			})
			
    $(".poiuy").mouseover(function(){$('.hover_button5',this).show();})
	           .mouseout(function(){$('.hover_button5',this).hide();})

    $(".wf_t").mouseover(function(){//
		$('.wf_popup',this).show();
		}).mouseout(function(){
			$('.wf_popup',this).hide();
			})

    $(".gr_name").mouseover(function(){
		$('.wic_check_left').show();
		}).mouseout(function(){
		$('.wic_check_left').hide();})


	    
	$(".pick_popup_right ul li").mouseover(function(){//弹出层采摘按钮点击事件
		$('.pick_popup_right_input',this).show();
		}).mouseout(function(){
			$('.pick_popup_right_input',this).hide();
			})
	$(".hover_button .hover_button3").click(function(){//收藏按钮点击事件
		                                $(this).addClass("input_hover");})	


	$(".pick_tool").hide();
		$(".right_float_bt1").click(function(){
			jQuery(".pick_tool").show(); 
			$('.pick_tool').delay(3000).hide(0);
			})
			
	$(".help_bg").hide();
		$(".right_float_bt3").click(function(){
			jQuery(".help_bg").show(); 
			$('.help_bg').delay(3000).hide(0);
	        })
			
	$(".rfb_share").hide();
		$(".right_float_bt2").click(function(){
			jQuery(".rfb_share").show(); 
			$('.rfb_share').delay(300000).hide(0);
	        })
			
    $(".message_cue").hide();//消息提示点击事件
		$(".dub_03").click(function(){
		$('.message_cue').toggle();
			})	
			
		$(".sa_name").click(function(){
		$(this).next().toggle();
			})	

	$(document).bind("click",function(e){
		var target = $(e.target); 
		if(target.closest(".select_area").length == 0){ 
		$(".sa_content").hide();} 
    }) 	
	
		$(".sa_content dl dt").click(function(){
		$(this).next().toggle();
		$(".sa_content dl dt").removeClass("scdtcolor");
		$(this).addClass("scdtcolor");
			})	


    $("#message_cue_popup h2").click(function(){//消息提示弹出层点击显示隐藏
	$(this).next().toggle();
	$(this).toggleClass("mohover");});

    $(".geren_mysg2 a").click(function(){//3333333333333333333333333333333333333333333333333333333333藏
	$(this).toggleClass("gm2hover");});
											
											
	$(".ct_content ul li").click(function(){
    $('.fade_bg',this).toggle();
		})
		
		
	$(".all_relationship1 div").click(function(){
    $(this).next().toggle();
	$(this).toggleClass("al_titleup");});

	$(".tk_menu ul li a").click(function(){
	$(".tk_menu ul li a").removeClass("tkahover");
	$(this).addClass("tkahover");})	


	$(".tk_page ul li a").click(function(){
	$(".tk_page ul li a").removeClass("tkpahover");
	$(this).addClass("tkpahover");})	


	$(".order_evaluation_content_top ul li").click(function(){
	$(this).toggleClass("oecthover");});


	$(".rml_ul li").click(function(){
    $(".rml_ul li").removeClass("rellihover");
    $(this).addClass("rellihover");})	

	$(".rml_ul li a").click(function(){
    $(".rml_ul li a").removeClass("rmlahover");
    $(this).addClass("rmlahover");})	

	$(".Maijia_left_nav li span").click(function(){
    $(".Maijia_left_nav li span").removeClass("mlnhover");
    $(this).addClass("mlnhover");})	

	
	
	$(".header_bottom5_right ul li").click(function(){
	$(".header_bottom5_right ul li").removeClass("ahover01");
	$(this).addClass("ahover01");})	

	$(".header_bottom5_right ul li div").click(function(){
	$(".header_bottom5_right ul li div").removeClass("divhover");
	$(this).addClass("divhover");})	


	$(".my_order_tab li").click(function(){
	$(".my_order_tab li").removeClass("my_order_tablia");
	$(this).addClass("my_order_tablia");})	


	$(".order_product_tab li a").click(function(){
	$(".order_product_tab li a").removeClass("order_product_tablia");
	$(this).addClass("order_product_tablia");})	
										
	$(".order_server_tab li a").click(function(){
	$(".order_server_tab li a").removeClass("order_server_tablia");
	$(this).addClass("order_server_tablia");})	

	$(".my_shppingcar_cs ul li a").click(function(){
	$(".my_shppingcar_cs ul li a").removeClass("mschover");
	$(this).addClass("mschover");})	

	$(".VIP_header ul li a").hover(function(){
    $(".VIP_header ul li a").removeClass("vhlhover");
	$(this).addClass("vhlhover");})	
										
	$(".nav_01 ul li a").click(function(){
    $(".nav_01 ul li a").removeClass("nav_01ulliahover");
	$(this).addClass("nav_01ulliahover");})
	
	$(".ht_pro_bt ul li a").click(function(){
	$(".ht_pro_bt ul li a").removeClass("ht_pro_btulliahover");
	$(this).addClass("ht_pro_btulliahover");})

	
	$(".geren_bottom ul li a").click(function(){
    $(".geren_bottom ul li a").removeClass("geren_bottomhover");
	$(this).addClass("geren_bottomhover");})
	
	$(".detial_star_icon").click(function(){                           
	$(this).addClass("detial_starhover_icon");})
		
		$(".detial_share_bt").click(function(){
		$('.onekey_share').toggle();})		
											
	$(".smr_slide").click(function(){//消息提示弹出层点击显示隐藏
    $(this).toggleClass("slidehover");});

	$(".xinxitishi_erji_main_left ul li a").click(function(){
    $(".xinxitishi_erji_main_left ul li a").removeClass("a_hover");	
	$(this).addClass("a_hover");});
	 
	$(".num_list ul li a").click(function(){
	$(".num_list ul li a").removeClass("numahover");
	$(this).addClass("numahover");});	
											
	$(".order_num_list ul li a").click(function(){
	$(".order_num_list ul li a").removeClass("onumahover");
	$(this).addClass("onumahover");});	
											
											
	$(".detial_right1_middle_vg_list img").css("opacity","0.3");
    $(".detial_right1_middle_vg_list img").hover(function(){
	$(this).stop().animate({opacity:"1"},400);
	},function(){
	$(this).stop().animate({opacity:"0.3"},200);});
						
						
				
						
    $(".pd_left_arrow").hover(function(){
	$(this).addClass("pd_left_arrowh");
	},function(){
	$(this).removeClass("pd_left_arrowh");});

    $(".pd_right_arrow").hover(function(){
	$(this).addClass("pd_right_arrowh");
	},function(){
	$(this).removeClass("pd_right_arrowh");});
						
						

	$(".in_block_p").mouseover(function(){
    $('.in_block_word',this).show();
	}).mouseout(function(){
	$('.in_block_word',this).hide();})
    
	$(".in_block_p").mouseover(function(){
    $('.in_block_p_jianbian',this).show();
	}).mouseout(function(){
	$('.in_block_p_jianbian',this).hide();})
			
   

	$(".wallet_TIPS_main_left ul li").hover(function(){
	$(".wallet_TIPS_main_left ul li").removeClass("wt_hover");
	$(this).addClass("wt_hover");})		

	$(".wm_way ul li a").click(function(){
	$(".wm_way ul li a").removeClass("wmhover");
	$(this).addClass("wmhover");})		

	
	$(".pf_header_right ul li a").click(function(){
    $(".pf_header_right ul li a").removeClass("PFahover");
    $(this).addClass("PFahover");})
	
    $(".Table tr:odd").addClass("tr_bg_color");
    $(".bg").addClass("ji_bg");
    $(".bg").addClass("calendar_day_grey_bg");
    $(".bg").addClass("calendar_day_green_bg");

	
	
//Agent star
	$(".agent_header_in_right ul li a").click(function(){
		  $(".agent_header_in_right ul li a").removeClass("ahirhover");
		  $(this).addClass("ahirhover");})		

	$(".agent_leftbottom_list h4").click(function(){
		  $(this).next().toggle();
		  $(this).toggleClass("Agent_lefrmain_downarrow");
		  });

	$(".area_examine_tab ul li").click(function(){
		  $(".area_examine_tab ul li").removeClass("aethover");
		  $(this).addClass("aethover");})	

	$(".data_count_tab ul li").click(function(){
		  $(".data_count_tab ul li").removeClass("dctlihover");
		  $(this).addClass("dctlihover");})	

											
	$(".Amr_top_right2_ul li").hover(function(){
		 $(".Amr_top_right2_ul li").removeClass("Atr2hover");
		 $(this).addClass("Atr2hover");})		


	$(".aet_al_cs_popup").hide();
		$(".aet_al_cs span").click(function(){
		$('.aet_al_cs_popup').toggle();
			})	
				
	$(".aet_al_ck_popup").hide();
		$(".aet_al_ck span").click(function(){
		$('.aet_al_ck_popup').toggle();
			})		
	$(".pass_td_popup").hide();
		$(".pass_td span").click(function(){
		$(this).next().toggle();
			})		
//Agent end	

//商家注册 start
	$(".seller2_in_tab h2").click(function(){
		$(".seller2_in_tab h2").removeClass("sith2hover");
		$(this).addClass("sith2hover");})		
	$(".seller3_top ul li").click(function(){
		$(".seller3_top ul li").removeClass("st3hover");
		$(this).addClass("st3hover");})		
//商家注册 End


//VIP实名认 start
	$(".write_info_tab ul li").click(function(){
		$(this).removeClass("withover");
		$(this).addClass("withover");})		

	$(".invite_friends ul li").click(function(){//消息提示弹出层点击显示隐藏
											$(this).toggleClass("ifhover");
											
											});
											
	$(".vip_xiaofei_title_type_popup").hide();
		$(".vip_xiaofei_title_type span").click(function(){
		$(this).next().toggle();
			})	

	$(".vip_xiaofei_popup").hide();
		$(".mm").click(function(){
     	$(".mm").removeClass("mmhover");
		$(this).addClass("mmhover");
		$(this).next(".vip_xiaofei_popup").toggle();
			})	
			
	$(".vip_xiaofei_popup").hide();
		$(".con_main_ul").click(function(){
     	$(".con_main_ul").removeClass("mmhover");
		$(this).addClass("mmhover");
		$(this).next(".cm_in").toggle();
	})	
			

	$(".hide_tr").hide();
		$(".show_tr").click(function(){
 		$(this).next().toggle();
	})	

			
//VIP实名认 end

/*10-我是卖家*/
	$(".seller_list dl").hide();
		$(".seller_list a").click(function(){
		$(this).next().toggle();
     })		

	$(".seller_list_in_dd").hide();
		$(".seller_list_in").click(function(){
		$(this).next().toggle();
     })		

/*申请结算*/
	$(".shenqing_jiesuan_tab ul li").click(function(){
											$(this).toggleClass("sjthover");
											});
	
	$(".jiesuan_order_tab ul li").click(function(){
											$(this).toggleClass("jothover");
											});
											
	$(".jiesuan_order_tab2 ul li").click(function(){
											$(this).toggleClass("jothover2");
											});
											
	$(".jiesuan_order_tab3 ul li").click(function(){
											$(this).toggleClass("jothover3");
											});

	$(".jiesuan_order_tab4 ul li").click(function(){
											$(this).toggleClass("jothover4");
											});

	$(".jiesuan_order_tab5 ul li").click(function(){
											$(this).toggleClass("jothover5");
											});


											
											
/*我是商家*/
	$(".zhangmu_tab ul li").click(function(){
											$(this).toggleClass("zthover");
											});
											
											
/*更多美好*/
	$(".more_cf_downlist").hide();
		$(".more_meihao").click(function(){
		$('.more_cf_downlist').toggle();
	})
    
	$(document).bind("click",function(e){ 
		var target = $(e.target); //点击窗口以外的地方，more_cf_downlist隐藏
		if(target.closest(".more_meihao").length == 0){ 
		$(".more_cf_downlist").hide();} 
    }) 	
							
	$(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest(".dub_03").length == 0){ 
		$(".message_cue").hide();} 
    }) 	
							
	$(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest(".right_float_bt1").length == 0){ 
		$(".pick_tool").hide();} 
    }) 							
	
	$(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest(".right_float_bt2").length == 0){ 
		$(".rfb_share").hide();} 
    }) 							

	$(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest(".right_float_bt3").length == 0){ 
		$(".help_bg").hide();} 
    }) //onekey_share

	$(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest(".detial_share_bt").length == 0){ 
		$(".onekey_share").hide();} 
    }) 	
							
	$(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest(".seller_nav_list").length == 0){ 
		$(".seller_nav_list_dl").hide();} 
    }) 
		
	$(document).bind("click",function(e){ //56444444444444444444444444444444444444444444444
		var target = $(e.target); 
		if(target.closest(".aet_al_cs").length == 0){ 
		$(".aet_al_cs_popup").hide();} 
    }) 	
	
	$(document).bind("click",function(e){ //56444444444444444444444444444444444444444444444
		var target = $(e.target); 
		if(target.closest(".aet_al_ck").length == 0){ 
		$(".aet_al_ck_popup").hide();} 
    }) 	

	$(document).bind("click",function(e){ //56444444444444444444444444444444444444444444444
		var target = $(e.target); 
		if(target.closest(".pass_td").length == 0){ 
		$(".pass_td_popup").hide();} 
    }) 	


							
	$(".upload_head_bt2").click(function(){//设置头像成功后弹出的提示框
		$("#setting_success").show();
        setTimeout("$('#setting_success').fadeOut('slow')",2000);})

	$(".upload_head_bt2").click(function(){//设置头像失败后弹出的提示框
		$("#setting_defeat").show();
        setTimeout("$('#setting_defeat').fadeOut('slow')",2000);})
	 
	 
	 
	 	 
	$(".s_img_list img").click(function(){
		$(".s_img_list img").removeClass("simghover");
		$(this).addClass("simghover");})		

	$(".stage_bt i").click(function(){
		$(".stage_bt i").removeClass("stage_bthover");
		$(this).addClass("stage_bthover");})		

})

function ShowDiv(bg_div){
          
   };
	
//显示开弹出层
function ShowDiv(show_div,bg_div){
/*document.body.style.height="100%";document.body.style.overflow="hidden";*/
document.getElementById(show_div).style.display='block';
document.getElementById(bg_div).style.display='block' ;
var bgdiv = document.getElementById(bg_div);
bgdiv.style.width = document.body.scrollWidth;
// bgdiv.style.height = $(document).height();
$("#"+bg_div).height($(document).height());

};
//关闭弹出层
function CloseDiv(show_div,bg_div){
document.body.style.height="";document.body.style.overflow="";
document.getElementById(show_div).style.display='none';
document.getElementById(bg_div).style.display='none';
};
$(function(){
	$.divselect("#divselect","#inputselect");
	$.divselect("#divselect2","#inputselect2");
	$.divselect("#divselect3","#inputselect3");
	$.divselect("#divselect4","#inputselect4");
	$.divselect("#divselect5","#inputselect5");
	$.divselect("#divselect6","#inputselect6");
	$.divselect("#divselect7","#inputselect7");
	$.divselect("#divselect8","#inputselect8");
	$.divselect("#divselect9","#inputselect9");
	$.divselect("#divselect10","#inputselect10");
});
//首页分类Tab切换产品
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"r_tab_hover":"";
  con.style.display=i==cursel?"block":"none";
 }
};
jQuery.divselect = function(divselectid,inputselectid) {};
// 返回顶部
var scrolltotop={
	setting:{
		startline:100, //起始行
		scrollto:0, //滚动到指定位置
		scrollduration:400, //滚动过渡时间
		fadeduration:[500,100] //淡出淡现消失
	},
	controlHTML:'<img src="images/b_top_icon.png" width="32" height="33" />', //返回顶部按钮
	controlattrs:{offsetx:28,offsety:12},//返回按钮固定位置
	anchorkeyword:"#backToTop",
	state:{
		isvisible:false,
		shouldvisible:false
	},scrollup:function(){
		if(!this.cssfixedsupport){
			this.$control.css({opacity:0});
		}
		var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
		if(typeof dest=="string"&&jQuery("#"+dest).length==1){
			dest=jQuery("#"+dest).offset().top;
		}else{
			dest=0;
		}
		this.$body.animate({scrollTop:dest},this.setting.scrollduration);
	},keepfixed:function(){
		var $window=jQuery(window);
		var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;
		var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety;
		this.$control.css({left:controlx+"px",top:controly+"px"});
	},togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop();
		if(!this.cssfixedsupport){
			this.keepfixed();
		}
		this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false;
		if(this.state.shouldvisible&&!this.state.isvisible){
			this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);
			this.state.isvisible=true;
		}else{
			if(this.state.shouldvisible==false&&this.state.isvisible){
				this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);
				this.state.isvisible=false;
			}
		}
	},init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop;
			var iebrws=document.all;
			mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;
			mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$("html"):$("body")):$("html,body");
			mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+"</div>").css({position:mainobj.cssfixedsupport?"fixed":"absolute",bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"返回顶部"}).click(function(){mainobj.scrollup();return false;}).appendTo("body");if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!=""){mainobj.$control.css({width:mainobj.$control.width()});}mainobj.togglecontrol();
			$('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup();return false;});
			$(window).bind("scroll resize",function(e){mainobj.togglecontrol();});
		});
	}
};
scrolltotop.init();

//卖家导航栏下拉
var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

function jsddm_open()
{	jsddm_canceltimer();
	jsddm_close();
	ddmenuitem = $(this).find('dl').eq(0).css('visibility', 'visible');}

function jsddm_close()
{	if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function jsddm_timer()
{	closetimer = window.setTimeout(jsddm_close, timeout);}

function jsddm_canceltimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;}}

$(document).ready(function()
{	$('.header_bottom5_right ul li > div').bind('mouseover', jsddm_open);
	$('.header_bottom5_right ul li > div').bind('mouseout',  jsddm_timer);});

document.onclick = jsddm_close;

//森果会员导航条下拉
function initMenu(){
	var _speed = 400; // in ms
	var _hold = $('#navheader ul.nav');
	var _t = null;
	if(_hold.length){
		var _list = _hold.children();
		_list.each(function(){
			var _el = $(this);
			var _box = _el.children('div.nav-w');
			var _sub = _box.children();
			_box.show().width(_sub.outerWidth()).hide();
			_el.mouseenter(function(){
			var _this = this;
				_t = setTimeout(function(){
					$(_this).css('zIndex', 10);
					_el.addClass('hover');
					if(_box.is(':hidden')){
						_box.show();
						_sub.css('marginTop', -_sub.outerHeight());
					}
					_sub.stop().animate({marginTop: 0}, _speed);
				},300)
			}).mouseleave(function(){
				if(_t) clearTimeout(_t);
				var _this = $(this);
				$(this).css('zIndex', 5);
				if(_sub.length){
					_sub.stop().animate({marginTop: -_sub.outerHeight()}, _speed, function(){
						_box.hide();
						_el.removeClass('hover');
						_this.css('zIndex', 1);
					});
				}else{
					_el.removeClass('hover');
				}
			});
		});
	}
}

$(document).ready(function(){

	initMenu();

});


