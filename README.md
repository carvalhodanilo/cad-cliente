# cad-clientes-be

Requisitos: 
* JDK 11
* Docker Desktop

Subindo o servidor localmente:

Montar imagem do banco:
>docker-compose up

Subir aplicação:
>mvn spring-boot:run


#API segue padrões REST

url base: 'http://localhost:8080/api' 
CRUDS da aplicação
Cliente: '/clientes'

Chamadas da API sempre na raiz (ex. 'http://localhost:8080/api/clientes' )

Documentação completa em:
http://localhost:8080/swagger-ui.html

# cad-clientes-fe

Requisitos:
Node: v 14+
Angular Cli: v 12+

Instalar dependências:
>npm install

Subir aplicação localmente:
>npm start

*** Para documentação completa, digitar o seguinte comando:
>compodoc -s -r 8181

Ela estará disponível em:
>http://127.0.0.1:8181


