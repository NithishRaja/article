import jQuery from 'jquery';

export default class CommentInfo{

  _getComments(articleID, callBack){
    jQuery.ajax({
      method:'GET',
      url:'./assets/data/article-info.json',
      success:(data)=>{
        const singleData = data.filter(d=>d.id==articleID);
        callBack(singleData[0].comments, null);
      },
      error:(data, error)=>{
        callBack(data, error);
      }
    });
  }
}
