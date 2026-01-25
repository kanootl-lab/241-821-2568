function summitData(){
    let firstnameDom=document.querySelector('input[name=firstname]');
    let lastnameDom=document.querySelector('input[name=lastname]');
    let ageDom=document.querySelector('input[name=age]');
    let genderDom=document.querySelector('input[name=[gender]:check');
    let interestDom=document.querySelectorAll('input[name=interest]:check')
    let descriptionDom=document.querySelector('textarea[name=description]')

    let interest=''
    for (let i =0;i<interestDom.length;i++){
        interest+=interestDom[i].value
        if(i!=interestDom.length-1){
            interest+= ','
        }
    }
    let userdata={
    firstname:firstnameDom.value,
    lasename: lastnameDom.value,
    age:ageDom.value,
    gender:genderDom.value,
    description:descriptionDom.value,
    interest:interest
}
console.log('summitData',userdata)
}
