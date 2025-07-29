"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quran_meta_1 = require("quran-meta");
var quran_1 = require("./quran");
function normalizeArabic(text) {
    return text
        // Replace special letters (ٱ → ا)
        .replace(/\u0671/g, 'ا')
        .replace(/\u0670/g, 'ا')
        .replace(/[إأآءؤئٶٷٸ]/g, 'أ') // all visible Hamzas → أ
        .replace(/[\u0654\u0655]/g, 'أ') // combining Hamza above (ٔ) → أ
        // Remove tashkeel
        .replace(/[\u0610-\u061A\u064B-\u065F\u06D6-\u06ED\u0670]/g, '')
        .replace(/\u06CC/g, 'ي') // Persian ی → Arabic ي (optional)    
        .replace(/\s+/g, ''); // Remove all whitespace
}
function getFirstLetters(text, count) {
    if (count === void 0) { count = 5; }
    var normalized = normalizeArabic(text);
    // Only keep Arabic letters (ignoring digits, punctuation, etc.)
    var lettersOnly = normalized.match(/[\u0621-\u063A\u0641-\u064A]/g) || [];
    return lettersOnly.slice(0, count).join('');
}
function compareFirstLetters(text1, text2) {
    return getFirstLetters(text1) === getFirstLetters(text2);
}
var isAyahTextRight = function (text, ayahId) {
    var ayahLocation = (0, quran_meta_1.findSurahAyahByAyahId)(ayahId).reduce(function (acc, cur, index) {
        index === 0 ? acc.surahNo = cur : acc.ayahNo = cur;
        return acc;
    }, { surahNo: 0, ayahNo: 0 });
    var foundAyahText = quran_1.quranJson[ayahLocation.surahNo - 1].verses[ayahLocation.ayahNo - 1].text;
    return compareFirstLetters(text, foundAyahText);
};
var checkSurroundingAyahs = function (text, ayahId) {
    console.log("ayahId", ayahId);
    var searchAyahId = ayahId - 30;
    var endAyahId = ayahId + 30;
    console.log('searchAyahId', searchAyahId);
    //make sure that ayahId is valid 1=< ayaId <= 6236
    searchAyahId = searchAyahId >= 1 ? searchAyahId : 1;
    endAyahId = endAyahId <= 6236 ? endAyahId : 6236;
    console.log('searchAyahId', searchAyahId);
    while (searchAyahId <= endAyahId) {
        if (isAyahTextRight(text, searchAyahId))
            return searchAyahId;
        searchAyahId++;
    }
    return undefined;
};
/*
const unfoundAyahs: [number, string][] = []
const newAyahIds = verseIds.map((verseId, index) => {
  const comparisonText = textArray[index]
  const result = isAyahTextRight(comparisonText, verseId) ? verseId : checkSurroundingAyahs(comparisonText, verseId)
  if (!result) unfoundAyahs.push([verseId, comparisonText])
  return result
})
 */
/* console.dir(newAyahIds, { depth: null, maxArrayLength: null });
console.log(unfoundAyahs, { depth: null, maxArrayLength: null }); */
checkSurroundingAyahs("قال فما خطبك يا سامري", 2399);
