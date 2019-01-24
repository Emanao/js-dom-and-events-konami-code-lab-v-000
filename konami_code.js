const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector("body");
  let index = 0;

  body.addEventListener('keydown', function(e){
  const key = parseInt(e.detail || e.keyCode);
  console.log(key)
  if (e.keyCode === 16 || e.keyCode === 20) {
    return e.preventDefault()
  }
  if (key === code[index]) {
    index++;
    console.log(key)

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
  })

}
