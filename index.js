"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quran_meta_1 = require("quran-meta");
var quran_1 = require("./quran");
function normalizeArabic(text) {
    return text
        // Replace special letters (ٱ → ا)
        .replace(/\u0671/g, 'ا')
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
    console.log(ayahLocation);
    var ayahText = quran_1.quranJson[ayahLocation.surahNo - 1].verses[ayahLocation.ayahNo - 1].text;
    console.log(ayahText);
};
isAyahTextRight('بسم', 1);
