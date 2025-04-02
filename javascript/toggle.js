const toggleLabels = document.querySelectorAll('.toggle-label');
toggleLabels.forEach((label) => {
    const content = label.nextElementSibling;
    const originalText = label.textContent.slice(2);

    label.addEventListener('click', () => {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
                label.textContent = `- ${originalText}`;
        } else {
            content.style.display = 'none';
            label.textContent = `+ ${originalText}`;
        }
    });
});
