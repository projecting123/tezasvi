export const emailValidateOnKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z0-9@.]+$/;
    if (e.key == ' ' || !regex.test(e.key)) e.preventDefault();
}