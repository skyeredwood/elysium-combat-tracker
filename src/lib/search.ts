// import getCache from "$db/cache";
// import { stringSimilarity } from "string-similarity-js";

// export default async function search(keyword: string) {
//     const cache = await getCache();
//     let regex = new RegExp(String.raw`${keyword}.*`, "i");

//     const skills = cache.skills.filter((s) => s.name.match(regex)).sort((a, b) => sortItems(a.name, b.name, keyword));
//     const stats = cache.stats.filter((s) => s.name.match(regex)).sort((a, b) => sortItems(a.name, b.name, keyword));

//     return [
//         ...tag(stats, "stats"), ...tag(skills, "skills")
//     ];
// }

// export function sortItems(a: string, b: string, k: string): number {
//     return stringSimilarity(a, k) - stringSimilarity(b, k)
//         || sortAlphabetic(a.toLowerCase(), b.toLowerCase(), k.toLowerCase()) 
//         || a.localeCompare(b) 
//         || a.charAt(0).localeCompare(b.charAt(0));
// }

// function sortAlphabetic(a: string, b: string, k: string): number {
//     let aCounter = 0;
//     let bCounter = 0;

//     for (let i = 0; i < k.length; i++) {
//         let target = k.charAt(i).toLowerCase();
//         let aChar = a.charAt(i).toLowerCase();
//         let bChar = b.charAt(i).toLowerCase();

//         if (target == aChar) aCounter++;
//         if (target == bChar) bCounter++;

//         if (aCounter != bCounter) break;
//     }

//     return bCounter - aCounter;
// }

// function tag(list: any[], tag: string) {
//     return list.map(it => {
//         if (it.description) {
//             return {
//                 id: it._id,
//                 type: tag,
//                 name: it.name,
//                 description: it.description,
//             }
//         } else return {
//             id: it._id,
//             type: tag,
//             name: it.name
//         }
//     });
// }