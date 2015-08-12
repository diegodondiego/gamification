var mappedEvents = {};

function mapAllEvents() {
	$('*').each(function() {
	
		var thisEvent = jQuery._data($(this).get(0), "events");
	
		if (thisEvent) {
			$.each(thisEvent, function(attr, value) {
					if (mappedEvents[attr]) {
						mappedEvents[attr] = mappedEvents[attr] + value.length
					} else {
						mappedEvents[attr] = 1
					}
			});
		} 
	});
}
