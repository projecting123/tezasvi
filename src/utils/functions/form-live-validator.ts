export const emailValidateOnKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z0-9@.]+$/;
    if (e.key == ' ' || !regex.test(e.key)) e.preventDefault();
}

export const nameValidateOnKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(e.key)) e.preventDefault();
}