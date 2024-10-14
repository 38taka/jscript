function zei(){
var price=document.getElementById('price').value;
var zeikomi=Math.floor(price*1.1);
var szei=zeikomi-price
document.getElementById('result').innerText= `税込み価格は${zeikomi}円です。消費税は${szei}円です。`;
}
console.log('価格は ${price} です')