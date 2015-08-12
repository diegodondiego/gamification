var mappedEvents = {};

$('*').each(function() {

	var thisEvent = jQuery._data($(this)[0], "events");

	if (thisEvent) {
		$.each(thisEvent, function(attr, value) {
				if (mappedEvents[attr]) {
					mappedEvents[attr] = mappedEvents[attr] + 1
				} else {
					mappedEvents[attr] = 1
				}
		});
	} 
});
