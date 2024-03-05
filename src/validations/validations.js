import {test} from 'ramda'

export const validateName = (value) => {
    let error
    if (!value) {
        error = 'Ce champ est requis'
    }
    return error
}
