import {GovernmentBuildingsType, HouseType} from '../02-objects/02_02';

export const getStreetsTitlesOfGovernmentBuildings = (houses: GovernmentBuildingsType[]) => houses.map(h => h.address.street.title);
export const getStreetsTitlesOfHouses = (houses: HouseType[]) => houses.map(h => h.address.street.title);

export const createMessages = (houses: HouseType[]) => houses.map(h => `Hello guys from ${h.address.street.title}`);