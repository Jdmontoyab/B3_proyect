# API Delilah Resto Italy

API para realizar pedidos de comida italiana. Los clientes pueden registrarse, ver la lista de productos y ordenar. Los administradores pueden recibir pedidos y actualizarlos.

## Clonar y usar repositorio de Git

Para descargar el repositorio de GitHub, sigue el link del repositorio, click en el botón "Clonar" ("Clone"), dirigete a la terminal y escribe el comando "git clone seguido del link del repositorio clonado".

```bash
git clone
```

## Instalar Dependencias

Para instalar las dependencias, debes ejecutar en la terminal el comando:

```bash
npm install
```

## Conectarse a la base de datos

Debes iniciar sección en MySQL Workbench con tu usuario y contraseña. Estos parámetros de entrada se deben configurar en el archivo index.js que se encuentra en la ruta:

```bash
..\B3_proyect\js\basededatos\index.js
```
Especificamente en la linea 4, dónde se configuran los parámetros de conexión a la base de datos y que por defecto tienen como usuario "root" y como contraseña "CONFIG_PASSWORD"


## Crear base de datos y sus tablas

Dirígete al archivo "delilahresto.sql" que se encuentra en la ruta:

```bash
..\B3_proyect\js\basededatos\archivo\delilahresto.sql
```
Copia todo su contenido, pégalo en un nuevo SQL tab y ejecutalo.

## Iniciar la aplicación

Dirígete a la carpeta "js", abre la terminal y ejecuta el comando:

```bash
node index.js
```

## Documentación swagger.yaml

En el archivo swagger.yaml se encuentran los requerimientos que se deben enviar en el body utilizando postman para ejecutarlos.

# URLs de los endpoints

## Usuarios

Método: POST (Login Usuario)
URL: http://localhost:3000/api/login

Método: POST (Crear Usuario)
URL: http://localhost:3000/api/crear

Método: GET (Buscar Usuarios)
URL: http://localhost:3000/api/buscar

## Productos

Método: POST (Crear Productos)
URL: http://localhost:3000/api/crear_p

Método: GET (Consultar Productos)
URL: http://localhost:3000/api/buscar_p/
URL: http://localhost:3000/api/buscar_p/id

Método: PUT (Actualizar Producto)
URL: http://localhost:3000/api/act_p/id

Método: DELETE (Eliminar Producto)
URL: http://localhost:3000/api/eli_p/id

## Pedidos

Método: POST (Crear Pedido)
URL: http://localhost:3000/api/crear_ped

Método: GET (Consultar Pedidos)
URL: http://localhost:3000/api/buscar_ped
URL: http://localhost:3000/api/buscar_ped/id

Método: PUT (Actualizar Pedido)
URL: http://localhost:3000/api/act_ped/id

Método: DELETE (Eliminar Pedido)
URL: http://localhost:3000/api/eli_ped/id

