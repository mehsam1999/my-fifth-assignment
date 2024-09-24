// blog to home page navigation
function getHtmlByLocation(id){
    return document.getElementById(id).addEventListener('click',function(){
        window.location.href = './home.html';
})
}
const blog = getHtmlByLocation('blog');
// donation value
function getValueById(id) {
    let inputDonation = parseFloat(document.getElementById(id).value);
    return parseFloat(inputDonation.toFixed(2));
}
// total donation amount and main balance
function getInnerNumberById(id) {
    let number = parseFloat(document.getElementById(id).innerText);
    return parseFloat(number.toFixed(2));
}
//classList.add()
function add(id){
    return document.getElementById(id).classList.add('hidden');
}
//classList.remove()
function remove(id){
    return document.getElementById(id).classList.remove('hidden');
}
//createHistory
function createHistory(donationAmount,destination){
    const historyElement = document.createElement('div');
    historyElement.className = "md:container mx-auto bg-base-100 rounded-lg p-5 border-2 space-y-2 my-10"
    historyElement.innerHTML = `
        <p class="font-bold">${donationAmount} Taka is Donated for Donate for ${destination}</p>
        <div class="bg-gray-100 rounded-lg p-3">
            <p>Date: ${new Date().toString()}</p>
        </div>
    `
    const historySection = document.getElementById('history-sections');
    historySection.appendChild(historyElement)

}
//toggle between donation and history
function toggle(activeTab, inactiveTab, id1, id2, footerVisibility) {
    activeTab.classList.add("bg-green");
    inactiveTab.classList.remove("bg-green");

    document.getElementById(id1).classList.remove('hidden');
    document.getElementById(id2).classList.add('hidden');

    if (footerVisibility) {
        document.getElementById('footer').classList.remove('hidden');
    } else {
        document.getElementById('footer').classList.add('hidden');
    }
}
// Add listener to btn-noakhali
const calculateDonationNoakhali = document.getElementById('btn-noakhali').addEventListener('click', function () {
    const donationAmountOne = getValueById('amount-noakhali');
    const donationAmountNoakhali = getInnerNumberById('donation-noakhali');
    const mainBalance = getInnerNumberById('balance');

    if(donationAmountOne <= 0 || isNaN(donationAmountOne)){
        alert('Invalid Donation Amount')
        add('my_modal_1')
        return;
    }

    const totalDonationNoakhali = donationAmountNoakhali + donationAmountOne;
    const remainingBalance = mainBalance - donationAmountOne;

    if(donationAmountOne > mainBalance){
        alert('Insufficient Balance');
        add('my_modal_1')
        return;
    }

    document.getElementById('donation-noakhali').innerText = totalDonationNoakhali.toFixed(2);
    document.getElementById('balance').innerText = remainingBalance.toFixed(2);
    
    createHistory(donationAmountOne, 'Noakhali, Bangladesh');
});

// addLisener add to btn-feni
const calculateDonationFeni = document.getElementById('btn-feni').addEventListener('click',function(){
    const donationAmountTwo = getValueById('amount-feni');
    const donationAmountFeni = getInnerNumberById('donation-feni')
    const mainBalance = getInnerNumberById('balance')

    if(donationAmountTwo <= 0 || isNaN(donationAmountTwo)){
        alert('Invalid Donation Amount')
        add('my_modal_2');
        return;
    }

    const totalDonationFeni = donationAmountFeni + donationAmountTwo ;
    const remainingBalance = mainBalance - donationAmountTwo;

    if(donationAmountTwo > mainBalance){
        alert('Insufficient Balance');
        add('my_modal_2');
        return;
    }

    document.getElementById('donation-feni').innerText = totalDonationFeni.toFixed(2);
    document.getElementById('balance').innerText = remainingBalance.toFixed(2);

    createHistory(donationAmountTwo, 'Feni, Bangladesh');
})
// addLisener add to btn-quota
const calculateDonationQuota = document.getElementById('btn-quota').addEventListener('click',function(){
    const donationAmountThree = getValueById('amount-quota');
    const donationAmountQuota = getInnerNumberById('donation-quota')
    const mainBalance = getInnerNumberById('balance')

    if(donationAmountThree <= 0 || isNaN(donationAmountThree)){
        alert('Invalid Donation Amount');
        add('my_modal_3');
        return;
    }

    const totalDonationQuota = donationAmountQuota + donationAmountThree ;
    const remainingBalance = mainBalance - donationAmountThree;

    if(donationAmountThree > mainBalance){
        alert('Insufficient Balance');
        add('my_modal_3');
        return;
    }

    document.getElementById('donation-quota').innerText = totalDonationQuota.toFixed(2);
    document.getElementById('balance').innerText = remainingBalance.toFixed(2);

    createHistory(donationAmountThree, 'Aid for Injured in the Quota Movement July 2024');
    
})
// donation , history color change by click
const historyTab = document.getElementById('history');
const donationTab = document.getElementById('donation');
historyTab.addEventListener('click', function() {
    toggle(historyTab, donationTab, 'history-sections', 'donation-sections', false);
});

donationTab.addEventListener('click', function() {
    toggle(donationTab, historyTab, 'donation-sections', 'history-sections', true);
});