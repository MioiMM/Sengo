// JavaScript Document
$(function() { 
	$(".gray_bt a").click(function(){//设置森果密码弹出层
	 document.onkeydown = function (e) {
            e = e || event;
			for(var jp=48;jp<=57;jp++){
			  if (e.keyCode ==jp) {  //0键盘
				  $("#buttonValidate"+(jp-48)).click();
				  return false;
			  }
			}
			for(var jp2=96;jp2<=105;jp2++){
			  if (e.keyCode ==jp2) {  //0键盘
				  $("#buttonValidate"+(jp2-96)).click();
				  return false;
			  }
			}
			if (e.keyCode ==8) {  //0键盘
				  $("#mimazhi").val('');
		          $("#textareaValidate").val('');
				  return false;
			  }
   }
		layer.open({
			  type:1,
			  title: false,
			  closeBtn: false,
			  area: ['340px', '515px'],
			  skin: 'layui-layer-nobg', //没有背景色
			  shadeClose: true,
			  content: $('#setting_password')
		  });});

	$(".wallet_righttop3").click(function(){//设置森果密码弹出层
	 document.onkeydown = function (e) {
            e = e || event;
			for(var jp=48;jp<=57;jp++){
			  if (e.keyCode ==jp) {  //0键盘
				  $("#buttonValidate"+(jp-48)).click();
				  return false;
			  }
			}
			for(var jp2=96;jp2<=105;jp2++){
			  if (e.keyCode ==jp2) {  //0键盘
				  $("#buttonValidate"+(jp2-96)).click();
				  return false;
			  }
			}
			if (e.keyCode ==8) {  //0键盘
				  $("#mimazhi").val('');
		          $("#textareaValidate").val('');
				  return false;
			  }
   }
		layer.open({
			  type:1,
			  title: false,
			  closeBtn: false,
			  area: ['340px', '515px'],
			  skin: 'layui-layer-nobg', //没有背景色
			  shadeClose: true,
			  content: $('#setting_password')
		  });});

     $(".wt_tixian").click(function(){//提现弹出层
		layer.open({
			  type:1,
			  title: false,
			  closeBtn: false,
			  area: ['605px', '605px'],
			  skin: 'layui-layer-nobg', //没有背景色
			  shadeClose: true,
			  content: $('#tixian')
		  });}); 

     $(".wt_chongzhi").click(function(){//充值弹出层
		layer.open({
			  type:1,
			  title: false,
			  closeBtn: false,
			  area: ['605px', '605px'],
			  skin: 'layui-layer-nobg', //没有背景色
			  shadeClose: true,
			  content: $('#chongzhi')
		  });}); 

		  
     $(".VIP_consume_right input").click(function(){//提现弹出层23
		layer.open({
			  type:1,
			  title: false,
			  closeBtn: false,
			  area: ['605px', '605px'],
			  skin: 'layui-layer-nobg', //没有背景色
			  shadeClose: true,
			  content: $('#tixian')
		  });}); 
		   
		  
     $(".order_evaluation1").click(function(){//
		layer.open({
			  type: 1,
	          title:false,
			  closeBtn: false,
			  area: ['734px', '434px'],
			  skin: 'layui-layer-nobg', //没有背景色			  
              shadeClose: true, //开启遮罩关闭
              content: $('#order_evaluation')
		  });});  
		  
     $(".appraise").click(function(){//oe_submit
		layer.open({
			  type: 1,
	          title:false,
			  closeBtn: false,
			  area: ['734px', '434px'],
			  skin: 'layui-layer-nobg', //没有背景色			  
              shadeClose: true, //开启遮罩关闭
              content: $('#order_evaluation')
		  });});  
    
     $(".os_deal_operation_p4").click(function(){
		layer.open({
			  type: 1,
	          title:false,
			  closeBtn: false,
			  area: ['734px', '434px'],
			  skin: 'layui-layer-nobg', //没有背景色			  
              shadeClose: true, //开启遮罩关闭
              content: $('#order_complaints_suggestion')
		  });});  
		  
     $(".complaint_submit").click(function(){
		layer.open({
			  type: 1,
	          title:false,
			  closeBtn: false,
			  area: ['400px', '243px'],
			  skin: 'layui-layer-nobg', //没有背景色			  
              shadeClose: true, //开启遮罩关闭
              content: $('#bomplaints_acceptance')
		  });});  


     $(".settlement_main_bottom input").click(function(){
		layer.open({
			  type: 1,
	          title:false,
			  closeBtn: false,
			  area: ['510px', '300px'],
/*			  skin: 'layui-layer-nobg', //没有背景色			  
*/              shadeClose: true, //开启遮罩关闭
              content: $('.no_bond')
		  });});
     
     $(".setting_head a").click(function(){
		layer.open({
			  type: 1,
	          title:false,
			  closeBtn: false,
			  area: ['720px', '550px'],
			  skin: 'layui-layer-nobg', //没有背景色			  
              shadeClose: true, //开启遮罩关闭
              content: $('.upload_head')
		  });});
});	
