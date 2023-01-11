const check = (path) => {
  if (location.protocol !== "http:" && location.protocol !== "https:") {
    location.href = path + "error.html";
  }
};
