export interface Person {
    id: string,
    name: string,
    diet: Diet[]
}

export interface Diet {
    weekDay: string,
    meal: Meal[],
}

export interface Meal {
    name: string,
    order: number,
    ingredients: Ingredient[]
}

export interface Ingredient {
    fullText: string,
    name: string,
    quantity: number,
    unit: string
}

export enum WeekDay {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}