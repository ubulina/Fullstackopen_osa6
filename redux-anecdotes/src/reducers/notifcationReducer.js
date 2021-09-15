const initialState = ''

const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_INFO':
            console.log(action.text)
            return action.text
        case 'REMOVE_INFO':
            return initialState
        default:
            return initialState
    }
    
}
  
export const showNotification = (text, time) => {
    return async dispatch => {
        await dispatch({
            type: 'SHOW_INFO',
            text
        })
         setTimeout(() => {
            dispatch(removeNotification())
        }, time)
        
    }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE_INFO',
        
    }
}

export default notificationReducer