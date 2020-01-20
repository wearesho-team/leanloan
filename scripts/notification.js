(function notification() {
    'use strict';
    var template = '<div class="notify_cards"></div>' +
        '    <div class="notify_text">' +
        '       :name из :city только что одобрили кредит на ' +
        '       <b>:amount грн</b> в ' +
        '       <b>:serviceName</b>' +
        '    </div>' +
        '    <div class="notify_close"></div>';
    var container = document.getElementById('notifications-new-credit');
    var names = ["Александру", "Алексею", "Альберту", "Анатолию", "Андрею", "Антону", "Аркадию", "Арсению", "Артёму", "Анне", "Алёне", "Алевтине", "Александру", "Алине", "Алле", "Анастасие", "Ангелине", "Анжеле", "Анжелике", "Антониде", "Антонине", "Анфисе", "Арине", "Валентине", "Валерии", "Варваре", "Василисе", "Вере", "Веронике", "Викторие", "Галине", "Дарье", "Евгение", "Екатерине", "Елене", "Елизавете", "Жанне", "Зинаиде", "Зое", "Ирине", "Кире", "Клавдии", "Ксении", "Ларисе", "Лидии", "Людмиле", "Маргарите", "Марине", "Марии", "Надежде", "Наталье", "Нине", "Оксане", "Ольге", "Раисе", "Регине", "Римме", "Светлане", "Софии", "Таисии", "Тамаре", "Татьяне", "Ульяне", "Юлии"];
    var cities = ['Киева', 'Львова', 'Одессы', 'Харькова', 'Винницы', 'Черновцев', 'Запорожья', 'Ивано-Франковска', 'Луцка', 'Днепра', 'Херсона', 'Хмельницкого', 'Тернополя', 'Николаева', 'Ужгорода', 'Чернигова', 'Житомира', 'Полтавы', 'Ровно', 'Черкасс', 'Кривого Рога', 'Трускавца', 'Борисполя', 'Умани', 'Измаила', 'Нежина', 'Дрогобыча',];
    var service = window.__ll_offers[Math.floor(Math.random() * window.__ll_offers.length)];

    window.__ll_showNotification = function () {
        var newNotification = document.createElement('div');
        newNotification.setAttribute('class', 'notify animated fadeInUp');
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
            newNotification.setAttribute('class', 'notify fadeOut animated');
            setTimeout(function () {
                container.removeChild(newNotification);
                setTimeout(window.__ll_showNotification, Math.random() * 2000 + 3000);
            }, 5000);
        }, 5000);
    };
    window.addEventListener("load", function() {
        setTimeout(window.__ll_showNotification, Math.random() * 2000 + 3000);
    });
})();

