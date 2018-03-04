var daOfWeek = "",
	text = "",
	counter = 1,
	arr = [],
	form = document.forms;

const btnSave = () => {
	daOfWeek = form.week.value;
	text = form.event.value;
	arr.push('<tr><td>' + counter + '.' + '</td><td>Notes: ' + daOfWeek + '</td></tr>' + '<tr><td></td><td>' + text + '</td></tr>');	
	counter++;
	form.reset();	
}

const btnPrint = () => {
	document.getElementById('output').innerHTML = '<table>' + arr.join('') + '</table>';
}