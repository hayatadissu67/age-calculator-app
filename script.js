const years = document.querySelector('#year');
const months = document.querySelector('#month');
const days = document.querySelector('#day');
const calculateBtn = document.querySelector('#calculate-btn');
const disyear = document.querySelector('#disyear');
const dismonth = document.querySelector('#dismonth');
const disday = document.querySelector('#disday');
const errorMessageDay = document.querySelector('#error-message-day');
const errorMessageMonth = document.querySelector('#error-message2');
const errorMessageYear = document.querySelector('#error-message');
const dayLabel = document.querySelector('#day-label');
const monthLabel = document.querySelector('#month-label');
const yearLabel = document.querySelector('#year-label');

function validateInput() {
  const year = Number(years.value);
  const month = Number(months.value);
  const day = Number(days.value);

  let isValid = true;

  if (day < 1 || day > 31) {
    errorMessageDay.classList.remove('hidden');
    dayLabel.classList.add('text-red-500');
    days.classList.add('border-red-500');
    isValid = false;
  } else {
    errorMessageDay.classList.add('hidden');
    dayLabel.classList.remove('text-red-500');
    days.classList.remove('border-red-500');

  }

  if (month < 1 || month > 12) {
    errorMessageMonth.classList.remove('hidden');
    monthLabel.classList.add('text-red-500');
    months.classList.add('border-red-500');
    isValid = false;
  } else {
    errorMessageMonth.classList.add('hidden');
    monthLabel.classList.remove('text-red-500');
    months.classList.remove('border-red-500');
  }

  if (year < 1 || year > new Date().getFullYear()) {
    errorMessageYear.classList.remove('hidden');
    yearLabel.classList.add('text-red-500');
    years.classList.add('border-red-500');
    isValid = false;
  } else {
    errorMessageYear.classList.add('hidden');
    yearLabel.classList.remove('text-red-500');
    years.classList.remove('border-red-500');
  }

  return isValid;
}

calculateBtn.addEventListener('click', () => {
  if (!validateInput()) {
    return;
  }

  const year = Number(years.value);
  const month = Number(months.value);
  const day = Number(days.value); 

  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);

  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageDays = currentDate.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    ageDays += lastMonth.getDate();
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  } 

  disyear.textContent = ageYears;
  dismonth.textContent = ageMonths;
  disday.textContent = ageDays;
});