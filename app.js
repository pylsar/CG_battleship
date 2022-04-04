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
        size: 1,
        url: 'https://lh3.googleusercontent.com/kulUKjt-Y12Ld3UeFCwLEGx2GCtdcEEn4GqrikLGyDYXP_x0ERL5UDlAj1paTkiegsd2p1sUPAqANPyRDftT4pEyOF04MF_QNEBZ=w349'
    },
    {
        size: 2,
        url: 'https://lh3.googleusercontent.com/wnKMJ_dTIwslgsgTPAdO0fv3jzr6yf3cbpqhcDRf5phQpWrEVbMoopaDg4zvhCeLqcp-yxnKVTUOGpuP5zaCysZ67UjihpKd3_Ohrg=w349'
    },
    {
        size: 3,
        url: 'https://lh3.googleusercontent.com/0U_nKylT2wjfyRRxq0NRJ7YaU-4tkHskFXwztKL2RzfaHnc2x1-wf3y5vSxph7hwKCmBhc2VOthwKbZX22jorg9xBD6T4bfxwE1w2g=w349'
    },
    {
        size: 3,
        url: 'https://lh3.googleusercontent.com/1Zc9Cv6vu_6nXUk5lVT6jItvVH_wyMAvtUchd9aSJ4FPiQwAnLEIV2oZe3xss8wGNK5GuWgkeyVrOHBXjUvxEljCVGPhOdaHjFT2TPk=w349'
    }
].reverse();

function getRandomeCoordinates(size, others){
    const x = 1 + Math.floor(Math.random() * (10 - size)); 
    const y = 1 + Math.floor(Math.random() * (10 - size));

    if(
        others.every(
        (otherElephant) => !(
            x < otherElephant.x + otherElephant.size  
            && x + size > otherElephant.x
            && otherElephant.y + otherElephant.size 
            && size + y > otherElephant.y
        )
    )
    ){
        return{
            x,
            y
        }
    }
    return getRandomeCoordinates(size, others);
}

elephants.forEach((elephant) => {
    // elephant.x = 1 + Math.floor(Math.random() * 7); // 7 так как size равен 3 а клеток всего 10
    // elephant.y = 1 + Math.floor(Math.random() * 7);

    const others = elephants.filter((other) => other !== elephant && other.x && other.y);
    const { x, y } = getRandomeCoordinates(elephant.size, others);
    elephant.x = x;
    elephant.y = y;

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