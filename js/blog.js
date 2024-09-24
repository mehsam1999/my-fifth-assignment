// blog to home page navigation
function getHtmlByLocation(id){
    return document.getElementById(id).addEventListener('click',function(){
        window.location.href = './home.html';
})
}
const home = getHtmlByLocation('blog');
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

// Add listener to the donation button
const calculateDonationNoakhali = document.getElementById('btn-noakhali').addEventListener('click', function () {
    const donationAmountOne = getValueById('amount-noakhali');
    const donationAmountNoakhali = getInnerNumberById('donation-noakhali');
    const mainBalance = getInnerNumberById('balance');

    if(donationAmountOne <= 0 || isNaN(donationAmountOne)){
        alert('Invalid Donation Amount')
        document.getElementById('my_modal_1').classList.add('hidden');
        return;
    }


    const totalDonationNoakhali = donationAmountNoakhali + donationAmountOne;
    const remainingBalance = mainBalance - donationAmountOne;

    if(donationAmountOne > mainBalance){
        alert('Insufficient Coins');
        document.getElementById('my_modal_1').classList.add('hidden');
        return;
    }


    document.getElementById('donation-noakhali').innerText = totalDonationNoakhali.toFixed(2);
    document.getElementById('balance').innerText = remainingBalance.toFixed(2);
    
    const historyElement = document.createElement('div');
    historyElement.className = "md:container mx-auto bg-base-100 rounded-lg p-5 border-2 space-y-2 my-10";
    historyElement.innerHTML = `
        <p class="font-bold">${donationAmountOne} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</p>
        <div class="bg-gray-100 rounded-lg p-3">
            <p >Date: ${new Date().toString()}</p>
        </div>
    `;

    const historySection = document.getElementById('history-sections');
    historySection.appendChild(historyElement);
});

// addLisener add to btn-feni
const calculateDonationFeni = document.getElementById('btn-feni').addEventListener('click',function(){
    const donationAmountTwo = getValueById('amount-feni');
    const donationAmountFeni = getInnerNumberById('donation-feni')
    const mainBalance = getInnerNumberById('balance')

    if(donationAmountTwo <= 0 || isNaN(donationAmountTwo)){
        alert('Invalid Donation Amount')
        document.getElementById('my_modal_2').classList.add('hidden');
        return;
    }

    const totalDonationFeni = donationAmountFeni + donationAmountTwo ;
    const remainingBalance = mainBalance - donationAmountTwo;

    if(donationAmountTwo > mainBalance){
        alert('Insufficient Coins');
        document.getElementById('my_modal_2').classList.add('hidden');
        return;
    }

    document.getElementById('donation-feni').innerText = totalDonationFeni.toFixed(2);
    document.getElementById('balance').innerText = remainingBalance.toFixed(2);

    const historyElement = document.createElement('div');
    historyElement.className = "md:container mx-auto bg-base-100 rounded-lg p-5 border-2 space-y-2 my-10"
    historyElement.innerHTML = `
        <p class="font-bold">${donationAmountTwo} Taka is Donated for Donate for Flood at Feni, Bangladesh</p>
        <div class="bg-gray-100 rounded-lg p-3">
            <p>Date:Date: ${new Date().toString()}</p>
        </div>
    `
    const historySection = document.getElementById('history-sections');
    historySection.appendChild(historyElement, historySection.firstChild)
})
// addLisener add to btn-quota
const calculateDonationQuota = document.getElementById('btn-quota').addEventListener('click',function(){
    const donationAmountThree = getValueById('amount-quota');
    const donationAmountQuota = getInnerNumberById('donation-quota')
    const mainBalance = getInnerNumberById('balance')

    if(donationAmountThree <= 0 || isNaN(donationAmountThree)){
        alert('Invalid Donation Amount');
        document.getElementById('my_modal_3').classList.add('hidden');
        return;
    }

    const totalDonationQuota = donationAmountQuota + donationAmountThree ;
    const remainingBalance = mainBalance - donationAmountThree;

    if(donationAmountThree > mainBalance){
        alert('Insufficient Coins');
        document.getElementById('my_modal_3').classList.add('hidden');
        return;
    }

    document.getElementById('donation-quota').innerText = totalDonationQuota.toFixed(2);
    document.getElementById('balance').innerText = remainingBalance.toFixed(2);

    const historyElement = document.createElement('div');
    historyElement.className = "md:container mx-auto bg-base-100 rounded-lg p-5 border-2 space-y-2 my-10"
    historyElement.innerHTML = `
        <p class="font-bold">${donationAmountThree} Taka is Donated for Donate for Aid for Injured in the Quota Movement July 2024</p>
        <div class="bg-gray-100 rounded-lg p-3">
            <p>Date:Date: ${new Date().toString()}</p>
        </div>
    `
    const historySection = document.getElementById('history-sections');
    historySection.appendChild(historyElement, historySection.firstChild)
})
// donation , history color change by click
const historyTab = document.getElementById('history');
const donationTab = document.getElementById('donation');
historyTab.addEventListener('click', function(){
    historyTab.classList.add("bg-green");
    donationTab.classList.remove("bg-green");
    document.getElementById('donation-sections').classList.add('hidden')
    document.getElementById('footer').classList.add('hidden')
    document.getElementById('history-sections').classList.remove('hidden')
})
donationTab.addEventListener('click', function(){
    historyTab.classList.remove("bg-green");
    donationTab.classList.add("bg-green");
    document.getElementById('donation-sections').classList.remove('hidden')
    document.getElementById('footer').classList.remove('hidden')
    document.getElementById('history-sections').classList.add('hidden')
})