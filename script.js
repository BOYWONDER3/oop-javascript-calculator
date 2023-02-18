import Calculator from './Calculator.js'

const primaryOperandDisplay = document.querySelector('[data-primary-operand]')
const secondaryOperandDisplay = document.querySelector('[data-secondary-operand]')
const operationDisplay = document.querySelector('[data-operation]')

// ACTIONS 
// 1. CLICK A NUMBER 
// 2. CLICK CLEAR BUTTON
// 3. CLICK DELETE BUTTON
// 4. CLICK ON OPERATION
// 5. CLICK THE PERIOD BUTTON
// 6. CLICK EQUALS 

const calculator = new Calculator(
    primaryOperandDisplay, 
    secondaryOperandDisplay,
     operationDisplay)

document.addEventListener('click', e => {
    if (e.target.matches('[data-all-clear]')) {
        calculator.clear()
    }
    if (e.target.matches('[data-number]')) {
        calculator.addDigit(e.target.textConten)
    }
    if (e.target.matches('[data-delete]')) {
        calculator.removeDigit()
    }
    if (e.target.matches('[data-operation]')) {
        calculator.chooseOperation(e.target.tectContent)
    }
    if (e.target.matches('[data-equals]')) {
        calculator.evaluator()
    }
})