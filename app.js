$(document).ready(function() {
	//console.log('+++ filename: app.js: jquery.ready exoected no error actual: ', $ );

	let count = 0;
	//stores user name and title for the trip and pops out a table
	$('.store-button').on('click', function(event) {

		let nameValue = $('.input-name-field').val();
	    let locationValue = $('.input-location-field').val();

		localStorage.setItem('nameValue', nameValue);
		localStorage.setItem('titleValue', locationValue);
		$('.get-dates').html(`${nameValue}'s ${locationValue} Travel Log`)
		$('.enter-button').hide();
		document.getElementById('add').style.visibility="visible"
		document.getElementById('print-table').style.visibility="visible"
		$('.event-table').append("<tr class='event" + count + "'><td><input id='event-date" + count + "' type='date'></td><td><input id='event-time" + count + "' type='time'></td><td><input id='event" + count + "' type='text'></td><td><input id='event-address" + count + "' type='text'></td><td><input id='event-fees" + count + "' type='text'></td><td></td></tr>");


	});

	//adds info to our list
	$('.add-button').on('click', function(event) {

		let newDate = document.getElementById('event-date' + count).value;
		let newTime = document.getElementById('event-time' + count).value;
		let newEvent = document.getElementById('event' + count).value;
		let newEventAdd = document.getElementById('event-address' + count).value;
		let newEventFee = document.getElementById('event-fees' + count).value;


		$(".event" + count).html(`<td>${newDate}</td> <td>${newTime}</td>
		 	   				<td>${newEvent}</td><td>${newEventAdd}</td><td>${newEventFee}</td><td><input id='deleteclass` + count +`' type='checkbox'</td>`);

		++count;
		$('.event-table').append("<tr class='event" + count + "'><td><input id='event-date" + count + "' type='date'></td><td><input id='event-time" + count + "' type='time'></td><td><input id='event" + count + "' type='text'></td><td><input id='event-address" + count + "' type='text'></td><td><input id='event-fees" + count + "' type='text'></td><td></td></tr>");
		document.getElementById('final').style.visibility="visible";
		
	});



	//deletes selected list
	$('.delete-button').on('click', function(event) {
		for(let i= 0; i < count; i++){
			if(document.getElementById('deleteclass' + i).checked){
				$('.event'+ i).remove();
			}
		}
	});

	//print the travel log on another page?
	$('.final-button').on('click', function(event){

	});

});


