function solution() {
    let inputGift = document.querySelector('.card > div > input');
    let addButton = document.querySelector('.card > div > button');

    addButton.addEventListener('click', addGiftToList);

    function addGiftToList(event) {
        event.preventDefault();

        let giftName = inputGift.value;
        inputGift.value = '';

        let li = document.createElement('li');
        li.classList.add('gift');
        li.textContent = giftName;

        let sendButton = document.createElement('button');
        sendButton.classList.add('sendButton');
        sendButton.textContent = 'Send';
        sendButton.addEventListener('click', moveToSentGiftsList);
        sendButton.giftName = giftName;

        let discardButton = document.createElement('button');
        discardButton.classList.add('discardButton');
        discardButton.textContent = 'Discard';
        discardButton.addEventListener('click', moveToDiscardGiftsList);
        discardButton.giftName = giftName;

        li.appendChild(sendButton);
        li.appendChild(discardButton);

        let listOfGifts = document.querySelector('.card:nth-child(2) ul');
        listOfGifts.appendChild(li);

        let arrayOfGifts = Array.from(listOfGifts.children);
        arrayOfGifts.sort((a, b) => {
            return a.textContent.localeCompare(b.textContent);
        });

        listOfGifts.innerHTML = '';

        for (const gift of arrayOfGifts) {
            listOfGifts.appendChild(gift);
        }
    }

    function moveToSentGiftsList(event) {
        event.preventDefault();

        this.parentNode.remove();

        let li = document.createElement('li');
        li.classList.add('gift');
        li.textContent = event.target.giftName;

        let sentGiftsList = document.querySelector('.card:nth-child(3) ul');
        sentGiftsList.appendChild(li);
    }

    function moveToDiscardGiftsList(event) {
        event.preventDefault();

        this.parentNode.remove();

        let li = document.createElement('li');
        li.classList.add('gift');
        li.textContent = event.target.giftName;

        let discardedGiftsList = document.querySelector('.card:nth-child(4) ul');
        discardedGiftsList.appendChild(li);
    }
}