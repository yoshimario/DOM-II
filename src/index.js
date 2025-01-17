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
  window.addEventListener("resize", () => {
    // Get the body element
    const body = document.body;

    // Toggle the inline style for background color
    if (body.style.backgroundColor === "orange") {
      body.style.backgroundColor = "white";
    } else {
      body.style.backgroundColor = "orange";
    }
  });

  // 11-mouseover
  const header = document.querySelector(".main-navigation");

  header.addEventListener("mouseover", () => {
    console.log("Header mouseover event triggered");
    header.style.backgroundColor = "lightblue";
  });

  // 12-wheel
  document.body.addEventListener("wheel", (event) => {
    // Handle the "wheel" event here
    const deltaY = event.deltaY; // Get the vertical scroll direction (positive or negative)

    // Example: Log the scroll direction to the console
    if (deltaY > 0) {
      // console.log("Scrolled down");
    } else if (deltaY < 0) {
      // console.log("Scrolled up");
    }
  });

  // 13-scroll
  window.addEventListener("scroll", () => {
    // Handle the "scroll" event here
    // const scrollY = window.scrollY; // Get the vertical scroll position
    // Example: Log the scroll position to the console
    // console.log("Vertical scroll position:", scrollY);
  });

  //14-select
  const destinationsSelect = document.querySelectorAll(".destination");

  // Function to handle the "select" event
  function handleSelectEvent(event) {
    const selectedDestination = event.target.textContent;
    alert(`Selected destination: ${selectedDestination}`);
  }

  // Attach the event listener to each "destination" element
  destinationsSelect.forEach((destination) => {
    destination.addEventListener("click", handleSelectEvent);
  });
};
