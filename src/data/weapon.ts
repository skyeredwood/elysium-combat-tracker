export default interface Weapon {
    id: string
    name: string
    type: WeaponType
    actionPointCost: number
    dmg: string
    requirements: string
    notes: string
}

export enum WeaponType {
    Melee, Ranged, Explosive
}