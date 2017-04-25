// String methods

// Length

var name = "Chris";
console.log(name.length);
console.log("Chris".length);

// Finding a string in a String
var string = "Please locate where 'locate' occurs";
var pos = string.indexOf('locate');
console.log(pos);

//  the indexOf() method will return the index of the first occurence of the argument

pos = string.lastIndexOf('locate');
console.log(pos);

// lastIndexOf() will return the last occurence of the argument, if the argument is longer than one character it will return the index of the first character of the argument, i.e. the 'l' in 'location'

pos = string.search('locate');
console.log(pos);

// search() and IndexOf() look like they do the exact same thing, however search() can handle regular expressions. If you aren't using regEx then indexOf() is faster.

// Methods for extracting string parts

// slice(start, end)
// substring(start, end)
// substr(start, length)

// Slice() extracts a part of a string and returns the extracted part in a new string

string = "Christopher Lamkin";
var firstName = string.slice(0, 11);
console.log(firstName);
console.log(string);

// Also notice that this method is not destructive, the original string remains the same
// if the parameter is negative the position is counted from the end of the string

var fruits = 'Apple, Banana, Kiwi';
var banana = fruits.slice(-12, -6);
console.log(banana);

var fullName = "Christopher Lamkin";
var lastName = fullName.slice(-6);
console.log(lastName);
// you won't be able to access the last character with a negative value, but if you only give it one negative argument it will return the rest of the substring from that point on.
var firstName = fullName.slice(-18, -6);
console.log(firstName);

// substring() essentially the same thing as slice() but cannot accept negative numbers

//substr() is similar but instead of a stop index for a second parameter it accepts the length of the extraction

fullName = "Claudia Rivera";
lastName = fullName.substr(8, 6);
console.log(lastName);

// Replacing String Content
// replace() replaces a specified value with another value in a string

var welcome = "Welcome to Microsoft";
var google = "Google";

var welcome2 = welcome.replace("Microsoft", google);
console.log(welcome2);
console.log(welcome);
// Also non-destructive, returns a new string with the replacement
