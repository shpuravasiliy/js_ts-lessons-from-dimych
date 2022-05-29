import {StudentType} from '../02-objects/02';
import {CityType} from '../02-objects/02_02';

export const sum = (a: number, b: number) => {
    return a + b;
}
export const addSkill = (st: StudentType, newSkill: string) => {
    return st.technologies.push({
        id: new Date().getTime(),
        title: newSkill
    });
}
export const doesStudentLivesInCity = (st: StudentType, city: string) => st.address.city.title === city;
export const addMoneyToBudget = (c: CityType, n: number, gov: 'HOSPITAL' | 'FIRE-STATION') => {

    c.governmentBuildings.map((t) => {
            if (t.type === gov) t.budget += n;
        }
    )
}
export const destroyHouses = (c: CityType, str: string) => c.houses = c.houses.filter(t => t.address.street.title !== str);
export const repairHouses = (c: CityType, str: string, num: number) => c.houses = c.houses.map(t => {
    if (t.address.street.title === str && t.address.number === num) t.repaired = true;
    return t;
});
export const toHireStaff = (c: CityType, str: string, num: number) => c.governmentBuildings = c.governmentBuildings.map(t => {
    if (t.type === str) t.staffCount += num;
    return t;
});