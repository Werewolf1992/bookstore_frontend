export const TYPE = 'DISABLE_WRAPPER';

const action = (header) => {
    return {
        type: TYPE,
        header,
    };
};

export default action;
