var clock = +prompt('Введите время от 0 до 24')
if( clock == 0) {
    alert('Время полночь')
} else if( clock > 0 && clock== 1){
    alert( clock + ' час ночи')
}else if( clock > 1 && clock<= 4){
    alert( clock + ' часа ночи')
} else if( clock > 4 && clock<= 11) {
    alert( clock + ' часов утра')
} else if( clock > 11 && clock<= 16) {
    alert(clock + ' часов дня')
}else if( clock > 16 && clock<= 20) {
    alert(clock + ' часов вечера')
}else if( clock > 20 && clock<= 23) {
    alert(clock + ' часов ночи')
} else(clock> 23);{
    alert(' Такого времени суток нет!!!')
}
