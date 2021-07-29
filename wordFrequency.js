export function separateWords(text) {
    let words = text.toLowerCase().split(' ')
    let separatedWords = []
    words.forEach(word => {
        separatedWords.push(word.match(/\w*\W/) ? word.slice(0, -1) : word)
    });
    return separatedWords
}
export function mapWords(separatedWords){
    const words = new Map()
    separatedWords.forEach(word => {
        words.has(word) ? words.set(word,(words.get(word)) + 1) : words.set(word, 1)
    });
    return words
}

export function countWords(words) {
    let maxValue = 0
    let headers = {
        frequentWords: [],
        uniqueWords: 0
    }

    words.forEach((value, key) => {
        if (value > maxValue) {
            maxValue = value
        }
        if (value === 1) {
            headers.uniqueWords ++
        }
    })
    words.forEach((value, key) => {
        if (value === maxValue) {
            headers.frequentWords.push(key)
        }
    })
    return headers
}