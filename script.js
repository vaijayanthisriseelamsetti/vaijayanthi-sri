let input = document.querySelector('input[name="display"]');
let buttons = document.querySelectorAll('input[type="button"]');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.value === '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.value === 'C') {
            string = "";
            input.value = string;
        } else if (e.target.value === 'DE') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.value;
            input.value = string;
        }
    });
});
