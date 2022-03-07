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





        if(scrollTop >= 1375){

            $('.logo01').addClass('on');
        }
        if(scrollTop >= 1375){

            $('.text01').addClass('on');
        }
        if(scrollTop >= 1960){

            $('.mockup01img').addClass('on');
        }
        if(scrollTop >= 3025){

            $('.mockup02').addClass('on');
        }
        if(scrollTop >= 3200){

            $('.text02').addClass('on');
        }
        if(scrollTop >= 3200){

            $('.text03').addClass('on');
        }
        if(scrollTop >= 4750){

            $('.s2sub01img').addClass('on');
        }
        if(scrollTop >= 4750){

            $('.s2text01').addClass('on');
        }
        if(scrollTop >= 4750){

            $('.s2text02').addClass('on');
        }
        if(scrollTop >= 5250){

            $('.s2text03').addClass('on');
        }
        if(scrollTop >= 5650){

            $('.s2color01').addClass('on');
        }
        if(scrollTop >= 5650){

            $('.s2color02').addClass('on');
        }
        if(scrollTop >= 5650){

            $('.s2color03').addClass('on');
        }
        if(scrollTop >= 5650){

            $('.s2color04').addClass('on');
        }
        if(scrollTop >= 6625){

            $('.s2title01').addClass('on');
        }
        if(scrollTop >= 6900){

            $('.s2mockup01img').addClass('on');
        }
        if(scrollTop >= 8875){

            $('.s2text04').addClass('on');
        }
        if(scrollTop >= 9750){

            $('.s3sub01img').addClass('on');
        }
        if(scrollTop >= 9750){

            $('.s3text02').addClass('on');
        }
        if(scrollTop >= 10242){

            $('.s3circle03img').addClass('on');
        }
        if(scrollTop >= 11000){

            $('.s3text03').addClass('on');
        }
        if(scrollTop >= 11291){

            $('.s3text04').addClass('on');
        }
        if(scrollTop >= 11291){

            $('.s3text05').addClass('on');
        }
        if(scrollTop >= 11291){

            $('.s3text06').addClass('on');
        }
        if(scrollTop >= 12914){

            $('.s3text07').addClass('on');
        }
        if(scrollTop >= 12914){

            $('.s3title01').addClass('on');
        }
        if(scrollTop >= 13058){

            $('.s3circle05img').addClass('on');
        }
        if(scrollTop >= 14000){

            $('.s3circle06img').addClass('on');
        }
        if(scrollTop >= 17672){

            $('.s4mockup01img').addClass('on');
        }
        if(scrollTop >= 20138){

            $('.s4mockup02').addClass('on');
        }
        if(scrollTop >= 20138){

            $('.s4text01').addClass('on');
        }
        if(scrollTop >= 22660){

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
            $('.title01').addClass('on');
        },500);
        setTimeout(()=>{
            $('.title02').addClass('on');
        },500)
        setTimeout(()=>{
            $('.title03').addClass('on');
        },500)
/*

        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".box3", {
            x: 400,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box3",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: true,
                id: "scrub"
            }
        });*/

    })();



})
