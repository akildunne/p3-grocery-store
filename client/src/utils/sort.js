const compareKey = key =>
  (a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  }
export const AZ = arr => arr.sort(compareKey('product'))
export const ZA = arr => arr.sort(compareKey('product')).reverse()
export const lowestFirst = arr => arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
export const highestFirst = arr => arr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))