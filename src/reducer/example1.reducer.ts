const initExample1State = {
    datas: [],
    inputData: {}
}

function example1Reducer(state: any, action: any) {
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

export { initExample1State }
export default example1Reducer