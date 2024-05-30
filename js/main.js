"use strict";
const mobileCart = document.querySelector("#mobile-cart");
const cart = document.querySelector("#sanev-cart");
const cartSpan = document.querySelector("#cart-count");
const span = document.createElement("span");
const shopPageBtnAddProduct = document.querySelectorAll(".add_to_cart_button");
const itemsCount = cartSpan?.getAttribute("value");
const cartIcon = cart?.firstElementChild;
if (itemsCount) {
    if (Number(itemsCount) > 99) {
        if (mobileCart?.firstElementChild == null) {
            span.insertAdjacentHTML("afterbegin", "+99");
            mobileCart?.appendChild(span);
        }
        if (cartIcon?.firstElementChild == null) {
            let spanThis = document.createElement("span");
            spanThis.insertAdjacentHTML("afterbegin", "+99");
            cartIcon?.appendChild(spanThis);
        }
    }
    else if (Number(itemsCount) > 0) {
        span.insertAdjacentHTML("afterbegin", itemsCount);
        mobileCart?.appendChild(span);
        if (cartIcon?.firstElementChild == null && cartSpan) {
            cartIcon?.appendChild(cartSpan);
        }
    }
}
const mobileCartSpan = mobileCart?.querySelector("span");
function updateCurrentCount() {
    let cartSpanThis = document.querySelector("#cart-count");
    let mobileCartThis = document.querySelector("#mobile-cart");
    let mobileCartSpanThis = mobileCartThis?.querySelector("span");
    let currentCountThis = cartSpanThis?.getAttribute("value");
    if (cartSpanThis &&
        Number(currentCountThis) < 100 &&
        currentCountThis &&
        mobileCartSpanThis) {
        cartSpanThis.textContent = currentCountThis;
        mobileCartSpanThis.textContent = cartSpanThis.textContent;
    }
    if (Number(currentCountThis) > 99 && cartSpanThis && mobileCartSpanThis) {
        cartSpanThis.textContent = "+99";
        mobileCartSpanThis.textContent = cartSpanThis.textContent;
    }
}
updateCurrentCount();
function removeInvalidCartValues() {
    let mobileCartThis = document.querySelector("#mobile-cart");
    let mobileCartSpanThis = mobileCartThis?.querySelector("span");
    let cartSpanThis = document.querySelector("#cart-count");
    if (Number(cartSpanThis?.getAttribute("value")) <= 0 ||
        Number(cartSpanThis?.textContent) <= 0 ||
        Number(mobileCartSpanThis?.textContent) <= 0) {
        cartSpanThis?.remove();
        if (mobileCartThis?.firstElementChild != null) {
            mobileCartSpanThis?.remove();
        }
    }
}
removeInvalidCartValues();
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (event) => {
        if (event.target instanceof Element &&
            event.target.matches(".wc-block-components-quantity-selector__button--minus")) {
            let cartSpanThis = document.querySelector("#cart-count");
            let cartValueCount = Number(cartSpanThis?.getAttribute("value") || "0");
            let currentCount = cartValueCount - 1;
            cartSpanThis?.setAttribute("value", currentCount.toString());
            updateCurrentCount();
            removeInvalidCartValues();
        }
        if (event.target instanceof Element &&
            event.target.matches(".wc-block-components-quantity-selector__button--plus")) {
            let cartSpanThis = document.querySelector("#cart-count");
            let cartValueCount = Number(cartSpanThis?.getAttribute("value") || "0");
            let currentCount = cartValueCount + 1;
            cartSpanThis?.setAttribute("value", currentCount.toString());
            updateCurrentCount();
            removeInvalidCartValues();
        }
        if (event.target instanceof Element &&
            event.target.matches(".wc-block-cart-item__remove-link")) {
            const parentElement = event.target.parentElement;
            const quantityInput = parentElement?.querySelector(".wc-block-components-quantity-selector__input");
            let cartSpanThis = document.querySelector("#cart-count");
            const quantity = Number(quantityInput?.value || "0");
            let cartValueCount = Number(cartSpanThis?.getAttribute("value") || "0");
            let currentCount = cartValueCount - quantity >= 0 ? cartValueCount - quantity : 0;
            cartSpanThis?.setAttribute("value", currentCount.toString());
            updateCurrentCount();
            removeInvalidCartValues();
        }
        if (event.target instanceof Element &&
            event.target.matches(".wc-block-components-quantity-selector__input")) {
            let inputElement = event.target;
            inputElement.addEventListener("input", () => {
                let inputElements = document.querySelectorAll(".wc-block-components-quantity-selector__input");
                let currentCount = 0;
                inputElements.forEach((inputElement) => {
                    currentCount += Number(inputElement.value);
                });
                let cartSpanThis = document.querySelector("#cart-count");
                cartSpanThis?.setAttribute("value", currentCount.toString());
                updateCurrentCount();
                removeInvalidCartValues();
            });
        }
    });
});
//console.log(wc_cart_fragments_params.wc_ajax_url);
shopPageBtnAddProduct.forEach((element) => {
    let anchor = element;
    anchor.addEventListener("click", async (event) => {
        event.preventDefault();
        let quantityOfProducts = anchor.getAttribute("data-quantity");
        let idProduct = anchor.getAttribute("data-product_id");
        anchor.textContent = "";
        anchor.classList.add("loading");
        anchor.classList.remove("added");
        try {
            const response = await fetch(ajaxEndpoints.addToCartEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    action: "sanev_add_to_cart",
                    product_id: idProduct ?? "",
                    quantity: quantityOfProducts || "",
                }),
            });
            if (response.ok) {
                anchor.classList.remove("loading");
                anchor.classList.add("added");
                let cartSpanThis = document.querySelector("#cart-count");
                let cartValueCount = Number(cartSpanThis?.getAttribute("value") || "0");
                let currentCount = cartValueCount + Number(quantityOfProducts || "0");
                if (cartSpanThis) {
                    cartSpanThis.setAttribute("value", currentCount.toString());
                    updateCurrentCount();
                }
                else {
                    if (quantityOfProducts) {
                        if (mobileCart?.querySelector("span") == null) {
                            if (Number(quantityOfProducts) > 99) {
                                span.insertAdjacentHTML("afterbegin", "+99");
                            }
                            else {
                                span.insertAdjacentHTML("afterbegin", quantityOfProducts.toString());
                            }
                            mobileCart?.appendChild(span);
                        }
                        if (cartIcon?.querySelector("span") == null) {
                            let spanThis = document.createElement("span");
                            spanThis.setAttribute("id", "cart-count");
                            spanThis.setAttribute("value", quantityOfProducts.toString());
                            if (Number(quantityOfProducts) > 99) {
                                spanThis.insertAdjacentHTML("afterbegin", "+99");
                            }
                            else {
                                spanThis.insertAdjacentHTML("afterbegin", quantityOfProducts.toString());
                            }
                            cartIcon?.appendChild(spanThis);
                        }
                    }
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    });
});
let formAddProduct = document.querySelector("form.cart");
formAddProduct?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const addToCartInputProductPage = document.querySelector('input[name="quantity"]');
    const addToCartBtnProductPage = document.querySelector('button[name="add-to-cart"]');
    const quantityOfProducts = addToCartInputProductPage?.value;
    const idProduct = addToCartBtnProductPage?.getAttribute("value");
    if (addToCartBtnProductPage) {
        addToCartBtnProductPage.innerHTML = "";
        addToCartBtnProductPage.classList.add("loading");
        addToCartBtnProductPage.classList.remove("added");
    }
    try {
        const response = await fetch(ajaxEndpoints.addToCartEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                action: "sanev_add_to_cart",
                product_id: idProduct ?? "",
                quantity: quantityOfProducts || "",
            }),
        });
        if (response.ok) {
            addToCartBtnProductPage?.classList.remove("loading");
            addToCartBtnProductPage?.classList.add("added");
            let cartSpanThis = document.querySelector("#cart-count");
            let cartValueCount = Number(cartSpanThis?.getAttribute("value") || "0");
            let currentCount = cartValueCount + Number(quantityOfProducts || "0");
            if (cartSpanThis) {
                cartSpanThis.setAttribute("value", currentCount.toString());
                updateCurrentCount();
            }
            else {
                if (quantityOfProducts) {
                    if (mobileCart?.querySelector("span") == null) {
                        if (Number(quantityOfProducts) > 99) {
                            span.insertAdjacentHTML("afterbegin", "+99");
                        }
                        else {
                            span.insertAdjacentHTML("afterbegin", quantityOfProducts.toString());
                        }
                        mobileCart?.appendChild(span);
                    }
                    if (cartIcon?.querySelector("span") == null) {
                        let spanThis = document.createElement("span");
                        spanThis.setAttribute("id", "cart-count");
                        spanThis.setAttribute("value", quantityOfProducts.toString());
                        if (Number(quantityOfProducts) > 99) {
                            spanThis.insertAdjacentHTML("afterbegin", "+99");
                        }
                        else {
                            spanThis.insertAdjacentHTML("afterbegin", quantityOfProducts.toString());
                        }
                        cartIcon?.appendChild(spanThis);
                    }
                }
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=main.js.map