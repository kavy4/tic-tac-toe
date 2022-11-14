let cells = document.getElementsByClassName('cell')

let symbol = document.getElementsByClassName('symbol')

let numMove = 1

let point1 = 0

let point2 = 0

function CheckWinner()
{
    let gameOver = false
    
    if (symbol[0].textContent != '' && symbol[0].textContent == symbol[1].textContent && symbol[1].textContent == symbol[2].textContent)
    {
        gameOver = true
    }
    if (symbol[3].textContent != '' && symbol[3].textContent == symbol[4].textContent && symbol[4].textContent == symbol[5].textContent)
    {
        gameOver = true
    }
    if (symbol[6].textContent != '' && symbol[6].textContent == symbol[7].textContent && symbol[7].textContent == symbol[8].textContent)
    {
        gameOver = true
    }
    if (symbol[0].textContent != '' && symbol[0].textContent == symbol[3].textContent && symbol[3].textContent == symbol[6].textContent)
    {
        gameOver = true
    }
    if (symbol[1].textContent != '' && symbol[1].textContent == symbol[4].textContent && symbol[4].textContent == symbol[7].textContent)
    {
        gameOver = true
    }
    if (symbol[2].textContent != '' && symbol[2].textContent == symbol[5].textContent && symbol[5].textContent == symbol[8].textContent)
    {
        gameOver = true
    }
    if (symbol[0].textContent != '' && symbol[0].textContent == symbol[4].textContent && symbol[4].textContent == symbol[8].textContent)
    {
        gameOver = true
    }
    if (symbol[2].textContent != '' && symbol[2].textContent == symbol[4].textContent && symbol[4].textContent == symbol[6].textContent)
    {
        gameOver = true
    }

    if (gameOver)
    {
        if (numMove % 2 == 0)
        {
            document.getElementById('win-player').textContent = 'Player 1 win!'
            point1++
            document.getElementById('player1-score').textContent = 'Player 1 score: ' + point1
        }
        else
        {
            document.getElementById('win-player').textContent = 'Player 2 win!'
            point2++
            document.getElementById('player2-score').textContent = 'Player 2 score: ' + point2
        }   
    }
}

function RestartGame()
{
    for (let el of symbol)
    {
        el.textContent = ''
    }
    numMove = 1
    document.getElementById('win-player').textContent = ''
}

document.getElementById('button-restart').addEventListener('click', () =>
{
    RestartGame()
})


for (let index = 0; index < cells.length; index++)
{
    cells[index].addEventListener('click', () =>
    {
        if (symbol[index].textContent == '')
        {
            if (numMove % 2 == 0)
            {
                symbol[index].textContent = 'O'
                // circle
            }
            else
            {
                symbol[index].textContent = 'X'
                // cross
            }
            numMove++
            CheckWinner()
        }
    })
}

