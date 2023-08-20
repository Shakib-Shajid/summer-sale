// function totalPriceMain(price) {
//   const totalPrice = document.getElementById("total-price");
//   const totalPriceString = totalPrice.innerText;
//   const totalPriceValue = parseFloat(totalPriceString);
//   // console.log(totalPriceValue);

//   const finalTotal = price + totalPriceValue;
//   // console.log(finalTotal);

//   totalPrice.innerText = finalTotal;

//   if (finalTotal > 0) {
//     console.log("Enabled");
//     document.getElementById("purchase-button").disabled = false;
//   }

//   if (finalTotal >= 200) {
//     document.getElementById("coupon-button").disabled = false;

//     // take the value from cupon
//     document
//       .getElementById("coupon-button")
//       .addEventListener("click", function () {
//         const couponInput = document.getElementById("coupon-input");
//         const couponValue = couponInput.value;
//         // console.log(cuponValue);

//         if (couponValue == "SELL200") {
//           const discount = (20 * finalTotal) / 100;
//           console.log("discount", discount);

//           // call the discount default amount
//           const discountAmount = document.getElementById("discount");

//           // set the discount value
//           discountAmount.innerText = discount;
//         } else {
//           console.log("invalid coupon");
//         }
//       });
//   }
// }

// My own Code

// cap price
// function buyField() {
//   const sportswearCap = document.getElementById("cap-price");
//   const sportswearCapValue = parseFloat(sportswearCap.innerText);
//   //   console.log(sportswearCapValue, typeof sportswearCapValue);      ok

//   //   total price
//   const totalPrice = document.getElementById("total-price");
//   const totalPriceValue = parseFloat(totalPrice.innerText);
//   //   console.log(totalPriceValue, typeof totalPriceValue);            ok

//   const add = sportswearCapValue + totalPriceValue;
//   totalPrice.innerText = add;

//   if (add > 0) {
//     document.getElementById("purchase-button").disabled = false;
//   }

//   if (add >= 200) {
//     document.getElementById("coupon-button").disabled = false;

//     document
//       .getElementById("coupon-button")
//       .addEventListener("click", function () {
//         const couponInput = document.getElementById("coupon-input").value;
//         if (couponInput === "SELL200") {
//           const discount = add * (20 / 100);
//           document.getElementById("discount").innerText = discount;
//         } else {
//           alert("Give the right coupon");
//           couponInput.value = "";
//         }
//       });
//   }
// }

// right side total price
// function totalPrice() {
//   const totalPrice = document.getElementById("total-price");
//   const totalPriceValue = parseFloat(totalPrice.innerText);
//   console.log(totalPriceValue, typeof totalPriceValue);
// }

// reuseable code

function buyField(priceId, totalId) {
  const sportswearCap = document.getElementById(priceId);
  const sportswearCapValue = parseFloat(sportswearCap.innerText);

  //   total price
  const totalPrice = document.getElementById(totalId);
  const totalPriceValue = parseFloat(totalPrice.innerText);

  const add = sportswearCapValue + totalPriceValue;
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
        }
        const total = document.getElementById("total");
        const totalDiscount = parseFloat(
          document.getElementById("total-discount").innerText
        );
        const totalValueString = parseFloat(total.innerText);
        const totalValue = add - totalDiscount;
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

  li.innerText = `${count + 1} ${nameTitle}`;
  setProducts.appendChild(li);
}
