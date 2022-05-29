import {CityType} from '../02-objects/02_02';
import {addMoneyToBudget, destroyHouses, repairHouses, toHireStaff} from './03';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            buildAt: 2012, repaired: false,
            address: {
                number: 100,
                street: {title: 'White street'}
            }
        },
            {
                buildAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: 'Happy street'}
                }
            },
            {
                buildAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: 'Happy street'}
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test('budget should contains for HOSPITAL', () => {
    addMoneyToBudget(city, 500000, 'HOSPITAL');

    expect(city.governmentBuildings[0].budget).toBe(700000);

})
test('budget should contains for FIRE-STATION', () => {
    addMoneyToBudget(city, 500000, 'FIRE-STATION');

    expect(city.governmentBuildings[1].budget).toBe(1000000);
})
test('Houses should be destroyed', () => {
    destroyHouses(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    // expect(city.houses[0].address.number).toBe(1);
})
test('Houses should be repaired', () => {
    repairHouses(city, 'Happy street', 101);

    expect(city.houses[2].repaired).toBeTruthy();
})
test('Staff should be increased', () => {
    toHireStaff(city, 'HOSPITAL', 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
})