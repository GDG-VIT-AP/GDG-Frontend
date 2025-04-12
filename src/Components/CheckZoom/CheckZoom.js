{/* Purpose : Handles zoom for design elements(right and left) on each page(specially for responsivness)
    Contributor : Daksh asati(REG: 23BEC7195) */}



export function checkZoom() {
    const zoomLevel = Math.round((window.devicePixelRatio || 1) * 100);
    const elements = document.querySelectorAll('.hide-on-zoom');
  
    if (zoomLevel > 130) {
      elements.forEach(el => el.style.display = 'none');
    } else {
      elements.forEach(el => el.style.display = 'block');
    }
  }
  
  // Ensure this function runs on resize
  window.addEventListener('resize', checkZoom);
  checkZoom();
  