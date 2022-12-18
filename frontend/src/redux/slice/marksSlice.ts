export const markSLice = (state = [], {payload, type}: any) => {
    switch (type) {
        case 'markInRequest':
            return payload
        default: 
            return state;
    }
}