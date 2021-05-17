// DOM elements
const themeRadioBtns = document.querySelectorAll('.theme-radio')
const getStylesheet = document.querySelector('link[href="#"]')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const resetButton = document.querySelector('[data-reset]')
const deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

// Calculator class
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.reset()
    }

    reset() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = ''
    }

    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand += number
    }

    chooseOperation(operation) {
        if (!this.currentOperand) return
        if (this.previousOperand) {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let calculation
        const previous = Number(this.previousOperand)
        const current = Number(this.currentOperand)
        if (isNaN(previous) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                calculation = previous + current
                break
            case '-':
                calculation = previous - current
                break
            case '*':
                calculation = previous * current
                break
            case '/':
                calculation = previous / current
                break
            default:
                return
        }
        this.currentOperand = calculation
        this.operation = undefined
        this.previousOperand = ''
    }

    transformNumber(number) {
        const stringNumber = number.toString()
        const integerPart = parseFloat(stringNumber.split('.')[0])
        const decimalPart = stringNumber.split('.')[1]
        let displayNumber
        if (isNaN(integerPart)) {
            displayNumber = ''
        } else {
            displayNumber = integerPart.toLocaleString('en', { maximumFractionDigits: 0 })
        }

        if (decimalPart != null) {
            return `${displayNumber}.${decimalPart}`
        } else {
            return displayNumber
        }
    }

    updateDispaly() {
        this.currentOperandTextElement.textContent = this.transformNumber(this.currentOperand)
        if (this.operation) {
            this.previousOperandTextElement.textContent = `${this.transformNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.textContent = ''
        }
    }
}


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent)
        calculator.updateDispaly()
    })
})

operationButtons.forEach(operation => {
    operation.addEventListener('click', () => {
        calculator.chooseOperation(operation.textContent)
        calculator.updateDispaly()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDispaly()
})

resetButton.addEventListener('click', () => {
    calculator.reset()
    calculator.updateDispaly()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDispaly()
})

// Function to change the theme of the app
const changeTheme = (event) => {
    const target = event.target
    if (target.value === '1') {
        getStylesheet.setAttribute('href', './css/theme1.css')
        localStorage.setItem('preference', 1)
        console.log(localStorage.getItem('preference'))
    } else if (target.value === '2') {
        getStylesheet.setAttribute('href', './css/theme2.css')
        localStorage.setItem('preference', 2)
        console.log(localStorage.getItem('preference'))
    } else {
        getStylesheet.setAttribute('href', './css/theme3.css')
        localStorage.setItem('preference', 3)
    }
}

for (const themeRadio of themeRadioBtns) {
    themeRadio.addEventListener('change', changeTheme)
}

// Storing the state of the theme locally
const prevserveUserPreferance = () => {
    const preference = localStorage.getItem('preference')
    getStylesheet.setAttribute('href', `./css/theme${preference}.css`)
    themeRadioBtns[preference - 1].checked = true
}

window.addEventListener('load', prevserveUserPreferance)