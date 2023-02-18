import Calculator from './Calculator.js'

// ACTIONS 
// 1. CLICK A NUMBER 
// 2. CLICK CLEAR BUTTON
// 3. CLICK DELETE BUTTON
// 4. CLICK ON OPERATION
// 5. CLICK THE PERIOD BUTTON
// 6. CLICK EQUALS 

const calculator = new calculator()

document.addEventListener('', e => {
    if (e.target.matches('[data-all-clear]')) {
        calculator.clear()
    }

    if (e.target.matches('[data-number]')) {
        calculator.addDigit(e.target.textConten)
    }
    if (e.target.matches('[data-delete]')) {
        calculator.delete(e.target.textConten)
    }
})