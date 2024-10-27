// Confirm images are loaded and visible
window.addEventListener("load", () => {
    console.log("Page loaded - starting GSAP animations");
  
    // Make images fully visible as a starting point
    document.querySelectorAll(".hero-image").forEach((image) => {
      image.style.opacity = "1"; // Ensure opacity is set to 1 initially
      console.log("Image is visible:", image); // Confirm visibility in console
    });
  
    // GSAP Fade-in Animation for Text and Images
    gsap.from(".hero-text", { 
      opacity: 0, 
      y: 20, 
      duration: 1, 
      ease: "power2.out", 
      stagger: 0.2 
    });
  
    gsap.from(".hero-image", { 
      opacity: 0, 
      scale: 0.8, 
      duration: 1.2, 
      ease: "back.out(1.7)", 
      delay: 0.5,
      onStart: () => console.log("Starting image animation"), // Debugging check
      onComplete: () => console.log("Image animation complete") // Confirm completion
    });
  });
  
  const images = document.querySelectorAll(".hero-image");

  images.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      images.forEach((img) => {
        if (img !== image) img.style.opacity = "0.1"; // Dim other images
      });
      image.style.opacity = "1"; // Full visibility for hovered image
    });
  
    image.addEventListener("mousemove", (e) => {
      const rect = image.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
  
      const moveX = (offsetX - rect.width / 2) * 2.5;
      const moveY = (offsetY - rect.height / 2) * 2.5;
  
      image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.2)`;
    });
  
    image.addEventListener("mouseleave", () => {
      images.forEach((img) => (img.style.opacity = "0.2")); // Reset opacity for all images
      image.style.transform = "translate(0, 0) scale(1)"; // Reset transform
    });
  });
  
  
  
  
  
  
  