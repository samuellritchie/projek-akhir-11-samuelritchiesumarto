document.addEventListener("DOMContentLoaded", () => {
  const tombolProject = document.querySelectorAll('.project-card .btn');

  tombolProject.forEach((tombol) => {
    tombol.addEventListener('click', (event) => {

      const namaProject = tombol.parentElement.querySelector('h4').innerText;
      

      alert(`Kamu akan dialihkan untuk melihat detail dari ${namaProject}!`);
      
      console.log(`User mengklik link menuju ${namaProject}`);
    });
  });
});

