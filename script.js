// Matrix rain effect
function createMatrixRain() {
    const matrix = document.getElementById('matrix');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()';
    const columnCount = Math.floor(window.innerWidth / 20);
  
    for (let i = 0; i < columnCount; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = (i * 20) + 'px';
      column.style.animationDelay = (Math.random() * 20) + 's';
      
      let content = '';
      for (let j = 0; j < 50; j++) {
        content += characters[Math.floor(Math.random() * characters.length)] + '<br>';
      }
      column.innerHTML = content;
      matrix.appendChild(column);
    }
  }
  
  createMatrixRain();
  window.addEventListener('resize', () => {
    document.getElementById('matrix').innerHTML = '';
    createMatrixRain();
  });
  
  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.area-card, .manifesto p, .about p').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
  });