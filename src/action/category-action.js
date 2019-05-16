export const createCategory = (title, content) => {
    return {
        type: 'CATEGORY_CREATE',
        payload: {
            id: Math.random(),
            title,
            content,
            createdOn: new Date(),
        }
    }
};

export const updateCategory = (category) => {
    return {
        type: 'CATEGORY_UPDATE',
        payload: category,
    }
};

export const deleteCategory = (category) => {
    return {
        type: 'CATEGORY_DELETE',
        payload: category,
    }
};