export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD = "ADD"
export const SUBTRACT = "SUBTRACT"
export const STORE_RESULT = "STORE_RESULT"
export const DELETE_RESULT = "DELETE_RESULT"

export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: DECREMENT,
    }
}

export const add = value => {
    return {
        type: ADD,
        value,
    }
}

export const subtract = value => {
    return {
        type: SUBTRACT,
        value,
    }
}

export const storeResult = result => {
    setTimeout(() => {
        return {
            type: STORE_RESULT,
            result,
        }
    }, 2000)
}

export const deleteResult = resultElId => {
    return {
        type: DELETE_RESULT,
        resultElId,
    }
}