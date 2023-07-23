// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };

// console.log(playlist)
// // Достучатся к значению свойства
// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.tracks)
// console.log(playlist.trackCount)
// имя обьекта точка имякл юча 
// 99% эта запись

// бывают случаи когда значения свойства храниться в переменно и нужно из этого обьекта 
// и нужно взять из переменной ключ 
// const propertyName = 'tracks'
// console.log(playlist[propertyName])

// // бывают случаи когда нужно создать обьект а ключ динамический
// const username = 'Mango';
// const email = 'Mango@mail.com';

// const signupDate = {
//     username: username,
//     email: email,
// };

// console.log(signupDate);

const playerlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
    a: 2,
};

console.log(playerlist)

// три слуяая в которых скоки {} являються литералами обьекта
// 1 - запись в переменную
const x = {}

// 2 - при передачи в функцию. Мы тут передаем аргумент и там сверху идет присвоение
const log = function (message) {
    return message

}
console.log(log({a: 2, b: 3}))

// 3 - когда что-то возвращаете из функции
const fn = function () {
    // возрат это тоже присвоение куда-то туда
    return {}
}

