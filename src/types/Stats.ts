export enum StatName {
    STRENGTH = "STRENGTH",
    DEXTERITY = "DEXTERITY",
    CONSTITUTION = "CONSTITUTION",
    INTELLIGENCE = "INTELLIGENCE",
    WISDOM = "WISDOM",
    CHARISMA = "CHARISMA"
}

export interface Stat{
    score: number;
    type: StatName;
}