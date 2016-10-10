'use strict';
/**
 * Remove excess text and add ellipsis symbol
 * to end of text before text overflows container
 * @example
    // 1. add angular-ellipsis file to your index.html file
    <script src="path/to/angular-ellipsis.min.js."></script>


    // 2. add module to your existing angular app
    var myApp = angular.module('myApp', ['sn.ellipsis']);

    // 3. add the sn-ellipsis directive to the element you wish to clip excess text from
    <p sn-ellipsis style="width: 300px; height: 200px;">
      Text to be clipped
    </p>
 * @module   sn.ellipsis
 * @main     sn.ellipsis
 * @author   SOON_
 */
angular.module('sn.ellipsis', [

])
/**
 * @constant
 * @property {String} ellipsis : HTML code for ellipsis symbol
 */
.constant('ellipsis', '&#8230;')
/**
 * @example
 *  <p sn-ellipsis>Lorem Ipsum<p>
 * @class snEllipsis
 */
.directive('snEllipsis', [
  '$document',
  '$timeout',
  'ellipsis',
  '$window',
  function ($document, $timeout, ellipsis, $window){
    return {
      restrict: 'A',
      link: function ($scope, $element){
        /**
         * Store $timeout in variable so we can
         * easily find it and cancel it.
         * @type {Object}
         */
        var timer = null;
        /**
         * @property originalText
         * @type     {String}
         */
        var orginalText = null;
        /**
         * Clip text to fit in element
         * @method clipText
         */
        var clipText = function clipText() {
          if (timer){
            $timeout.cancel(timer);
          }
          timer = $timeout(function () {
            var text = orginalText,
                elementHeight = $element[0].offsetHeight,
                elementWidth = $element[0].offsetWidth,
                testEl = $element[0].cloneNode(true);

            if (elementHeight === 0){
              return;
            }

            testEl.style.maxHeight = 'none';
            testEl.style.height = 'auto';
            testEl.style.width = elementWidth + 'px';

            // apply computed font/padding/margin styles to ensure test element
            // is properly comparable with its visible equivalent
            testEl.style.fontSize = window.getComputedStyle($element[0]).fontSize;
            testEl.style.padding = window.getComputedStyle($element[0]).padding;
            testEl.style.margin = window.getComputedStyle($element[0]).margin;

            // hide test element
            testEl.style.opacity = 0;
            testEl.style.position = 'absolute';
            testEl.style.left = '-999em';
            testEl.innerHTML = text;

            $document[0].body.appendChild(testEl);

            if (testEl.offsetHeight <= elementHeight) {
              $document[0].body.removeChild(testEl);
              return;
            }

            while (testEl.offsetHeight > elementHeight) {
              // backup copy of text
              var _text = text;

              text = text.split(' ');
              text = text.splice(0, (text.length-1)).join(' ');

              // if text is now empty, it means a space char wasn't found
              // (typically in CN or JP strings) - fall back to per-character
              // trimming strategy
              if (text === '') {
                text = _text.slice(0, -1);
              }

              testEl.innerHTML = text + ellipsis;
            }

            $element[0].innerHTML = text + ellipsis;
            $document[0].body.removeChild(testEl);
          }, 100);

        };
        /**
         * Store orginalText in variable then call
         * logic to clip text and add ellipsis if required
         * @method onInit
         */
        var onInit = function onInit() {
          orginalText = $element[0].innerText;
          clipText();
        };
        /**
         * Remove event handler from resize event
         * @method onDestroy
         */
        var onDestroy = function onDestroy(){
          angular.element($window).off('resize');
        };

        angular.element($window).on('resize', clipText);
        $scope.$on('$destroy', onDestroy);

        onInit();

      }
    };
  }
]);
