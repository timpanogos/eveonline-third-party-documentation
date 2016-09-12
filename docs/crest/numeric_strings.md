# Numeric Strings

Throughout CREST, all integer properties (with some exceptions, such as the [bulk market order resource](https://developers.eveonline.com/blog/article/new-crest-resource-for-bulk-market-orders)) will also have a corresponding `_str` suffixed string property, containing the string representation of the integer value, listed along them.

The `_str` properties are present to ensure that languages which aren't natively capable of handling large 64 bit integers are able to handle them anyway, either using direct string comparison or with the assistance of an arbitrary precision integer library.

An example of this is JavaScript, whose native [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Integer_range_for_Number) type stores all numeric values as [double-precision floating-point](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) values, so loss of precision will occur for integers above 2^53, potentially resulting in unexpected behaviour.
