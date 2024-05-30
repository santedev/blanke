"use strict";
function convertAddressContentToElements(address) {
    const addressElement = address?.querySelector("address");
    const userInfoContent = addressElement?.innerHTML.split("<br>");
    const arr = [];
    if (userInfoContent) {
        for (let i = 0; i < userInfoContent.length; i++) {
            arr.push(userInfoContent[i]);
        }
    }
    arr[0] = arr[0].slice(arr[0].lastIndexOf("\t") + 1, arr[0].length);
    arr[arr.length - 1] = arr[arr.length - 1].slice(0, arr[arr.length - 1].indexOf("\n"));
    if (addressElement) {
        const userInfoPElements = addressElement.querySelectorAll("p");
        addressElement.textContent = "";
        for (let i = 0; i < arr.length; i++) {
            let newElementP = document.createElement("p");
            newElementP.textContent = arr[i];
            addressElement.appendChild(newElementP);
        }
        userInfoPElements.forEach((p) => addressElement.appendChild(p));
    }
}
if (document.body.classList.contains("woocommerce-order-received")) {
    const customerAddress = document.querySelector(".woocommerce-customer-details");
    if (customerAddress instanceof HTMLElement) {
        convertAddressContentToElements(customerAddress);
    }
}
if (document.body.classList.contains("woocommerce-view-order")) {
    const customerAddress = document.querySelector(".woocommerce-customer-details");
    if (customerAddress instanceof HTMLElement) {
        convertAddressContentToElements(customerAddress);
    }
}
if (document.body.classList.contains("woocommerce-edit-address")) {
    const customerAddress = document.querySelector(".woocommerce-Address");
    const addressElement = customerAddress?.querySelector("address");
    const userInfoContent = addressElement?.innerHTML.split("<br>");
    const arr = [];
    if (userInfoContent) {
        for (let i = 0; i < userInfoContent.length; i++) {
            arr.push(userInfoContent[i]);
        }
    }
    if (addressElement) {
        addressElement.textContent = "";
        for (let i = 0; i < arr.length; i++) {
            let newElementP = document.createElement("p");
            newElementP.textContent = arr[i];
            addressElement.appendChild(newElementP);
        }
    }
}
//# sourceMappingURL=customWc.js.map