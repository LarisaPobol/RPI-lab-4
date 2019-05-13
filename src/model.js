'use strict'

import View from './view.js'

const KEYAPI = '3e20ece38e0a4088a36c52e80611a32e'
const SourcesUrlHeading = 'https://newsapi.org/v2/sources?country=us&language=en'
const NewsUrlHeading = 'https://newsapi.org/v2/top-headlines?language=en'
const MaxCountPages = 8
const CountNewsOnPage = 5
export default class Model {
  constructor () {
    this.view = new View(this)
    this.KeyApi = KEYAPI
    this.sourcesUrlHeading = SourcesUrlHeading
    this.newsUrlHeading = NewsUrlHeading
    this.countNewsOnPage = 5
    this.maxCountPages = MaxCountPages
    this.countNews = 0
    this.currPage = 1
  }

  createUrl (heading, currPage, countNewsOnPage, text, source) {
    let url = heading
    if (currPage != null) {
      url += '&page=' + currPage
    }
    if (countNewsOnPage != null) {
      url += '&pageSize=' + countNewsOnPage
    }
    if (text !== undefined) {
      url += '&q=' + text
    }
    if ((source !== undefined) && (source !== 'any')) {
      url += '&sources=' + source
    }
    url += '&apiKey=' + this.KeyApi
    return url
  }

  LoadSources () {
    let url = this.createUrl(this.sourcesUrlHeading, null, null, null, null)
    let request = new Request(url)
    fetch(request).then(function (response) {
      return response.json()
    }).then(json => {
      if (json.status) {
        this.view.LoadSources(json)
      }
    })
  }

  ClearScreen () {
    this.view.ClearScreen()
  }

  ShowNews (text, source) {
    this.ClearScreen()
    this.currPage = 1
    this.countNews = 0
    this.LoadNews(this.currPage, text, source)
  }

  LoadMoreNews (text, source) {
    this.currPage++
    this.LoadNews(this.currPage, text, source)
  }

  LoadNews (page, text, source) {
    let url = this.createUrl(this.newsUrlHeading, page, CountNewsOnPage, text, source)
    let request = new Request(url)
    fetch(request).then(function (response) {
      return response.json()
    }).then(json => {
      if (json.status) {
        this.view.ShowNews(json.articles)
      }
    })
  }
}
