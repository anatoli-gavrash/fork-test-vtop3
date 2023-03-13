import selectsData from './selects-data.js';
import fillingSelect from './filling-select.js';

function singUp() {
  // Селекты для наполнения данными.
  const selectNationality = document.getElementById('nationality');
  const selectDay = document.getElementById('birth-day');
  const selectMonth = document.getElementById('birth-month');
  const selectYear = document.getElementById('birth-year');
  // Заполняем информацией селекты из формы.
  fillingSelect(selectNationality, 'registration__field-select-option', selectsData.nationalities, selectsData.nationalities.length - 1);
  fillingSelect(selectDay, 'birthday__select-option', 1, 31);
  fillingSelect(selectMonth, 'birthday__select-option', selectsData.months, selectsData.months.length - 1);
  fillingSelect(selectYear, 'birthday__select-option', 1900, 2023);
}
singUp();