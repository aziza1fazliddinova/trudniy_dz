let home = document.querySelector('.home')
let grouup = document.querySelector('.grouup')
let diplomat = document.querySelector('.diplomat')
let messeg = document.querySelector('.messeg')
let kalokol = document.querySelector('.kalokol')

home.onclick = () => {
    home.style.background = '#3456FF'
    grouup.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    diplomat.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    messeg.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    kalokol.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
}
grouup.onclick = () => {
    home.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    grouup.style.background = '#3456FF'
    diplomat.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    messeg.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    kalokol.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
}
diplomat.onclick = () => {
    home.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    grouup.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    diplomat.style.background = '#3456FF'
    messeg.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    kalokol.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
}
messeg.onclick = () => {
    home.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    grouup.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    diplomat.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    messeg.style.background = '#3456FF'
    kalokol.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
}
kalokol.onclick = () => {
    home.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    grouup.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    diplomat.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    messeg.style.background = 'var(--sc2, rgba(52, 86, 255, 0.75))'
    kalokol.style.background = '#3456FF'
}


let l_icon = document.querySelector('.l_icon')
let r_icon = document.querySelector('.r_icon')
let icon_text_r = document.querySelector('.icon_text_r')
let icon_text = document.querySelector('.icon_text')

let fls = false
let tru = false

icon_text.onclick = () => {
    fls = !fls
    l_icon.style.background = fls ? '#3456FF' : ''
}

icon_text_r.onclick = () => {
    tru = !tru
    r_icon.style.background = tru ? '#3456FF' : ''
}


































// for css https://neumorphism.io/#b47e7e
// link https://www.netlify.com/
// https://cssbud.com/css-generator/css-box-shadow-generator/