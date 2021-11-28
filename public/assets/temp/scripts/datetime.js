// Bsic Date picker
$(function () {
  $("#basicDatepicker").datepicker();
});

// Display Buttons
$(function () {
  $("#datepickerWithButtons").datepicker({
    showButtonPanel: true,
  });
});

// Date Picker With Months And Years
$(function () {
  $("#datepickerWithMonthsAndYears").datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

// Date Picker With Multi Months
$(function () {
  $("#datepickerWithMultiMonths").datepicker({
    numberOfMonths: 2,
    showButtonPanel: true,
  });
});

// Date Picker With Restrict
$(function () {
  $("#datepickerWithRestrict").datepicker({ minDate: -20, maxDate: "+1M +10D" });
});
