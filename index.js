"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quran_1 = require("./quran");
function removeTashkeel(text) {
    return text.replace(/[\u0610-\u061A\u064B-\u065F\u06D6-\u06ED]/g, '');
}
var isAyahTextRight = function (text, surahNumber, ayahNumber) {
    var targetedSurah = quran_1.quranJson.find(function (surah) { return surah.id === surahNumber; });
    if (!targetedSurah)
        return false;
    var targetedAyah = targetedSurah.verses[ayahNumber - 1];
    console.log(removeTashkeel(targetedAyah.text), text);
    return removeTashkeel(targetedAyah.text).startsWith(text);
};
console.log('isAyahTextRight ', isAyahTextRight('بسم', 1, 1));
