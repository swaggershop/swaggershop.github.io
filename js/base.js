      const hamburger = document.getElementById('hamburger');
      const mobileMenu = document.getElementById('mobileMenu');
      
      let menuOpen = false;
        hamburger.addEventListener('click', () => {
          menuOpen = !menuOpen;
          if(menuOpen){
            mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
          } else {
            mobileMenu.style.maxHeight = "0";
          }
        });

      AOS.init({
        once: true, // animasi hanya sekali
        offset: 100, // jarak sebelum elemen muncul
      });