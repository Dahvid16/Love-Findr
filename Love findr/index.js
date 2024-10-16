'use strict';

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    document.querySelector(".loader").classList.add("loader-hidden");

    document.querySelector(".loader").addEventListener("transitionend", () => {
        document.body.removeChild(document.querySelector(".loader"));
    });
});

// const form = document.querySelector("form"),
//     nextBtn = form.querySelector(".nextbtn"),
//     backBtn = form.querySelector(".previous-btn"),
//     allInput = form.querySelectorAll(".form1 input");

// nextBtn.addEventListener("click", () => {
//     allInput.forEach(input => {
//         if (input.value != "") {
//             form.classList.add('secActive');
//         } else {
//             form.classList.remove('secActive');
//         }
//     });
// })

// backBtn.addEventListener("click", () => form.classList.remove('secActive'));