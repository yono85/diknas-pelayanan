(function($) {

    var slide = function(ele,options) {
        var $ele = $(ele);
        // 
        var setting = {
        		// 
            speed: 1000,
            // 
            interval: 8000,
            
        };
        // 

        $.extend(true, setting, options);

        // 
        var states = [
            { $zIndex: 1, width: 170, height: '69%', top: 41, left: -165, $opacity: 0.7 },
            { $zIndex: 2, width: '71%', height: '82%', top: 0, left: 10, $opacity: 1 },
            { $zIndex: 1, width: 170, height: '69%', top: 41, left: '74%', $opacity: 0.7 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        // 
        // $ele.find('.hi-next').on('click', function() {
        //     next();
        // });
        // $ele.find('.hi-prev').on('click', function() {
        //     states.push(states.shift());
        //     move();
        // });

        // $ele.on('mouseenter', function() {
        //     clearInterval(timer);
        //     timer = null;
        // }).on('mouseleave', function() {
        //     autoPlay();
        // });

        move();
        autoPlay();

        // move
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        // 
        function next() {
            // 
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }

    //
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        // 
        return this;
    }
})(jQuery);