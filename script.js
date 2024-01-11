//calculator script

let inputBar = document.getElementById('input-bar')

function display(num) {
    inputBar.value += num;
}
function clearData() {
    inputBar.value = inputBar.value.slice(0, -1)
}
function calculate() {
    try { inputBar.value = eval(inputBar.value) }
    catch (Error) {
        inputBar.value = "Error"
        setTimeout(() => {
            if (inputBar.value === "Error") {
                inputBar.value = " ";
            }
        }, 1000);
    }
}
function Del() {
    inputBar.value = ""
}

////////////-Sound
const audio = new Audio()
audio.src = "./click.mp3"