function exam1(point){
    if(point >= 80){
        return '合格';
    }else{
        return '不合格';
    }
}

const result = exam1(79);
console.log(result);

const result2 = exam1(92);
console.log(result2);



// function secom(name){
//     if(name === 'かまくら'){
//         return '入ってよし';
//     }else{
//         return '入れません';
//     }
// }

// const result = secom('のびすけ');
// console.log(result);
// const result2 = secom('かまくら');
// console.log(result2);