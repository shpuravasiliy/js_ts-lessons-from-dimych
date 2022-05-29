import {addSkill, doesStudentLivesInCity} from './03';
import {StudentType} from '../02-objects/02';

let student: StudentType;

const newSkill = 'Redux';
const city1 = 'Minsk';
const city2 = 'Krasnodar';

beforeEach( () => {
    student = {
        name: 'Vasiliy',
        age: 30,
        isActive: true,
        address: {
            street: 'Repina 5',
            city: {
                title: 'Krasnodar',
                countryTitle: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },

            {
                id: 2,
                title: 'CSS'
            },

            {
                id: 3,
                title: 'React'
            },
        ]
    }
} )


test('skill should be added', () => {
    addSkill(student, newSkill);
    expect(student.technologies.length).toBe(4);

    expect(student.technologies[3].title).toBe('Redux');
    expect(student.technologies[3].id).toBeDefined();
})
test('does student lives in city', () => {
    doesStudentLivesInCity(student, city1);
    // expect(student.address.city.title).toBe('Minsk');
    expect(student.address.city.title).toBe('Krasnodar');

})