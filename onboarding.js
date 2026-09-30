(() => {
  const stateSelect = document.querySelector("#state-select");
  const continueButton = document.querySelector("#continue-guide");
  const guidePanel = document.querySelector("#state-guides");
  const status = document.querySelector("#state-status");

  if (!stateSelect || !continueButton || !guidePanel || !status) return;

  const guides = {
    SC: document.querySelector("#guide-sc"),
    NC: document.querySelector("#guide-nc"),
    other: document.querySelector("#guide-other")
  };

  stateSelect.addEventListener("change", () => {
    continueButton.disabled = !stateSelect.value;
    guidePanel.hidden = true;
    status.textContent = stateSelect.value
      ? "Your state is selected. Continue to see the matching guide."
      : "Choose a state to continue.";
  });

  continueButton.addEventListener("click", () => {
    const selected = stateSelect.value;
    if (!selected) {
      stateSelect.focus();
      return;
    }

    Object.values(guides).forEach((guide) => {
      guide.hidden = true;
    });

    const guide = selected === "SC" ? guides.SC
      : selected === "NC" ? guides.NC
      : guides.other;

    if (guide === guides.other) {
      guide.querySelector("[data-state-name]").textContent =
        stateSelect.options[stateSelect.selectedIndex].text;
    }

    guidePanel.hidden = false;
    guide.hidden = false;
    status.textContent = `Showing the ${stateSelect.options[stateSelect.selectedIndex].text} guide.`;
  });
})();