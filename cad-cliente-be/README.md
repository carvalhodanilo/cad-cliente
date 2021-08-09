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

