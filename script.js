const imageMap = {
    'A': 'images/A.png',
    'B': 'images/B.png',
    'C': 'images/C.png',
    'D': 'images/D.png',
    'E': 'images/E.png',
    'F': 'images/F.png',
    'G': 'images/G.png',
    'H': 'images/H.png',
    'I': 'images/I.png',
    'J': 'images/J.png',
    'K': 'images/K.png',
    'L': 'images/L.png',
    'M': 'images/M.png',
    'N': 'images/N.png',
    'O': 'images/O.png',
    'P': 'images/P.png',
    'Q': 'images/Q.png',
    'R': 'images/R.png',
    'S': 'images/S.png',
    'T': 'images/T.png',
    'U': 'images/U.png',
    'V': 'images/V.png',
    'W': 'images/W.png',
    'X': 'images/X.png',
    'Y': 'images/Y.png',
    'Z': 'images/Z.png',
    '0': 'images/0.png',
    '1': 'images/1.png',
    '2': 'images/2.png',
    '3': 'images/3.png',
    '4': 'images/4.png',
    '5': 'images/5.png',
    '6': 'images/6.png',
    '7': 'images/7.png',
    '8': 'images/8.png',
    '9': 'images/9.png'
};

document.getElementById('translateButton').addEventListener('click', () => {
    const textInput = document.getElementById('textInput').value.toUpperCase();
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; 

    let content = '';

    for (let char of textInput) {
        if (imageMap[char]) {
            content += `<img src="${imageMap[char]}" alt="${char}">`;
        } 
        else {
            content += `<span>Unsupported character: ${char}</span><br>`;
        }
    }

    imageContainer.innerHTML = content;
});
