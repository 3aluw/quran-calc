
# quran-calc

A tiny TypeScript/JavaScript utility to calculate Quranic ranges in **Thumuns (أثمان)** — precise Quranic divisions that represent **1/8 of a Hizb**.

---

## 📖 What is a Thumun?

A **Thumun (ثمن)** is **1/8 of a Hizb**, and each Juzʾ (جزء) has 2 Hizb.  
So there are **480 Thumuns in the entire Quran**.

This package allows you to determine the Thumun-based coverage between two points in the Quran.

---

## 🚀 Features

- Calculate how many **Thumuns** a range spans
- Supports both **forward** (start → end) and **backward** (end → start) ranges
- Compatible with the `ayahId` format used in [`quran-meta`](https://www.npmjs.com/package/quran-meta)

---

## 📦 Installation

```bash
npm install quran-thumun-range
````

---

## 🔧 Usage

```ts
import { computeThumunsByAyaId } from 'quran-thumun-range';

const result = computeThumunsByAyaId(1, 20); // start and end ayahId

console.log(result);
// Output example:
// 1  
```

---

## 🧠 What is `ayahId`?

The `ayahId` is a unique number used to identify each ayah in the Quran.
Or more accurately, it's the sequential number assigned to each ayah in the Quran from 1 to 6236.
This format is used in the [`quran-meta`](https://www.npmjs.com/package/quran-meta) package.

---

## 🔄 Direction Handling

The function supports both forward and backward navigation:

```ts
computeThumunsByAyaId(6000, 5800);
//OR 
computeThumunsByAyaId(5800, 6000); 

```

So whether you're moving **up** or **down** in the Quran, it calculates the correct number of Thumuns in the range.

---



## ✅ License

MIT

---

## 🤝 Contributing

PRs and suggestions are welcome! If you find any inconsistency in thumun mappings or metadata, feel free to open an issue.

```
