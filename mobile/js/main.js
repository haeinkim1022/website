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





        if(scrollTop >= 0){

            $('.mockup01img').addClass('on');
        }
        if(scrollTop >= 750){

            $('.icon01img').addClass('on');
        }
        if(scrollTop >= 780){

            $('.icon02img').addClass('on');
        }
        if(scrollTop >= 810){

            $('.icon03img').addClass('on');
        }
        if(scrollTop >= 1875){

            $('.pic01img').addClass('on');
        }
        if(scrollTop >= 1875){

            $('.pic02img').addClass('on');
        }
        if(scrollTop >= 2625){

            $('.graph01').addClass('on');
        }
        if(scrollTop >= 2625){

            $('.graph02').addClass('on');
        }
        if(scrollTop >= 2625){

            $('.graph03').addClass('on');
        }
        if(scrollTop >= 2625){

            $('.graph04').addClass('on');
        }
        if(scrollTop >= 2625){

            $('.graph05').addClass('on');
        }
        if(scrollTop >= 2625){

            $('.text01img').addClass('on');
        }
        if(scrollTop >= 2625){

            $('.text02img').addClass('on');
        }
        if(scrollTop >= 2625){

            $('.box01').addClass('on');
        }
        if(scrollTop >= 2625){

            $('.box02').addClass('on');
        }
        if(scrollTop >= 2625){

            $('.box03').addClass('on');
        }
        if(scrollTop >= 2500){

            $('.arrow01').addClass('on');
        }
        if(scrollTop >= 3200){

            $('.salad01').addClass('on');
        }
        if(scrollTop >= 3200){

            $('.salad02').addClass('on');
        }
        if(scrollTop >= 3200){

            $('.salad03').addClass('on');
        }
        if(scrollTop >= 5250){

            $('.color01img').addClass('on');
        }
        if(scrollTop >= 5250){

            $('.color02img').addClass('on');
        }
        if(scrollTop >= 5250){

            $('.s2text01').addClass('on');
        }
        if(scrollTop >= 5250){

            $('.s2text02').addClass('on');
        }
        if(scrollTop >= 5250){

            $('.s2text03').addClass('on');
        }
        if(scrollTop >= 5250){

            $('.s2text04').addClass('on');
        }
        if(scrollTop >= 5250){

            $('.s2text05').addClass('on');
        }
        if(scrollTop >= 6500){

            $('.s2pic01img').addClass('on');
        }
        if(scrollTop >= 6500){

            $('.s2pic02img').addClass('on');
        }
        if(scrollTop >= 6700){

            $('.s2text06').addClass('on');
        }
        if(scrollTop >= 6700){

            $('.s2text07').addClass('on');
        }
        if(scrollTop >= 7500){

            $('.s3box01').addClass('on');
        }
        if(scrollTop >= 7500){

            $('.s3box02').addClass('on');
        }
        if(scrollTop >= 7500){

            $('.s3box03').addClass('on');
        }
        if(scrollTop >= 7500){

            $('.s3box04').addClass('on');
        }
        if(scrollTop >= 7500){

            $('.s3box05').addClass('on');
        }
        if(scrollTop >= 7500){

            $('.s3box06').addClass('on');
        }
        if(scrollTop >= 8700){

            $('.s3box07img').addClass('on');
        }
        if(scrollTop >= 8700){

            $('.s3box08img').addClass('on');
        }
        if(scrollTop >= 8700){

            $('.s3box09img').addClass('on');
        }
        if(scrollTop >= 8700){

            $('.s3box10img').addClass('on');
        }
        if(scrollTop >= 7800){

            $('.s3confeimg').addClass('on');
        }
        if(scrollTop >= 9698){

            $('.s3num01').addClass('on');
        }
        if(scrollTop >= 9698){

            $('.s3num02').addClass('on');
        }
        if(scrollTop >= 9698){

            $('.s3num03').addClass('on');
        }
        if(scrollTop >= 9698){

            $('.s3num04').addClass('on');
        }
        if(scrollTop >= 9698){

            $('.s3num05').addClass('on');
        }
        if(scrollTop >= 10059){

            $('.s3circle01img').addClass('on');
        }
        if(scrollTop >= 10375){

            $('.s3circle02img').addClass('on');
        }
        if(scrollTop >= 10059){

            $('.s3text01').addClass('on');
        }
        if(scrollTop >= 10375){

            $('.s3text02').addClass('on');
        }
        if(scrollTop >= 12088){

            $('.s4mockup01img').addClass('on');
        }
        if(scrollTop >= 12607){

            $('.s4mockup02img').addClass('on');
        }
        if(scrollTop >= 12935){

            $('.s4text01').addClass('on');
        }
        if(scrollTop >= 12607){

            $('.s4text02').addClass('on');
        }
        if(scrollTop >= 14029){

            $('.s4text03').addClass('on');
        }
        if(scrollTop >= 14050){

            $('.s4text04').addClass('on');
        }
        if(scrollTop >= 14000){

            $('.s4mockup03').addClass('on');
        }
        if(scrollTop >= 15250){

            $('.s4circle01img').addClass('on');
        }
        if(scrollTop >= 15964){

            $('.s4logo01img').addClass('on');
        }
        if(scrollTop >= 16000){

            $('.s4text09').addClass('on');
        }
        if(scrollTop >= 16120){

            $('.s4line01').addClass('on');
        }
        if(scrollTop >= 16320){

            $('.s4text05').addClass('on');
        }
        if(scrollTop >= 17000){

            $('.s4title01img').addClass('on');
        }
        if(scrollTop >= 16500){

            $('.s4pickup01').addClass('on');
        }
        if(scrollTop >= 17289){

            $('.s4mockup04').addClass('on');
        }
        if(scrollTop >= 18395){

            $('.s4sub01img').addClass('on');
        }
        if(scrollTop >= 18445){

            $('.s4sub02img').addClass('on');
        }
        if(scrollTop >= 18495){

            $('.s4sub03img').addClass('on');
        }
        if(scrollTop >= 18803){

            $('.s4arrow01').addClass('on');
        }
        if(scrollTop >= 19050){

            $('.s5text01').addClass('on');
        }
        if(scrollTop >= 19050){

            $('.s5text02').addClass('on');
        }
        if(scrollTop >= 19050){

            $('.s5text03').addClass('on');
        }
        if(scrollTop >= 19644){

            $('.s5sub01').addClass('on');
        }
        if(scrollTop >= 19644){

            $('.s5line01').addClass('on');
        }
        if(scrollTop >= 19875){

            $('.s5title01img').addClass('on');
        }
        if(scrollTop >= 19925){

            $('.s5text04').addClass('on');
        }
        if(scrollTop >= 19975){

            $('.s5title02img').addClass('on');
        }
        if(scrollTop >= 20025){

            $('.s5text05').addClass('on');
        }
        if(scrollTop >= 21810){

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
            $('.main').addClass('on');
        },1000);
        setTimeout(()=>{
            $('.title3').addClass('on');
        },0)
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
