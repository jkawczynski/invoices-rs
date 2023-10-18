"use strict";
const formFields = {
  company_name: {
    required: true,
    maxLength: 10,
  },
};

window.validateForm = function () {
  const inputs = document.querySelectorAll("inputs");

  const errors = {};

  inputs.forEach(function (formInput) {
    const formField = formFields[formInput.name];
    if (formField) {
      const value = formInput.value;
      if (formField.required && !value) {
        errors[formInput.name] = "This field is required";
        return;
      }
      if (formField.maxLength && value && value.length > formField.maxLength) {
        errors[formInput.name] =
          "This field can't be longer than " + formField.maxLength;
        return;
      }
    }
  });
  return errors;
};
