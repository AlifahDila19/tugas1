function InputData(datautama){
    var w = parseFloat(document.getElementById("firstNum").value)
    var e = parseFloat(document.getElementById("secondNum").value)
    var a = parseFloat(document.getElementById("thirdNum").value)
    var datautama = [w, e, a]
    return datautama;
}

function bubbleSortAsc(data, jumlah){
for(var i=0; i<jumlah-1; i++){
    for(var j=0; j<jumlah-1; j++){
        if(data[j+1]<data[j]){
            var temp=data[j];
            data[j]=data[j+1];
            data[j+1]=temp;
          }
        }
      }
  }

  function ratarata(){
    var data = InputData(data)
    var total = 0;
    for(var i=0; i<data.length; i++){
        total += data[i]
        var hasilRata = total / data.length;
    }

    document.getElementById("rata_rata").innerHTML = hasilRata.toFixed(2);
}

function median(){
    var data = InputData(data)
    var jumlah = data.length
    var hasilmedian
    
    bubbleSortAsc(data, jumlah)

    if(jumlah % 2 == 1){
        hasilmedian = data[Number((jumlah/2)-0.5)];
      } 
    else{
        hasilmedian =(data[jumlah/2]+data[(jumlah+1)/2])/2;
      } 

    document.getElementById("mediann").innerHTML = hasilmedian;
}

function minmax(){
    var data = InputData(data)
    var jumlah = data.length
    var hasilmedian 
    bubbleSortAsc(data, jumlah)
    document.getElementById("maksimum").innerHTML = data[Number(jumlah-1)];
    document.getElementById("minimum").innerHTML = data[0];
}

function hitung(){
    ratarata() 
    median()
    minmax()
}


function hapus() {
    document.getElementById("firstNum").value = "";
    document.getElementById("secondNum").value = "";
    document.getElementById("thirdNum").value = "";
    location.reload()
}