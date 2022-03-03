function hesapla(){

      let not1=document.getElementById("birnot").value 
       let not2=document.getElementById("ikinot").value 
       let perf=document.getElementById("perf").value



       let ortalama=(not1*1+not2*1+perf*1)/3..toFixed(1)

       if(ortalama<=50){
              document.getElementById("sonuc").innerHTML="kaldınız"+ ortalama.toFixed(1)

       }
       else {
              document.getElementById("sonuc").innerHTML="geçtiniz"+ ortalama.toFixed(1)
       }



}
