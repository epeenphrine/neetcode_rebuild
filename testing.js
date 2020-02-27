const bla = {
    chart: {
      chart: [
        {
          ticker: 'spy',
          x: '1',
          y: '1'
        },
        {
          ticker: 'spy',
          x: '5',
          y: '3'
        },
        {
          ticker: 'googl',
          x: '[1,2,3,4,5,6]',
          y: '[7,8,9,10,11]'
        }
      ]
    },
    about: {
      about: []
    }
  }

  console.log(bla.chart.chart[0].ticker)