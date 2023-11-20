export const Valid = (value) => {
    if (!value.content) {
        alert('Заполните поле');
        return false;
    }
    return true;
};
