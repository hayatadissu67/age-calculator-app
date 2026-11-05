const years = document.querySelector('#year');
const months = document.querySelector('#month');
const days = document.querySelector('#day');
const calculateBtn = document.querySelector('#calculate-btn');
const disyear = document.querySelector('#disyear');
const dismonth = document.querySelector('#dismonth');
const disday = document.querySelector('#disday');



calculateBtn.addEventListener('click', () => {
  const year = Number(years.value);
  const month = Number(months.value);
  const day = Number(days.value); 

  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);

  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageDays = currentDate.getDate() - birthDate.getDate();

  disyear.textContent = ageYears;
  dismonth.textContent = ageMonths;
  disday.textContent = ageDays;
});