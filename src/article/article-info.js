import jQuery from 'jquery';

export default class ArticleInfo {
/*
  function to use ajax request to get article-info
  @Params id of the article (optional)
  @Params callBack - function
*/
  _getArticles(id, callBack){

      jQuery.ajax({
        method:'GET',
        url:'./assets/data/article-info.json',
        success:(data)=>{
          if(id){
            const singleData = data.filter(d=>d.id==id);
            callBack(singleData, null);
          }else{
            callBack(data, null);
          }
        },
        error:(data, error)=>{
          callBack(data, error);
        }
      });
  }
}
