(function () {

    var sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', sendButtonClickHandler);

    function sendButtonClickHandler(event) {
        try {
            event.preventDefault();// отмена автоматической отправки формы 

            var formElements = document.getElementById('userData').elements;

            if (formElements.login.value === '') {
                highlightFields(formElements.login);
                throw "Поле <Логин> не может быть пустым"
            } else {
                resetHighlightning(formElements.login);

                var userData = {
                    login: formElements.login.value,
                    name: formElements.name.value,
                    secondName: formElements.secondName.value,
                    PurchaseDate: formElements.PurchaseDate.value,
                    kind: formElements.kind.value,
                    model:formElements.model.value,
                    cmpl: [],
                    info: formElements.info.value
                };

                if (formElements.char.checked) {
                    userData.cmpl.push(formElements.char.value)
                }
                if (formElements.head.checked) {
                    userData.cmpl.push(formElements.head.value)
                }
                if (formElements.wire.checked) {
                    userData.cmpl.push(formElements.wire.value)
                }

                var results = localStorage.getItem('localResults') || "[]";

                results = JSON.parse(results);// преобразует в объект

                results.push(userData);

                localStorage.setItem('localResults', JSON.stringify(results));// преобразует в строку

                window.open('../html/results.html', 'Results');
            }
        }
        catch (err) {
            alert(err);
        }
    }

    function highlightFields(elem) {

        elem.style.borderColor = 'red'
        elem.style.borderWidth = '1px';
    }

    function resetHighlightning(elem) {
        elem.style.borderColor = 'initial';
    }

})()