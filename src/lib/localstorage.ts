import type DataFile from '../data/lib';
import { PersistentState } from '@friendofsvelte/state';

export const localData = new PersistentState<DataFile>(
    "data",
    { actors: [], weapons: [], conditions: [] },
    "localStorage"
)