// js/main.ts

// Branded (nominal) number types using an intersection + hidden brand
type MajorCredits = number & { __brand: "MajorCredits" };
type MinorCredits = number & { __brand: "MinorCredits" };

// Helper functions to assert brand
function makeMajor(n: number): MajorCredits {
  return n as MajorCredits;
}

function makeMinor(n: number): MinorCredits {
  return n as MinorCredits;
}

// Sum functions returning the correct branded type
function sumMajorCredits(s1: MajorCredits, s2: MajorCredits): MajorCredits {
  return makeMajor((s1 as number) + (s2 as number));
}

function sumMinorCredits(s1: MinorCredits, s2: MinorCredits): MinorCredits {
  return makeMinor((s1 as number) + (s2 as number));
}

// Example usage:
const m1 = makeMajor(10);
const m2 = makeMajor(15);
const majorTotal = sumMajorCredits(m1, m2);

const n1 = makeMinor(5);
const n2 = makeMinor(7);
const minorTotal = sumMinorCredits(n1, n2);

console.log("Major credits total:", majorTotal);
console.log("Minor credits total:", minorTotal);

// The branded types prevent mixing:
// sumMajorCredits(m1, n1); // ❌ Type Error
