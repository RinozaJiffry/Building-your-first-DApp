const web3 = new Web3(window.web3.currentProvider);

const btn = document.getElementById("connect");

btn.addEventListener('click', ()=>{
    window.web3.currentProvider.enable();
});


web3.eth.getAccounts().then(accounts =>{
    web3.eth.getBalance(accounts[0]).then(result=>console.log(result))
});  