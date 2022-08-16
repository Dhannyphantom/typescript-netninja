const btn: HTMLButtonElement = document.querySelector("button")!;
const selector: HTMLSelectElement = document.querySelector("select")!;

btn.onclick = () => {
  console.log(selector.value);
};
