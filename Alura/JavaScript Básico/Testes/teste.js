var i = 0
var listacores = ['Yellow', 'Blue', 'Red', 'Green', 'Pink', 'Purple', 'Crinsom']

setInterval(function() {
    document.body.style.backgroundColor = listacores[i]
    i++
    if (i == listacores.length) {
        i = 0
    }
}, 500)