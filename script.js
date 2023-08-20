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
function buyField() {
  const sportswearCap = document.getElementById("cap-price");
  const sportswearCapValue = parseFloat(sportswearCap.innerText);
  console.log(sportswearCapValue, typeof sportswearCapValue);

  //   total price
  const totalPrice = document.getElementById("total-price");
  const totalPriceValue = parseFloat(totalPrice.innerText);
  console.log(totalPriceValue, typeof totalPriceValue);

  const add = sportswearCapValue + totalPriceValue;
  totalPrice.innerText = add;

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
          const discount = add * (20 / 100);
          document.getElementById("discount").innerText = discount;
        }
      });
  }
}

// right side total price
// function totalPrice() {
//   const totalPrice = document.getElementById("total-price");
//   const totalPriceValue = parseFloat(totalPrice.innerText);
//   console.log(totalPriceValue, typeof totalPriceValue);
// }
