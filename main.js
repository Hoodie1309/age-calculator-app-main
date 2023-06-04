const dayInput = document.querySelector('.day-input')
const monthInput = document.querySelector('.month-input')
const yearInput = document.querySelector('.year-input')
const yearsOutput = document.querySelector('.years')
const monthsOutput = document.querySelector('.months')
const daysOutput = document.querySelector('.days')
const arrowBtn = document.querySelector('.arrow-btn')
const errorMsgs = document.querySelectorAll('.error')
const errorMsg = document.querySelector('.error')
const allInputs = document.querySelectorAll('.input')
const allLabels = document.querySelectorAll('.label')

const date = new Date()
const actualYear = date.getFullYear()
const actualMonth = date.getMonth() + 1
const actualDay = date.getDate()

const getDays = (year, month) => {
	return new Date(year, month, 0).getDate()
}

const calculate = () => {
	if (
		dayInput.value > 0 &&
		dayInput.value <= getDays(yearInput.value, monthInput.value) &&
		monthInput.value > 0 &&
		monthInput.value <= 12 &&
		yearInput.value > 0 &&
		yearInput.value < actualYear
	) {
		calculateDates()
		clearErrors()
	} else if (dayInput.value == 0 && monthInput.value == 0 && yearInput.value == 0) {
		showEmptyInputErrors()
	} else {
		showInvalidDateError()
	}
}

const calculateDates = () => {
	yearsOutput.innerText = actualYear - yearInput.value
	monthsOutput.innerText = Math.abs(actualMonth - monthInput.value)
	daysOutput.innerText = Math.abs(actualDay - dayInput.value)
}

const showEmptyInputErrors = () => {
	errorMsgs.forEach(item => item.classList.add('show'))
	allInputs.forEach(item => item.classList.add('invalid'))
	allLabels.forEach(item => (item.style.color = 'hsl(0, 100%, 67%)'))
}

const showInvalidDateError = () => {
	errorMsg.classList.add('show')
	errorMsg.innerText = 'Must be a valid date'
	allInputs.forEach(item => item.classList.add('invalid'))
	allLabels.forEach(item => (item.style.color = 'hsl(0, 100%, 67%)'))
}

const clearErrors = () => {
	errorMsgs.forEach(item => item.classList.remove('show'))
	allInputs.forEach(item => item.classList.remove('invalid'))
	allLabels.forEach(item => (item.style.color = 'hsl(0, 1%, 44%)'))
}

arrowBtn.addEventListener('click', calculate)
