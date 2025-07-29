// Til toppen knap
const toTopBtn = document.getElementById("toTopBtn");
if (toTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      toTopBtn.classList.add("show");
    } else {
      toTopBtn.classList.remove("show");
    }
  });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Kontaktformular
const kontaktForm = document.getElementById('kontaktForm');
if (kontaktForm) {
  kontaktForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formMessage = document.getElementById('formMessage');

    try {
      const response = await fetch(kontaktForm.action, {
        method: kontaktForm.method,
        body: new FormData(kontaktForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        kontaktForm.reset();
        formMessage.style.display = 'block';
        formMessage.style.color = '#28a745';
        formMessage.textContent = "Tak for din besked! Vi vender tilbage hurtigst muligt.";
      } else {
        formMessage.style.display = 'block';
        formMessage.style.color = '#dc3545';
        formMessage.textContent = "Ups, der gik noget galt. Prøv igen.";
      }
    } catch (error) {
      formMessage.style.display = 'block';
      formMessage.style.color = '#dc3545';
      formMessage.textContent = "Der opstod en fejl. Prøv igen.";
    }
  });
}