var allWords = [];
var currentWord = 0;

var wordsInput = document.getElementById('words-input')

function handleNewWordsEntered(event) {
  console.log("== handleNewWordsEntered() was called")
  var text = wordsInput.value;
  console.log("  -- text:", text)
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  currentWord = 0;
  console.log("  -- allWords:", allWords)
  // wordsInput.value = ''
}

// wordsInput.addEventListener('input', handleNewWordsEntered)
wordsInput.addEventListener('change', handleNewWordsEntered)

function generateWordElem(word, highlightColor) {
	var wordElem = document.createElement('span');
  wordElem.classList.add('word');
  wordElem.textContent = word;
  if (highlightColor) {
  	wordElem.classList.add('highlight');
  	wordElem.classList.add(highlightColor);
  }
  return wordElem;
}

var addWordButtons = document.getElementsByClassName('add-word-button')

function handleAddWordButtonClick(event) {
  console.log("== handleAddWordButtonClick() was called, event.currentTarget:",
    event.currentTarget)

  var word = allWords[currentWord]
  if (word) {
    var wordElem = generateWordElem(word)
    console.log("  -- wordElem:", wordElem)

    var container = event.currentTarget.parentNode.parentNode
    var wordsContainer = container.querySelector('.words-container')
    console.log("  -- container:", container)
    console.log("  -- wordsContainer:", wordsContainer)

    wordsContainer.appendChild(wordElem)

    currentWord = (currentWord + 1) % allWords.length
  }
}

for (var i = 0; i < addWordButtons.length; i++) {
  addWordButtons[i].addEventListener('click', handleAddWordButtonClick)
}
