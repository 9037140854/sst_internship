function appleyOparation(value,oparation){
    return oparation(value);
}
function double(num){
    return num*2;
}
console.log(appleyOparation(4,double));