let somar;

function soma(){
        var value1 = document.querySelector('#num1').value
        var value2 = document.querySelector('#num2').value
        var num1 = Number(value1)
        var num2 = Number(value2)
        somar = num1 + num2
        
        if(value1 === ""){
                alert('Preencha o primeiro campo')
                return
                
        }
        if(value2 === ""){
                alert('Preencha o segundo campo')
                return
        }else{
             alert(`O resultado foi ${somar}`)   
        }
        
} 




 
    

