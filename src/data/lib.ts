import type Weapon from "./weapon"
import type Condition from "./condition"

export default interface DataFile {
    actors: CombatActor[]
    weapons: Weapon[]
    conditions: Condition[]
    sequence: { name: string, roll: number }[]
}

export interface CombatActor {
    name: string
    desc: string
    downed: boolean
    notes: string

    maxHP: number
    currentHP: number
    maxMorale: number
    currentMorale: number
    reflex: number
    actionPoints: number

    stats: {
        int: number
        psy: number
        fys: number
        mot: number
    }

    weapons: string[] // id of weapon
    conditions: string[]
}

export type {
    Weapon, Condition
}