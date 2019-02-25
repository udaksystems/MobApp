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
        $('.lamp').css('left', '450px');
		$('.ng-scope').show();
		$('.loader-ring-light-color-picker').show();
		$('.exit-img').show();
		
    });
		

	$("div.menu-anim").click(function() {
		
		$(this).toggleClass("cross");
		$('.options-panel').hide();
		//$(this).toggleClass("on");
	});
	
	$('.options-click').click(function(e) {
		
		e.preventDefault();
		$('.options-panel').fadeIn('fast');
		$('.button-one').fadeIn('slow');
		//$('.options-panel-color').fadeIn('slow');
		//$('menu-anim:after; web; menu-options').hide('fast');
		
	});
	
	
		$('.exit-img').click(function(e) {
		$('.ng-scope').hide();	
		$('.exit-img').hide();	
		$('.loader-ring-light-color-picker').hide();	
		$('.lamp').css('left', '6px');
	});
	
		$('.lampTurnOFF').click(function(e) {
		$('.lampTurnOn').show();	
		$('.lampTurnOFF').hide();	
		$('.lamp-button').show();	
		$('.lampOFF-button').hide();
	});
	
		$('.lampTurnOn').click(function(e) {
		$('.lampTurnOn').hide();	
		$('.lampTurnOFF').show();	
		$('.lampOFF-button').show();	
		$('.lamp-button').hide();
	});
	  
	$(".lock svg").click(function() {
		$(this).toggleClass('lock-open');
		if($(this).hasClass('lock-open')) {
			//$('.circle-img-1').hide();
			$('.circle-img-2').fadeIn();
			$('.arrowRight').hide();
			$('.arrowLeft').hide();
			$('.loader-ring-light').fadeIn();
		}
		else {
			$('.circle-img-2').fadeOut();
			//$('.circle-img-1').show();
			$('.arrowRight').show();
			$('.arrowLeft').show();
			$('.loader-ring-light').hide();
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

	
	
	
	
	
	
	
	
	(function(){
    'use strict';
	
	
  
  angular.module('app', ['colorPicker']);

    angular.module('colorPicker', [])
        .directive('colorPicker', [function () {

            var updateEventListenerTargets = ['touchstart','touchmove','mouseup','mousemove'],
                clientX, clientY,
                mousedown = 0;

            function ColorPicker() {
                // Initialize at center position with white
                this.ngModel = '#ffffff';
            }

            ColorPicker.$inject = [];

            return {
                restrict: 'E',
                controller: ColorPicker,
                bindToController: true,
                controllerAs: 'colorPicker',
                scope: {
                    ngModel: '=color'
                },
                replace: true,
                template: [
                    '<div class="color-picker">',
                        '<canvas width="230px" height="230px"></canvas>',
                        '<span class="indicator">',
                            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="64" viewBox="0 0 25 32">',
                                '<path fill="#ffffff" d="M12.528 0c-6.943 0-12.528 5.585-12.528 12.528 0 10.868 12.528 19.472 12.528 19.472s12.528-9.585 12.528-18.792c0-6.868-5.66-13.208-12.528-13.208zM12.528 21.434c-4.981 0-9.057-4.075-9.057-9.057s4.075-9.057 9.057-9.057 9.057 4.075 9.057 9.057-4.075 9.057-9.057 9.057z"></path>',
                            '</svg>',
                            '<span class="selected-color"></span>',
                        '</span>',
                    '</div>'
                ].join(''),
                link: function (scope, el, attrs, colorPicker) {

                    var canvas = el.find('canvas')[0];

                    var context = canvas.getContext('2d');
                    var x = canvas.width / 2;
                    var y = canvas.height / 2;
                    var radius = x;
                    var counterClockwise = false;

                    for(var angle=0; angle<=360; angle+=1){
                        var startAngle = (angle-2)*Math.PI/180;
                        var endAngle = angle * Math.PI/180;

                        context.beginPath();
                        context.moveTo(x, y);
                        context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
                        context.closePath();

                        var gradient = context.createRadialGradient(x, y, 0, x, y, radius);
                            gradient.addColorStop(0,'hsl('+angle+', 10%, 100%)');
                            gradient.addColorStop(1,'hsl('+angle+', 100%, 50%)');

                        context.fillStyle = gradient;
                        context.fill();
                    }

                    var updateColorPicker = function(e){
                        e.preventDefault();

                        if (e.type === 'mousemove' && !mousedown) { return; }

                        clientX = (e.clientX) ? e.clientX : e.changedTouches[0].clientX;
                        clientY = (e.clientY) ? e.clientY : e.changedTouches[0].clientY;

                        var canvasOffset = canvas.getBoundingClientRect();
                        var canvasX = Math.floor(clientX - canvasOffset.left);
                        var canvasY = Math.floor(clientY - canvasOffset.top);

                        // get current pixel
                        var imageData = context.getImageData(canvasX, canvasY, 1, 1);
                        var pixel = imageData.data;

                        var indicator = el.find('span')[0];
                        var selectedColor = indicator.getElementsByClassName('selected-color')[0];

                        if(!pixel[pixel.length - 1]) {
                            return;
                        }

                        var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];

                        colorPicker.ngModel = '#' + ('0000' + dColor.toString(16)).substr(-6);

                        indicator.style.left    = canvasX + 'px';
                        indicator.style.top     = canvasY - 32 + 'px';
						
						console.log(colorPicker.ngModel);
						$('.loader-ring-light-color-picker').css('box-shadow', '0 4px 0 ' + colorPicker.ngModel+ ' inset');
                        selectedColor.style.backgroundColor = colorPicker.ngModel;

                        scope.$apply(function(){
                            colorPicker.ngModel = colorPicker.ngModel;
                        });

                    };

                    for (var i=0, len = updateEventListenerTargets.length; i<len; i++) {
                        canvas.addEventListener(updateEventListenerTargets[i], updateColorPicker, false);
                    }

                    canvas.addEventListener('mousedown', function(){
                        mousedown = 1;
                    }, false);

                    document.addEventListener('mouseup', function(){
                        mousedown = 0;
                    }, false);
                }
            };
        }]);
}());


setTimeout(function() {
  $('.LoadingTime').hide()
}, 5000);









//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLENBQUEsRUFBQTs7RUFBQSxDQUFBLEdBQUksV0FBQSxDQUFZLFFBQUEsQ0FBQSxDQUFBO1dBQ2QsQ0FBQSxDQUFFLEtBQUYsQ0FBUSxDQUFDLFdBQVQsQ0FBcUIsT0FBckI7RUFEYyxDQUFaLEVBRUYsSUFGRTs7RUFJSixDQUFBLENBQUUsS0FBRixDQUFRLENBQUMsS0FBVCxDQUFlLFFBQUEsQ0FBQSxDQUFBO0lBQ2IsYUFBQSxDQUFjLENBQWQ7V0FDQSxDQUFBLENBQUUsS0FBRixDQUFRLENBQUMsV0FBVCxDQUFxQixPQUFyQjtFQUZhLENBQWY7O0VBSUEsTUFBQSxHQUFTLFFBQUEsQ0FBQSxDQUFBO1dBQ1AsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEdBQVYsQ0FDRTtNQUFBLFlBQUEsRUFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLEdBQXRCLENBQUEsR0FBNkIsQ0FBOUIsQ0FBRixHQUFxQztJQUFuRCxDQURGO0VBRE87O0VBSVQsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsTUFBakI7O0VBQ0EsTUFBQSxDQUFBO0FBYkEiLCJzb3VyY2VzQ29udGVudCI6WyJpID0gc2V0SW50ZXJ2YWwgLT5cbiAgJChcImRpdlwiKS50b2dnbGVDbGFzcyBcImNyb3NzXCJcbiwgMTUwMFxuXG4kKFwiZGl2XCIpLmNsaWNrIC0+XG4gIGNsZWFySW50ZXJ2YWwgaVxuICAkKFwiZGl2XCIpLnRvZ2dsZUNsYXNzIFwiY3Jvc3NcIlxuXG5yZXNpemUgPSAtPlxuICAkKFwiYm9keVwiKS5jc3NcbiAgICBcIm1hcmdpbi10b3BcIjogfn4oKHdpbmRvdy5pbm5lckhlaWdodCAtIDE1MCkgLyAyKSArIFwicHhcIlxuICAgIFxuJCh3aW5kb3cpLnJlc2l6ZSByZXNpemVcbnJlc2l6ZSgpXG4iXX0=
//# sourceURL=coffeescript
