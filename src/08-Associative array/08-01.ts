export const usersArray = ['Dimych', 'Natasha', 'Valera', 'Katya'];

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

type UserType = {
    [key: string]: {id: number, name: string}
}

export const users: UserType = {
    '101': {id: 101, name: 'Dimych'},
    '3232332': {id: 3232332, name: 'Natasha'},
    '1234': {id: 1234, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}

export let usersArray2= [
    {id: 101, name: 'Dimych'},
    {id: 3232332, name: 'Natasha'},
    {id: 1234, name: 'Valera'},
    {id: 1, name: 'Katya'},
]

let user = {id: 100500, name: 'Igor'}
users[user.id] = user;
delete users[user.id];
users[user.id].name = 'Igor';

usersArray2 = [user, ...usersArray2]