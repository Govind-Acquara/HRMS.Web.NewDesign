(function(window, undefined) {
    'use strict';
  
    /*
    NOTE:
    ------
    PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
    WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */
  
      // Sidebar Javascript start
  
      const sidebar = document.querySelector(".sidebar-toggle");
      const overlay = document.querySelector(".overlay-bg");
      const sidebarContent = document.querySelector(".sidebar-content");
  
      $(".sidebar-toggle").on('click', function () {
          sidebar.classList.toggle("side-active");
          sidebarContent.classList.toggle("side-active");
          overlay.classList.toggle("show");
      })
  
    //   sidebar.addEventListener("click", () => {
    //      sidebar.classList.toggle("side-active");
    //      sidebarContent.classList.toggle("side-active");
    //      overlay.classList.toggle("show");
    //   })
  
      document.querySelector(".overlay-bg").addEventListener("click", () => {
          sidebar.classList.remove("side-active");
          sidebarContent.classList.remove("side-active");
          overlay.classList.remove("show");
      })
  
      document.querySelector(".CloseBTN").addEventListener("click", () => {
          sidebar.classList.remove("side-active");
          sidebarContent.classList.remove("side-active");
          overlay.classList.remove("show");
      })
  
            // Sidebar Javascript end
  
  
  
  })(window);