// endWith
// String.prototype.endsWith = function (i) {
//   if ((this.endsWith = i)) {
//     return true;
//   } else {
//     return false;
//   }
// };
// Example
// let w = "Salom";
// let res = w.endsWith("");
// console.log(res);
// match
// String.prototype.myMatch = function (regex) {
//   const matches = this.match(regex);
//   return matches || [];
// };
// Example
// const word = "Hello World!";
// const example = "Hello";
// const res = word.myMatch(example);
// console.log(res);
//padEnd
// String.prototype.customPadEnd = function (length, padString = " ") {
//   const currentLength = this.length;
//   if (currentLength >= length) {
//     return this.toString();
//   }
//   const padding = padString.repeat(length - currentLength);
//   return this.toString() + padding;
// };
// Example
// const string = "Hello world";
// const res = string.customPadEnd(10, "-");
// console.log(res);
// splite
// String.prototype.splite = function (i) {
//   if (!i) {
//     throw new Error("Error!!!!!!");
//   }
//   const result = [];
//   let f = "";

//   for (let i = 0; i < this.length; i++) {
//     if (this.substr(i, i.length) === i) {
//       result.push(f);
//       f = "";
//       i += i.length - 1;
//     } else {
//       f += this[i];
//     }
//   }
//   result.push(f);
//   return result;
// };
// // Example
// const string = "Olma,Kartoshka,Mandarin";
// const res = string.splite(",");
// console.log(res);
