function trigramGenerator(text) {
    if (typeof text !== 'string') throw new Error();
  
    const words = whitespaceHandler(text).split(' ');
    
    let chunks = generateChunks(lowerCaseSveOsimI(words));
  
    return generateTrigrams(chunks);
  }
  
  function lowerCaseSveOsimI(wordArray) {
    return wordArray.map( (word) => word != 'I' ? word.toLowerCase() : word );
  }
  
  function whitespaceHandler(text) {
    return text.replace(/\s+/g, ' ').trim(); 
  }
  
  function generateChunks(words) {
    let array = words.slice(0, words.length - 2);
    let result = [];
  
    array.forEach((_word,i) => {
        result.push(words.slice(i, i + 3));
    });
  
    return result;
  }
  
  function generateTrigrams(words) {
    return words.reduce((acc, value) => {
        let key = value[0] + ' ' + value[1];
        if(!acc.has(key)) acc.set(key, [])
        acc.get(key).push(value[2]);
  
        return acc;
    }, new Map());
  }
  
  
  module.exports = {trigramGenerator, generateChunks, whitespaceHandler};