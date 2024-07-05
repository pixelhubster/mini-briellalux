export const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase())
}

export const validateName = (name: string) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(name.toLowerCase())
}

export const validateNumber = (number: number) => {
    const re = /^\d{9,10}$/;
    return re.test(String(number))
}

export const validatePassword = (password: string) => {
    const re = /^\S{6,}$/;
    console.log(password)
    return re.test(password)
}