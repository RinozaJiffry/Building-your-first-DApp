const web3 = new Web3(window.web3.currentProvider);

const btn = document.getElementById("connect");

btn.addEventListener('click', ()=>{
    window.web3.currentProvider.enable();
});