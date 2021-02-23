function solve() {
    let addButton = document.querySelector('.admin-view.section-view .action > form > div > button');
    addButton.addEventListener('click', addLecture);

    let lectureDateDefaultValue = document.querySelector('.admin-view.section-view .action input[name="lecture-date"]').value;

    function addLecture(event) {
        event.preventDefault();

        let lectureName = document.querySelector('.admin-view.section-view .action input[name="lecture-name"]');
        let lectureDate = document.querySelector('.admin-view.section-view .action input[name="lecture-date"]');
        let module = document.querySelector('.admin-view.section-view .action select[name="lecture-module"]');

        if (lectureName.value === '' ||
            lectureDate.value === '' ||
            module.value.toLowerCase() === 'select module'.toLowerCase()) {
            return;
        }

        let formattedDateTime = getFormattedDate(lectureDate.value);

        let h4 = document.createElement('h4');
        h4.textContent = lectureName.value + ' - ' + formattedDateTime;

        let delButton = document.createElement('button');
        delButton.classList.add('red');
        delButton.textContent = 'Del';
        delButton.addEventListener('click', deleteLecture);

        let li = document.createElement('li');
        li.classList.add('flex');
        li.appendChild(h4);
        li.appendChild(delButton);

        let ul = document.createElement('ul');
        ul.appendChild(li);

        let allModules = Array.from(document.querySelectorAll('div.module'));
        let currentModule = allModules.find(x => x.querySelector('h3').textContent.toUpperCase() === module.value.toUpperCase() + '-MODULE');

        // If current module exists - add the new lecture to it, then sort all lectures
        // and replace the UL with the sorted lectures
        if (currentModule !== null &&
            currentModule !== undefined) {
            let currentUl = currentModule.querySelector('ul');
            currentUl.appendChild(li);

            let listItemsArray = Array.from(currentModule.querySelectorAll('li'));

            listItemsArray.sort(function (a, b) {
                let aH4 = a.querySelector('h4').textContent;
                let tokensA = aH4.split(' - ');
                let dateA = tokensA[1];
                let timeA = tokensA[2];

                let bH4 = b.querySelector('h4').textContent;
                let tokensB = bH4.split(' - ');
                let dateB = tokensB[1];
                let timeB = tokensB[2];

                return convertDate(dateA, timeA) - convertDate(dateB, timeB);
            });

            currentUl.innerHTML = '';

            for (const listItemsArrayElement of listItemsArray) {
                currentUl.appendChild(listItemsArrayElement);
            }

        } else { // Otherwise create a new module with the lecture in it
            let newModule = document.createElement('div');
            newModule.classList.add('module');

            let h3 = document.createElement('h3');
            h3.textContent = module.options[module.selectedIndex].value.toUpperCase() + '-MODULE';

            newModule.appendChild(h3);
            newModule.appendChild(ul);

            let modules = document.querySelector('div.modules');
            modules.appendChild(newModule);
        }

        lectureName.value = '';
        lectureDate.value = lectureDateDefaultValue;
        module = module.options[0].selected = 'selected';
    }

    function deleteLecture(event) {
        event.preventDefault();

        let listItemCount = event.target.parentNode.parentNode.querySelectorAll('li').length;

        // If there's only 1 lecture in the list - delete the whole Module
        // or else - only the current lecture
        if (listItemCount === 1) {
            event.target.parentNode.parentNode.parentNode.remove();
        } else {
            event.target.parentNode.remove();
        }
    }

    function getFormattedDate(inputDate) {
        // Put leading zeros where number is a single digit
        let dateTime = new Date(inputDate);
        let month = (dateTime.getMonth() + 1).toString().length === 1 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1;
        let date = dateTime.getDate().toString().length === 1 ? `0${dateTime.getDate()}` : dateTime.getDate();
        let hours = dateTime.getHours().toString().length === 1 ? `0${dateTime.getHours()}` : dateTime.getHours();
        let minutes = dateTime.getMinutes().toString().length === 1 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();

        return `${dateTime.getFullYear()}/${month}/${date} - ${hours}:${minutes}`;
    }

    function convertDate(d, t) {
        let date = d.split('/');
        let time = t.split(':');

        // Concatenate all strings and convert them to a single number(same as Number(x))
        return +(date[0] + date[1] + date[2] + time[0] + time[1]);
    }
}
