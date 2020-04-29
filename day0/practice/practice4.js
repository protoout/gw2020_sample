const myPoint = 100; //自分の点数
const passingScore = 80; //合格ライン

if(myPoint === 100){
    console.log('大変よくできました。');
}else if(myPoint === 0){
    console.log('もっとがんばろう');
}else if(myPoint >= passingScore){
    console.log('合格');
    console.log('おめでとう');
}else{
    console.log('不合格');
    console.log('残念！');
}