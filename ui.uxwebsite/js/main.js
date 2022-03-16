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









        if(scrollTop >= 125){

            $('.main01').addClass('on');
        }


        if(scrollTop >= 130){

            $('.main02').addClass('on');
        }

        if(scrollTop >= 160){

            $('.title04').addClass('on');
        }

        if(scrollTop >= 700){

            $('.s1text01').addClass('on');
        }
            if(scrollTop >= 700){

            $('.s1text02').addClass('on');
        }
            if(scrollTop >= 1200){

            $('.s1text03').addClass('on');
        }
            if(scrollTop >= 1500){

            $('.s1circle01img').addClass('on');
        }
            if(scrollTop >= 1750){

            $('.s1text04').addClass('on');
        }
            if(scrollTop >= 2600){

            $('.s2text01').addClass('on');
        }
            if(scrollTop >= 4625){

            $('.s2model01').addClass('on');
        }
            if(scrollTop >= 5500){

            $('.s2model02').addClass('on');
        }
            if(scrollTop >= 6000){

            $('.s2arrow01').addClass('on');
        }
            if(scrollTop >= 7000){

            $('.s3text01').addClass('on');
        }
            if(scrollTop >= 7100){

            $('.s3text02').addClass('on');
        }
            if(scrollTop >= 7100){

            $('.s3text03').addClass('on');
        }
            if(scrollTop >= 8700){

            $('.s3text04').addClass('on');
        }
            if(scrollTop >= 8600){

            $('.s3circle01img').addClass('on');
        }
        if(scrollTop >= 8600){

            $('.s3circle02img').addClass('on');
        }
            if(scrollTop >= 10000){

            $('.s4mockup1img').addClass('on');
        }
        if(scrollTop >= 14087){

            $('.s5text01').addClass('on');
        }
        if(scrollTop >= 14800){

            $('.s5text02').addClass('on');
        }
        if(scrollTop >= 15875){

            $('.s5text03').addClass('on');
        }
        if(scrollTop >= 17875){

            $('.s6text01').addClass('on');
        }
        if(scrollTop >= 18000){

            $('.s6text02').addClass('on');
        }
        if(scrollTop >= 18750){

            $('.s6text03').addClass('on');
        }
        if(scrollTop >= 18760){

            $('.s6text04').addClass('on');
        }
        if(scrollTop >= 18770){

            $('.s6text05').addClass('on');
        }
        if(scrollTop >= 18800){

            $('.s6text06').addClass('on');
        }
        if(scrollTop >= 18800){

            $('.s6text07').addClass('on');
        }
        if(scrollTop >= 18850){

            $('.s6text08').addClass('on');
        }
        if(scrollTop >= 18900){

            $('.s6text09').addClass('on');
        }
        if(scrollTop >= 19450){

            $('.s7img01').addClass('on');
        }
        if(scrollTop >= 19600){

            $('.s7img02').addClass('on');
        }
        if(scrollTop >= 19750){

            $('.s7img03').addClass('on');
        }
        if(scrollTop >= 20548){

            $('.s8text01').addClass('on');
        }
        if(scrollTop >= 21923){

            $('.s8mockup01img').addClass('on');
        }
        if(scrollTop >= 25000){

            $('.s8mockup02').addClass('on');
        }
        if(scrollTop >= 25673){

            $('.s8text02').addClass('on');
        }
        if(scrollTop >= 26548){

            $('.s8mockup03').addClass('on');
        }
        if(scrollTop >= 26656){

            $('.s8text03').addClass('on');
        }
        if(scrollTop >= 27636){

            $('.s9text01').addClass('on');
        }

        if(scrollTop >= 28761){

            $('.s9text02').addClass('on');
        }

        if(scrollTop >= 30386){

            $('.s10text01').addClass('on');
        }
        if(scrollTop >= 34600){

            $('.s11text01img').addClass('on');
        }
        if(scrollTop >= 35000){

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
        },300)
        setTimeout(()=>{
            $('.title02').addClass('on');
        },300)
        setTimeout(()=>{
            $('.title03').addClass('on');
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
