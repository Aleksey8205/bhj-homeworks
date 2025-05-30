function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

async function load() {
  try {
    const response = await fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses");
    const data = await response.json();

    const itemsContainer = document.getElementById('items');

    itemsContainer.innerHTML = "";

    for(let currency in data.response.Valute) {
        if (data.response.Valute.hasOwnProperty(currency)) {
            let valuteData = data.response.Valute[currency];

            let itemDiv = document.createElement("div");
            itemDiv.classList.add("item");

            let codeDiv = document.createElement("div");
            codeDiv.classList.add("item__code");
            codeDiv.textContent = valuteData.CharCode;

            let valueDiv = document.createElement("div");
            valueDiv.classList.add("item__value");
            valueDiv.textContent = valuteData.Value.toFixed(2);

            let currencyDiv = document.createElement("div");
            currencyDiv.classList.add("item__currency");
            currencyDiv.textContent = "руб."

            let nameDiv = document.createElement("div");
            nameDiv.textContent = valuteData.Name;

            itemDiv.appendChild(codeDiv);
            itemDiv.appendChild(valueDiv);
            itemDiv.appendChild(currencyDiv);
            itemDiv.appendChild(nameDiv)

            itemsContainer.appendChild(itemDiv);
        }
    }
  } catch (error) {
    itemsContainer.innerHTML = `<div class="item__code"></div>`;
  } finally {
    hideLoader();
  }
}
load();
