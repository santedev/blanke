"use strict";
let targetErr = document.body;
let observerErr = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            let errorPopUp = document.querySelector(".wc-block-components-sidebar-layout .wc-block-components-sidebar .wc-block-cart__payment-options div div .wc-block-components-express-payment .wc-block-components-express-payment__content .wc-block-components-notices .wc-block-store-notice");
            if (errorPopUp) {
                let div = errorPopUp.querySelector(".wc-block-components-notice-banner .wc-block-components-notice-banner__content div");
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
            if (errorPopUp) {
                //observer.disconnect();
                console.log("conditions meeted");
            }
        }
    });
});
// start observing
let configErr = { childList: true, subtree: true };
observer.observe(target, config);
//# sourceMappingURL=changeCurrency.js.map