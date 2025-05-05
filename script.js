function handleOption(option) {
  const message = document.getElementById("message");
  const inputs = document.getElementById("inputs");

  message.innerText = "";
  inputs.classList.add("hidden");

  if (option === 1) {
    message.innerText = "Bari Jldi Yaad agya Bdwe";
  } else if (option === 2) {
    inputs.classList.remove("hidden");
  } else if (option === 3) {
    message.innerHTML = "<strong>NAUGHTY HORA BKL</strong>";
  }
}

function showNotes() {
  const classVal = document.getElementById("classSelect").value;
  const fieldVal = document.getElementById("fieldSelect").value;
  const message = document.getElementById("message");

  if (!classVal || !fieldVal) {
    alert("Please select both class and field.");
    return;
  }

  message.innerText = "Ruko zara sabar karo...";
  setTimeout(() => {
    message.innerText = "MERE PE NOTES HOTE MAIN YE VELE KAM KRA HOTA ?";
  }, 2000);
}
