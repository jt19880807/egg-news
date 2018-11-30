'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async newsList() {
        var api=this.config.api;
  }
  async newsContent() {
    
}
}

module.exports = NewsService;
