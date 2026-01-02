// inject buttons, scrape page
function renderCalendarButton(wrapper) {
    if (!wrapper) {
        return;
    }
    
    const dateContainers = document.getElementsByClassName('event-time-date-wrapper');
    const startContainer = dateContainers[0];
    const endContainer = dateContainers[1];
    
    const [startDate, endDate] = parseDate();

    const btn = document.createElement('button');
    btn.classList.add('event-btn');
    btn.textContent = 'Add to GO Calendar';
    wrapper.appendChild(btn);

    btn.addEventListener("click", () => {
        // TOOD: Send parsed dates to background script
        alert('Start Date: ' + startDate + '  |  End Date: ' + endDate);
    });    
}

// TODO!: Mass refactor, must pass in event tag into parseDate and change functionality based on tag
//         e.g. Raid Battles need to be All Day events and have their end date subtracted by 1
//              Dmax Weekends need to be All Day events but have their end dates unchanged (as max battles will default end at 8/9pm)
//              Raid Hours, Community Days, and GO Tours should have their exact hours listed as they are more time-sensitive
//         P.S. I should also gray out the button if the calendar feature hasnt been specifically tested for a certain tag yet (e.g. GO Fest)
//              It's just good practice to not rollout features that haven't been tested yet.
function parseDate() { // returns YYYY-MM-DD format
    let startDate = new Date(document.getElementById('event-date-start').textContent)
    let endDate = new Date(document.getElementById('event-date-end').textContent)

    startDate = startDate.toISOString().split('T')[0]
    endDate = endDate.toISOString().split('T')[0]

    // TODO: If raid battles tag, subtract end date by 1 and return early

    let startTime = new Date(document.getElementById('event-date-start').textContent)
    let endTime = new Date(document.getElementById('event-date-end').textContent)

    

    // If multi-day event, subtract end date by 1 (since 10am end times are negligible)
    if (endDate !== startDate) {

    }

    return [startDate, endDate];
}

renderCalendarButton(document.getElementById('event-time-date-box'));
