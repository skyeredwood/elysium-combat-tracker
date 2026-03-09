import Typo from "typo-js";

const dictionary = new Typo("en_GB", "/typo/dictionaries/en_GB/en-GB.aff", "/typo/dictionaries/en_GB/en-GB.dic", { dictionaryPath: "typo/dictionaries" });

export default function correctTypos(text: string) {
    return dictionary.suggest(text, 1)[0];
}