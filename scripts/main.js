/* we use null to observe the whole page instead of a specific container */
let options = {
    root: null,
    threshold: 0.25,
  }

function intersectionHandler(entries, observer) {
    entries.forEach(entry => {
        //   entry.isIntersecting
        if (entry.isIntersecting) {
            // add active if intersecting
            entry.target.classList.add("active");
            let color = entry.target.dataset.color;
            document.body.style.backgroundColor = color;
        } else {
            // remove active if no longer intersecting
            entry.target.classList.remove("active");
        }
      });
}

let observer = new IntersectionObserver(intersectionHandler, options);

/* reference to all images */
let images = document.querySelectorAll("img");

/* using the array method to loop through all images and tell the observer to observe each one */
images.forEach((image) => {
    observer.observe(image);
});