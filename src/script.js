const envelope = document.getElementById("envelope");
const fromScale = document.getElementById("from-scale");
const toScale = document.getElementById("to-scale");

function addScaleChanger(control, target) {
  control.addEventListener("input", (event) => {
    const { value } = event.target;
    envelope.contentDocument.getElementById(
      target,
    ).style = `font-size: ${value}vw`;
  });
}

addScaleChanger(fromScale, "from");
addScaleChanger(toScale, "to");

document.getElementById("print").addEventListener("click", () => {
  envelope.contentWindow.print();
});

document.getElementById("font").addEventListener("change", (event) => {
  const { value } = event.target;
  envelope.contentDocument.getElementById("from").style.fontFamily = value;
  envelope.contentDocument.getElementById("to").style.fontFamily = value;
});
