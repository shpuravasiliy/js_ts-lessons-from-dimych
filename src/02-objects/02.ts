type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    street: string
    city: LocalCityType
}
export type TechnologiesType = {
    id: number
    title: string
}
export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
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

console.log(student.address.city.countryTitle);
console.log(student.technologies[2].title);