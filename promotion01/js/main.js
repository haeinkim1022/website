window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });





    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);


        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)





        if(scrollTop >= 900){

            $('.mouse').addClass('on');
        }
        if(scrollTop >= 1300){

            $('.check1').addClass('on');
        }
        if(scrollTop >= 1300){

            $('.check2').addClass('on');
        }
        if(scrollTop >= 1300){

            $('.check3').addClass('on');
        }
        if(scrollTop >= 2420){

            $('.color').addClass('on');
        }
        if(scrollTop >= 3270){

            $('.main_title').addClass('on');
        }
        if(scrollTop >= 8000){

            $('.s3subtitle').addClass('on');
        }
        if(scrollTop >= 8350){

            $('.logo').addClass('on');
        }
        if(scrollTop >= 10250){

            $('.subtitle1').addClass('on');
        }
        if(scrollTop >= 11393){

            $('.subtitle2').addClass('on');
        }
        if(scrollTop >= 11000){

            $('.mockup').addClass('on');
        }
        if(scrollTop >= 12250){

            $('.drop01').addClass('on');
        }
        if(scrollTop >= 12400){

            $('.drop02').addClass('on');
        }
        if(scrollTop >= 12894){

            $('.s4subtitle').addClass('on');
        }
        if(scrollTop >= 16850){

            $('.name01img').addClass('on');
        }
    });


    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {


        setTimeout(()=>{
            $('.title').addClass('on');
        },200)

    })();



})
