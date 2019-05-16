export default (state = {}, {type, payload}) => {
    let updatedState = null;
    let categoryExpenses = null;
    let updatedExpenses = null;

    switch (type) {
        case 'CATEGORY_CREATE':
            return {...state,[payload.id]: []};
        case 'CATEGORY_DELETE':
            updatedState = {...state};
            delete updatedState[payload.id];
            return updatedState;
        case 'EXPENSE_CREATE':
            categoryExpenses = state[payload.categoryID];
            updatedExpenses = [...categoryExpenses, payload];
            return {...state, [payload.categoryID]: updatedExpenses};
        case 'EXPENSE_DELETE':
            return state;
        case 'EXPENSE_UPDATE':
            categoryExpenses = state[payload.categoryID];
            updatedExpenses = categoryExpenses.map(currentExpense => {
                return currentExpense.id === payload.id ? payload :currentExpense;
            });
            return {...state, [payload.categoryID]: updatedExpenses};
        default:
            return state;
    }
}