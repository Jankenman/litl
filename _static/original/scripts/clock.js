const clock = () => {
  const date = new Date();
  document.getElementById("hours").innerText = date.getHours();
  document.getElementById("minutes").innerText = date.getMinutes();
  document.getElementById("seconds").innerText = date.getSeconds();
}

const main = () => {
  clock();
  setInterval(clock, 100)
}

main();