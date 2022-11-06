const lightswitchOn = document.getElementById("lightswitch-on");
const lightswitchOff = document.getElementById("lightswitch-off");

lightswitchOn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});

lightswitchOff.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

window.addEventListener("load", () => {
  document.body.classList.add(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
});
