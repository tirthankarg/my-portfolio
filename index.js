document.querySelector('.cross').style.display = 'none';
document.querySelector('.icons').addEventListener("click", () => {
  document.querySelector('.sidebar').classList.toggle('sidebarGo');
  if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
    setTimeout(() => {
      document.querySelector('.bar').style.display = 'inline'
    }, 300);
    document.querySelector('.cross').style.display = 'none';
  }
  else {
    document.querySelector('.bar').style.display = 'none';
    setTimeout(() => {
      document.querySelector('.cross').style.display = 'inline'
    }, 300);
  }

});

