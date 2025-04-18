document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
  })

function scrollBlockInfo(id, offset = 50, page = null) {
    document.querySelector('.burger')?.classList.remove('active');
      document.querySelector('.menu')?.classList.remove('open');
  
        const target = document.getElementById(id);
        if (!target) return;
  
          requestAnimationFrame(() => {
              window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
          });
  };