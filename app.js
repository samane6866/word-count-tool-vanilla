document.querySelector("#btn").addEventListener("click", function (event) {
  let word = document.getElementById("str").value;
  let result = word.length;
  document.querySelector("#output").textContent = result;
});
