document.getElementById('searchIcon').addEventListener('click', function() {
    document.getElementById('searchOverlay').classList.add('show');
    setTimeout(function() {
      document.querySelector('.search-bar').classList.add('show');
      document.querySelector('.search-input').style.width = '80%';
    }, 100); // slight delay to allow overlay to start appearing
  });
  
  document.getElementById('closeSearch').addEventListener('click', function() {
    document.querySelector('.search-bar').classList.remove('show');
    document.querySelector('.search-input').style.width = '0';
    setTimeout(function() {
      document.getElementById('searchOverlay').classList.remove('show');
    }, 1000); // delay to allow input to shrink before hiding overlay
  });
  