export function findIfEmpty(input) {
    if (input.trim().length == 0) return true;
  }

export function isValidEmail(input) {
    if (input.trim().match('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'))
    return true;
}

