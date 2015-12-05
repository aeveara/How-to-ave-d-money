$(document).ready(function() {

  // your jQuery code here...

$(".content").hide();
    $("#navText").hide();
    
    //HOME
    $("#home").show();
    $("#house").on('click',function(){
        $("#navText").hide();
        $(".content").hide();
        
 $('#home').animate({height:'toggle'});
        $("#home").show();
         
    });
    
    //page one
     $("#bOne").on('click',function(){
         $("#navText").show();
        $(".content").hide();
         $("#home").hide();
         $('#jeans').animate({height:'toggle'});
        $("#jeans").show();
         
    });

     //page two
     $("#bTwo").on('click',function(){
         $("#navText").show();
        $(".content").hide();
         $("#home").hide();
         $('#bar').animate({height:'toggle'});
        $("#bar").show();
         
    });
    
     //page three
    $("#bThree").on('click', function(){
        $("#navText").show();
        $(".content").hide();
        $("#home").hide();
        $('#meter').animate({height:'toggle'});
        $("#meter").show();
        
    });
    
     //page four
    $("#bFour").on('click',function(){
        $("#navText").show();
        $(".content").hide();
        $("#home").hide();
        $('#sweater').animate({height:'toggle'});
        $("#sweater").show();
        
    });
    
     //page five
     $("#bFive").on('click',function(){
         $("#navText").show();
        $(".content").hide();
         $("#home").hide();
         $("#netflix").animate({height:'toggle'});
        $("#netflix").show();
         
    });
    
    
    
    //TOGGLE
// var damnList = ["bOne", "bTwo", "bThree", "bFour", "bFive"];
 

        
$("#arrowTwo").on('click',function() {
  var nextDiv = $(".content:visible").next(".content").animate({width:'toggle'});

  if (nextDiv.length == 0) { // wrap around to beginning
    nextDiv = $(".content:first").animate({width:'toggle'});
  }
  $(".content").hide();
    $("#home").hide();
    $("#navText").show();
  nextDiv.show();

    
});

$("#arrowOne").on('click',function() {
  var prevDiv = $(".content:visible").prev(".content").animate({width:'toggle'});
  if (prevDiv.length == 0) { // wrap around to end
    prevDiv = $(".content:last").animate({width:'toggle'});
  }
  $(".content").hide();
    $("#home").hide();
    $("#navText").show();
  prevDiv.show();
});
    
});