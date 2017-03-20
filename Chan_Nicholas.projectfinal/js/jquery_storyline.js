/* jquery_storyline.js */

  ///////////////////////////////////////////////////////////////////////
  //Requirements Filled:
  //1) DOM element creation, deletion or modification
  //2) DOM traversal
  //3) Capturing and handling events
  //4) Closures
  //
  //*Library creation & use/modification.
  //*New Project- Made from Scratch!
  
  ///////////////////////////////////////////////////////////////////////

(function($){

$(document).ready(function(){

  ///////////////////////////////////////////////////////////////////////
  //  Setting up a quick library of audio with adjustments within the
  //jQuery Scope. Within that scope contains mutiple closures, which will
  //call for audio when an input "button" is clicked & you're brought to
  //a new "page" (DIV).
  //
  //  You can see that the volume of the original sound bites were
  //decreased using the .volume() method. The method was presented by 
  //PhearOfRayne @ stackoverflow.com as a solution to the loud audio:
  //http://stackoverflow.com/questions/20390421/lower-background-music-volume-when-autoplay-html
  //
  //  From the method, I simply adjusted the volume through trial & error.
  //
  //  Below you will see one of many event handlers. This one will stop
  //all audio you will hear besides the background audio ("rain"). More
  //details on this in the "Pages" section.
  ///////////////////////////////////////////////////////////////////////  
    
   $('input').click(function(){
      bar.pause();
      wine.pause();
      lounge.pause();
      wind.pause();    
      
     });
  ////////////////////////////Audio Library//////////////////////////////
   var rain = document.getElementById('city_rain');rain.volume-=0.4;
   var doom = document.getElementById('doom');doom.volume-=0.5;
   var bar = document.getElementById('bar');bar.volume -=0.9;
   var wine = document.getElementById('wine');wine.volume -= 0.8;
   var lounge = document.getElementById('lounge');lounge.volume -= 0.9;
   var honk = document.getElementById('honk');honk.volume-=0.7;
   var wind = document.getElementById('wind');wind.volume-=0.9;

  ////////////////////////////Introduction///////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  //  The very first "page" is the only visible "page" so far. It is
  //consisted of a div, image, and sometimes audio called from the library.
  //Clicking a "button" (input) throughout the story calls for an event &
  //a new "page" will come out, while hiding the current "page" (the DIV &
  //it's children.
  //
  //  A noticeable event will be seen when you "die". There, you will be
  //able to mouse (hover) over the image to see a replay button (labeled 
  //"reload") for a delayed time. We'll see more of that later.
  ///////////////////////////////////////////////////////////////////////

   $('#proceed').click(function(){ /////// This is the first button (click(function())of many "pages"
      $('#intro').fadeOut('fast',function(){//Hiding the previous DIV before the new DIV loads, using the Callback Method
         $('#beginPic').fadeIn(1500).parents('div').fadeIn(2000);//Showing the current DIV
            rain.play();// Remove ";" & Enter ".console.log("the audio has started");" to check if audio works.

         });
      });

  /////////////////////////////////"Pages"///////////////////////////////   
  //  Every time a function is clicked for a "page" change, which is
  //a div containing an image & text. Certain "pages" have audio as well
  //The same click function that will fadeIn() & fadeOut()
  //these DIV's will also play audio via .play(). However, as you've
  //seen above, the same click function, which is any input clicked,
  //will stop audio playing from the previous "page" by stopping all
  //audio besides "rain" (eg:Closure). Afte stopping audio, new audio
  //will play if the "page" callsfor it. 
  //
  //  There's a DOM modification everytime you click to another "page"
  //since DIV's are constantly showing & hiding. Traversing can also be
  //seen, considering the picture of each DIV containing a "page" is
  //meant to begin fading in first before the text, carrying parent.
  //
  //  Either from playing the game or looking a this section, you will  
  //see that multiple click functions will show the same DIV, Image,
  //audio, or other functions.
  //  More closures will be seen once you come across certain inputs
  // and pages. Scroll below for more details.
  ///////////////////////////////////////////////////////////////////////  
   
/////////First Line of Choices for the Story///////////
   $("#1st").click(function(){
      $("#beginAdventure").fadeOut("fast",function(){//Hiding the previous DIV & the corresponding IMG
         $("#streetPic").fadeIn(1500).parents("div").fadeIn(2000);//Showing the current DIV//images will stay outside DIVS

         });
      });

   $(".clickToHQ").click(function(){ //Any function that refers to a class means there are more than one button which will make it to the same "page"(eg:div#page, div#page2)
      $(".returnHQ").fadeOut("fast",function(){
         $("#hqPic").fadeIn(1500).parents("div").fadeIn(2000);

         });
      });
   
/////////Chosen "button#1st":Next Line of Choices for the Story///////////
   $("#choice1A").click(function(){
      $("#page1").fadeOut("fast",function(){
         $("#sitePic").fadeIn(1500).parents("div").fadeIn(2000);//Image to go with current DIV
 
         });
      });
 
   $("#choice1B").click(function(){
      $("#page1").fadeOut("fast",function(){

      $("#rainPic").fadeIn(1500).parents("div").fadeIn(2000);

      });
   });
   
 ////////Chosen "button#2nd":Next Line of Choices for the Story///////////

   $("#choice2A").click(function(){
      $("#page2").fadeOut("fast",function(){
         $("#prisonPic").fadeIn(1500).parents("div").fadeIn(2000); //Image to go with current DIV

      });
   }); 

   $("#choice2B").click(function(){
      $("#page2,#hqPic").fadeOut("fast",function(){
         $("#crowdPic").fadeIn(1500).parents("div").fadeIn(2000);

         });
      });
   
 ////////Chosen "button#choice1A":Next Line of Choices for the Story/////////
 
   $("#choice3A").click(function(){
      $("#page3").fadeOut("fast",function(){ 
         $("#shotPic").fadeIn(1500).parents("div").fadeIn(2000);

         });
      }); 

/////////Next Line of Choices for the Story//////////

   $("#choice4A").click(function(){
      $("#page4").fadeOut("fast",function(){
         $("#higherPic").fadeIn(1500).parents("div").fadeIn(2000);
            wind.play();

      });
   });
   
/////////Next Line of Choices for the Story//////////
   $("#choice6A").click(function(){
      $("#page6").fadeOut("fast",function(){
         $("#shotPic").fadeIn(1500).parents("div").fadeIn(2000);

       });
      }); 

   $("#choice6B").click(function(){
      $("#page6").fadeOut("fast",function(){
         $("#page14").fadeIn(1500);

         });
      });
 
/////////Next Line of Choices for the Story//////////
   $("#choice8B").click(function(){
      $("#page8").fadeOut("fast",function(){
         $("#gamblePic").fadeIn(1500).parents("div").fadeIn(2000);
            lounge.play();

         });
      }); 

   $("#choice9A").click(function(){
      $("#page9").fadeOut("fast",function(){
         $("#bitePic").fadeIn(1500).parents("div").fadeIn(2000);
            bar.play();
            wine.play();

         });
      }); 

  ///////////////////////////////Dead/////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  //  The below function will be called upon once certain buttons are
  //clicked (".endingclick").This event handler will send you to a dead
  //end div (".end"). Once clicked, the hover function is called
  //whenever you hover a certain picture (".endPic") which will show()
  //the element (div#retry, input#reload). By clicking #reload, you will
  //be brought back to the beginning of the game (div#intro).These are
  //are some other examples of a closures in the project.
  //  Note: Although this approach is much easier done using CSS,
  //the purpose of this project is to show how capable Javascript/jQuery
  //can be.
 ///////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////
  //  Although this approach is much easier done using CSS,
  //the purpose of this project is to show how capable Javascript/jQuery
  //can be with event handlers. Not only would the hover function only work
  //when a certain buton is clicked, but an element (div#retry, #reload)
  //will show when you hover over the image (.endPic).
  /////////////////////////////////////////////////////////////////////// 
 
   $('.endingClick').click(function(){
      doom.loop = false;
      doom.play();  
      $('.endPic').on('mouseenter mouseleave', function(e){
         if(e.type === 'mouseenter'){
            $('#retry').fadeIn('slow');
            $('#reload, #credits').fadeIn(2000);
    
         } else if (e.type === 'mouseleave'){
   //A timer has been set once #reload fadesIn(), in which case, it will
   //fadeOut shortly after hovering.
            setTimeout(function(){
              	$('#retry').fadeOut('slow');
   //Although this may seem unnecessary, it is not a child of a DIV(#Retry)
   //so it's required for continuity when the function is called again.      
               $('#reload').fadeOut('slow');
               $('#credits').fadeOut('slow');
              }, 2500);
           }

         });
    
      });
   
  ////////////////////////////To Be Continued////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  //  Although fun to make, this story isn't meant to be over. However,
  //before you reach the last page of the end of the unfinished story,
  //you will have clicked on a certain event handler(button#continued),
  //which will cause a .slideUp() of the previous "page" (DIV), and a
  //slideDown() of DIV.unfinished w/the reload button.
  //  This reload button will be called an shown everytime the story
  //comes to some sort of ending (a DIV.end,.unfinished "page").
  ///////////////////////////////////////////////////////////////////////

   $('.continued').click(function(){
      $('.continuePage').slideUp(1000, function(){
         $('unfinished').fadeIn(3000);
         $('#reload, #credits').fadeIn(3500);
           
         });
      });

  ///////////////////////////////End Credits//////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  //  The player will have a chance to replay the game without refreshing
  //the page. However, they can also view the credits before being
  //presented the reload button again. After the on (.endingclick) or click
  //(.continued) functions are called, the input (#credits) will show()
  //and animate(), resulting in movie like end credits. As DIV#rollCredits
  //rolls away, #reload will show again.
  //
  //  The method was presented by Rooster @ stackoverflow.com as a better
  //solution than slideUp():
  //http://stackoverflow.com/questions/17864907/jquery-move-text-like-movie-credits
  //  From this method, I adjusted the position and speed of animation.
  ///////////////////////////////////////////////////////////////////////

   $('#credits').click(function(){
      $('.unfinished, #credits, #reload, .end').hide('fast',function(){
         $('.rollCredits').show().css('top','').animate({top:'-100%'}, 20000, function(){
            $('#reload').fadeIn("slow").css({"position": "absolute", "top": "50%", "left": "49.75%"}); //If animation isn't preferred, uncomment this line!
            //$('#reload').fadeIn('fast').css({position: 'fixed', overflow: 'hidden', top: '100%', margin: '0 auto'}).animate({top:'50%'}, 20000); //Change speed from '2000' to '20000' when container's fixed


            });
         });

      });

   ///////////////Below enables a credit system allowed to continue (working progress)//////////// 
   /*
var i = parseInt(0);
$("#reload").click(function(){
            //var i = parseInt(0);   
            //i++;
            alert("You have "+ (3 - i) +" left");  
            if (i=0,i > 1, i++){
               $("#rollCredits").show().css("top", "").animate({top:"-100%"}, 20000);
           //endCredits;
            } else {
               $(".end,#rollCredits,#reload").hide("fast",function(){
                        $("#beginAdventure").fadeIn("fast");
               });
               
            }
i++;
});
*/
   });

})(jQuery);