document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const feedback = document.getElementById('feedback').value;

    const feedbackItem = document.createElement('li');
    feedbackItem.classList.add('feedback-item');
    feedbackItem.innerHTML = `
        <strong>Name:</strong> ${name} <br>
        <strong>Course:</strong> ${course} <br>
        <strong>Feedback:</strong> ${feedback}
        <button class="remove-btn">Remove</button>
    `;

    feedbackItem.querySelector('.remove-btn').addEventListener('click', function() {
        feedbackItem.remove();
    });

    document.getElementById('feedbackList').appendChild(feedbackItem);

    document.getElementById('feedbackForm').reset();
});
