import {CourseType} from './04';

test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const predicate = (age: number) => {
        return age > 90;
    }

    const oldAges = ages.filter(predicate);
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})
test('should take courses cheaper 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ]

    const cheapPredicate = (course: CourseType) => {
        return course.price < 160
    }
    const cheapCourses = courses.filter(cheapPredicate);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('CSS');
})
test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(t => t.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('Milk');
})