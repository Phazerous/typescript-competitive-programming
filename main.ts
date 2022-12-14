//  <<<=== MAP ===>>>
//
// const canConstruct = (ransomNote: string, magazine: string): boolean => {
//   const dict = new Map();

//   for (const char of magazine) {
//     if (dict.has(char)) {
//       dict.set(char, dict.get(char) + 1);
//     } else {
//       dict.set(char, 1);
//     }
//   }

//   let result = true;

//   for (const char of ransomNote) {
//     console.log(dict.has(char));

//     if (!dict.has(char)) {
//       result = false;
//       break;
//     } else {
//       const chr = dict.get(char);
//       if (chr === 1) {
//         dict.delete(char);
//       } else {
//         dict.set(char, chr - 1);
//       }
//     }
//   }

//   return result;
// };

// <<<=== ARRAY + ASCII ===>>>

const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const alphabet = Array(26).fill(0);

  for (let i = 0; i < magazine.length; i++) {
    alphabet[magazine.charCodeAt(i) - 97] += 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (--alphabet[ransomNote.charCodeAt(i) - 97] < 0) return false;
  }

  return true;
};
