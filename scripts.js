const divGrid = document.querySelector('#grid');
const clear = document.querySelector('#clear');
const slider = document.querySelector('#gridSizing');
const sliderValue = document.querySelector('#gridSizingValue');

let gridWidth = 700;
let gridHeight = 700;
let rowNum = 16;
let squareNum = 16;


function updateSizingText()
{
    sliderValue.innerText = `${rowNum}x${squareNum}`;
}
function updateGrid(e)
{
    rowNum = e.target.value; //Changes with the grid slider value
    squareNum = e.target.value;
    clearGrid();
    updateSizingText();
}

function activateHover(e)
{
    e.target.style.background = "black";
}

function clearGrid()
{
    while(divGrid.firstChild)
    {
        divGrid.firstChild.remove();
    }
    makeGrid(gridWidth,gridHeight,rowNum,squareNum);
}
function sizeDisplayProperly(gridWidth=700,gridHeight=700,rowNum=16,columnNum=16)
{
    let squareWidth = gridWidth/rowNum;
    let squareHeight = gridHeight/columnNum;
    
    const gridRows = divGrid.childNodes;
    for(const row of gridRows)
    {
        const gridSquares = row.childNodes;
        for(const square of gridSquares)
        {
            square.style.width = `${squareWidth}px`;
            square.style.height = `${squareHeight}px`;
        }
    }
}
function makeGrid(gridWidth=700,gridHeight=700,rowNum=16,columnNum=16)
{
    for(let row=0;row<rowNum;row++)
    {
        const divRow = document.createElement('div');
        divRow.setAttribute('class','divRow');
        divRow.setAttribute('id',row);
        for(let square=0;square<columnNum;square++)
        {
            const divSquare = document.createElement('div');
            divSquare.setAttribute('class','divSquare');
            divSquare.setAttribute('id',square);
            divSquare.addEventListener('mouseover',activateHover);
            divRow.appendChild(divSquare);
        }
        divGrid.appendChild(divRow);
    }
    sizeDisplayProperly(gridWidth,gridHeight,rowNum,columnNum);
}

slider.addEventListener('click',updateGrid);
makeGrid(700,700,16,16);
clear.addEventListener('click',clearGrid);
updateSizingText();