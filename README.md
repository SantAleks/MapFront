﻿# MapFront
Тестовое задание на соискание должности JAVA-разработчик от ЦФТ. Backend.
Разработать сервис, реализующий функционал справочной системы для поиска и отображения списка пунктов, в которых можно получить/отправить денежный перевод в заданном городе.
Приложение состоит из двух частей:
1.	Backend
БД информации о географии сервиса (страны, города, банки, пункты). Структуру БД и отношения сущностей необходимо разработать самостоятельно.
RESTful-сервис реализующий API для доступа к информации в БД. API необходимо разработать самостоятельно.
2.	Web-приложение
Взаимодействует c backend и реализует web-интерфейс отзывчивого поиска стран и городов, в которых есть пункты банков и показывающее список пунктов выдачи/отправки переводов в указанном городе. Пункты необходимо группировать по принадлежности к банкам.
Дополнительная сложность – отображать пункты на карте (Яндекс.Карты или Google Maps)
Требования к реализации
Backend:
•	Java 7/8.
•	Spring (последние версии со http://spring.io/)
•	Hibernate/Spring Data. 
•	БД Oracle XE 11.
•	Gradle для сборки
•	Spring Boot для запуска
Web-приложение:
•	Java 7/8
•	GWT 2.7 с использованием ui-binder и GWT-RPC
•	Apache Tomcat 7/8
•	Gradle для сборки
•	Spring Boot для запуска
Приложение должно сопровождаться пошаговой инструкцией для сборки и запуска. Задание с ошибками сборки и запуска к рассмотрению не принимается. 
В качестве результата можно присылать ссылку на исходники в github или zip/tar.gz-архив.
