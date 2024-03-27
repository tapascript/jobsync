export function getListItems(input) {
  return input && input.split('\n');
}

export function getFormattedNumber(input) {
  return new Intl.NumberFormat().format(input)
}