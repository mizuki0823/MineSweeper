const app = new Vue({
  el: '#app',
  data: {
    // resultsdata: [
    //   {
    //     hoge1: '',
    //     hoge2: ''
    //   },
    // ],

    subjectdata: '', // subject.value
    scoredata: '', // score.value

    results: [ // resultsData
      {
        subject: 'Japanese',
        score: '92'

      },
      {
        edu: '18',
        subject: 'mathA',
        score: '68'
      },
      // [
      //   {
      //     hoge1: '',
      //     hoge2: ''
      //   }
      // ]
      // {
      //   subject: 'mathB',
      //   score: '96'
      // }
    ]
  },
  methods: {
    increment() {
      this.count++
    },
    add() {
        const resultsdata = {
            'subject': this.subjectdata,
            'score': Number(this.scoredata)
          }
      // 追加先のリスト.push(追加するやつ)
      this.results.push(resultsdata)
    }
  }
})

// app.message = "??????"