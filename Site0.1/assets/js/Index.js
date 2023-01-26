

//connect BTN
document.getElementById("connect").addEventListener("click", async () => {
if (typeof window.ethereum !== 'undefined') {
  window.web3 = new Web3(ethereum);
try {
 // Request account access if needed
  await ethereum.enable();  
    // Acccounts now exposed
    web3.eth.sendTransaction({/* ... */});
      } catch (error) {
        // User denied account access...
      }
    }
      // Legacy dapp browsers...
      else if (typeof window.web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    });
        window.addEventListener('load', async () => {
          var accounts = await web3.eth.getAccounts();
          if (window.ethereum) {
            try {
              initPayButton()
            } catch (err) {
              $('#status').html('Utilizatorul a respins accesul', err)
            }
          } else if (window.web3) {
            initPayButton()
          } else {
            $('#status').html('Nu aveti MetaMask instalat!')
          }
        })

//pay btn
        const initPayButton = () => {
          $('.pay-button').click(() => {
            // paymentAddress is where funds will be send to
            const paymentAddress = '0x42B348c98dB0A60401b818AA9f9fBCDa786e5754'
            const amountEth = 0.01 * document.getElementById('amount').value

            if(document.getElementById("amount").value ==1){
              web3.eth.sendTransaction({
              to: paymentAddress,
              value: web3.toWei(amountEth, 'ether')
            }, (err, transactionId) => {
              if  (err) {
                console.log('Plata esuata, fonduri indisponibile', err)
                $('#status').html('Plata esuata, fonduri indisponibile')
              } else {
                console.log('Plata efectuata cu succes', transactionId)
                $('#status').html('Plata efectuata cu succes')
              }
            })
            }
            else if(document.getElementById("amount").value ==2){
              web3.eth.sendTransaction({
              to: paymentAddress,
              value: web3.toWei(amountEth, 'ether')
            }, (err, transactionId) => {
              if  (err) {
                console.log('Plata esuata, fonduri indisponibile', err)
                $('#status').html('Plata esuata, fonduri indisponibile')
              } else {
                console.log('Plata efectuata cu succes', transactionId)
                $('#status').html('Plata efectuata cu succes')
              }
            })
            }
              else if(document.getElementById("amount").value ==3){
                web3.eth.sendTransaction({
                to: paymentAddress,
                value: web3.toWei(amountEth, 'ether')
              }, (err, transactionId) => {
                if  (err) {
                  console.log('Plata esuata, fonduri indisponibile', err)
                  $('#status').html('Plata esuata, fonduri indisponibile')
                } else {
                  console.log('Plata efectuata cu succes', transactionId)
                  $('#status').html('Plata efectuata cu succes')
                }
              })
              }
              else if(document.getElementById("amount").value ==4){
                web3.eth.sendTransaction({
                to: paymentAddress,
                value: web3.toWei(amountEth, 'ether')
              }, (err, transactionId) => {
                if  (err) {
                  console.log('Plata esuata, fonduri indisponibile', err)
                  $('#status').html('Plata esuata, fonduri indisponibile')
                } else {
                  console.log('Plata efectuata cu succes', transactionId)
                  $('#status').html('Plata efectuata cu succes')
                }
              })
              }
              else if(document.getElementById("amount").value ==5){
                web3.eth.sendTransaction({
                to: paymentAddress,
                value: web3.toWei(amountEth, 'ether')
              }, (err, transactionId) => {
                if  (err) {
                  console.log('Plata esuata, fonduri indisponibile', err)
                  $('#status').html('Plata esuata, fonduri indisponibile')
                } else {
                  console.log('Plata efectuata cu succes', transactionId)
                  $('#status').html('Plata efectuata cu succes')
                }
              })
              }
})  
}
