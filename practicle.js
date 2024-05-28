let btn = document.querySelector("#task_1"); // Gehe davon aus, dass task_1 eine ID ist
btn.innerText = "Maria";
btn.className = "some_class";
btn.onclick = () => {
    console.log("kuku");
};

let btn2 = document.querySelector("#task_2"); // Gehe davon aus, dass task_2 eine ID ist
btn2.onclick = () => {
    localStorage.removeItem("key");
};

// die Logik für das Speichern und Wechseln des Werts in localStorage einer separaten Funktion zugewiesen werden sollte
btn.onclick = () => {
    let data = localStorage.getItem("key");
    if (data === "1") {
        localStorage.setItem("key", 0);
    } else {
        localStorage.setItem("key", 1);
    }
};

// Задача 1
// Создать форму с полем ввода. При отправке формы значение поля ввода должно сохраняться в localStorage (ключ - form).//

const inputName = document.querySelector("#name")
const form = document.querySelector("form")
form.onsubmit = () => {
        localStorage.setItem("form", inputName.value);
}

// Задача. К прошлому примеру добавить кнопку, которая считывает значение из localStorage и помещает в поле ввода.
const button = document.createElement ("button")
button.textContent = "savedValue"
form.after(button);
button.onclick = () => {
    const savedValue = localStorage.getItem("form");
    inputName.value = savedValue;
};

// Задача. Добавить кнопку, которая очищает localStorage.

const button_clear = document.querySelector("#clear_btn")
button_clear.onclick = () => {
    localStorage.removeItem("form")
} 
// -----------------------
// Steuerung von Seitenthema//

const body = document.body
const theme_btn = document.querySelector("#theme_btn")
theme_btn.onclick = () => {
    document.body.className = (document.body.className === "light") ? "dark" : "light"
    localStorage.setItem("theme", body.className)
}

// ----------------------------------
// Создать каунтер. Страница с двумя кнопками “+” и “-” и при нажатии на какую-либо число должно меняться в соответствующую сторону. Значение counter не должно слетать при перезагрузке страницы. 



const btn_increment = document.querySelector(".increment")
const btn_decrement = document.querySelector(".decrement")
const counter_h1 = document.querySelector("h1")
savedCount= localStorage.getItem("count");
let count = (savedCount) ? savedCount : 0;
counter_h1.innerText = (savedCount) ? savedCount : 0;

btn_increment.onclick = () =>{
    counter_h1.innerText = ++count;
    localStorage.setItem("count", count)
}
btn_decrement.onclick = () =>{
    counter_h1.innerText = --count;
    localStorage.setItem("count", count)
}
