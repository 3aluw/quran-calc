import { meta, findPage, getSurahMeta, checkValidSurahAyah, findAyahIdBySurah, findJuz } from 'quran-meta'

import type { Surah, Page, AyahId, Juz, AyahNo, SurahMeta } from 'quran-meta'

import {quranJson} from './quran'
import { thumunObjects, versIds, textArray } from './thumuns'

function removeTashkeel(text:string) {
  return text.replace(/[\u0610-\u061A\u064B-\u065F\u06D6-\u06ED]/g, '');
}

const isAyahTextRight =(text:string, surahNumber:number,ayahNumber:number)=>{
    const targetedSurah = quranJson.find(surah=> surah.id === surahNumber)
    if (!targetedSurah) return false;

    const targetedAyah = targetedSurah.verses[ayahNumber - 1]

    console.log(removeTashkeel(targetedAyah.text), text);
    return removeTashkeel(targetedAyah.text).startsWith(text)
}

console.log('isAyahTextRight ', isAyahTextRight('بسم', 1, 1));