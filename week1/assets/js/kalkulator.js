
var res = document.getElementById('result');
var memori1 = "";
var memori2 = "";
var memori3 = "";
var memori2last = "";
var memori3last = "";
function removeActive(){
  var opt = document.getElementsByClassName('operation');
  var list = Object.keys(opt);
  list.forEach(function(v,i){
    opt[v].classList.remove('active')
  });
}
function persen(){
  res.innerHTML = res.innerHTML/100;
  if(memori2===""){
    memori1 = res.innerHTML
  }else{
    memori3 = res.innerHTML
  }
}
function angka(n){
  if(memori2===""){
    if(memori1.length<8){
      memori1+=n;
      res.innerHTML=memori1;
    }
  }else{
    if(memori3.length<8){
      memori3+=n;
      res.innerHTML=memori3;
    }
  }
  res.innerHTML = res.innerHTML.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
function operasi(e,o){
  removeActive()
  e.classList.add('active');
  if(memori2last!==""&&memori3last!==""){
    memori2last = "";
    memori3last = "";
  }
  if(memori3!==""){
    hitung()
  }
  memori2 = o;
}
function hitung(last=false){
  removeActive()
  if(memori1!=="" && memori2!==""){
    var result = eval(memori1+memori2+memori3);
    memori1 = result;
    res.innerHTML = memori1;
  }
  if(last){
    if(memori2last!==""&&memori3last!==""){
      var result = eval(memori1+memori2last+memori3last);
      memori1 = result;
      res.innerHTML = memori1;
    }else{
      memori2last = memori2;
      memori3last = memori3;
    }
    memori2 = "";
    memori3 = "";
  }else{
    memori3 = "";
  }
  res.innerHTML = res.innerHTML.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
function ubah(){
  if(memori3!==""){
    if(res.innerHTML.slice(0,1)!=="-"){
      memori3 = "-".concat(res.innerHTML);
      res.innerHTML = memori3;
    }else{
      memori3 = res.innerHTML.replace('-','');
      res.innerHTML = memori3;
    }
  }else{
    if(memori1!==""){
      if(res.innerHTML.slice(0,1)!=="-"){
        memori1 = "-".concat(res.innerHTML);
        res.innerHTML = memori1;
      }else{
        memori1 = res.innerHTML.replace('-','');
        res.innerHTML = memori1;
      }
    }
  }
}
function bersihkan(){
  removeActive();
  res.innerHTML = "0";
  memori1 = "";
  memori2 = "";
  memori3 = "";
  memori2last = "";
  memori3last = "";
}