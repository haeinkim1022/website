/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
      _
  ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */

$(document).ready(function() {
    Logic();


    let cursor = $('#cursor');

    $("body").mousemove(function (e) {
        let offset = $('body').offset().top;
        gsap.to(cursor, { duration: 1.8, left: e.pageX - cursor.width() * 0.5,
            top: e.pageY - offset - cursor.height() * 0.5, ease: "back.out" });
    });


    $('#section02 .circle02').click(function(){
        $('#profile').addClass('on');
        
            document.getElementById('svgAnimate').beginElement();

    });
    $('#profile .circle02').click(function(){
        $('#profile').removeClass();

        document.getElementById('svgAnimate').beginElement();

    });

    const logo = document.querySelectorAll("#profile .path");

    for(let i = 0; i < logo.length; i++) {
        console.log(`${i+1}번째 path의 총 길이 ${logo[i].getTotalLength()}`);
    }






    // function curvedText(time) {
    //     var tl   = new TimelineMax({ repeat: -1 });
    //     var text = document.querySelector('#text-curve'),
    //         path = document.querySelector('path');

    //     var from = {
    //         transformOrigin: 'center center',
    //         rotation: 0
    //     };

    //     var to = {
    //         rotation: 90,
    //         ease: Linear.easeOut
    //     };

    //     tl.fromTo([text, path], time, from, to);
    //     return tl;
    // }

    // curvedText(2);



    
    $(".scroll-container").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });


    $('#fullpage').fullpage({

        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        navigation: true,
        navigationTooltips: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        afterLoad: function(anchorLink, index){

            if (index == 1) {// 01 = true

                $('.title').addClass('on');
                $('.name').addClass('on');
                $('.arrow01img').addClass('on');
            } else { // 01 = false

            }
            if(index ==2){// 02 = true
                $('.title01').addClass('on');
                $('.title02').addClass('on');
                $('.title03').addClass('on');
                $('.scroll01img').addClass('on');
                $('.bgc01img').addClass('on');
                $('.bgc02img').addClass('on');
                $('.circle').addClass('on');
                $('.circle01').addClass('on');
            }else{//02 = false

            }
            if(index ==3){// 03 = true
                $('.s3pic01').addClass('on');
                $('.s3pic02').addClass('on');
                $('.title').addClass('on');
                $('.s3text01').addClass('on');
                $('.s3text02').addClass('on');
            }else{//02 = false

            }
            if(index ==4){// 04 = true
                $('.s4pic01').addClass('on');
                $('.s4pic02').addClass('on');
                $('.title').addClass('on');
                $('.s4text01').addClass('on');
                $('.s4text02').addClass('on');
            }else{//02 = false

            }
            if(index ==5){// 05 = true
                $('.s5pic01').addClass('on');
                $('.s5pic02').addClass('on');
                $('.title').addClass('on');
                $('.s5text01').addClass('on');
                $('.s5text02').addClass('on');
            }else{//02 = false

            }
            if(index ==6){// 06 = true
                $('.s6pic01').addClass('on');
                $('.s6text01').addClass('on');
                $('.s6text02').addClass('on');
                $('.s6pic02').addClass('on');
                $('.s6text03').addClass('on');
                $('.s6text04').addClass('on');
            }else{//02 = false

            }
        },

        onLeave: function(index, destination, direction){
            var leavingSection = this;

            if(index == 1 && direction =='down'){//01 - >02

            }

            if(index == 2 && direction == 'down'){//02 -> 03

            } else if(index == 2 && direction == 'up'){//02 -> 01

            }

            if(index == 3 && direction == 'down'){//03 -> 04

            } else if(index == 3 && direction == 'up'){//03 -> 02

            }
            if(index == 4 && direction == 'down'){//04 -> 05

            } else if(index == 4 && direction == 'up'){//04 -> 03

            }
            if(index == 5 && direction == 'down'){//05 -> 06

            } else if(index == 5 && direction == 'up'){//05 -> 04

            }

        }
    });
});

