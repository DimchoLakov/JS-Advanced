function lockedProfile() {
    let buttons = document.querySelectorAll('.profile > button');
    let buttonsArray = Array.from(buttons);
    buttonsArray.forEach(btn => {
        btn.addEventListener('click', function () {

            let lockInput = this.parentNode.querySelector('input[value="lock"]');
            let unlockInput = this.parentNode.querySelector('input[value="unlock"]');
            let div = this.parentNode.querySelector('div');

            if (!lockInput.checked) {
                if (this.textContent.toLowerCase() === 'show more'.toLocaleLowerCase()) {
                    this.textContent = 'Hide it';
                    div.style.display = 'block';
                } else {
                    this.textContent = 'Show more';
                    div.style.display = 'none';
                }
            }
        });
    });
}