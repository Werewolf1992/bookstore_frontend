import {TYPE as DISABLE_WRAPPER} from '../../actions/common/navigation/disableWrapper';

const DEFAULT_STATE = {
    disabled: false,
};

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case DISABLE_WRAPPER: {
            return {
                ...state,
                disabled: true,
            };
        }
        case '@@router/LOCATION_CHANGE': {
            return {
                ...state,
                disabled: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
