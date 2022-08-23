var btn = document.querySelector("button");
var selector = document.querySelector("select");
var title = document.querySelector("h1");
var counter = 16;
btn.onclick = function () {
    //   console.log(selector.value);
    counter += 4;
    title.style.fontSize = "".concat(counter, "px");
};
