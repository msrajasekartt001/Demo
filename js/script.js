  document.querySelectorAll('.left-btn').forEach(button => {
        button.addEventListener('click', function () {
            let targetId = this.getAttribute('data-target');
            let content = document.getElementById(targetId);

            // Hide all other content sections and remove "default" class
            document.querySelectorAll('.content').forEach(div => {
                if (div.id !== targetId) {
                    div.classList.remove('show', 'default');
                }
            });

            // Toggle the clicked content
            content.classList.toggle('show');
        });
    });