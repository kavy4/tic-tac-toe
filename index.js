let cells = document.getElementsByClassName('cell')

let symbol = document.getElementsByClassName('symbol')

let numMove = 1

function CheckWinner()
{
    let gameOver = false
    let winPos
    if (symbol[0].textContent != '' && symbol[0].textContent == symbol[1].textContent && symbol[1].textContent == symbol[2].textContent)
    {
        gameOver = true
        winPos = 0
    }
    if (symbol[3].textContent != '' && symbol[3].textContent == symbol[4].textContent && symbol[4].textContent == symbol[5].textContent)
    {
        gameOver = true
        winPos = 3
    }
    if (symbol[6].textContent != '' && symbol[6].textContent == symbol[7].textContent && symbol[7].textContent == symbol[8].textContent)
    {
        gameOver = true
        winPos = 6
    }
    if (symbol[0].textContent != '' && symbol[0].textContent == symbol[3].textContent && symbol[3].textContent == symbol[6].textContent)
    {
        gameOver = true
        winPos = 0
    }
    if (symbol[1].textContent != '' && symbol[1].textContent == symbol[4].textContent && symbol[4].textContent == symbol[7].textContent)
    {
        gameOver = true
        winPos = 1
    }
    if (symbol[2].textContent != '' && symbol[2].textContent == symbol[5].textContent && symbol[5].textContent == symbol[8].textContent)
    {
        gameOver = true
        winPos = 2
    }
    if (symbol[0].textContent != '' && symbol[0].textContent == symbol[4].textContent && symbol[4].textContent == symbol[8].textContent)
    {
        gameOver = true
        winPos = 0
    }
    if (symbol[2].textContent != '' && symbol[2].textContent == symbol[4].textContent && symbol[4].textContent == symbol[6].textContent)
    {
        gameOver = true
        winPos = 2
    }

    if (gameOver)
    {
        if (symbol[winPos].textContent == 'close')
        {
            alert('Player 1 won')
        }
        else
        {
            alert('Player 2 won')
        }
        CleanBoard()
    }
}

function CleanBoard()
{
    for (let el of symbol)
    {
        el.textContent = ''
    }
}

document.getElementById('button-restart').addEventListener('click', () =>
{
    CleanBoard()
})


for (let index = 0; index < cells.length; index++)
{
    cells[index].addEventListener('click', () =>
    {
        if (symbol[index].textContent == '')
        {
            if (numMove % 2 == 0)
            {
                symbol[index].textContent = 'radio_button_unchecked'
                // circle
            }
            else
            {
                symbol[index].textContent = 'close'
                // cross
            }
            numMove++
            CheckWinner()
        }
    })
}

