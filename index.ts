import { meta, findPage, getSurahMeta, findSurahAyahByAyahId, checkValidSurahAyah, findAyahIdBySurah, findJuz } from 'quran-meta'

import type { Surah, Page, AyahId, Juz, AyahNo, SurahMeta } from 'quran-meta'

import { quranJson } from './quran'
import { thumunObjects, versIds, textArray } from './thumuns'

function normalizeArabic(text: string) {
  return text
    // Replace special letters (ٱ → ا)
    .replace(/\u0671/g, 'ا')
    // Remove tashkeel
    .replace(/[\u0610-\u061A\u064B-\u065F\u06D6-\u06ED\u0670]/g, '')
    .replace(/\u06CC/g, 'ي') // Persian ی → Arabic ي (optional)    
    .replace(/\s+/g, ''); // Remove all whitespace
}

function getFirstLetters(text: string, count = 5) {
  const normalized = normalizeArabic(text);
  // Only keep Arabic letters (ignoring digits, punctuation, etc.)
  const lettersOnly = normalized.match(/[\u0621-\u063A\u0641-\u064A]/g) || [];
  return lettersOnly.slice(0, count).join('');
}

function compareFirstLetters(text1, text2) {
  return getFirstLetters(text1) === getFirstLetters(text2);
}

const isAyahTextRight = (text: string, ayahId:AyahId) => {

const ayahLocation = findSurahAyahByAyahId(ayahId).reduce((acc, cur,index) => {
  index === 0 ? acc.surahNo = cur : acc.ayahNo = cur;
  return acc;
},{surahNo: 0, ayahNo: 0});
console.log(ayahLocation);
const ayahText = quranJson[ayahLocation.surahNo-1].verses[ayahLocation.ayahNo-1].text;

}

isAyahTextRight('بسم', 1)