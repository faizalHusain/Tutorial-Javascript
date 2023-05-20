// setTimeout(myFunction, 3000);
// function myFunction() {
//   console.log("Hello World!");
// }
// console.log("Selamat Datang!");

async function ambilDataActivity() {
  try {
    const response = await fetch("https://www.boredapi.com/api/activity");
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
ambilDataActivity();
console.log("Selamat Datang!");
