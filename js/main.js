if (screen.width <= 699) { document.location = "http://m.inderpreet.info/"; }
$(function() {
// if($(window).width() < 1280){
// 	$('.who').show();
// 	$('#smokeImg0, #smokeImg1').css("left", '0px');
// 	$('.fadein-delay').css("opacity", 1);
// }
    // $('[data-toggle="tooltip"]').tooltip({html:true, trigger:"hover"});

    var visited = document.cookie.replace(/(?:(?:^|.*;\s*)visited\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    
    if(visited == 'true'){
        $('.who').fadeIn(100);
        $('#site-name').hide().fadeIn(100);
        $('#backgroundImg, #smokeImg0, #smokeImg1').hide();
        setTimeout(function(){
            $(".fadein-delay").each(function(index) {
                $(this).delay(100*(3-index)).animate({opacity: 1}, {duration: 800, queue:true});
            });
            $('#backgroundImg').fadeIn(500);
            //$('.who').fadeIn(1300).animate({left: "0px"}, {duration:1200, queue:false});
            $('#smokeImg0').fadeIn(800).animate({left: "0px"}, {duration:1000, queue:false});
        }, 400);
        setTimeout(function(){
            $('#smokeImg1').fadeIn(1300).animate({left: "0px"}, {duration:1000, queue:false});
            //$('[href="javascript:homeClicked()"]').transition({scale:1.2, delay:700 /*, 'font-weight': 400*/}, 2000);
        }, 650);
        setTimeout(() => {
            $('[href="javascript:homeClicked()"]').addClass("current-nav", 200);
        }, 1300);
    }
    else if (!$("*").hasClass("STOP-ANIM")){
        $('.who').fadeIn(1700);
        $('#site-name').hide().fadeIn(1700);
        $('#backgroundImg, #smokeImg0, #smokeImg1').hide();
        setTimeout(function(){
            $(".fadein-delay").each(function(index) {
                $(this).delay(200*(3-index)).animate({opacity: 1}, {duration: 1500});
            });
            $('#backgroundImg').fadeIn(1000);
            //$('.who').fadeIn(1300).animate({left: "0px"}, {duration:1200, queue:false});
            $('#smokeImg0').fadeIn(1300).animate({left: "0px"}, {duration:1500, queue:false});
        }, 1300);
        setTimeout(function(){
            $('#smokeImg1').fadeIn(2000).animate({left: "0px"}, {duration:1500, queue:false});
            //$('[href="javascript:homeClicked()"]').transition({scale:1.2, delay:850, easing:'easeInOutBack' /*, 'font-weight': 400*/}, 2500);
        }, 2100);
        setTimeout(() => {
            $('[href="javascript:homeClicked()"]').addClass("current-nav", 200);
        }, 3350)
    } 
    else{
        $('.who').show();
        $('#smokeImg0, #smokeImg1').css("left", '0px');
        $('.fadein-delay').css("opacity", 1);
        $('[href="javascript:homeClicked()"]').addClass("current-nav", 200);
    }

    $('.linkimg').each(function(index) {
            $(this).delay(300*(index)).animate({bottom: '0px'}, {duration: 2000,queue:false}).fadeIn(2500);
    });
    document.cookie = "visited=true";
    
});

function homeClicked(){
    if(!$('#me').hasClass("current")){
        $('section.current').fadeOut(500).delay(500).removeClass("current");
        $('a.current-nav').removeClass('current-nav');
        $('#me').delay(500).fadeIn(500).addClass("current");
        $('[href="javascript:homeClicked()"]').addClass("current-nav");
    }
}

function mediaClicked(){
	if(!$('#media-group').hasClass("current")){
		$('section.current').fadeOut(500).delay(500).removeClass("current");
        $('a.current-nav').removeClass('current-nav');
        $('#media-group').delay(500).fadeIn(500).addClass("current");
        $('[href="javascript:mediaClicked()"]').addClass("current-nav");
	}
}

function linksClicked(){
    if(!$('#links-group').hasClass("current")){
        $('section.current').fadeOut(500).delay(500).removeClass("current");
        $('a.current-nav').removeClass('current-nav');
        $('#links-group').delay(500).fadeIn(500).addClass("current");
        $('[href="javascript:linksClicked()"]').addClass("current-nav");
    }
}

function workClicked(){
    if(!$('#work-group').hasClass("current")){
        $('section.current').fadeOut(500).delay(500).removeClass("current");
        $('a.current-nav').removeClass('current-nav');
        $('#work-group').delay(500).fadeIn(500).addClass("current");
        $('[href="javascript:workClicked()"]').addClass("current-nav");
    }
}

// MEDIA COMING SOON ANIM
// var mini;
// $('[href="javascript:mediaClicked()"]').on({
//     mousedown: () => {
//         {
//             $('[href="javascript:mediaClicked()"]').transition({scale:0.9}, 100, 'linear');
//             mini = false;
//         }
//     },
//     mouseup: () => {
//         {
//             $('[href="javascript:mediaClicked()"]').transition({scale:1}, 200, 'linear');
//             mini = false;
//         }
//     }
// });

$('.link').on({
    mouseenter: () => {$('#'+$(this).attr('id')+'Img').addClass('blacknwhiteLinkImg', 6000, "ease");},
    mouseleave: () => {$('#'+$(this).attr('id')+'Img').removeClass('blacknwhiteLinkImg', 6000, "ease");}
});

$('#soundcloud-frame').on({
    mouseenter: () => {$('#soundcloud-frame').transition({'filter': 'grayscale(100%) blur(0.5px)'}, 600, 'ease')},
    mouseleave: () => {$('#soundcloud-frame').transition({'filter': 'grayscale(0%) blur(.8px)'}, 750, 'ease')},
});

var resumeImg = document.getElementById("resumeImg");

/* LINK IMAGES LISTENERS */
resumeImg.addEventListener("click", ()=>{
    $('#navbarNav').transition({opacity: 0}, 750);
    $('#resumeIframe').fadeIn(750);
    $('body').addClass('inactive-link');
    $('#resumeIframe').addClass('normal-link');
    $(document).mouseup(function(e){
        var container = $("#resumeIframe");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.fadeOut(600);
            setTimeout(() => $('#navbarNav').transition({opacity: 1}, 750), 200);
            $('body').removeClass('inactive-link');
            $(document).unbind('mouseup');
        }
    });
});
githubImg.addEventListener("click", ()=>{
    $('#navbarNav').transition({opacity: 0}, 750);
    $('#githubIframe').fadeIn(600);
    $('body').addClass('inactive-link');
    $('#githubIframe').addClass('normal-link');
    $(document).mouseup(function(e){
        var container = $("#githubIframe");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.fadeOut(500);
            setTimeout(() => $('#navbarNav').transition({opacity: 1}, 750), 200);
            $('body').removeClass('inactive-link');
            $(document).unbind('mouseup');
        }
    });
});
linkedinImg.addEventListener("click", ()=>{
    $('#navbarNav').transition({opacity: 0}, 750);
    $('#linkedinIframe').fadeIn(600);
    $('body').addClass('inactive-link');
    $('#linkedinIframe').addClass('normal-link');
    $(document).mouseup(function(e){
        var container = $("#linkedinIframe");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.fadeOut(500);
            setTimeout(() => $('#navbarNav').transition({opacity: 1}, 750), 200);
            $('body').removeClass('inactive-link');
            $(document).unbind('mouseup');
        }
    });
});