export const generateRandomMines = (data, height, width, mines) => {
    let minesPlanted = 0;
    //console.log("gerou!")
    while (minesPlanted < mines) {
        let randomX = Math.floor(Math.random() * width);
        let randomY = Math.floor(Math.random() * height);

        if (!data[randomX][randomY].isMine) {
            data[randomX][randomY].isMine = true;
            minesPlanted++;
        }
    }
    return data
};