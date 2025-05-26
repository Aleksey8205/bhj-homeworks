const elementsWithTooltip = document.querySelectorAll('.has-tooltip');

elementsWithTooltip.forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault(); 

        removeExistingTooltip();

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.title;
        tooltip.classList.add('tooltip_active');

        const rect = element.getBoundingClientRect();
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
        tooltip.style.left = `${rect.left + window.scrollX}px`;

        document.body.appendChild(tooltip);
    });
});

function removeExistingTooltip() {
    const existingTooltip = document.querySelector('.tooltip');
    if (existingTooltip) {
        existingTooltip.parentNode.removeChild(existingTooltip);
    }
}