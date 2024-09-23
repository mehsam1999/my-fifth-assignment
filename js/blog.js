// blog to home page navigation
function getHtmlByLocation(id){
    return document.getElementById(id).addEventListener('click',function(){
        window.location.href = '/home.html';
})
}
const home = getHtmlByLocation('blog');
// donation value
function getValueById(id) {
    let inputDonation = parseFloat(document.getElementById(id).value);
    return inputDonation;
}

// total donation amount and main balance
function getInnerNumberById(id) {
    let number = parseFloat(document.getElementById(id).innerText);
    return number;
}
// addLisener add to btn-noakhali
const calculateDonationNoakhali = document.getElementById('btn-noakhali').addEventListener('click',function(){
    const donationAmountOne = getValueById('amount-noakhali');
    const donationAmountNoakhali = getInnerNumberById('donation-noakhali')
    const mainBalance = getInnerNumberById('balance')
    const totalDonationNoakhali = donationAmountNoakhali + donationAmountOne ;
    const remainingBalance = mainBalance - donationAmountOne;
    document.getElementById('donation-noakhali').innerText = totalDonationNoakhali.toFixed(2);
    document.getElementById('balance').innerText = remainingBalance.toFixed(2);
})
// addLisener add to btn-feni
const calculateDonationFeni = document.getElementById('btn-feni').addEventListener('click',function(){
    const donationAmountTwo = getValueById('amount-feni');
    const donationAmountFeni = getInnerNumberById('donation-feni')
    const mainBalance = getInnerNumberById('balance')
    const totalDonationFeni = donationAmountFeni + donationAmountTwo ;
    const remainingBalance = mainBalance - donationAmountTwo;
    document.getElementById('donation-feni').innerText = totalDonationFeni.toFixed(2);
    document.getElementById('balance').innerText = remainingBalance.toFixed(2);
})
// addLisener add to btn-quota
const calculateDonationQuota = document.getElementById('btn-quota').addEventListener('click',function(){
    const donationAmountThree = getValueById('amount-quota');
    const donationAmountQuota = getInnerNumberById('donation-quota')
    const mainBalance = getInnerNumberById('balance')
    const totalDonationQuota = donationAmountQuota + donationAmountThree ;
    const remainingBalance = mainBalance - donationAmountThree;
    document.getElementById('donation-quota').innerText = totalDonationQuota.toFixed(2);
    document.getElementById('balance').innerText = remainingBalance.toFixed(2);
})