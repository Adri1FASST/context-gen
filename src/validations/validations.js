import {test} from 'ramda'

export const validateName = (value) => {
    let error
    if (!value) {
        error = 'Ce champ est requis'
    }
    return error
}

export const validateBrokerId = (value) => {
    let error
    if (!test(/^\d{4}$/, value)) {
        error = 'Ce champ doit contenir 4 chiffres'
    }
    return error

}
