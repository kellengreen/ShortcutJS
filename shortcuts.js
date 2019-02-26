export async function ready() {
    return new Promise(resolve => {
        if (document.readyState === 'loading') {
            const event = 'readystatechange'
            document.addEventListener(event, function listener() {
                document.removeEventListener(event, listener)
                resolve()
            })
        } 
        else {
            resolve()
        }
    })
}
