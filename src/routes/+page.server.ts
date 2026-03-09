import type { Actions } from "@sveltejs/kit";
import type { CombatActor, Condition, Weapon } from "../data/lib";
import { strikeWeapon } from "../data/weapon";

export const actions = {
	actor: async ({ request }) => {
		let data = await request.formData();
		let actor: CombatActor = {
			name: data.get("name")!!.toString(),
			desc: data.get("desc")!!.toString(),
			downed: false,
			notes: "",

			maxHP: Number.parseInt(data.get("hp")!!.toString()),
			currentHP: Number.parseInt(data.get("hp")!!.toString()),
			maxMorale: Number.parseInt(data.get("morale")!!.toString()),
			currentMorale: Number.parseInt(data.get("morale")!!.toString()),
			reflex: Number.parseInt(data.get("reflex")!!.toString()),
			actionPoints: Number.parseInt(data.get("ap")!!.toString()),

			stats: {
				int: Number.parseInt(data.get("int")!!.toString()),
				psy: Number.parseInt(data.get("psy")!!.toString()),
				fys: Number.parseInt(data.get("fys")!!.toString()),
				mot: Number.parseInt(data.get("mot")!!.toString())
			},

			weapons: [strikeWeapon.id], // Added later
			conditions: []
		}
		return { success: true, type: "actor", data: actor };	
	},
	weapon: async ({ request }) => {
		let data = await request.formData();
		let weapon: Weapon = {
			id: data.get("id")!!.toString(),
			type: Number.parseInt(data.get("type")!!.toString()),
			name: data.get("name")!!.toString(),

			actionPointCost: Number.parseInt(data.get("ap")!!.toString()),
			dmg: data.get("dmg")!!.toString(),
			requirements: data.get("req")!!.toString(),
			notes: data.get("notes")!!.toString()
		}
		return { success: true, type: "weapon", data: weapon };	
	},
	condition: async ({ request }) => {
		let data = await request.formData();
		let condition: Condition = {
			id: data.get("id")!!.toString(),
			name: data.get("name")!!.toString(),
			desc: data.get("desc")!!.toString(),
			colour: data.get("colour")!!.toString(),
			icon: data.get("icon")!!.toString()
		}
		return { success: true, type: "condition", data: condition };	
	},
	upload: async ({ request }) => {
		let data = await request.formData();
		let file = data.get("file") as File
		let text = await file.text();

		return { success: true, type: "upload", data: JSON.parse(text) };	
	}
} satisfies Actions;