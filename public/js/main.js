(() => {
  // <stdin>
  console.log(
    `%c Author %c \u6050\u5496\u5175\u7CD6 %c`,
    "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
    "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
    "background:transparent"
  );
  console.log("\u6050\u5496\u5175\u7CD6\u7684\u4E3B\u9875 https://www.ftls.xyz");
  function switchTheme() {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }
  function loadButtonScript() {
    const switchBtn = document.getElementById("scheme-switch");
    switchBtn.addEventListener("click", function() {
      switchTheme();
    });
    let menuBtn = document.getElementById("nav-menu-switch");
    menuBtn.addEventListener("click", function() {
      let menuPanel = document.getElementById("nav-menu-panel");
      menuPanel.classList.toggle("closed");
    });
  }
  loadButtonScript();
  function setClickOutsideToClose(panel, ignores) {
    document.addEventListener("click", (event) => {
      let panelDom = document.getElementById(panel);
      let tDom = event.target;
      for (let ig of ignores) {
        let ie = document.getElementById(ig);
        if (ie == tDom || ie?.contains(tDom)) {
          return;
        }
      }
      panelDom.classList.add("closed");
    });
  }
  setClickOutsideToClose("nav-menu-panel", ["nav-menu-panel", "nav-menu-switch"]);
  function setHue(hue) {
    const r = document.querySelector(":root");
    if (!r) {
      return;
    }
    r.style.setProperty("--hue", hue);
  }
  function supportsOklchColor() {
    var div = document.createElement("div");
    div.style.color = "oklch(0 0 0)";
    document.body.appendChild(div);
    var isSupported = getComputedStyle(div).color === "oklch(0 0 0)";
    document.body.removeChild(div);
    return isSupported;
  }
  if (!supportsOklchColor()) {
    console.log("Your browser does not support oklch color space.");
  } else {
    console.log("Your browser supports oklch color space.");
    let hue = 250;
    setInterval(function() {
      if (hue >= 360) {
        hue = 0;
      } else {
        hue += 10;
      }
      setHue(hue);
    }, 1e3);
  }
})();
