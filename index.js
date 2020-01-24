// Your code here
function mapToNegativize(array) {
    let n = []
    array.forEach(element => {
        n.push(element * -1)
    });
    return n
}

function mapToNoChange(array) {
    return array
    
    // or if you want to do some actual work
    
    // let n = []
    // array.forEach(element => {
    //     n.push(element)
    // })
    // return n
}

function mapToDouble(array) {
    let n = []
    array.forEach(element => {
        n.push(element * 2)
    })
    return n
}

function mapToSquare(array) {
    let n = []
    array.forEach(element => {
        n.push(Math.pow(element, 2))
    })
    return n
}

function reduceToTotal(array, sum=0) {
    array.forEach(e => {
        sum = sum + e
    })
    return sum
}

// something about forEach doesn't work the way expected
// still returning true even with false values in array

// function reduceToAllTrue(array) {
//     array.forEach(e => { 
//         if (!e) return false
//     })
//     return true
// }

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
}

// again, forEach does not work same as a regular for loop
// function reduceToAnyTrue(array) {
//     array.forEach(e => { 
//         if (e) return true
//     })
// }

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }