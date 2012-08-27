# jQuery Mask

Two simple jquery utility methods for adding and removing an overlay element over another element on the page.

## Usage

Add plugin file to your page and call the follwing api commands.

To add a mask over an element(s)

    $( ".my-selector" ).mask( [options] );

To remove a mask from an element(s)

    $( ".my-selector" ).unmask();

## Options

* opacity - The transparency of the overlay (**Default is 0.8**)
* backgroundColor - The backgrond colour of the overlay (**Default is #ccc**)
* zIndex - The z-index of the overlay (**Default is 9999**)

## Roadmap

* Tests

## License

Licensed under the [MIT](http://www.opensource.org/licenses/MIT) license.