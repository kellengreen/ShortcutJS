/**
 * Let's us know when the DOM is ready for interaction.
 */
export default function ready() {
    return new Promise(resolve => {
        if (document.readyState === 'loading') {
            document.addEventListener('readystatechange', resolve, { once: true })
        } else {
            resolve()
        }
    })
}
