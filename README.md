## Instalar o Projeto

Para executar o projeto precisa-se de um ambiente linux com os seguintes pacotes instalados:
- PHP >= 7.2.5
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Composer

Após a instalação desses pacotes em um ambiente, preferencialmente em linux/mac, entre no diretório do projeto e utiliza-se o comando do composer:
>composer install

## Executar o projeto

Para começar a rodar a aplicação só precisa executar o comando artisan:
>sudo php artisan serve --host 0.0.0.0 --port 8000

Também é possível ajustar as variáveis acima para que fique como localhost:
>sudo php artisan serve --host 127.0.0.1 --port 8000
