import "./less/index.less";

// Your code goes here!

// 1- Load
window.onload = function (evt) {
  console.log(`event ${evt.type} Launched! Time to go`);
  const heading = document.querySelector("h1");
  heading.textContent = "Here we are NOW!!!";

  // 2- Copy
  window.addEventListener("copy", () => {
    navigator.clipboard.readText().then((text) => {
      heading.textContent += text;
    });
  });

  // 3- Click
  document.body.addEventListener("click", (evt) => {
    evt.target.classList.toggle("mirror");
  });

  // 4- dblclick
  document.body.addEventListener("dblclick", (evt) => {
    evt.target.innerHTML = "";
  });

  // 5- keydown
  window.addEventListener("keydown", (evt) => {
    if (evt.key == 6) {
      document.body.innerHTML = "<h1>Your in trouble for pushing 6 key</h1>";
    }
  });

  // 6- mousemove
  document.body.addEventListener("mousemove", (evt) => {
    const { clientX, clientY } = evt;
    // console.log(`Mouse is at ${clientX}, ${clientY}`)
  });

  // 7- mouseenter
  // 8- mouseleave
  const destinations = document.querySelectorAll(".destination");
  for (let destination of destinations) {
    destination.addEventListener("mouseenter", () => {
      destination.style.fontWeight = "bold";
    });
    destination.addEventListener("mouseleave", () => {
      setTimeout(() => {
        destination.style.fontWeight = "initial";
      }, 500);
    });
  }

  // 9- focus
  // 9- click on elements with class "text-content"
  const textContents = document.querySelectorAll(".text-content");
  textContents.forEach((textContent) => {
    textContent.addEventListener("click", () => {
      textContent.style.fontWeight = "underline";
      textContent.style.color = "orange";
    });
  });
  // 10-resize
  let footerWidth = 0; // Initialize the footer width

  // Function to handle the resize event
  function handleResize() {
    const newFooterWidth = footer.offsetWidth;
  
    // Check if the footer width has changed
    if (newFooterWidth !== footerWidth) {
      console.log("Footer resized!"); // Log a message when the footer is resized
      footerWidth = newFooterWidth; // Update the stored footer width
    }
  }
  
  window.onload = function (evt) {
    console.log(`event ${evt.type} Launched! Time to go`);
    const heading = document.querySelector("h1");
    heading.textContent = "Here we are NOW!!!";
  
    // ... (Your existing event listeners) ...
  
    // Add a resize event listener to the window
    window.addEventListener("resize", handleResize);
  
    // Get the footer element
    const footer = document.querySelector(".footer");
  };
  
};
