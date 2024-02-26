function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
  
    document.querySelector(".theme-name").textContent = newTheme;
  }
  
  document.querySelector(".theme-toggle").addEventListener("click", setTheme);
  
  const isDarkMode = false;
  
  document.documentElement.setAttribute(
    "data-theme",
    isDarkMode ? "dark" : "light"
  );
  
  document.body.style.display = "block";
  