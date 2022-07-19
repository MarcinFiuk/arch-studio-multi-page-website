export function checkValidity(input) {
    if (input.validity.valueMissing) {
        return { [input.name]: "Can't be empty" };
    }

    if (!input.validity.valid) {
        return { [input.name]: 'Please use a valid email address' };
    }
    return {};
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
