// const gifts = ["teddy bear", "drone", "doll"]
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//       console.log(`Wrapped ${gifts[i]} and added a bow!`);
//       debugger;
//     }
  
//     return gifts;
//   }
  
//   wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(names, event) {
    return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
 }
 
 console.log(writeCards(names, "surprise"))

 function countDown (){
    let countDown = 0;
while (countDown < 11) {
  console.log(countDown++);
}
 }