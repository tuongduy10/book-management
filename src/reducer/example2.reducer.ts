const initExample2State = {
    data: [],
    inputData: {}
}

function example2Reducer(state: any, action: any) {
    switch(action.type) {
        case 'ADD':
            return { ...state };
        case 'UPDATE':
            return { ...state };
        case 'DELETE':
            return { ...state };
        default:
            return new Error(`Unhandled  action type ${action.type}`);
    }
}

export { initExample2State }
export default example2Reducer