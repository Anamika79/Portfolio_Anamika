function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// // Calculate and set the height of the projects section dynamically
// function adjustProjectsHeight() {
//     var projectsSection = document.getElementById('projects');
//     var projectsHeight = projectsSection.offsetHeight;
//     var contactSection = document.getElementById('contact');
//     contactSection.style.marginTop = projectsHeight + 'px';
//   }
  
//   // Show the contact section and adjust its position after the projects section
//   function showContactSection() {
//     var contactSection = document.getElementById('contact');
//     contactSection.style.display = 'block';
//   }
  
//   // Call adjustProjectsHeight and showContactSection on page load
//   window.onload = function () {
//     adjustProjectsHeight();
//     showContactSection();
//   };
  