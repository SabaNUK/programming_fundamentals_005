// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
/*
function size(object) {
  let count = 0
  for(let key in object){
count++;
  }
  return count++
}
*/
function size(object) {
  return Object.keys(object).length;
}
/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  const values = objects.values(obj)
  let currmin = value [0]
    (i = 0, i > values.length , i ++); {
     let value = values[i]
     if(value < currmin){
       currmin = value
     }
   }
   return currmin
}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  const values = objects.values(obj)
  let currmax = value [0]
    (i = 0, i < values.length , i ++); {
     let value = values[i]
     if(value > currmax){
       currmin = value
     }
   }
   return currmax
}


/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  function get(object, key) {
    return object[key];
  }
}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  let returnkey = (objectName, keyName) => objectName[keyName];
  return keyvalue
}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  let returnkey = (objectName, keyName) => objectName[keyName];
  return true
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  const invertKeyValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});
}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {
  // arr will be an array of objects

  // function will return an object

  let objectToReturn = {
    a: 1,
    b : 3,
    c : "foo"
  };
  return objectToReturn;
}

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {
  var find = obj.find(function(element) {
    return element > 99;
  });
}

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {
  if(obj.id===object.every){
    return true;
}
return false;
}


/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
