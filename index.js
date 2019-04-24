const test = document.getElementById('test')
const arr = test.textContent.split('').map(item => {
    const span = document.createElement('span')
    span.textContent = item
    return span
})
const handler = event => {
    arr.forEach(span => {
        const { x, y } = event
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = span
        const xx = Math.abs(offsetLeft + offsetWidth / 2 - x) * .05
        const yy = Math.abs(offsetTop + offsetHeight / 2 - y) * .05
        const wght = Math.max(900 - xx * xx - yy * yy, 0)
        span.style.fontVariationSettings = '\'wght\' ' + wght
    })
}
test.textContent = ''
test.append(...arr)
test.addEventListener('mousemove', _.debounce(handler, 100))
// test.addEventListener('mousemove', handler)
0&&test.addEventListener('mousemove', event => {
    arr.forEach(span => {
        const { x, y } = event
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = span
        const xx = Math.abs(offsetLeft + offsetWidth / 2 - x) * .002
        const yy = Math.abs(offsetTop + offsetHeight / 2 - y) * .002
        const opacity = Math.max(1 - xx * xx - yy * yy, .2)
        span.style.opacity = String(opacity)
    })
})
