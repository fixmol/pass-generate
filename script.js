
let toNoLimit = document.querySelector('#toNoLimit')
let passInput = document.querySelector('#passInput')
let strLength = document.querySelector('#strLength')
let toGenerate = document.querySelector('#toGenerate')
let countSymb = 0

strLength.addEventListener('input', () => {
    let passValid = /^[0-9]+$/.test(strLength.value)

    if (passValid) {
        countSymb = +strLength.value

        if (countSymb > 150) {
            toGenerate.disabled = true
            strLength.style.borderColor = 'red'
        } else {
            toGenerate.disabled = false
            strLength.style.borderColor = ''
        }
    } else {
        toGenerate.disabled = true
        strLength.style.borderColor = 'red'
    }
})

toGenerate.addEventListener('click', () => {
    let str = ''
    let symbols = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < countSymb; i++) {
        if (countSymb <= 150) {
            str += symbols.charAt(Math.floor(Math.random() * symbols.length))
            passInput.value = str
        }
    }
})

