console.log("Hello world3")
const foo = "aaaa"
console.log(foo)
// aaaa

let bar = "bbbb"
console.log(bar)
// bbbb

// foo = "aaaa"
// error!

bar = "cccc"
console.log(bar)

// const foo = "11"
// let bar = "22"

bar = 33
bar++

bar = [1, 2, 3, 4, "aaa", "bbb"]
console.log(bar[2])
// 3
bar[4] = 100

bar.splice(1, 3)
console.log(bar)

// console.log(bar)

// bar.push(234)
// console.log(bar)

// let a = "abc"
// let b = "defg"
// let c = a + b
// console.log(c)

// // a = "abc"
// // b = "defg"
// // c = "abcdefg"


const subject = document.getElementById('subject')
const score = document.getElementById('score')
const results = document.getElementById('results')
// subject
const resultsData = []

const Tablein = (Insubject, Inscore) => {
    // タグ作る
    const tr = document.createElement('tr')
    const tdSubject = document.createElement('td')
    const tdScore = document.createElement('td')

    // 代入する
    tdSubject.textContent = Insubject
    tdScore.textContent = Inscore

    // 親のタグ<tr>のなかに入れる
    tr.appendChild(tdSubject)
    tr.appendChild(tdScore)
    // 親のタグ<table>のなかに入れる
    results.appendChild(tr)
}

const addResult = () => {
    console.log("addResult")

    console.log(`subject: ${subject.value}`)
    console.log(`score: ${score.value}`)

    Tablein(subject.value, score.value)

    console.log(tr)
    // 連想配列
    const resultData = {
        'subject': subject.value,
        'score': score.value
    }

    console.log(resultData)

    console.log(`subject: ${resultData.subject}`)
    console.log(`score: ${resultData.score}`)

    resultsData.push(resultData)

    const resultsJson = JSON.stringify(resultsData)
    // console.log(resultsData)
    // console.log(resultsJson)
    // console.log(JSON.parse(resultsJson))

    console.log(resultsJson)
    console.log('resultsJson')

    localStorage.setItem('results', resultsJson)

    subject.value = ''
    score.value = ''

}

// localStorage.setItem('test', 'aaaaa')
console.log(localStorage.getItem('results'))

let num = 0

const array = [1, 2, 3]
// array = ["a", "b", "c"]
array[1] = 7
console.log(array)

if (localStorage.getItem('results')) {
    const decoded = JSON.parse(localStorage.getItem('results'))
    console.log(decoded)

    for(let i = 0; i < decoded.length; i++) {
        console.log(i)
        console.log(decoded[i])
        
       Tablein(decoded[i].subject, decoded[i].score)
    }
}