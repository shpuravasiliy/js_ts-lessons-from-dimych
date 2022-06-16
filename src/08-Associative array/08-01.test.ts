import {usersObj} from './08-01';

type UserType = {
    [key: string]: {id: number, name: string}
}

let users: UserType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '3232332': {id: 3232332, name: 'Natasha'},
        '1234': {id: 1234, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }

})

test('should select corresponding user from obj', () => {
    users['1'].name = 'Ekaterina'

    expect(users[1].name).toBe('Ekaterina');
    // expect(usersObj[1]).toBe('Natasha');
    // expect(usersObj[2]).toBe('Valera');
    // expect(usersObj[3]).toBe('Katya');
});
