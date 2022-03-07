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





        if(scrollTop >= 830){

            $('.text01').addClass('on');
        }
        if(scrollTop >= 1100){

            $('.text02').addClass('on');
        }
        if(scrollTop >= 1100){

            $('.text03').addClass('on');
        }
        if(scrollTop >= 1500){

            $('.text04img').addClass('on');
        }
        if(scrollTop >= 1500){

            $('.pic01').addClass('on');
        }
        if(scrollTop >= 2875){

            $('.text05img').addClass('on');
        }
        if(scrollTop >= 2875){

            $('.pic02').addClass('on');
        }
        if(scrollTop >= 2900){

            $('.text06').addClass('on');
        }
        if(scrollTop >= 3000){

            $('.arrow01img').addClass('on');
        }
        if(scrollTop >= 4125){

            $('.s2title01').addClass('on');
        }
        if(scrollTop >= 4125){

            $('.s2text01').addClass('on');
        }
        if(scrollTop >= 4625){

            $('.s2mockup01img').addClass('on');
        }
        if(scrollTop >= 5750){

            $('.s2mockup02').addClass('on');
        }
        if(scrollTop >= 6875){

            $('.s2text02').addClass('on');
        }
        if(scrollTop >= 8250){

            $('.s2mockup03').addClass('on');
        }
        if(scrollTop >= 9500){

            $('.s2title02').addClass('on');
        }
        if(scrollTop >= 10625){

            $('.s2text03').addClass('on');
        }
        if(scrollTop >= 11250){

            $('.s2text04').addClass('on');
        }
        if(scrollTop >= 11250){

            $('.s2title03').addClass('on');
        }
        if(scrollTop >= 11250){

            $('.s2title04').addClass('on');
        }
        if(scrollTop >= 12000){

            $('.s2text05').addClass('on');
        }
        if(scrollTop >= 12000){

            $('.s2text06').addClass('on');
        }
        if(scrollTop >= 12000){

            $('.s2text07').addClass('on');
        }
        if(scrollTop >= 15375){

            $('.s3title01').addClass('on');
        }
        if(scrollTop >= 16626){

            $('.s4text01').addClass('on');
        }
        if(scrollTop >= 16726){

            $('.s4text02').addClass('on');
        }
        if(scrollTop >= 16826){

            $('.s4text03').addClass('on');
        }
        if(scrollTop >= 16926){

            $('.s4text04').addClass('on');
        }
        if(scrollTop >= 17637){

            $('.s4text05').addClass('on');
        }
        if(scrollTop >= 17737){

            $('.s4text06').addClass('on');
        }
        if(scrollTop >= 17837){

            $('.s4text07').addClass('on');
        }
        if(scrollTop >= 17937){

            $('.s4text08').addClass('on');
        }
        if(scrollTop >= 18037){

            $('.s4text09').addClass('on');
        }
        if(scrollTop >= 18137){

            $('.s4text10').addClass('on');
        }
        if(scrollTop >= 18651){

            $('.s4arrow01').addClass('on');
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
        },300)


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
