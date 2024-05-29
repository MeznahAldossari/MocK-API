let url = "https://665736969f970b3b36c8658a.mockapi.io/login";

let user = document.getElementById("username");
let image = document.getElementById("image");

async function Adding() {
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      imageName: user.value,
      image: image.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  window.location.reload();
}

function deleting(id) {
  fetch(`https://665736969f970b3b36c8658a.mockapi.io/login/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => window.location.reload());
}

async function loading() {
  let res2 = await fetch(url);

  let data = await res2.json();
  data.forEach((e) => {
    let element = document.createElement("div");
    let image = document.createElement("img");
    let btn = document.createElement("button");

    let p = document.createElement("p");
    let mainDive = document.getElementById("div1");

    image.src = e.image;

    p.innerText = e.imageName;
    btn.innerText = "Delete";
    btn.style.width = "50px";

    console.log(e.id);
    btn.setAttribute("onclick", `deleting(${e.id})`);
    btn.style.height = "20px";
    // x = document.getElementById(e.id);

    element.classList.add("div2");
    image.classList.add("img");

    element.appendChild(image);
    element.appendChild(p);
    element.appendChild(btn);
    mainDive.appendChild(element);
    // deletes = document.getElementsByClassName("delete")[0];

    // deletes.addEventListener("click", () => {
    //   let btns = document.getAttribute(id);
    //   deleting(btns);
    // });
    // mainDive.preventDefault();
  });
}

loading();
