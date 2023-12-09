function buyField(priceId, totalId) {
  const sportswearCap = document.getElementById(priceId);
  const sportswearCapValue = parseFloat(sportswearCap.innerText);

  //   total price
  const totalPrice = document.getElementById(totalId);
  const totalPriceValue = parseFloat(totalPrice.innerText);

  const add = (sportswearCapValue + totalPriceValue).toFixed(2);
  totalPrice.innerText = add;
  const total = document.getElementById("total");
  total.innerText = add;

  if (add > 0) {
    document.getElementById("purchase-button").disabled = false;
  }

  if (add >= 200) {
    document.getElementById("coupon-button").disabled = false;

    document
      .getElementById("coupon-button")
      .addEventListener("click", function () {
        const couponInput = document.getElementById("coupon-input").value;
        if (couponInput === "SELL200") {
          const discount = parseFloat(add * (20 / 100)).toFixed(2);
          document.getElementById("total-discount").innerText = discount;
        } else {
          alert("Give the right coupon");
          couponInput.value = "";
          return;
        }
        const total = document.getElementById("total");
        const totalDiscount = parseFloat(
          document.getElementById("total-discount").innerText
        );
        const totalValueString = parseFloat(total.innerText);
        const totalValue = (add - totalDiscount).toFixed(2);
        total.innerText = totalValue;
        console.log(typeof add, typeof totalDiscount);
      });
  }
}

function addElement(name) {
  const nameTitle = document.getElementById(name).innerText;
  const setProducts = document.getElementById("set-products");
  const li = document.createElement("li");
  const count = setProducts.childElementCount;
  li.classList.add("text-2xl", "font-medium", "leading-10");

  li.innerText = `${count + 1}${"."} ${nameTitle}`;
  setProducts.appendChild(li);
}
