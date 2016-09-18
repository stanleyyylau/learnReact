//可以在form.js  line-572  line-573 中间插入这几句

var startDate = new Date((new Date()).getTime() + 1 * 24 * 60 * 60 * 1000)
var $initialDate = $('.J_date .right-side').text();
if ($initialDate){
  startDate = new Date($initialDate);
}
var endDate = new Date((new Date()).getTime() + 30 * 24 * 60 * 60 * 1000)

//作用是页面加载的时候如果输入框有数据就自动读取输入框的日期数据
//没有就自动初始化到当前日期的后一天


// 众包和报价的图片
众包对应class   icon-tubiaozhongbao
报价对应class   icon-tubiaozhongbaojia
