let numRows = 0;
let numCols = 0;
let colorSelected;

function selcted(){
	colorSelected = document.getElementById("selctedID").value;
	console.log(colorSelected);
}


//adding the addR() function
//done by Caitlin-Dawn Sangcap
function addR() 
{
	var table = document.getElementById("grid");
	let row = document.createElement("TR");
	var cell = document.createElement("TD");
	row.append(cell);
	table.append(row);
	numRows++;
	//checking that the rows were being added
	//console.log("clicked add row", numRows);
}
function fill()
{
	let original_box= document.getElementById("grid");
	let trs=original_box.getElementsByTagName("tr");
	
	for (let i=0; i<numRows; i++)
	{
		let tds= trs[i].getElementsByTagName("td");
		for (let j=0; j<numCols; j++)
		{
			tds[j].style.backgroundColor=colorSelected;
		}
	}
}

function clearAll()
{
	let original_box= document.getElementById("grid");
	let trs=original_box.getElementsByTagName("tr");
	
	for (let i=0; i<numRows; i++)
	{
		let tds= trs[i].getElementsByTagName("td");
		for (let j=0; j<numCols; j++)
		{
			tds[j].style.backgroundColor="white";
		}
	}
}