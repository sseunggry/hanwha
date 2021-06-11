// gnb 스크롤
$(window).scroll(function(){
    let navbar = $(this).scrollTop();
    let headerHeight = $('header').innerHeight();

    if(navbar > headerHeight) {
        $('header').addClass('scroll');
    } else {
        $('header').removeClass('scroll');
    }
});


// gnb 마우스오버 이벤트

$('nav > ul > li').mouseover(function(){
    $(this).parents('header').addClass('hover');
});

$('nav').mouseleave(function(){
    $(this).parents('header').removeClass('hover');
});

$('nav > ul > li').mouseover(function(){
    $(this).css('color','#ff6600');
})
.mouseleave(function(){
    $(this).css('color','');
});

// gnb 2depth 메뉴
$('nav > ul > li').mouseover(function(){

    $(this).children('.inner').css('opacity','1');
    $(this).children('.inner').stop().slideDown(200);
})
.mouseleave(function(){

    $(this).children('.inner').stop().slideUp(200);
});

$('.inner .box li a').mouseover(function(){

    $(this).children('span').css('color','#ff6600');
})
.mouseleave(function(){

    $(this).children('span').css('color','');
});

// language box 마우스 오버시
$('.language_box').mouseover(function(){
    $(this).addClass('hover');
})
.mouseleave(function(){
    $(this).removeClass('hover');
});

$('.language_box li').mouseover(function(){
    $(this).children('a').css('color','#ff6600');
})
.mouseleave(function(){
    $(this).children('a').css('color','');
});

// moblie 메뉴
$('.menuBtn').click(function(){
    $('.moMenu').css('display','block').animate({opacity : '1'}, 300, function(){
        $('body').css('overflow','hidden');
        $('.moMenu > .inner').css({'left' : '0'});
    });
});

$('.closeBtn').click(function(){
    $('.moMenu > .inner').animate({left : '-100%'}, 100, function(){
        $('.moMenu').animate({opacity : '0'}, 200, function(){
            $('.moMenu').css('display', 'none');
            $('body').css('overflow','');
        });
    });
});

$('.moMenu .bottom > li.depth2').click(function(){
    
    if ( $(this).children('a').hasClass('on') ) {
        $(this).children('a').removeClass('on');
        $(this).children('.depth2_inner').hide();
    } else {
        $(this).children('a').addClass('on');
        $(this).children('.depth2_inner').show();        
    }
});

// visual 탭 마우스 오버시
$('.link_box li').mouseover(function(){
    let $this = $(this);

    $this.addClass('hover');
})
.mouseleave(function(){
    let $this = $(this);
    $this.removeClass('hover');
});

$('.link_box li:first-child').mouseover(function(){
    let $this = $(this);

    $this.removeClass('hover');
});

// global btn_link 호버 효과
$('.global .btn_link li').mouseover(function(){
    let $this = $(this);

    $this.addClass('hover');
})
.mouseleave(function(){
    let $this = $(this);
    
    $this.removeClass('hover');
});

/*
subpage
*/

// tab_2depth 클릭시
$('.tab_2depth li').on('click',function(){
    $('.tab_2depth li').removeClass('on');
    $(this).addClass('on'); 

    let tabIndex = $('.tab_2depth li').index(this);
    $('.ruleWrap').children('.ruleCon').hide();
    $('.ruleWrap').children('.ruleCon').eq(tabIndex).show();

});

// footer familysite 호버 효과
$('footer .familysite').mouseover(function(){
    let $this = $(this);

    $this.addClass('hover');
    $this.children('.siteList').css('opacity','1');
    $('.siteList').stop().slideDown(200);
})
.mouseleave(function(){
    let $this = $(this);

    $this.removeClass('hover');
    $('.siteList').stop().slideUp(200);
});

// footer siteList 호버 효과
$('footer .familysite .siteList li').mouseover(function(){
    let $this = $(this);

    $this.css('color','#ff6600');
})
.mouseleave(function(){
    let $this = $(this);

    $this.css('color', '');
});

// chart js
    // google.charts.load("current", {packages:["corechart"]});
    // google.charts.setOnLoadCallback(drawChart);

    //   function drawChart() {
    //     var data = google.visualization.arrayToDataTable([
    //       ['Stockholder', 'Composition'],
    //       ['개인 및 기타', 29.27],
    //       ['기관', 6.73],
    //       ['국민연금', 10.24],
    //       ['외국인', 16.77],
    //       ['(주)한화', 36.99]
    //     ]);

    //     var options = {
    //       colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    //       width: 1200,
    //       pieHole: 0.4,
    //     };

    //     var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    //     chart.draw(data, options);
    //   }


    // google.charts.load("current", {packages:["corechart"]});
    // google.charts.setOnLoadCallback(drawChart);

    // function drawChart() {
    // var data = google.visualization.arrayToDataTable([
    //     ['Stockholder', 'Composition'],
    //     ['개인 및 기타',     29.27],
    //     ['기관',      6.73],
    //     ['국민연금',  10.24],
    //     ['외국인', 16.77],
    //     ['(주)한화',    36.99]
    // ]);

    // var options = {
    //     colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    //     // title: 'My Daily Activities',
    //     pieHole: 0.4,
    //     width: 1200,
    //     height: 700
    // };

    // var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    // chart.draw(data, options);
    // }

    // google.charts.load('current', {'packages':['corechart']});
    // google.charts.setOnLoadCallback(drawChart);

    // function drawChart() {

    //   var data = new google.visualization.DataTable();
    //   data.addColumn('string', 'Stockholder');
    //   data.addColumn('number', 'Composition');
    //   data.addRows([
    //     ['개인 및 기타', 29.27],
    //     ['기관', 6.73],
    //     ['국민연금', 10.24],
    //     ['외국인', 16.77], // Below limit.
    //     ['(주)한화', 36.99] // Below limit.
    //   ]);

    //   var options = {
    //     // title: 'Popularity of Types of Pizza',
    //     sliceVisibilityThreshold: 0
    //   };

    //   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    //   chart.draw(data, options);
    // }