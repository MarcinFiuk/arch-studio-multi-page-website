export const findPhotoSize = (media) => {
    const [mobile, desktop] = media;

    if (mobile && !desktop) {
        return 'mobile';
    }
    if (!mobile && !desktop) {
        return 'tablet';
    }
    return 'desktop';
};
