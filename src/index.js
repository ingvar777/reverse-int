module.exports = function reverse (n) {
    
    let strN = String(Math.abs(n))

    return +strN.split('').reverse().join('')
  
}
