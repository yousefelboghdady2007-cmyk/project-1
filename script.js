const helpButton = document.querySelector("#help-button");
const formHelp = document.querySelector("#form-help");
const registrationForm = document.querySelector("#registration-form");
const formStatus = document.querySelector("#form-status");

if (helpButton && formHelp) {
  helpButton.addEventListener("click", () => {
    formHelp.hidden = !formHelp.hidden;
    helpButton.textContent = formHelp.hidden ? "Show form help" : "Hide form help";
  });
}

if (registrationForm && formStatus) {
  registrationForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    formStatus.textContent = "";

    if (!registrationForm.reportValidity()) return;

    const formData = new FormData(registrationForm);
    const pairs = new URLSearchParams();
    for (const [key, value] of formData.entries()) pairs.append(key, value);

    try {
      const response = await fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: pairs.toString()
      });

      if (!response.ok) throw new Error("The local demo server did not accept the request.");
      formStatus.textContent = "Registration submitted to the local demonstration server. No information has been saved permanently.";
    } catch (error) {
      formStatus.textContent = "The form passed browser validation, but the local submission server is not running. Start it using the instructions in README.txt to test the Network request.";
    }
  });

  registrationForm.addEventListener("reset", () => {
    formStatus.textContent = "The form has been reset.";
    if (formHelp) formHelp.hidden = true;
    if (helpButton) helpButton.textContent = "Show form help";
  });
}
