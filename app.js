const gameBoard = document.querySelector('#game-board');

for( let row = 0; row < 10; row++){
    for( let col = 0; col < 10; col++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.style.gridColumn = col + 1;
        cell.style.gridRow = row + 1;
        gameBoard.append(cell);
    }
}

const elephants = [
    {
        x: 1,
        y: 1,
        size: 1,
        url: 'https://lh3.googleusercontent.com/kulUKjt-Y12Ld3UeFCwLEGx2GCtdcEEn4GqrikLGyDYXP_x0ERL5UDlAj1paTkiegsd2p1sUPAqANPyRDftT4pEyOF04MF_QNEBZ=w349'
    },
    {
        x: 3,
        y: 3,
        size: 2,
        url: 'https://lh3.googleusercontent.com/wnKMJ_dTIwslgsgTPAdO0fv3jzr6yf3cbpqhcDRf5phQpWrEVbMoopaDg4zvhCeLqcp-yxnKVTUOGpuP5zaCysZ67UjihpKd3_Ohrg=w349'
    },
    {
        x: 6,
        y: 6,
        size: 3,
        url: 'https://lh3.googleusercontent.com/0U_nKylT2wjfyRRxq0NRJ7YaU-4tkHskFXwztKL2RzfaHnc2x1-wf3y5vSxph7hwKCmBhc2VOthwKbZX22jorg9xBD6T4bfxwE1w2g=w349'
    },
    {
        x: 2,
        y: 4,
        size: 4,
        url: 'https://lh3.googleusercontent.com/1Zc9Cv6vu_6nXUk5lVT6jItvVH_wyMAvtUchd9aSJ4FPiQwAnLEIV2oZe3xss8wGNK5GuWgkeyVrOHBXjUvxEljCVGPhOdaHjFT2TPk=w349'
    }
]


elephants.forEach((elephant) => {
    const imgWrapper = document.createElement('div')
    const img = document.createElement('img');
    img.src = elephant.url;
    imgWrapper.append(img);
    imgWrapper.style.gridRow = elephant.y;
    imgWrapper.style.gridRowEnd = elephant.y + elephant.size;
    imgWrapper.style.gridColumn = elephant.x;
    imgWrapper.style.gridColumnEnd = elephant.x + elephant.size;
    gameBoard.append(imgWrapper);
})