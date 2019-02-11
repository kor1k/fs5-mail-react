export const myLogger = store => next => action => {
    console.log(`Событие: ${action.type}, payload данные:`, action.payload )
    return next(action)
}