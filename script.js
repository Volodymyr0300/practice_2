// function friend(friends) {
//   //your code here
//   return friends.filter((friend) => friend.length === 4);
// }
// !
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// function abbrevName(name) {
//   // code away
//   return `${name[0].toUpperCase()}.${name[
//     name.indexOf(" ") + 1
//   ].toUpperCase()}`;
// }
// console.log(abbrevName("patrick feeney"));
// //   var nameArray = name.split(" ");
// //   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// !
// !(function (e) {
//   "function" != typeof e.matches &&
//     (e.matches =
//       e.msMatchesSelector ||
//       e.mozMatchesSelector ||
//       e.webkitMatchesSelector ||
//       function (e) {
//         for (
//           var t = this,
//             o = (t.document || t.ownerDocument).querySelectorAll(e),
//             n = 0;
//           o[n] && o[n] !== t;

//         )
//           ++n;
//         return Boolean(o[n]);
//       }),
//     "function" != typeof e.closest &&
//       (e.closest = function (e) {
//         for (var t = this; t && 1 === t.nodeType; ) {
//           if (t.matches(e)) return t;
//           t = t.parentNode;
//         }
//         return null;
//       });
// })(window.Element.prototype);

// document.addEventListener("DOMContentLoaded", function () {
//   /* Записываем в переменные массив элементов-кнопок и подложку.
//       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
//   var modalButtons = document.querySelectorAll(".js-open-modal"),
//     overlay = document.querySelector(".js-overlay-modal"),
//     closeButtons = document.querySelectorAll(".js-modal-close");

//   /* Перебираем массив кнопок */
//   modalButtons.forEach(function (item) {
//     /* Назначаем каждой кнопке обработчик клика */
//     item.addEventListener("click", function (e) {
//       /* Предотвращаем стандартное действие элемента. Так как кнопку разные
//             люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
//             Нужно подстраховаться. */
//       e.preventDefault();

//       /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
//             и будем искать модальное окно с таким же атрибутом. */
//       var modalId = this.getAttribute("data-modal"),
//         modalElem = document.querySelector(
//           '.modal[data-modal="' + modalId + '"]'
//         );

//       /* После того как нашли нужное модальное окно, добавим классы
//             подложке и окну чтобы показать их. */
//       modalElem.classList.add("active");
//       overlay.classList.add("active");
//     }); // end click
//   }); // end foreach

//   closeButtons.forEach(function (item) {
//     item.addEventListener("click", function (e) {
//       var parentModal = this.closest(".modal");

//       parentModal.classList.remove("active");
//       overlay.classList.remove("active");
//     });
//   }); // end foreach

//   document.body.addEventListener(
//     "keyup",
//     function (e) {
//       var key = e.keyCode;

//       if (key == 27) {
//         document.querySelector(".modal.active").classList.remove("active");
//         document.querySelector(".overlay").classList.remove("active");
//       }
//     },
//     false
//   );

//   overlay.addEventListener("click", function () {
//     document.querySelector(".modal.active").classList.remove("active");
//     this.classList.remove("active");
//   });
// }); // end ready

// !
function counter(arr) {
  return arr.sort();
}
console.log(
  counter(["tomato", "banana", "apple", "orange", "cherry", "appla"])
);

const container = document.querySelector(".container");
console.log(container);
console.dir(container);
// container.hidden = true;
container.style.backgroundColor = "blue";

// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
