const arrayCubeRootToJson = arr => {
    if(arr == {} || arr == undefined || arr == true || arr == false) 
        throw new Error('Please enter array with size greater than 0');
    let ans = {};
    arr.forEach(element => {
        if(typeof element !== "number")
            throw new Error('Please enter array of all numbers');
        ans[element] = Math.cbrt(element);
    });
    return ans;
};

// export { arrayCubeRootToJson };


try{
    console.log(arrayCubeRootToJson([1,2,3,12,3]));
}
catch(err) {
    console.log(err);
}
