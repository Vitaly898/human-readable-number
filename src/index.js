module.exports = function toReadable (num) {
  let numbersArr = ['','one','two','three','four','five','six','seven','eight',
  'nine', 'ten','eleven','twelve','thirteen','fourteen','fifteen',
  'sixteen','seventeen','eighteen','nineteen','twenty']
  let arrOfTens= ['','','twenty','thirty',
  'forty','fifty','sixty','seventy','eighty','ninety','one hundred']
  let res='';
if(num === 0){
  return res= 'zero';
}
if (num<=20){
  res = numbersArr[num]
}
if (num<=100 && num>20){
  res = `${arrOfTens[Math.trunc(num/10)]} ${numbersArr[num%10]}`
}
if(num>100 && (num%100<20)){
  res = `${numbersArr[Math.trunc(num/100)]} hundred ${numbersArr[num%100]}`
}
 if(num>100 && (num%100>=20)){
   res = `${numbersArr[Math.trunc(num/100)]} hundred ${arrOfTens[Math.trunc((num%100)/10)]} ${numbersArr[num%10]}`
 }
 return res.trim()
}