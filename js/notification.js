console.log("notification load");

(function notification() {
    'use strict';
    var template = '<div class="notify_cards"></div>' +
        '    <div class="notify_text">' +
        '       :name из :city только что одобрили кредит на ' +
        '       <b>:amount грн</b> в ' +
        '       <b>:serviceName</b>' +
        '    </div>' +
        '    <div class="notify_close"></div>';
    var container = document.getElementById('уведомления-новый-кредит');
    var names = ["Александр", "Алексей", "Альберт", "Анатолий", "Андрей", "Антон", "Аркадий", "Арсений", "Артём", "Анна", "Алёна", "Алевтина", "Александра", "Алина", "Алла", "Анастасия", "Ангелина", "Анжела", "Анжелика", "Антонида", "Антонина", "Анфиса", "Арина", "Валентина", "Валерия", "Варвара", "Василиса", "Вера", "Вероника", "Виктория", "Галина", "Дарья", "Евгения", "Екатерина", "Елена", "Елизавета", "Жанна", "Зинаида", "Зоя", "Ирина", "Кира", "Клавдия", "Ксения", "Лариса", "Лидия", "Любовь", "Людмила", "Маргарита", "Марина", "Мария", "Надежда", "Наталья", "Нина", "Оксана", "Ольга", "Раиса", "Регина", "Римма", "Светлана", "София", "Таисия", "Тамара", "Татьяна", "Ульяна", "Юлия"];
    var cities = ['Киева', 'Львова', 'Одессы', 'Харькова', 'Винницы', 'Черновцев', 'Запорожья', 'Ивано-Франковска', 'Луцка', 'Днепра', 'Херсона', 'Хмельницкого', 'Тернополя', 'Николаева', 'Ужгорода', 'Чернигова', 'Житомира', 'Полтавы', 'Ровно', 'Черкасс', 'Кривого Рога', 'Трускавца', 'Борисполя', 'Умани', 'Измаила', 'Нежина', 'Дрогобыча',];
    var service = window.__ll_offers[Math.floor(Math.random() * window.__ll_offers.length)];

    window.__ll_showNotification = function () {
        var newNotification = document.createElement('div');
        newNotification.setAttribute('class', 'notify');
        newNotification.innerHTML = template
                .replace(
                ':amount',
                Math.round(15 + 5 * Math.random()) * 100
            )
            .replace(
                ':name',
                names[Math.floor(Math.random() * names.length)]
            )
            .replace(
                ':serviceName',
                service.title
            )
            .replace(
                ':city',
                cities[Math.floor(Math.random() * cities.length)]
            );

        container.appendChild(newNotification);
        setTimeout(function () {
            newNotification.setAttribute('class', 'notify fadeOutUp animated');
            setTimeout(function () {
                container.removeChild(newNotification);
                setTimeout(window.__ll_showNotification, Math.random() * 2000 + 3000);
            }, 2000);
        }, 3 * 1000);
    };
    setTimeout(window.__ll_showNotification, Math.random() * 2000 + 3);
})();

