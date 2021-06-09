/**
 * Script for selection.ejs
 */
document.getElementById('launch2').addEventListener('click', e => {
    switchView(VIEWS.selection, VIEWS.landing)
})
document.getElementById('launching').addEventListener('click', e => {
    switchView(VIEWS.selection, VIEWS.login)
})