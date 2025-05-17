document.querySelectorAll(".interests_main input.interest__check ").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const parentList = this.closest(".interest");

      if (parentList && parentList.querySelector("ul")) {
        const childCheckboxes =
          parentList.querySelectorAll("ul li label input");
        childCheckboxes.forEach((childCheckbox) => {
          childCheckbox.checked = this.checked;
        });
      }
    });
  });
