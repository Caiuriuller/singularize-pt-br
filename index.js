function irregularSufix(word) {
  if (word === 'oes' || word === 'aos' || word === 'aes') {
    return 'ao';
  }
  if (word === 'is') {
    return 'l';
  }

  return 'u';
}

const singularizePtBr = (word) => {
  let singularWord = word;

  if (word.substr(-3) === 'oes' || word.substr(-3) === 'aos' || word.substr(-3) === 'aes') {
    singularWord = word.replace(word.substr(-3), irregularSufix(word.substr(-3)));
  } else if (word.substr(-2) === 'is' || word.substr(-2) === 'us') {
    singularWord = word.replace(word.substr(-2), irregularSufix(word.substr(-2)));
  } else if (word.substr(-3) === 'res' || word.substr(-3) === 'zes' || word.substr(-3) === 'ses') {
    singularWord = word.substring(0, word.length - 2);
  } else if (word.substr(-1) === 's') {
    singularWord = word.substring(0, word.length - 1);
  }

  return singularWord;
};

export default singularizePtBr;
