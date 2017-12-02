$(document).ready(function(){
        setInterval(function(){
    $('#hrMobile').animate({marginLeft:"-50%"},2000);
    $('#hrMobile').animate({marginLeft:"150%"},2000);

    },4000);
    setInterval(function(){
    $('.mobileSkillsTitles + p').animate({opacity:'1'},50);
    setTimeout(function(){$('.mobileSkillsTitles + p').animate({opacity:'0'},50);},200);    
    
    },5000);
    setInterval(function(){
        $('#hrMobile2').animate({opacity:'0'},100);
        setTimeout(function(){$('#hrMobile2').animate({opacity:'1'},100);},100);
    },2000);
    
    $('#whiteBackgroundMobile').mouseover(function(){
          $('#mhtMl5').animate({ width: '78%' }, 1500);
        $('#mcSs3').animate({width:'78%'},1500);
        $('#mjquEry').animate({width:'56%'},1500);
        $('#mcpLus').animate({width:'27%'},1500);
    });
    
    $('#whiteBackgroundMobile + div').mouseover(function(){
                $('#menglish').animate({width:'42%'},1500);
        $('#mrussian').animate({width:'80%'},1500);
        $('#mukrainian').animate({width:'80%'},1500);
        $('#mpolish').animate({width:'65%'},1500);
    });
    
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getUTCDate();

    var monthWord = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    var i = month;
    if(day < 10){
        day = "0" + day;
    }
    $('#monthDate').text(monthWord[i]);
    $('#dayDate').text(day);
    $('#yearDate').text(year);
    
    $('#close').on('click', cvClick);
    function cvClick(){
    $('.CV').hide(100);
    }
  $('#fifthMenu').on('click', cvClickOp);
    function cvClickOp(){
    $('.CV').show(50);
        $('.skills').hide(100);
        $('#Education').hide(100);
        $('#myHobby').hide(100);
    } 
    
    $('#close2').on('click',skillsClick);
    function skillsClick(){
        $('.skills').hide(100);
    }
  $('#thirdMenu').on('click',skillsClickOp);
    function skillsClickOp(){

        $('.skills').show(50);
          $('#htMl5').animate({ width: '78%' }, 1500);
        $('#cSs3').animate({width:'78%'},1500);
        $('#jquEry').animate({width:'56%'},1500);
        $('#cpLus').animate({width:'27%'},1500);
        $('#english').animate({width:'22%'},1500);
        $('#russian').animate({width:'41%'},1500);
        $('#ukrainian').animate({width:'41%'},1500);
        $('#polish').animate({width:'34%'},1500);
        $('.CV').hide(100);
        $('#Education').hide(100);
        $('#myHobby').hide(100);
    };

 $('#close3').on('click',hobbyClick);
    function hobbyClick(){
        $('#myHobby').hide(100);
    }
 $('#firstMenu').on('click',hobbyClickOp);
    function hobbyClickOp(){
        $('#myHobby').show(50);
        $('.CV').hide(100);
        $('#Education').hide(100);
        $('.skills').hide(100);
    }
    $('#photoFirstHobby').on('click',function (){
        $('#photoSecondHobby').attr('src','fotoHobby/secondBlack.jpg');
        $('#photoThirdHobby').attr('src','fotoHobby/thirdBlack.jpg');
        $('#photoForthHobby').attr('src','fotoHobby/forthBlack.jpg');
        
        $('#photoFirstHobby').attr('src','fotoHobby/first.jpg');
    });
    
        $('#photoSecondHobby').on('click',function (){
        $('#photoThirdHobby').attr('src','fotoHobby/thirdBlack.jpg');
        $('#photoForthHobby').attr('src','fotoHobby/forthBlack.jpg');  
        $('#photoFirstHobby').attr('src','fotoHobby/firstBlack.jpg');
            
        $('#photoSecondHobby').attr('src','fotoHobby/second.jpg');
    });
        $('#photoThirdHobby').on('click',function (){
        $('#photoSecondHobby').attr('src','fotoHobby/secondBlack.jpg');
        $('#photoForthHobby').attr('src','fotoHobby/forthBlack.jpg'); 
        $('#photoFirstHobby').attr('src','fotoHobby/firstBlack.jpg');
        
        $('#photoThirdHobby').attr('src','fotoHobby/third.jpg');
    });
        $('#photoForthHobby').on('click',function (){
        $('#photoSecondHobby').attr('src','fotoHobby/secondBlack.jpg');
        $('#photoThirdHobby').attr('src','fotoHobby/thirdBlack.jpg');  
        $('#photoFirstHobby').attr('src','fotoHobby/firstBlack.jpg');
            
        $('#photoForthHobby').attr('src','fotoHobby/forth.jpg'); 
    });
      
    $('video').on('mouseover',function () {
        this.play();
        
    });
    $('video').on('mouseleave',function(){
        this.pause();
    });
    
    
     $('#close4').on('click',educationClick);
    function educationClick(){
        $('#Education').hide(100);
    }
 $('#forthMenu').on('click',educationClickOp);
    function educationClickOp(){
        $('#Education').show(50);
        $('.CV').hide(100);
        $('#myHobby').hide(100);
        $('.skills').hide(100);
    }
    
$(window).resize(function(){
 if($(window).width() <= 575){
	     $('.CV').hide(50);
        $('.skills').hide(50);
        $('#Education').hide(50);
        $('#myHobby').hide(50);
     $('#gallery').hide(50);
 }   
    
    })

    
$("#gallery > div > div").mouseover(function(){
	$('#gallery > div > div').css('display','none');
    $(this).css('display','block');
});
$("#gallery > div > div").mouseout(function(){
	$('#gallery > div > div').css('display','block');
});
$('#close5').on('click',function(){
$('#gallery').hide(100);
    
});
$('#allDiploms').on('click',function(){
    $('#gallery').show(100);
    $('#gallery > div > div').eq(0).show(100);
     $('#gallery > div > div').eq(1).show(300);
     $('#gallery > div > div').eq(2).show(500);
     $('#gallery > div > div').eq(3).show(600);
     $('#gallery > div > div').eq(4).show(700);
     $('#gallery > div > div').eq(5).show(800);
     $('#gallery > div > div').eq(6).show(900);
     $('#gallery > div > div').eq(7).show(1000);
    
});
});
