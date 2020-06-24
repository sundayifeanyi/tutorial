function calculateTip(){
    // store the data of input
    var billAmount = document.getElementById('billAmount').value
    var serviceQuality = document.getElementById('serviceQuality').value
    var numPeople = document.getElementById('totalPerson').value
    if(billAmount === '' || serviceQuality == 0){
        window.alert('please enter a valid amount');
        return; // this will prevent the function from further execution 
    }
    // check if input is empty
    if(numPeople === '' || numPeople <= 1){
        numPeople = 1;
        document.getElementById('each').style.display = 'none';
    }else{
        document.getElementById('each').style.display = 'block';
    }
    // lets do the math
    var total= (billAmount * serviceQuality)/numPeople;

    total = Math.round(total * 100)/100;
    window.alert(total);
    // display tip
    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = total
}
// hide the tip amount on load
document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';
// button call for custom function
document.getElementById('calculate').onclick = function(){ calculateTip()};
// enjoy ur day