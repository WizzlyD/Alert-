const alertBox = document.querySelector(".alert-container");
const alertText = document.getElementById("alert-text");

const ALERT_DURATION = 5000;

// sembunyikan saat load
alertBox.style.display = "none";

// tangkap webhook
window.addEventListener("message", (event) => {
  const data = event.data;
  if (!data) return;

  // === SAWERIA DONATION ===
  if (data.type === "donation") {
    showAlert(
      `${data.donator || "Someone"} donated Rp${formatRupiah(data.amount || 0)}`
    );
  }

  // === TEST MANUAL ===
  if (data.test === true) {
    showAlert("TEST ALERT Rp10.000");
  }
});

function showAlert(text) {
  alertText.innerText = text;

  alertBox.style.display = "flex";
  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
    alertBox.style.display = "none";
  }, ALERT_DURATION);
}

function formatRupiah(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
