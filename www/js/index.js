/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        

       


        $( ".lamp-button" ).click(function() {
          $('.lamp').css('left', '400px');
        });
		
		
		
		
//	        fuction change(){
//			var image = document.getElementById("lock");
//			image.src = "lock-Open"
//		}
//				var image_tracker ='lock';
//		function change (){
//			var image = document.getElementById('lock');
//			if(image_tracker=='lock') {
//				image.src ='lock-Open';
//				imgae_tracker = 'lock-Open';
//			}else{
//				image.src = 'lock.png';
//				image_tracker = 'lock';
//			}
//		}	
    }
};

app.initialize();


// A $( document ).ready() block.
$( document ).ready(function() {
    $( ".lamp-button" ).click(function() {
        $('.lamp').css('left', '20px');
    });
		
	$("div.menu-anim").click(function() {
		
		$(this).toggleClass("cross");
		//$(this).toggleClass("on");
	});
	
	$('.options-click').click(function(e) {
		
		e.preventDefault();
		$('.options-panel').fadeIn('slow');
	});
	  
	$(".lock svg").click(function() {
		$(this).toggleClass('lock-open');
		if($(this).hasClass('lock-open')) {
			//$('.circle-img-1').hide();
			$('.circle-img-2').fadeIn();
			$('.arrowRight').hide();
			$('.arrowLeft').hide();
		}
		else {
			$('.circle-img-2').fadeOut();
			//$('.circle-img-1').show();
			$('.arrowRight').show();
			$('.arrowLeft').show();
		}
	});
	
	$(document).mousemove(mouse);
});


var img = $('.circle-img-2');

  var offset = img.offset();

  function mouse(evt) {
	  console.log(evt);
    var center_x = (offset.left) + (img.width() / 2);
    var center_y = (offset.top) + (img.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    img.css('-moz-transform', 'rotate(' + degree + 'deg)');
    img.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    img.css('-o-transform', 'rotate(' + degree + 'deg)');
    img.css('-ms-transform', 'rotate(' + degree + 'deg)');
  }
  
var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

	$(".menu-options").click(function() {
		$(this).toggleClass('options-panel');
		if($(this).hasClass('options-panel')) {
			//$('.circle-img-1').hide();
			$('.circle-img-2').fadeIn();
		}
	});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLENBQUEsRUFBQTs7RUFBQSxDQUFBLEdBQUksV0FBQSxDQUFZLFFBQUEsQ0FBQSxDQUFBO1dBQ2QsQ0FBQSxDQUFFLEtBQUYsQ0FBUSxDQUFDLFdBQVQsQ0FBcUIsT0FBckI7RUFEYyxDQUFaLEVBRUYsSUFGRTs7RUFJSixDQUFBLENBQUUsS0FBRixDQUFRLENBQUMsS0FBVCxDQUFlLFFBQUEsQ0FBQSxDQUFBO0lBQ2IsYUFBQSxDQUFjLENBQWQ7V0FDQSxDQUFBLENBQUUsS0FBRixDQUFRLENBQUMsV0FBVCxDQUFxQixPQUFyQjtFQUZhLENBQWY7O0VBSUEsTUFBQSxHQUFTLFFBQUEsQ0FBQSxDQUFBO1dBQ1AsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEdBQVYsQ0FDRTtNQUFBLFlBQUEsRUFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLEdBQXRCLENBQUEsR0FBNkIsQ0FBOUIsQ0FBRixHQUFxQztJQUFuRCxDQURGO0VBRE87O0VBSVQsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsTUFBakI7O0VBQ0EsTUFBQSxDQUFBO0FBYkEiLCJzb3VyY2VzQ29udGVudCI6WyJpID0gc2V0SW50ZXJ2YWwgLT5cbiAgJChcImRpdlwiKS50b2dnbGVDbGFzcyBcImNyb3NzXCJcbiwgMTUwMFxuXG4kKFwiZGl2XCIpLmNsaWNrIC0+XG4gIGNsZWFySW50ZXJ2YWwgaVxuICAkKFwiZGl2XCIpLnRvZ2dsZUNsYXNzIFwiY3Jvc3NcIlxuXG5yZXNpemUgPSAtPlxuICAkKFwiYm9keVwiKS5jc3NcbiAgICBcIm1hcmdpbi10b3BcIjogfn4oKHdpbmRvdy5pbm5lckhlaWdodCAtIDE1MCkgLyAyKSArIFwicHhcIlxuICAgIFxuJCh3aW5kb3cpLnJlc2l6ZSByZXNpemVcbnJlc2l6ZSgpXG4iXX0=
//# sourceURL=coffeescript
