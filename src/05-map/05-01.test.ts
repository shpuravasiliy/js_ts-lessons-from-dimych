import {createGreetingMessages, ManType} from './05-01';

let people: ManType[] = [];

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ];
});

test('should get array of greeting messages', () => {
    const massages = createGreetingMessages(people);

    expect(massages.length).toBe(3);
    expect(massages[0]).toBe('Hello Andrew. Welcome to IT-Incubator');
    expect(massages[1]).toBe('Hello Alexander. Welcome to IT-Incubator');
    expect(massages[2]).toBe('Hello Dmitry. Welcome to IT-Incubator');
});