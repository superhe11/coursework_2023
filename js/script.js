document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.header-right a');

tabs.forEach(tab => {
  tab.addEventListener('mouseover', () => {
    tab.style.color = 'rgb(210,7,83)';
  });
  
  tab.addEventListener('mouseout', () => {
    tab.style.color = '';
  });
});
})

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll('.burger a');

tabs.forEach(tab => {
tab.addEventListener('mouseover', () => {
  tab.style.color = 'rgb(210,7,83)';
});

tab.addEventListener('mouseout', () => {
  tab.style.color = '';
});
});
})




/*document.addEventListener("DOMContentLoaded", function () {
  const menuLink = document.getElementById('menu-link');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  menuLink.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block';
  });

  menuLink.addEventListener('mouseout', () => {
    dropdownMenu.style.display = 'none';
  });

  dropdownMenu.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block';
  });

  dropdownMenu.addEventListener('mouseout', () => {
    dropdownMenu.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".header-right a");
  const dropdownMenu = document.querySelector(".dropdown-menu-container");

  tabs.forEach((tab) => {
    tab.addEventListener("mouseover", () => {
      tab.style.color = "rgb(210,7,83)";
      if (tab.textContent === "Афиша") {
        dropdownMenu.classList.add("visible");
      }
    });

    tab.addEventListener("mouseout", () => {
      tab.style.color = "";
      if (tab.textContent === "Афиша") {
        dropdownMenu.classList.remove("visible");
      }
    });
  });

  dropdownMenu.addEventListener("mouseover", () => {
    dropdownMenu.classList.add("visible");
  });

  dropdownMenu.addEventListener("mouseout", () => {
    dropdownMenu.classList.remove("visible");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".header-right a");
  const dropdownMenu = document.querySelector(".dropdown-menu-container");

  tabs.forEach((tab) => {
    tab.addEventListener("mouseover", () => {
      tab.style.color = "rgb(210,7,83)";
      if (tab.textContent === "Афиша") {
        dropdownMenu.classList.add("visible");
      }
    });

    tab.addEventListener("mouseout", () => {
      tab.style.color = "";
      if (tab.textContent === "Афиша") {
        dropdownMenu.classList.remove("visible");
      }
    });
  });

  dropdownMenu.addEventListener("mouseover", () => {
    dropdownMenu.classList.add("visible");
  });

  dropdownMenu.addEventListener("mouseout", () => {
    dropdownMenu.classList.remove("visible");
  });
});
*/

