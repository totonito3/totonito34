

$(document).ready(function(){




	

	
	var scrollLink=$('.scroll');

	//Smooth Scrolling
	scrollLink.click(function(e){
		e.preventDefault();
		$('body, html').animate({
			scrollTop: $(this.hash).offset().top
		}, 500);

	})

	//Active link switching
	$(window).scroll(function(){

		
		var scrollbarLocation=$(this).scrollTop();
		scrollLink.each(function(){

			var sectionOffset=$(this.hash).offset().top

			if(sectionOffset<=(scrollbarLocation+65)){

				$(this).addClass('focused');
				

				$(this).parent().siblings().children().removeClass('focused');
				

			}
			

		})

	})


	//setBindings();
	//parallax();
	

	skillboxes();
	skillboxStyling('.programming');
	projectboxes();
	$('#welcome').fadeOut().delay(500).fadeIn(1000);
	//$('.circle').animate({
	//	'margin-bottom':'1000px'
		//'margin-top':'1000px'
	//},1000);
	// $('#welcome').animate({
	// 	'margin-right':'1000px'
	// }, 1000);

$('.contents').click(function(e){
	var focus=$(e.currentTarget).attr('class').split(' ')[1];
		
	skillboxStyling('.'+focus);
		


});


// var typed = new Typed('.element', {
//     stringsElement: '#j'
//   });

var typed = new Typed('#typed', {
    stringsElement: '#presentation',
    typeSpeed: 20,
    fadeOut:true,
    showCursor: true,
  cursorChar: '_',
  autoInsertCss: true
  });




// var options = {
//   strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//   typeSpeed: 40
// }

// var typed = new Typed("#j", options);

	$(window).scroll(function(){
// 		var scrollbarLocation=$(this).scrollTop();

		//if (scrollbarLocation>=$('#about-section').offset().top){
	
// var typed = new Typed('.typed', {
//     stringsElement: 'hhk'
//   });

//}
});



function skillboxes(){

	var box=$('<div class="contents"></div>');

	$('#skills-section ul:nth-child(2)').wrapAll((box).clone().addClass('programming'));
	//$('.programming').css('background-color','#E5E5E5')//'#0069CC');

	$('#skills-section ul:nth-child(3)').wrapAll((box).clone().addClass('database'));
	//$('.database').css('background-color', '#FEFFCB');//'yellow');

	$('#skills-section ul:nth-child(4)').wrapAll((box).clone().addClass('rc'));
	//$('.rc').css('background-color','#CBFFCB')//'green');

	$('#skills-section ul:nth-child(5)').wrapAll((box).clone().addClass('tools'));
	//$('.tools').css('background-color','#BCF4EE')//'turquoise');

	$('#skills-section ul:nth-child(6)').wrapAll((box).clone().addClass('frameworks'));
	//$('.frameworks').css('background-color','#FFE4B1')//'orange');

	$('#skills-section ul:nth-child(7)').wrapAll((box).clone().addClass('os'));
	//$('.os').css('background-color','#99CEFF');//'grey');//'rgba(0,0,0,0.6)'

	


	$(box).css({
		'width': '1000px',
		'height': '100vh',
		'display': 'inline-block',
		'background-color': 'white'

	});

	

}
	


function skillboxStyling(first){


		$(first).addClass('first');
		$(first).siblings().removeClass('first');
		$(first).removeClass('second third fourth fifth sixth')


		if($(first).next().is('.contents')){
			$(first).next().addClass('second');
			$(first).next().siblings().removeClass('second');
			$(first).next().removeClass('third fourth fifth sixth');
			
		}

		if(!$(first).next().is('.contents')){
				$($(first).siblings()[1]).addClass('second');
				$($(first).siblings()[1]).siblings().removeClass('second');
				$($(first).siblings()[1]).removeClass('third fourth fifth sixth');


				$($(first).siblings()[2]).addClass('fourth');
				$($(first).siblings()[2]).siblings().removeClass('fourth');
				$($(first).siblings()[2]).removeClass('second third fifth sixth');


				$($(first).siblings()[3]).addClass('fifth');
				$($(first).siblings()[3]).siblings().removeClass('fifth');
				$($(first).siblings()[3]).removeClass('second third fourth sixth');


				$($(first).siblings()[4]).addClass('sixth');
				$($(first).siblings()[4]).siblings().removeClass('sixth');
				$($(first).siblings()[4]).removeClass('second third fourth fifth');

		}

		
		if ($(first).prev().is('.contents')){
			$(first).prev().addClass('third');
			$(first).prev().siblings().removeClass('third');
			$(first).prev().removeClass('second fourth fifth sixth');

		}

		if($(first).next().next().is('.contents')){
			$(first).next().next().addClass('fourth');
			$(first).next().next().siblings().removeClass('fourth');
			$(first).next().next().removeClass('second third fifth sixth');


		}
		if(!$(first).next().next().is('.contents')){
				$($(first).next().siblings()[1]).addClass('fourth');
				$($(first).next().siblings()[1]).siblings().removeClass('fourth');
				$($(first).next().siblings()[1]).removeClass('second third fifth sixth');


				$($(first).next().siblings()[2]).addClass('fifth');
				$($(first).next().siblings()[2]).siblings().removeClass('fifth');
				$($(first).next().siblings()[2]).removeClass('second third fourth sixth');


				$($(first).next().siblings()[3]).addClass('sixth');
				$($(first).next().siblings()[3]).siblings().removeClass('sixth');
				$($(first).next().siblings()[3]).removeClass('second third fourth fifth');

		}

		if($(first).next().next().next().is('.contents')){
			$(first).next().next().next().addClass('fifth');
			$(first).next().next().next().siblings().removeClass('fifth');
			$(first).next().next().next().removeClass('second third fourth sixth');

		}
		if(!$(first).next().next().next().is('.contents')){
				$($(first).next().next().siblings()[1]).addClass('fifth');
				$($(first).next().next().siblings()[1]).siblings().removeClass('fifth');
				$($(first).next().next().siblings()[1]).removeClass('second third fourth sixth');


				$($(first).next().next().siblings()[2]).addClass('sixth');
				$($(first).next().next().siblings()[2]).siblings().removeClass('sixth');
				$($(first).next().next().siblings()[2]).removeClass('second third fourth fifth');

		}

		if($(first).next().next().next().next().is('.contents')){
			$(first).next().next().next().next().addClass('sixth');
			$(first).next().next().next().next().siblings().removeClass('sixth');
			$(first).next().next().next().next().removeClass('second third fourth fifth');
			
		}
		if(!$(first).next().next().next().next().is('.contents')){
				$($(first).next().next().next().siblings()[1]).addClass('sixth');
				$($(first).next().next().next().siblings()[1]).siblings().removeClass('sixth');
				$($(first).next().next().next().siblings()[1]).removeClass('second third fourth fifth');

		}


		if(!$(first).prev().is('.contents')){

				$('.contents').last().addClass('third');
				$('.contents').last().siblings().removeClass('third');
		}


	var first=$('.first');
	var second=$('.second');
	var third=$('.third');
	var fourth=$('.fourth');
	var fifth=$('.fifth');
	var sixth=$('.sixth');


	// $(first).css({'background-color':'#C5ECEB',
	// 				'z-index':'5',
	// 				'height': '100vh',
	// 				'width':'80%',
	// 				'transform':'scale(1)',
	// 				//'text-align':'center',
	// 				'margin':'20px auto'});
	//$(first).center();

	
	// $(second).css({'background-color':'#E2E2E2',
	// 					'z-index':'4',
	// 					'margin-left':'-370px',
	// 					'margin-top':'20px',
	// 					'height':'98%',
	// 					'width':'80%',
	// 					'transform':'scale(0.8)'
	// 					});
	//$(second).right();

	
	// $(third).css({'background-color':'#E2E2E2',
	// 									'z-index':'4',
	// 									'transform':'scale(0.8)',
	// 									'margin-top':'20px',
	// 									//'transform':'translate(50px)',
	// 									'margin-left':'-150px',
	// 									'width':'80%',
	// 									'height': '98%'});
	
	//$(third).left();

	//$(fourth, fifth, sixth).css({'position':'absolute'});

	
	// $(fourth).css({'z-index':'3',
	// 									'transform':'scale(0.7)',
	// 									//'transform':'translate(50px)',
	// 									'margin-top':'20px',
	// 									'margin-left':'-280px',
	// 									//'background-color':'red',
	// 									'width':'80%',
	// 									'height': '98%'});
	//$(fourth).right();

	
	// $(fifth).css({'z-index':'2',
	// 									'transform':'scale(0.6)',
	// 									//'transform':'translate(50px)',
	// 									'margin-left':'-190px',
	// 									'margin-top':'20px',
	// 									//'background-color':'yellow',
	// 									'width':'80%',
	// 									'height': '98%'});
	//$(fifth).right();

	
	// $(sixth).css({'z-index':'1',
	// 									'transform':'scale(0.5)',
	// 									//'transform':'translate(50px)',
	// 									'width':'80%',
	// 									'margin-left':'-120px',
	// 									'margin-top':'20px',
	// 									//'background-color':'green',
	// 									'height': '98%'});
	//$(sixth).right();
	
	var actualFocus=('.'+$('.first').attr('class').split(' ')[1]);

	$('#projects-section').css('background-color',($(actualFocus).css('background-color')));
	


	$(function() {

    $('.tab-panels .tabs li').on('click', function() {

        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.panel.active').slideUp(300, showNextPanel);

        //show next panel
        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });
        }
    });


});



}





/////////////Projects Styling//////////////////////////////////////////////

function projectboxes(){
var prbox=$("<div class='prbox'><div>");
$(prbox).css({
		'width': '45%',
		//'height': '300px',
		'background-color': 'white',
		'overflow':'hidden',
		'margin-top':'25px',
		//'padding':'30px 0',
		'vertical-align':'middle',
		'display':'inline-block',
		'text-align':'center',
		'-webkit-box-shadow': '7px -7px 5px 0px rgba(0,0,0,0.75)',
		'-moz-box-shadow': '7px -7px 5px 0px rgba(0,0,0,0.75)',
		'box-shadow': '7px -7px 5px 0px rgba(0,0,0,0.75)',
		'line-height':'2em',
		'margin-right':'30px',
		'padding':'5px'

	});


$($('.panel#panel1 .prcontent')[0]).wrap((prbox).clone().addClass('payroll'));
$($('.panel#panel1 .prcontent')[1]).wrap((prbox).clone().addClass('queue'));


$($('.panel#panel2 .prcontent')[0]).wrap((prbox).clone().addClass('app'));
$($('.panel#panel2 .prcontent')[1]).wrap((prbox).clone().addClass('store'));


}


});