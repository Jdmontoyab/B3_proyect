# API Delilah Resto Italy

API para realizar pedidos de comida italiana. Los clientes pueden registrarse, ver la lista de productos y ordenar. Los administradores pueden recibir pedidos y actualizarlos.

## Clonar y usar repositorio de Git

Para descargar el repositorio de GitHub, sigue el link del repositorio, click en el botón "Clonar" ("Clone"), 

To download the GitHub repository, go to the repository link, click the "Clone" button, and then type the command "Git clone followed by the Delilah Resto repository link" on your computer.

```bash
git clone
```

In that way, you'll be able to work on the project. If you have Git Bash and you want to open Visual Studio with your entire project, you have to run the "code ." command (while in the folder that contains it).

```bash
code .
```

## Install dependencies

To install the dependencies, you must go to the server folder in Visual Studio Code, open the terminal and execute the command:

```bash
npm install
```

## User password

The main recommendation is that when you log in to phpmyadmin, change the root password, which usually comes up empty. In this project I left it empty, but you can put yours in if you want.

## Create database with its tables

To do this, open the delilahresto.sql file located in the database folder, copy everything inside that file, go to phpmyadmin, paste all of the above as a query and click the "Continue" button.

## lift the server

Go to the server folder, open the terminal and run the following command:

```bash
node index.js
```

## YAML Documentation

To create, update and/or delete users, products and orders in Postman, look at the yaml file inside the server folder; there you will find the api documentation along with the verbs to be executed


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
