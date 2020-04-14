import axios from 'axios'

const state = {
  data: []
}

const search = {
  search: 'gtx 1080'
}

axios.post('http://localhost:8000/api/scrape', (
  search 
)).then( res => (
  console.log(res)
))
