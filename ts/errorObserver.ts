let targetErr = document.body;

let observerErrCart = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      let errorPopUp = document.querySelector(
        ".wc-block-components-sidebar-layout .wc-block-components-sidebar .wc-block-cart__payment-options div div .wc-block-components-express-payment .wc-block-components-express-payment__content .wc-block-components-notices .wc-block-store-notice"
      );
      if (errorPopUp) {
        let div = errorPopUp.querySelector(
          ".wc-block-components-notice-banner .wc-block-components-notice-banner__content div"
        );
        if (errorPopUp.textContent == "Error: Detected popup close") {
          if (div) {
            div.textContent =
              "Se cerró la ventana antes de continuar con más acciones";
          }
        }
        if (errorPopUp.textContent == "[object Object]") {
          if (div) {
            div.textContent = "Cambia la moneda a dolares USD";
          }
        }
      }
    }
  });
});

let observerErrCheckout = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      let errorPopUp = document.querySelector(
        ".wc-block-components-checkout-step__container .wc-block-components-checkout-step__content .wc-block-components-notices div .wc-block-components-notice-banner__content div"
      );
      if (errorPopUp) {
        if (
          errorPopUp.textContent ==
          "Currency code is not currently supported. Please refer https://developer.paypal.com/docs/integration/direct/rest/currency-codes/ for list of supported currency codes."
        ) {
          errorPopUp.textContent = "Cambia la moneda a dolares USD";
        }
      }
    }
  });
});

// start observing
let configErr = { childList: true, subtree: true };
if (document.body.classList.contains("woocommerce-checkout")) {
  observerErrCheckout.observe(target, config);
}
if (document.body.classList.contains("woocommerce-cart")) {
  observerErrCart.observe(target, config);
}
