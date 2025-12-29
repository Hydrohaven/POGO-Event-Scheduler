// inject buttons, scrape page
function renderCalendarButton(wrapper) {
    if (!wrapper) {
        return;
    }
    
    const dateContainers = document.getElementsByClassName('event-time-date-wrapper');
    const startContainer = dateContainers[0];
    const endContainer = dateContainers[1];
    
    const startDate = parseDate(startContainer, 'event-date-start');
    const endDate = parseDate(endContainer, 'event-date-end');
    
    const btn = document.createElement('button');
    btn.classList.add('event-btn');
    btn.textContent = 'Add to GO Calendar';
    wrapper.appendChild(btn);

    btn.addEventListener("click", () => {
        // TOOD: Send parsed dates to background script
        alert('Start Date: ' + startDate + '  |  End Date: ' + endDate);
    });    
}

function parseDate(dateContainer, id) { // returns YYYY-MM-DD format
    let date = new Date(document.getElementById(id).textContent)
    return date.toISOString().split('T')[0];
}

renderCalendarButton(document.getElementById('event-time-date-box'));
