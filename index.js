// 1st assignment
// add all the count values in res using for loop and console the sum as output.
const res = [
  {
    count: 1,
  },
  {
    count: 2,
  },
  {
    count: 3,
  },
];

let sum = 0;
for (let i = 0; i < res.length; i++) {
  sum += res[i].count;
}
console.log(sum);

// 2nd assignment
// add all the count values in response using for loop and console the sum as output.

const response = {
  maran: {
    count: 1,
  },
  gas: {
    count: 2,
  },
  prelude: {
    count: 5,
  },
  keys: ['maran', 'gas', 'prelude'],
};
let sum2 = 0;
for (let i in response) {
  if (response[i]['count'] == parseInt(response[i]['count'])) {
    sum2 += response[i]['count'];
  }
}

// 3rd assignment
// change the 'HI' Text color on clicking of button.
const btn = document.querySelector("button")
btn.addEventListener("click",()=>{
document.getElementById("h1Tag").style.color = "blue"
})