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

export let strikeWeapon: Weapon = {
    id: "strike",
    name: "Strike",
    type: WeaponType.Melee,
    actionPointCost: 2,
    dmg: "1d4-1",
    requirements: "none",
    notes: "Can choose to grapple target, or push them 5 feet back by lowering your damage by 1 (can go to 0)."
}