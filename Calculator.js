export default class Calculator {
    constructor(primaryOperandDisplay, secondaryOperandDisplay, operationDisplay) {
        this.primaryOperandDisplay = primaryOperandDisplay
        this.secondaryOperandDisplay = secondaryOperandDisplay
        this.operationDisplay = operationDisplay

        this.clear()
    }

    addDigit(digit) {
        if(this.primaryOperandDisplay.textContent === '0') {
            this.primaryOperandDisplay.textContent = digit
            return
        }
        this.primaryOperandDisplay.textContent += digit
    }

    clear() {
        this.primaryOperandDisplay.textContent = 0
        this.secondaryOperandDisplay.textContent = ''
        this.operationDisplay.textContent = ''
    }
}