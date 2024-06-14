let courses=["HTML","CSS","Javascript","React","node.js","java"];
console.log("orginal array:"+courses);


//let lastElement = courses.pop();
//console.log("After Removed the last elemental: "+courses);

//let firstElamental=courses.shift();
//console.log("After Removed the first element:"+courses);

courses.splice(1,4)
console.log("After Removed 2 element starting from index 1:"+courses);