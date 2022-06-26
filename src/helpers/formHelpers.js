const checkTypeNames = {
    EMAIL: 'email',
    IS_EMPTY: 'isEmpty',
};

const validateParameters = [
    {
        formName: 'userName',
        validationType: [checkTypeNames.IS_EMPTY],
    },
    {
        formName: 'email',
        validationType: [checkTypeNames.IS_EMPTY, checkTypeNames.EMAIL],
    },
    {
        formName: 'message',
        validationType: [checkTypeNames.IS_EMPTY],
    },
];

const validateFields = (field, checkType = '') => {
    if (checkType === 'isEmpty') {
        if (field === '') {
            return "Can't be empty";
        }
    }

    if (checkType === 'email') {
        const regEx =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!field.match(regEx)) {
            return 'Please use a valid email address';
        }
    }

    return null;
};

export const validateForm = (e) => {
    const errors = validateParameters.reduce((potentialErrors, field) => {
        const { formName, validationType } = field;
        const formField = e.target[formName].value;

        for (let i = 0; i < validationType.length; i++) {
            const validationResult = validateFields(
                formField,
                validationType[i]
            );
            if (validationResult) {
                potentialErrors = {
                    ...potentialErrors,
                    [formName]: validationResult,
                };
                break;
            }
        }
        return potentialErrors;
    }, {});

    return errors;
};
