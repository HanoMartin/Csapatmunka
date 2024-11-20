function koszono() {
    const name = document.getElementById("nev").value;
    let uzen = "";
    if (name) {
      for (let i = 1; i < 11; i++) {
        uzen += `<p> ${i}. Hello ${name} </p>`;
      }
      document.getElementById("uzen").innerHTML = uzen;
    } else {
      alert("Hiba");
    }
    const container = document.getElementById("alap");

      // Card elem
      const card = document.createElement("div");
      card.classList.add("card");

      // Card body
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      // Card title
      const cardTitle = document.createElement("h2");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = "Felhasználó neve: ";
      
      // Összeállítjuk a card elemet
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(message);
      card.appendChild(cardBody);

      // Hozzáadjuk a cardot a konténerhez
      container.appendChild(card);


    
  }
const ma = new Date();
const év = ma.getFullYear();
const hónap = (ma.getMonth() + 1).toString().padStart(2, '0'); // A hónap 0-tól indexel ezért hozzáadunk 1-et
const nap = ma.getDate().toString().padStart(2, '0'); // A napot kétjegyű formában jelenítjük meg

// Dátum formátum: Év. Hónap. Nap
const formattedDate = év + "." + hónap + "." + nap + ".";

// Dátum megjelenítése a footer-ben
document.getElementById("dátum").textContent = formattedDate;