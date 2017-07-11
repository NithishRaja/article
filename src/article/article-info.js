import jQuery from 'jquery';

export default class ArticleInfo {

  _getArticles(callBack){

      jQuery.ajax({
        method:'GET',
        url:'./assets/data/article-info.json',
        success:(data)=>{
          callBack(data, null);
        },
        error:(data, error)=>{
          callBack(data, error);
        }
      });
  }

}
