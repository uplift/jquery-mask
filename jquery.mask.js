/**
 * jquery.mask - overlay dom elements with a mask element
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function( $ ) {

    $.fn.extend({
        mask: function( options ) {
            if ( this.length === 0 ) { return; }

            var defaults = {
                    opacity             : 0.8,
                    backgroundColour    : "#ccc",
                    zIndex              : 9999
                },
                opts = $.extend( {}, defaults, options );

            return this.each(function() {
                var height = $( this ).height(),
                    width = $( this ).width(),
                    offset = $( this ).offset(),
                    top = offset.top,
                    left = offset.left;

                $( this ).append( "<div class='element-mask'></div>" );
                $( this ).find( ".element-mask" ).css({
                    "position"          : "absolute",
                    "opacity"           : opts.opacity,
                    "height"            : height,
                    "width"             : width,
                    "top"               : top,
                    "left"              : left,
                    "background-color"  : opts.backgroundColour,
                    "z-index"           : opts.zIndex
                });
            });
        },

        unmask: function() {
            if ( this.length === 0 ) { return; }

            return this.each(function() {
                $( this ).find( ".element-mask" ).remove();
            });
        }
    });

}( jQuery ));