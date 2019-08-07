'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * @return {Array or Object} returns a new array or object with each element changed by the function
 */
 
function each(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    }
    else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/** identity: returns the given value unchanged
 * @param  {any value} anyValue: any given value to be return unchanged
 *   _.identity(5) === 5
 *   _.identity({a: "b"}) === {a: "b"}
 * @return {anyValue} returns the given value unchanged
 */

function identity(anyValue) {

    return anyValue
}

module.exports.identity = identity

/** typeOf: takes any value and returns the types of values.
 * Potential types include   
 *          - "string"
 *          - "array"
 *          - "object"
 *          - "undefined"
 *          - "number"
 *          - "boolean"
 *          - "null"
 *          - "function"
 * @param {any value}  any value: that will have they typeOf returned
 * 
 * @return {string} returns a string of the typeOf given value
 */
 

function typeOf(anyValue) {
    if (Array.isArray(anyValue)) {
        return 'array'
    }
    else if (anyValue === null) {
        return 'null'
    }
    else return typeof anyValue;
}
    
    module.exports.typeOf = typeOf
    
/**first : Returns the first items in the array. Number of items returns is equal to number. 
 * Returns empty array if array is not an array.
 * If number is not given or not a number 
 * @param  {Array} array: that first will be performed on
 * @param  {Number}number: that represent the number of items returned starting at 0
 * 
 * @return {Array} returns a new array of the first element(s) in the given array

 */
 function first(anArray, number) {

     var result = []
     if (Array.isArray(anArray) !== true) {
         return []
     }
     else if (isNaN(number) || number === undefined) {
         return anArray[0]
     }
     else
         for (var i = 0; i < number; i++) {
             if (anArray[i] === undefined) {

             }
             else
                 result.push(anArray[i])
         }
     return result
 }
module.exports.first = first

  /**last : Returns the last items in the array. Number of items returns is equal to number. 
   * Returns empty array is array is not an array.
   * If number is not given or not a number 
   * @param {Array} array: that will have last performed on it
   *@param {Number} number: that represents the number of items to be returned starting at 0
   * 
   * @return {Array} returns a new array of the last element(s) in  the given array
   */
function last(array, number) {

    var result = []
    if (Array.isArray(array) !== true) {
        return []
    }
    else if (number < 0) {
        return []
    }
    else if (number > array.length - 1) {
        return array
    }
    else if (isNaN(number) || number === undefined || number < 0) {
        return array[array.length - 1]
    }
    else
        for (var i = array.length - 1; i > 0; i--) {
            if (array[i] === undefined) {

            }
            else
                result.unshift(array[i])
        }
    return result
}
module.exports.last = last

/**indexOf: Returns the index of the first occurance of the given value in the given array. 
 * Returns -1 if the value is not in the array. 
 * 
 * @param {Array} array: that will be looped through to find the first occurence of a given value
 * @param {Value} value that is given and will be looked for in the array
 * 
 * @return {number} returns a number that cooresponds to the index of the first occurence of given value
 */
 
 
function indexOf(array, value) {

    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }

    }
    return -1
}

module.exports.indexOf = indexOf



/**contains: Tests if an array contains a given value. Returns a boolean. 
 * @param {Array} array: that will be looped through to find given value
 * @param {anyvalue} value: that will be looked for in the array
 * 
 * @return{boolean} returns true if given array has the given value in it, false if it does not
 */
 
 function contains(array, value) {

     if (value === undefined) {
         return false
     }
     else if (array.includes(value)) {
         return true
     }
     else return false



 }
module.exports.contains = contains

/** unique : takes an array and returns a new arrray with the duplicates removed.
 * @param {Array} array: to loop through to have non duplicate values pushed into new array
 *  
 * @return {Array} returns a new array holding the elements of the given array without duplicates
 */

function unique(array) {

    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray
}

module.exports.unique = unique


/** filter: calls a function for each element in a given array.Function has three arguments ( element, index, array)
 *  
 *  @param {Array} array: that will be looped through and have a function performed on each element, elements that return true will be pushed into a new array
 *  @param {Function} aFunction: that will be performed on each element of the array. Should result in true or false
 * 
 *  @return {Array} Returns a new array with the elements for which calling the function returned true.

 */

function filter(array, aFunction){
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (aFunction(array[i], i, array) === true) {
            newArray.push(array[i]);
        }
    }
    return newArray
}
module.exports.filter = filter

/**reject: Calls an function for each element in array with the arguments (element, index, array).
 * 
 * @param {Array} array: to be looped through and have a function performed on each element
 * @param {Function} function: that is performed on each element of the array
 * 
 * @return {Array} Returns a new array of elements for which the funtion returns false.
 
 */
 
function reject( array, aFunction){

    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (aFunction(array[i], i, array) === false) {
            newArray.push(array[i]);
        }
    }
    return newArray
}
module.exports.reject = reject

/**partition: Returns an array that is made up of 2 sub arrays, one array for all the values that the given function returns true, 
 * another for all the values that the given function returns false.
 * @param {Array} array: that will be looped through to find elements that return true and false values
 * @param {Function} aFunction: that is performed on all elements in an array and should return true or false values
 * 
 * @returns {Array} returns an array of 2 sub arrays
 */
 
function partition(array, action) {

    var newArray = [];
    var subArray1 = [];
    var subArray2 = [];
    each(array, function(elements, i, array) {
        if (action(array[i], i, array) === true) {
            subArray1.push(array[i]);
            return subArray1
        }
        else if (action(array[i], i, array) === false) {
            subArray2.push(array[i]);
            return subArray2

        }


    });
    newArray.push(subArray1, subArray2)
    return newArray
}
module.exports.partition = partition
/**map: 
* Calls a funcion for each element in a collection. Returns the new values in an array.
*   @param {Obeject or Array} collection: an object or array to be looped through and have a function performed on each element in the collection
*   @param {funciton} function: that is performed on each element in an array 
*   @return {Array} returns an array of the elements that have been altered by the function

*/

function map(collection, aFunction) {
    var newArray = []

    each(collection, function(element, i, collection) {
        newArray.push(aFunction(element, i, collection))
    })
    return newArray
}
module.exports.map = map

/*pluck: Returns an array containing the value of <property> for every element in the array. 

 *  @param {Array} Array: of objects that will be looped through to find the elements with the same property as given
 *  @param {String} Property: that will be looked for in an array of objects 
 *
 *  @return {Array} returns an array containing the value of the given property for every object in the given array
 */
 
 function pluck(arrObj, property) {

     var newArray = []
     map(arrObj, function(element) {
         newArray.push(element[property])
     })
     return newArray;
 }
 
/**every: Calls a function for every element of the collection. If the returned value for every element
 * is true it returns true. If even one value returns false. Returns false.
 * @param {Object or Array} collection: object or array that will be looked through to discover if every element in the collection returns true
 * @param {function} aFunction: that is performed on every element in a collection will return boolean value
 * 
 * @return {Boolean} returns a true or false value
 */

module.exports.pluck = pluck
function every(collection,aFunction){

    if (typeof aFunction !== 'function') {
        if (contains(collection, false)) {
            return false
        }
        else {
            return true
        }
    }
    var answer = _.map(collection, function(element, i, collection) {

        return aFunction(element, i, collection)
    })
    if (_.contains(answer, false)) {
        return false
    }
    return true
}

module.exports.every = every
/* some: calls a function for every element of a collection.If at least one element in the collection
 * returns true it returns true. If all elements are false, returns false.
 *  @param {Array or Object} collection can be array or object that will be looked through to discover if at least one element returns trye
 *  @param {Function}  A function that takes (element , index , collection) as its parameters and is performed on every element in a collection will return boolean values
 *
 *  @return {Boolean} returns a true or false value
 */

function some( collection, aFunction){
    if (typeof aFunction !== 'function') {
        if (contains(collection, true)) {
            return true
        }
        else {
            return false
        }
    }
    var answer = _.map(collection, function(element, i, collection) {

        return aFunction(element, i, collection)
    })
    if (_.contains(answer, true)) {
        return true
    }
    return false
}

module.exports.some = some

/**reduce: Calls a function for every element in the array. Uses provided seed at start if iteration
 * then uses the result of the previous itteration as seed and continues untill out of array elements. 
 *Returns the value of the final function call.
 * @param {array} An array that will be looped through and have a function performed on each element  
 * @param {function}A function that acts on each element in the array 
 * @param {any datatype?} seed that is the starting point of the function. The seed should be the datatype which you wish to return
 * 
 * @return {any datatype?} returns data type that matches given seed, returns singe value of what the elements of the array resolve to through the function
 */
 
 function reduce(array,aFunction, seed){
 
if( seed === undefined){
    previousResult = array[0]
    for( var i = 1; i < array.length; i++){
      var previousResult = aFunction(previousResult, array[i], i)
    }
} else {
    previousResult = seed
    for ( var i = 0; i < array.length; i++){
       var previousResult = aFunction(previousResult,array[i],i)
    }
} return previousResult
}

module.exports.reduce = reduce

/** extend: takes the properties of a given object and coppies them into the first object given, works 
 *  on as many parameters as needed.
 * @param {object} Object1, an object that other object's properties are coppied into
 * @param {object} Object2, an object that properties are coppied from
 * 
 * @return {Object} returns an object with other objects properties coppied into it
*/

function extend(object1,object2){
    var args = Array.from(arguments)
  for( var i=1; i < args.length; i++){
         for( var key in args[i]){
        Object.assign(args[0],args[i])
  }
 
    } return args[0]
}

module.exports.extend = extend

