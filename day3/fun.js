// // --> function


// function fun(a,b){
//     return a+b
// }

// r=fun(5,10)
// console.log(r)

// // -->default parameter


// // 1>
// function fun(a,b=1){
//     return a+b
// }

// r=fun(5)
// console.log(r)

// // 2>
// function myfun(x,y=20, z=30){
//     console.log(x,y,z)
//     return x+y+z
// }
                                                  
// r=myfun(1,null)
// console.log(r)


// output: 1 null 30
//       : 31


// //--> rest parameters


// //1>
// function fun(x,y,...z){
//     console.log(x,y,z)
//     // console.log({x,y,z})
    
// }
// fun(10, 20,30,40,50,60,70)
// fun(10, 20,30,40,"hello",60,70)
    
// output: 10 20 [ 30, 40, 50, 60, 70 ]
// output: { x: 10, y: 20, z: [ 30, 40, 'hello', 60, 70 ] }
    
    
// //2>
// function sum(...theArgs){
//     let total=0;
//     for(const arg of theArgs){
//         total+=arg
//     }
//     return total
// }
// console.log(sum(1,2,3)) 
        
// // output:
// 6
        
// //3>
// function myfun(a,b, ...manyMoreArgs){
//     console.log("a",a)
//     console.log("b",b)
//     console.log("manyMoreArgs",manyMoreArgs)
// }
// myfun(1,2,3,4,5,6,7,8,9);

// // output:
// a 1
// b 2
// manyMoreArgs [
//   3, 4, 5, 6,
//   7, 8, 9
// ]


// // --> Spread operator: allow us to quickly copy all or part of an existing array
// // into another array

// // 1>
// const a=[1,2,3]
// const b=[4,5,6]
// const c=[...a,...b]
// console.log(c)

// // output:
// [ 1, 2, 3, 4, 5, 6 ]








