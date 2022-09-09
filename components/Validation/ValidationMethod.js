
export const isValidObject = obj => {
    return Object.values(obj).every
    (values => values.trim());
}

export const updateError = (error, statusUpdater) => {
    statusUpdater(error);
    setTimeout(() => {
        statusUpdater('');
    }, 3000);
};

export const isValidEmail = (value) => {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value)
}