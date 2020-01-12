(function calculator() {
    'use strict';

    var conditions = {
        amount: {
            min: 250,
            max: 10000,
            step: 250,
            default: 500,
        },
        term: {
            min: 1,
            max: 30,
            step: 1,
            default: 1,
        }
    };
    window.__ll_calculator = {
        term: conditions.term.default,
        amount: conditions.amount.default,
    };

    window.addEventListener('load', function () {
        var calculator = {
            container: document.getElementById('credit-calculator'),
        };

        ["term", "amount"].forEach(function (field) {
            calculator[field] = calculator.container.querySelector('[data-field=' + field + ']');
            if (!calculator[field]) {
                return;
            }

            var inputs = Array.from(calculator[field].getElementsByTagName('input'));

            function setNewValue(newValue) {
                if (newValue > conditions[field].max || newValue < conditions[field].min) {
                    return false;
                }
                if (window.__ll_calculator[field] === Number(newValue)) {
                    return false;
                }
                window.__ll_calculator[field] = Number(newValue);
                for (var subInput of inputs) {
                    subInput.value = newValue;
                }
                window.dispatchEvent(new Event("__ll_calculator_" + field));
                return true;
            }

            inputs.forEach(function (input) {
                input.value = conditions[field].default;
                input.min = conditions[field].min;
                input.max = conditions[field].max;
                input.step = conditions[field].step;

                input.addEventListener("change", function (event) {
                    if (!setNewValue(event.target.value)) {
                        input.value = window.__ll_calculator[field];
                    }
                });
            });

            Array.from(calculator[field].querySelectorAll('button[data-action]')).forEach(function (button) {
                button.addEventListener("click", function () {
                    var delta = conditions[field].step;
                    if (button.getAttribute('data-action') === 'minus') {
                        delta = delta * -1;
                    }
                    var newValue = window.__ll_calculator[field] + delta;
                    setNewValue(newValue);
                })
            });
        });
    });
})();
