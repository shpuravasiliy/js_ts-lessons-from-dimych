import React from 'react';
import {AddressType, LessonsType} from './07-destructure.test';

export type ManType = {
    name: string
    age: number
    lessons: LessonsType[]
    address: AddressType
}
type PropsType = {
    title: string
    man: ManType
    food: string[]
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title, man: {name}} = props;
    // const {title, man, ...restProps} = props;


    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.car.model}
            </div>
            <div>
                {man.name}
            </div>
        </div>
    );
};