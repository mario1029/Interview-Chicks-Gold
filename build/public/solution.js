// DOM elements
let x = document.getElementById("x");
let y = document.getElementById("y");
let z = document.getElementById("z");
let btn = document.getElementById("solve");
let output = document.getElementById("output");
let movements = document.getElementById("movements");

btn.addEventListener("click", function () {
  //console.log("%d,%d,%d,",x.value,y.value,z.value)
  movements.innerHTML = "";

  output.innerHTML = "";
  let _datos = {
    x: x.value,
    y: y.value,
    z: z.value,
  };
  fetch("/water/solution", {
    method: "POST",
    body: JSON.stringify(_datos),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.status == 200) {
        for (var i = 0; i < json.movements.length; i++) {
          output.innerHTML += `<p>
    <strong>X:${json.movements[i].x}-Y:${json.movements[i].y}</strong>--OP=${json.movements[i].op}
  </p>`;
        }
      }else{
        output.innerHTML += `<p>
    <strong>${json.message}
  </p>`;
      }
    })
    .catch((err) => console.log(err));
});
