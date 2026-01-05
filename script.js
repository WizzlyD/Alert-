let lastId = null;

async function checkAlert() {
  try {
    const res = await fetch("/api/sibagi");
    const data = await res.json();

    if (!data || !data.id || data.id === lastId) return;

    lastId = data.id;
    showAlert(`${data.donatorName} donate Rp${data.amount}`);
  } catch (e) {
    console.log("Error polling API:", e);
  }
}

function showAlert(text) {
  const alertBox = document.querySelector(".alert-container");
  const alertText = document.getElementById("alert-text");

  alertText.innerText = text;
  alertBox.classList.add("show");

  setTimeout(() => alertBox.classList.remove("show"), 5000);
}

setInterval(checkAlert, 2000);
