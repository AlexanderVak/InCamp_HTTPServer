export function pluralize(num, one, few, many) {
    if (num >=20) {
        num %= 10
    }
    switch (true) {
        case num === 0:
            return few
        case num >= 2 && num <= 4:
            return many
        case num >= 5 && num <= 19:
            return few 
        default:
            return one
    }
}