
const TOGGLE_WIDGET = 'TOGGLE_WIDGET'

const initialState = {
    isOpen: false
}

export const toggleWidget = () => {
    return (dispatch) => {
        dispatch({
            type: "TOGGLE_WIDGET",
        });
    }
}

export const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_WIDGET:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        default:
            return {
                ...state
            }
    }
}