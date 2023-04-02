//Geomertic progression

function power(r, n) {
  const m = 1000000007;
  if (n === 0) {
    return 1;
  }
  let temp = power(r, parseInt(n / 2)) % m;
  temp = (temp * temp) % m;
  if (n % 2 === 0) {
    return temp;
  } else {
    return (temp * r) % m;
  }
}

function findGP(A, R, N) {
  const m = 1000000007;
  if (A === 0 || R === 0) {
    return -1;
  }

  let result = (A * power(R,N-1)) % m;
  return result;
}

console.log(findGP(3,3,4))
console.log(findGP(2,2,4))
console.log(findGP(4,4,3))

