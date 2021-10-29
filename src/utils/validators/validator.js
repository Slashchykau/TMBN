export function required(value) {
    if(value) return undefined;
    return 'Field is required'
}

export const maxLengthCreator = (number) => (value) => {
    if(value.length > number) return `Max lengths ${number} symbols`;
    return undefined;
}