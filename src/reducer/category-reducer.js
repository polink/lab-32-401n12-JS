export default (state = [], {type, payload}) => {
    switch (type) {
        case 'CATEGORY_CREATE':
            return [...state, payload];
        case 'CATEGORY_UPDATE':
            // class hint - use map
            return null;
        case 'CATEGORY_DELETE':
            // class hint - use filter
            return null;
        default:
            return state;
    }
};