function validatePIN (pin) {
  return RegExp('^([0-9]{4})$|^([0-9]{6})$').test(pin);
}