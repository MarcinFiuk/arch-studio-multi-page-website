export const getDecorationText = (text) => {
    const words = text.split('/');

    if (words[1] === '') {
        return 'home';
    }

    return words[1];
};
