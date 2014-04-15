var render = function(template, data){

  var renderedTemp = template;

  for (var prop in data){
    renderedTemp = renderedTemp.replace(/{(.*?)}}/, data[prop]);
  }

  return renderedTemp;
};
