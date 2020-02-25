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
let resultsData = []



const Tablein = (Insubject, Inscore, Inrecord) => {
    // タグ作る
    const tr = document.createElement('tr')
    const tdSubject = document.createElement('td')
    const tdScore = document.createElement('td')
    const tdRecord = document.createElement('td')

    // 代入する
    tdSubject.textContent = Insubject
    tdScore.textContent = Inscore
    tdRecord.textContent = Inrecord

    // 親のタグ<tr>のなかに入れる
    tr.appendChild(tdSubject)
    tr.appendChild(tdScore)
    tr.appendChild(tdRecord)
    // 親のタグ<table>のなかに入れる
    results.appendChild(tr)
}

const set = list => {
    // hogedata ... [
    //     {
    //         subject: 'Japanese'
    //         score: 92
    //     },
    //     {
    //         subject: 'Programming'
    //         score: 100
    //     }
    // ]

    // <table id=results>の中身を全部消す
    results.innerHTML = ''

    // hogeDataを元に、<table>の中身を生成する
    // <tr>
    //     <td>Subject</td>
    //     <td>Score</td>
    // </tr>
    // <tr>
    //     <td>...</td>
    //     <td>...</td>
    // </tr>
    // <tr>
    //     <td>...</td>
    //     <td>...</td>
    // </tr>
    // ...
    // for
    // tablein 使えばできる
    Tablein('subject', 'score', 'record')
    for(let j = 0; j < list.length; j++){
        let record = ''
        if(list[j].score < 60){
            record = '不可'
        }
        else if(list[j].score < 70){
            record = '可'
        }
        else if(list[j].score < 80){
            record = '良'
        }
        else if(list[j].score < 90){
            record = '優'
        }
        else{
            record = '秀'
        }
        
        Tablein(list[j].subject, list[j].score, record)
    }
}

const addResult = () => {
    console.log("addResult")

    console.log(`subject: ${subject.value}`)
    console.log(`score: ${score.value}`)

    // Tablein(subject.value, score.value)

    // console.log(tr)
    // 連想配列
    const resultData = {
        'subject': subject.value,
        'score': Number(score.value)
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
    set(resultsData)

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
    resultsData = decoded

    set(decoded)
}