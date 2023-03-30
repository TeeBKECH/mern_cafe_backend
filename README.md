# **BackEnd часть сайта для кофейни**

REST api часть приложения для работы приложения кофейни

## Технологии

- React
-     Express
-     Nodejs
-     MongoDB
-     SSL

## Функциональность

- Регистрация/авторизация;
- Создание заказа;
- Защита роутов авторизацией;

## Установка

1. Создаем рабочую директорию с произвольным именем (например dev):
   mkdir <имя рабочей директории>;

2. Клонируем репозиторий в рабочую директорию, переходим в неё:
   cd <имя рабочей директории>;

3. Клонируем репозиторий: git clone https://github.com/TeeBKECH/mern_cafe_backend.git;
   В рабочей директории должна появиться папка проекта mern_cafe_backend;

4. Переходим в папку с проектом:
   cd mern_cafe_backend, устанавливаем зависимости: npm install;

5. Добавляем файл .env и папку sslcert (если нужно защищенное подключение).\
   .env переменные:

   - PORT
   - PORT_SSL
   - TG_TOKEN
   - TG_CHAT
   - JWT_ACCESS_SECRET_KEY
   - JWT_REFRESH_SECRET_KEY
   - SMTP_PORT
   - SMTP_HOST
   - SMTP_USER
   - SMTP_PASS
   - SUPER_ADMIN_EMAIL
   - DB_URL
   - API_URL
   - CLIENT_URL

   /sslcert файлы:

   - domain.crt
   - domain.key

6. Запускаем проект: npm run start.
