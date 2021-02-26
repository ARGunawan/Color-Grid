let numRows = 0;
let numCols = 0;
let colorSelected;

function selcted(){
	colorSelected = document.getElementById("selctedID").value;
	console.log(colorSelected);
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