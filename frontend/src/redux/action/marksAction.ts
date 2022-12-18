export function marksInRequest(obj: any) {
    return ({
        type: 'markInRequest',
        payload: obj
    })
}