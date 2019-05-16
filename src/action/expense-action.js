export const createExpense = (name) => {
    return {
        type: 'EXPENSE_CREATE',
        payload: {
            id: Math.random(),
            categoryID: this.state.categoryID,
            name,
            price: 0,
            createOn: new Date(),
        }
    }
};

export const updateExpense = (expense) => {
    return {
        type: 'EXPENSE_UPDATE',
        payload: expense,
    }
};

export const deleteExpense = (expense) => {
    return {
        type: 'EXPENSE_DELETE',
        payload: expense,
    }
};