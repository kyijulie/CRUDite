$(document).ready(function() {
//console.log('+++ filename: app.js: jquery.ready exoected no error actual: ', $ );

//stores user name and date and prints out other text boxes
$('.store-button').on('click', function(event) {

	let nameValue = $('.input-name-field').val();
    let dateValue = $('.input-date-field').val();

	localStorage.setItem('nameValue', nameValue);
	localStorage.setItem('dateValue', dateValue);
	$('.print-dates').show();

});

//prints date and details
$('.get-button').on('click', function(event) {
	let eventTime = $('.event-time').val();
	let eventValue = $('.event').val();
	let eventAdd = $('.event-address').val();
	let eventFees = $('.event-fees').val();
	localStorage.setItem('event-time', eventTime);
	localStorage.setItem('event', eventValue);
	localStorage.setItem('event-add', eventAdd);
	localStorage.setItem('event-fees', eventFees);


	let getEventDate = localStorage.getItem('dateValue');
	let getEventTime = localStorage.getItem('event-time');
	let getEvent = localStorage.getItem('event');
	let getEventAdd = localStorage.getItem('event-add');
	let getEventFee = localStorage.getItem('event-fees');
	$('.event-table').append(`<tr class="my-event"><td>${getEventDate}</td> <td>${getEventTime}</td>
	 						<td>${getEvent}</td><td>${getEventAdd}</td><td>${getEventFee}</td></tr>`)
	$('.get-event').show();
	$('.delete').show();
});


//deletes list
$('.delete-button').on('click', function(event) {
	localStorage.removeItem('event-time');
	localStorage.removeItem('event');
	localStorage.removeItem('event-add');
	localStorage.removeItem('event-fees');
	$('.my-event').remove();
});

});