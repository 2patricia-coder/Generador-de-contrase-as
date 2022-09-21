semana = []

var lunes = parseInt(prompt('Contraseña lunes'))
semana.push (lunes)
console.log (semana)

var Martes = parseInt(prompt('Contraseña Martes'))
semana.push (Martes)
console.log (semana)

var Mierdoles  = parseInt(prompt('Contraseña Miercoles'))
semana.push (Miercoles)
console.log (semana)

var jueves = parseInt(prompt('Contraseña Jueves'))
semana.push (Jueves)
console.log (semana)

var Viernes = parseInt(prompt('Contraseña Viernes'))
semana.push (Viernes)
console.log (semana)

var sabado = semana[0]+semana[1]
var domimgo = semana[2]+semana[3]+semana[4]

semana.push(sabado)
console.log('sabado', semana)
semana.push(domingo)