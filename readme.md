#SAP forum with real time likes, notification and replies



- After cloning run:
- php artisan install, php artisan migrate and seed
- npm install, npm run watch
- Fill in your hosts in resources/js/Helpers/Token.js, on line 8, as I'm validating payload from parsed token. I just made sure that token is generated on friendly host. 
- Fill in your API details from pusher into .env and into bootstrap.js on very bottom
- Predefined admin is user with ID 1. Also 'secret' is password for any user from seed.


# Screenshots
![](https://lh5.googleusercontent.com/MYTumFsBR_6H-u9k1nxi1shXbVbCzJVZ01a75TuTpcOHhQ3PpyW4PU19_kNJW1ScvHNwSVFEkvmhFA=w1440-h794-rw)
![](https://lh3.googleusercontent.com/xi20YJ1_vkjRrCu_d2AXegXAhAk5UbpjbcU8uF1apQgS-lQpesapSMuCNKjQc8AW2i8WVsd_gfANZuGsvt-F=w1440-h794-rw)
![](https://lh4.googleusercontent.com/78zJeI4KOAv5jwM-Zq7U9JpAds0eGcrv6VWahljlj8_VfASrIAdJg_fWG4dswatdYTpfTgIfQyD2k-B8jiEF=w1440-h794-rw)
![](https://lh5.googleusercontent.com/2ySapNNWZGHNq2N3aoFW3w9VcwlRhnSxkLUw7yK9Q1bXnInoyFaihIsXUxsiCejkYdQawBfKv3B-q87rxU_8=w1440-h794-rw)
![](https://lh4.googleusercontent.com/q9y6SN28n6ekg01zFtQlxUWxbaK0C4MFGl8cn8mquN7QIN05mJFQ9RtFbU634XiKPQu0Bm-g6ordb4YgdGwS=w1440-h794-rw)