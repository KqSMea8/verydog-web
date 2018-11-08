
function getLanguageClass(language){
  
  let className = language || ''
  
  className = className.replace(/\s/g, '_')
  
  switch (className) {
    case 'C#':
      className = 'CSharp';
      break
    case 'C++':
      className = 'Cpp';
      break
    case '':
      className = 'null'
  }
  
  return className
}

function each(arrays, fn) {
  for(let i=0; i<arrays.length; i++){
    fn(arrays[i], i)
  }
}

export {
  getLanguageClass,
  each
}
