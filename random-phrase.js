let allPhraseDataElements = document.querySelectorAll('.phrase-data-div');
let phraseDataArray = new Array();
let randomButton = document.querySelector('.random-title');
let currentPhraseNumber = 2;

allPhraseDataElements.forEach(el => {
    let phraseObject = {
        icoUrl: el.getAttribute('data-ico-url'),
        sortNum: el.getAttribute('data-sort'),
        phraseText: el.getAttribute('data-phrase'),
        colorText: el.getAttribute('data-color')
    }

    phraseDataArray.push(phraseObject);
});

let totalPhraseCount = phraseDataArray.length - 1;


randomButton.addEventListener('click', function() {
    phraseDataArray.forEach(elementOfArray => {
        if (elementOfArray.sortNum == currentPhraseNumber ) {
            randomButton.textContent = elementOfArray.phraseText;
            randomButton.style.color = elementOfArray.colorText;
            urlConcatanation = ("url('" + elementOfArray.icoUrl + "')")
            // randomButton.style.backgroundImage = "url('img_tree.png')";
            randomButton.style.backgroundImage = urlConcatanation;
        }
    });

    if (currentPhraseNumber < totalPhraseCount) {
        currentPhraseNumber = currentPhraseNumber + 1;
    } else {
        currentPhraseNumber = 0;
    }
});