"use strict";
let target = document.body;
let observerCheckout = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            let titlesCheckout = document.querySelectorAll(".wc-block-components-checkout-step__heading .wc-block-components-title");
            let paragraphCheckout = document.querySelectorAll(".wc-block-components-checkout-step__container .wc-block-components-checkout-step__description");
            let checkBoxText = document.querySelectorAll(".wc-block-components-checkbox__label");
            let orderSummary = document.querySelector(".wc-block-components-order-summary__button-text");
            let orderSpanBtn = document.querySelector(".components-button .wc-block-components-button__text");
            if (titlesCheckout) {
                titlesCheckout.forEach((header) => {
                    if (header.textContent == "Contact information") {
                        header.textContent = "Información de contacto";
                    }
                    if (header.textContent == "Billing address") {
                        header.textContent = "Dirección de facturación";
                    }
                    if (header.textContent == "Payment options") {
                        header.textContent = "Opciones de pago";
                    }
                });
            }
            if (paragraphCheckout) {
                paragraphCheckout.forEach((paragraph) => {
                    if (paragraph.textContent ==
                        "We'll use this email to send you details and updates about your order.") {
                        paragraph.textContent =
                            "Usaremos este correo electrónico para enviarte detalles y actualizaciones relacionadas con tu pedido.";
                    }
                    if (paragraph.textContent ==
                        "Enter the billing address that matches your payment method.") {
                        paragraph.textContent =
                            "Introduce la dirección que coincida con tu método de pago.";
                    }
                });
            }
            if (checkBoxText) {
                checkBoxText.forEach((elementText) => {
                    if (elementText.textContent == "Create an account?") {
                        elementText.textContent = "¿Crear una cuenta?";
                    }
                    if (elementText.textContent == "Add a note to your order") {
                        elementText.textContent = "Añadir nota a tu orden";
                    }
                });
            }
            if (orderSummary) {
                orderSummary.textContent = "Resumen del pedido";
            }
            if (orderSpanBtn) {
                orderSpanBtn.textContent = "Realizar el pedido";
            }
            if (titlesCheckout && paragraphCheckout && orderSummary && orderSpanBtn) {
                observerCheckout.disconnect();
            }
        }
    });
});
let textareaObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            let textareaCheckoutNotes = document.querySelector('textarea[placeholder="Notes about your order."]');
            if (textareaCheckoutNotes) {
                textareaCheckoutNotes.setAttribute("placeholder", "Notas sobre tu orden");
            }
        }
    });
});
let oneTimeRenderObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            let returnToCartButton = document.querySelector(".wc-block-components-checkout-return-to-cart-button");
            let haveAnAccountSpan = document.querySelector(".wc-block-checkout__contact-fields .wc-block-components-checkout-step__heading .wc-block-components-checkout-step__heading-content");
            let termsAndCoditionsSpan = document.querySelector(".wc-block-components-form .wc-block-checkout__terms span");
            let svgContent = returnToCartButton?.querySelector("svg");
            let haveAnAccountLink = haveAnAccountSpan?.querySelector("a");
            let termsAndCoditionsLink = termsAndCoditionsSpan?.querySelector("a");
            if (returnToCartButton && haveAnAccountSpan && termsAndCoditionsSpan) {
                if (returnToCartButton) {
                    returnToCartButton.textContent = "";
                    let textNode = document.createTextNode("Volver al Carrito");
                    if (svgContent)
                        returnToCartButton.appendChild(svgContent);
                    returnToCartButton.appendChild(textNode);
                }
                if (haveAnAccountLink) {
                    haveAnAccountSpan.textContent = "";
                    haveAnAccountLink.textContent = "Iniciar sesión";
                    let newText = document.createTextNode("¿Ya tienes una cuenta? ");
                    haveAnAccountSpan.appendChild(newText);
                    haveAnAccountSpan.appendChild(haveAnAccountLink);
                }
                if (termsAndCoditionsLink) {
                    termsAndCoditionsSpan.textContent = "";
                    termsAndCoditionsLink.textContent = "Política de privacidad";
                    let newText = document.createTextNode("Al proceder con tu compra aceptas nuestros Términos y condiciones y ");
                    termsAndCoditionsSpan.appendChild(newText);
                    termsAndCoditionsSpan.appendChild(termsAndCoditionsLink);
                }
                oneTimeRenderObserver.disconnect();
            }
        }
    });
});
let observerCart = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            let titleHeadProduct = document.querySelector(".wc-block-components-sidebar-layout .wc-block-components-main table thead tr .wc-block-cart-items__header-image span");
            let deleteProductElement = document.querySelectorAll(".wc-block-components-sidebar-layout .wc-block-components-main table tbody tr .wc-block-cart-item__product .wc-block-cart-item__quantity .wc-block-cart-item__remove-link");
            let textCartSidebar = document.querySelector(".wc-block-components-sidebar-layout .wc-block-components-sidebar .wc-block-cart__payment-options .wc-block-components-express-payment-continue-rule");
            let buttonCheckoutText = document.querySelector(".wc-block-components-sidebar-layout .wc-block-components-sidebar .wc-block-cart__submit .wc-block-cart__submit-container a .wc-block-components-button__text");
            let buttonLoader = document.querySelector(".wc-block-components-sidebar-layout .wc-block-components-sidebar .wc-block-cart__submit .wc-block-cart__submit-container a .wc-block-components-spinner");
            if (titleHeadProduct) {
                titleHeadProduct.textContent = "producto";
            }
            if (deleteProductElement) {
                deleteProductElement.forEach((button) => {
                    button.textContent = "Remover producto";
                });
            }
            if (textCartSidebar) {
                textCartSidebar.textContent = "Otros metodos";
            }
            if (buttonCheckoutText) {
                buttonCheckoutText.textContent = "Proceder con la compra";
            }
            if (buttonLoader) {
                if (buttonCheckoutText)
                    buttonCheckoutText.textContent = "";
            }
            if (titleHeadProduct &&
                deleteProductElement &&
                buttonCheckoutText &&
                buttonLoader &&
                textCartSidebar) {
                observerCart.disconnect();
            }
        }
    });
});
let observerCartSaveMElements = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            let saveElement1 = document.querySelectorAll(".wc-block-components-sidebar-layout .wc-block-components-main .wc-block-cart-items tbody tr .wc-block-cart-item__product div .wc-block-components-product-badge");
            let saveElement2 = document.querySelectorAll(".wc-block-components-sidebar-layout .wc-block-components-main .wc-block-cart-items tbody tr .wc-block-cart-item__total div .wc-block-components-product-badge");
            if (saveElement1.length > 0 && saveElement2.length > 0) {
                saveElement1.forEach((div) => {
                    let saveSpan1 = div.querySelector("span");
                    let textNode = document.createTextNode("Ahorra ");
                    div.textContent = "";
                    if (saveSpan1) {
                        div.appendChild(textNode);
                        div.appendChild(saveSpan1);
                    }
                });
                saveElement2.forEach((div) => {
                    let saveSpan2 = div.querySelector("span");
                    let textNode = document.createTextNode("Ahorra ");
                    div.textContent = "";
                    if (saveSpan2) {
                        div.appendChild(textNode);
                        div.appendChild(saveSpan2);
                    }
                });
                observerCartSaveMElements.disconnect();
            }
        }
    });
});
const privacyParagraph = document.querySelector(".woocommerce-privacy-policy-text p");
const privacyParagraphAnchor = privacyParagraph?.querySelector("a");
if (privacyParagraph) {
    privacyParagraph.textContent = "";
    let newTextnode = document.createTextNode("Tu información personal será utilizada para respaldar tu experiencia en este sitio web, para gestionar el acceso a tu cuenta y para otros fines descritos en nuestra ");
    privacyParagraph.appendChild(newTextnode);
    if (privacyParagraphAnchor) {
        privacyParagraph.appendChild(privacyParagraphAnchor);
    }
}
if (document.body.classList.contains("woocommerce-view-order")) {
    const methodOfpayElement = document.querySelector(".woocommerce-view-order .woocommerce-order-details tfoot tr:nth-child(2) td");
    if (methodOfpayElement) {
        if (methodOfpayElement.textContent == "Direct bank transfer") {
            methodOfpayElement.textContent = "Transferencia bancaria directa";
        }
        if (methodOfpayElement.textContent == "Cash on delivery") {
            methodOfpayElement.textContent = "Pago contra entrega";
        }
        if (methodOfpayElement.textContent == "Check payments") {
            methodOfpayElement.textContent = "Pago con cheque";
        }
    }
}
if (document.body.classList.contains("woocommerce-view-order")) {
}
// start observing
let config = { childList: true, subtree: true };
if (document.body.classList.contains("woocommerce-checkout")) {
    observerCheckout.observe(target, config);
    textareaObserver.observe(target, config);
    oneTimeRenderObserver.observe(target, config);
}
if (document.body.classList.contains("woocommerce-cart")) {
    observerCart.observe(target, config);
    observerCartSaveMElements.observe(target, config);
}
//# sourceMappingURL=sanevTranslate.js.map