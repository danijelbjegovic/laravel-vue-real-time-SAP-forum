# SAP forum with real time likes, notification and replies



- After cloning run:
- php artisan install, php artisan migrate and seed
- npm install, npm run watch
- Fill in your hosts in resources/js/Helpers/Token.js, on line 8, as I'm validating payload from parsed token. I just made sure that token is generated on friendly host. 
- Fill in your API details from pusher into .env and into bootstrap.js on very bottom
- Predefined admin is user with ID 1. Also 'secret' is password for any user from seed.


# Screenshots
