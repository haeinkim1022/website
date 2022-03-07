window.addEventListener('DOMContentLoaded', function () {



    let count = 0;
    const introLoading = setInterval(() => {
        
        count ++;

        $('.loading_progress .count').html(count);

        if(count >= 100){
            intro();
            clearInterval(introLoading);
        }


    }, 20);

    const intro = ()=>{

        gsap.to('#section01 .bg .first_image',1,{
            opacity:0,
            onComplete:()=>{
                gsap.to('#section01 .bg',1,{
                    delay:1,
                    'clip-path':'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
                });
                $('.hide_section').hide();

                gsap.to('.loading_progress',1,{ delay:0.8,  opacity:0,});
                gsap.to('#title',1,{ delay:1.3,  opacity:1,});
                gsap.to('.main_sub',1,{ delay:1.3,  opacity:1,});
                gsap.to('#header',1,{ delay:1.3,  opacity:1,});
                gsap.to('.s1menu_box',1,{ delay:1.3,  opacity:1,});


            }
        });

 


    }

    $('.burger-check').click(function(){
        $('#menu').toggleClass('on');
    });

    
    let cursor = $('.cursor');

    $(".swiper01").mousemove(function (e) {
        let offset = $('.swiper01').offset().top;
        gsap.to(cursor, { duration: 1.8, left: e.pageX - cursor.width() * 0.5,
            top: e.pageY - offset - cursor.height() * 0.5, ease: "back.out" });
    });

    $(".swiper02").mousemove(function (e) {
        let cursorWidth = cursor.width() / 2;
        let cursorHeight = cursor.height() / 2;
        let offset = $('.swiper02').offset().top;
        gsap.to(cursor, { duration: 1.8, left: e.pageX - cursorWidth,
            top: e.pageY - offset - cursorHeight, ease: "back.out" });
        // gsap.to(cursorFollow, {duration: 1.4, left: e.pageX - cursorFollow.width()
        // * 0.5, top: e.pageY - 20, ease: "back.out(2)"});
    });


    

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 750){

            $('.s1title01').addClass('on');
        }
        if(scrollTop >= 750){

            $('.s1text01').addClass('on');
        }
        if(scrollTop >= 1000){

            $('.s1text02img').addClass('on');
        }
        if(scrollTop >= 1250){

            $('.s1pic01img').addClass('on');
        }
        if(scrollTop >= 1500){

            $('.s1pic02').addClass('on');
        }
        if(scrollTop >= 2125){

            $('.s1title03').addClass('on');
        }
        if(scrollTop >= 2125){

            $('.s1title02').addClass('on');
        }
        if(scrollTop >= 2125){

            $('.s1text03').addClass('on');
        }
        if(scrollTop >= 2300){

            $('.s1pic03').addClass('on');
        }
        if(scrollTop >= 2600){

            $('.s1pic04').addClass('on');
        }
        if(scrollTop >= 2875){

            $('.s1pic05').addClass('on');
        }
        if(scrollTop >= 3625){

            $('.visual01img').addClass('on');
        }
        if(scrollTop >= 10875){

            $('#s4box01').addClass('on');
        }
        if(scrollTop >= 11500){

            $('#s4box02').addClass('on');
        }
        if(scrollTop >= 11800){

            $('#s4box03').addClass('on');
        }
        if(scrollTop >= 12750){

            $('#s4box04').addClass('on');
        }
        if(scrollTop >= 12600){

            $('.s4title02img').addClass('on');
        }
        if(scrollTop >= 13500){

            $('#s4box05').addClass('on');
        }
        if(scrollTop >= 13800){

            $('.s4pic05').addClass('on');
        }
        if(scrollTop >= 21500){

            $('.s6pic01img').addClass('on');
        }
        if(scrollTop >= 23297){

            $('.s6pic02img').addClass('on');
        }
        if(scrollTop >= 24547){

            $('.s6pic03img').addClass('on');
        }
        if(scrollTop >= 25875){

            $('.s6pic04img').addClass('on');
        }
        if(scrollTop >= 29125){

            $('.s7text01').addClass('on');
        }
        if(scrollTop >= 32250){

            $('.s7text02').addClass('on');
        }
        if(scrollTop >= 40119){

            $('.s8title01img').addClass('on');
        }
        if(scrollTop >= 40119){

            $('.s8title02img').addClass('on');
        }
    });



    /*  slide,click event section */



    gsap.to('.fix-this-3', {
        scrollTrigger: {
            trigger: ".trigger-this-3",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    gsap.to('.fix-this-5', {
        scrollTrigger: {
            trigger: ".trigger-this-5",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    gsap.to('#card .center_visual', {
        width: innerWidth,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#card .left_card', {
        scale : 0.6,
        x: -600,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#card .right_card', {
        scale : 0.6,
        x: 600,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: 'bottom bottom',
            scrub: true,
        }
    });





    let vertical_item = document.querySelectorAll('.fix-this-4 > section');
    let totalWidth = 0;


    console.log();


    for(let i = 0; i < vertical_item.length; i++){

        totalWidth += vertical_item[i].getBoundingClientRect().width;

    }



    gsap.to('.fix-this-4', {
        x: -(totalWidth - innerWidth),
        ease:'none',
        scrollTrigger: {
            trigger: ".trigger-this-4",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });


    gsap.to("#text", {
        ease:'none',
        attr: {x: -10}, /*확대되는 텍스트의 위치*/
        scrollTrigger: {
            trigger: "#section03",
            start: "top top",
            end: () => "+=" + 1000,
            scrub: true,
        }
    });



    gsap.to("svg", {
        ease:'none',
        scale: 120, /*배경의 크기*/
        scrollTrigger: {
            trigger: "#section03",
            start: "1000 top",
            end: 'bottom bottom',
            // end: () => "+=" + 500,
            scrub: true,
        }
    });






    var swiper = new Swiper('.swiper01', {
        slidesPerView:'auto',
        centeredSlides: false,
        spaceBetween: 40,
        grabCursor: false,
        slidesOffsetBefore: 400,
        slidesOffsetAfter: 0,
        // scrollbar: {
            // el: '.swiper-scrollbar',
            // draggable: true,
        // },
	 on : {
                slideChangeTransitionStart : function (e) {


                    $('.swiper-slide').removeClass('on');

                },
                slideChangeTransitionEnd : function (e) {

                    // var currentSlide = $(e.);
                    console.log(this.activeIndex);

                    $('.swiper-slide-active').addClass('on');
                }
            }
    });
    var swiper02 = new Swiper('.swiper02', {
        slidesPerView:'auto',
        centeredSlides: false,
        spaceBetween: 40,
        grabCursor: false,
        slidesOffsetBefore: 400,
        slidesOffsetAfter: 0,
        // scrollbar: {
        // el: '.swiper-scrollbar',
        // draggable: true,
        // },
        on : {
            slideChangeTransitionStart : function (e) {


                $('.swiper-slide').removeClass('on');

            },
            slideChangeTransitionEnd : function (e) {

                // var currentSlide = $(e.);
                console.log(this.activeIndex);

                $('.swiper-slide-active').addClass('on');
            }
        }
    });


})
