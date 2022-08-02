$(function(){

	$("#toggle-btn").click(function(){
		$("#main-header nav").toggleClass("on");
	});


	// 모달창
	$(".youtube").click(function(){
		$(".modal").addClass("on");
	})
	$(".btn-close").click(function(){
		$(".modal").removeClass("on");
	})

}); // $


//이미지 및 컨첸츠 로딩 체크 -윈도우가 로딩다되면 초기화
window.onload = function(){
		// AOS 초기화
		AOS.init();
}