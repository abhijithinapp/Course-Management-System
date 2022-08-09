export function findIfEmpty(input) {
    if (input.trim().length == 0) return true;
  }

export function isValidEmail(input) {
    if (input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    return true;
    else return false;
}

