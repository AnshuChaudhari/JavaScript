//Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
//(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
//If array is empty, null or None, or if only 1 Element exists, return 0.


function sumArray(arr){
    if (arr.length <= 1 || arr === null) return 0;

    const maxidx = arr.lastIndexOf(Math.max.apply(null, arr));
    arr.splice(maxidx,1);

    const minidx = arr.lastIndexOf(Math.min.apply(null, arr));
    arr.splice(minidx,1);

    var sum = 0;
    return sum = arr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

}



console.log(sumArray([1, 1, 11, 2, 3 ]));