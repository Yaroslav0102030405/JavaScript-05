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

// const playerlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//     a: 2,
// };

// console.log(playerlist)

// три слуяая в которых скоки {} являються литералами обьекта
// 1 - запись в переменную
// const x = {}

// // 2 - при передачи в функцию аргумента. Мы тут передаем аргумент и там сверху идет присвоение
// const log = function (message) {
//     return message

// }
// console.log(log({a: 2, b: 3}))

// // 3 - когда что-то возвращаете из функции
// const fn = function () {
//     // возрат это тоже присвоение куда-то туда
//     return {}
// }

// // как получить доступ к значению name - во внемнем коде
// // это называеться образ=щение к свойтсву
// console.log(playerlist.name) // это в 99% случаев
// console.log(playerlist.rating)
// console.log(playerlist.tracks)
// console.log(playerlist.a)

// const propertyName = 'tracks'

// // как обратиться к свойтсву если ключ лежит в переменно
// console.log(playerlist[propertyName]) // это в 1% случаев бывает такое

// // сщздать обьект когда ключ динамичесикй

// // Короткая запись свойств
// const username = 'Mango'
// const email = 'mango@mail.com'

// const signupDate = {
// username,
// email,
// }

// console.log(signupDate)

// // вычесляэмые свойства для форм
// const inputName = 'color'
// const inputValue = 'tomato'

// const colorPickerDate = {
//     [inputName]: inputValue,
// }

// console.log(colorPickerDate)

// // в обьект добавить свойствo если нет то создаеться такое свойство если есть просто значение перезаписываеться
// playerlist.qwe = 7

// console.log(playerlist)


// Методы обьекта и this при обращении к свойствам в методах
const playerlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
    changeName(newName) {
        console.log(this)
        this.name = newName
    },
    addTrack(track) {
    this.tracks.push(track)
    },
    updateRating(newRatibg) {
    this.rating = newRatibg
    },
    getTrackCount(trackCount) {
        return this.tracks.length
    },
}; 

playerlist.changeName('Новое имя')
playerlist.addTrack('Новый трек')
playerlist.updateRating(4)
playerlist.addTrack('Новый трек-2')
playerlist.getTrackCount()
console.log(playerlist.getTrackCount())


console.log(playerlist)

// Массиві перебираються через фор и фор оф
// Современніе обекті перебираються через обьджект кис
const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
}

let totalFeedback = 0

// const keys = Object.keys(feedback)
// console.log(feedback)

// for (const key of keys) {
//     // перебать свойтсва свойства
//     console.log(key)
//     // перебрать знаения
//     console.log(feedback[key])

//     totalFeedback += feedback[key]
// }

// console.log(totalFeedback)

// второ1 спобос добраться к знаению
// const values = Object.values(feedback)
// console.log(values)

// for (const value of values) {
//  console.log(value)

//  totalFeedback += value
// }

// console.log(totalFeedback)

// в своременной раазработке вы будете работать с массивом боьектов
// все во фронтенде это массив обьектов
// const frisnds = [
//     {name: 'Mango', online: false},
//     {name: 'Kiwi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},
// ]
// console.log(frisnds)

// for (const frisnd of frisnds) {
//     // console.log(frisnd)
//     // получить доступ к разнім свойствам
//     console.log(frisnd.name)
//     console.log(frisnd.online)

//     // добавили новое свойство
//     frisnd.nweqrop = 5
//     totalFeedback += frisnd.nweqrop
// }

// console.log(totalFeedback)

// console.log(frisnds)

// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kiwi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},
// ]
// console.log(friends)

// const findFriendByName = function (allfriends, name) {
//     const names = []

// for (const friend of friends) {
//     console.log(friend)
//     console.log(friend.name)

//     names.push(friend.name)
//     if (friend.name === name) {
// return 'Нашли'
//     }
//     console.log(names)
// }
// return 'Не нашли'

// }

// console.log(findFriendByName(friends, 'Poly'))
// console.log(findFriendByName(friends, 'Chelsy'))

// получить всех друзей которые онлайн
    const friends = [
        {name: 'Mango', online: false},
        {name: 'Kiwi', online: true},
        {name: 'Poly', online: true},
        {name: 'Ajax', online: false},
    ]
    console.log(friends)

    // const getOnlineFriends = function (allfriends) {
    //     const onlineFriends = []

    //     for (const friend of friends) {
    //         console.log(friend)

    //     if (friend.online) {
    //         onlineFriends.push(friend)
    //     }
        
    //     }
    //     return onlineFriends
    // }

    // console.log(getOnlineFriends(friends))

// получить друзей по статутсу
    const getFriendsByOnlineStatus = function (allfriends) {
        const friendsByStatus = {
            online: [],
            offline: [],
        }

        for (const friend of allfriends) {
            console.log(friend)
            if (friend.online) {
                friendsByStatus.online.push(friend)
                continue
            }
                friendsByStatus.offline.push(friend)
        }
          return friendsByStatus
    }

    console.log(getFriendsByOnlineStatus(friends))

    const x = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    }

    console.log(Object.keys(x).length)