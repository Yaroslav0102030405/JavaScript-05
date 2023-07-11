const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
};

console.log(playlist)
// Достучатся к значению свойства
console.log(playlist.name);
console.log(playlist.rating);
console.log(playlist.tracks)
console.log(playlist.trackCount)
// имя обьекта точка имякл юча 
// 99% эта запись

// бывают случаи когда значения свойства храниться в переменно и нужно из этого обьекта 
// и нужно взять из переменной ключ 
const propertyName = 'tracks'
console.log(playlist[propertyName])

// бывают случаи когда нужно создать обьект а ключ динамический
const username = 'Mango';
const email = 'Mango@mail.com';

const signupDate = {
    username: username,
    email: email,
};

console.log(signupDate);