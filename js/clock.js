setInterval(() => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  document.querySelector("h2#clock").innerText = `${hours}:${minutes}`;
});
