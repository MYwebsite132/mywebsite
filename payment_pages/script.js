// List of wallet addresses
const wallets = [
    "bc1qp04409t2p0r605usvreapx95jea2tg0eca0d8y",
    "bc1qc5dmqgugx8a7d2njfjfk85s3nq044hhrfufu08",
    "bc1q3672ynu8quxmjp0v98wjde3sh32apxrmagkn8s",
    "bc1qzc2h7mpkyy7p6yhmlfpju06t2gkq2nncvtmwag",
    "bc1qyqus8p8l5k7nrf8f5vuk7a7ft8va6677t32ylw",
    "bc1qmp6z7e5s34r2ervmz2p29rnklzcmadue7d3dpr",
    "bc1ql4x0fv34tlxupe0wl7rczsvsyh0n5lhs6gmty9",
    "bc1qc2pgmkl0xh3h05x6f82x30vgn723jhm7pu8ll6",
    "bc1qxlg6p2kevm96cg2nh0ck0l6xsjhc4tex5j0r63",
    "bc1qtr5zgupuad6t7w7dy6vfupjh2l7q79padkgmwy"
];

// Define the price for each item
const prices = {
    1: 0.14949456,
    2: 0.04200111,
    3: 0.19080022,
    4: 0.07941116,
    5: 0.65119616,
    6: 0.17992411,
    7: 0.12010016,
    8: 0.02967805,
    9: 0.01975995,
    10: 0.03078705
};

// Function to select a random wallet address
function selectRandomWallet() {
    const randomIndex = Math.floor(Math.random() * wallets.length);
    return wallets[randomIndex];
}

// Function to display wallet and generate the payment link/QR code
window.onload = function() {
    const itemNumber = window.location.pathname.split('/')[1].replace('.html', ''); // Get item number from URL
    const price = prices[itemNumber];
    const selectedWallet = selectRandomWallet();
    
    // Display the selected wallet and price
    document.getElementById('walletAddress').textContent = selectedWallet;
    document.getElementById('paymentLink').href = 'bitcoin:' + selectedWallet + '?amount=' + price;
    
    // Generate QR Code
    const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: 'bitcoin:' + selectedWallet + '?amount=' + price,
        width: 200,
        height: 200
    });
};
