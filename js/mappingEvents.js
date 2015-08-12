var mappedEvents = {};

function mapAllEvents() {
	// find all events using jquery
	$('*').each(function() {

		var thisEvent = $._data($(this)[0], 'events');
	
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
	
	// evaluate the css of the page for hover actions.
	var styles = document.styleSheets;
	for(var i=0, len=styles.length; i < len; i++) {

	    var sheet = styles[i], rules = sheet.cssRules;
	    if (rules) {
		    for(var j=0, len2=rules.length; j<len;j++) {
		    
		        var rule = rules[j];
		        if(rule && rule.selectorText == "a:hover"){
					mappedEvents['mouseout']++;
					mappedEvents['mouseover']++;
				}
		    }
	    }
	}
}
