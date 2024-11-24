# Actividad 4. Ejercicio: Diseño de un microservicio

## Descripción
En esta actividad se realizo el diseño de un microservicio web que recupere un catálogo básico de autos que incluya los siguientes atributos:
- Marca
- Modelo
- Año
- Precio
- Color

Para poder probar el microservicio primero se tiene que clona el proyecto con el siguiente comando:
```bash
git clone https://github.com/DavidAlejandro18/microservicio.git
```

Después de clonar el proyecto se tiene que instalar las dependencias con el siguiente comando:
```bash
npm install
```

Para correr el microservicio se tiene que ejecutar el siguiente comando:
```bash
npm start
```

O si se quiere correr en modo desarrollo se tiene que ejecutar el siguiente comando:
```bash
npm run dev
```

## Endpoints
El microservicio cuenta con los siguientes endpoints:
- GET /api/cars
- GET /api/cars/:id
- GET /api/cars?marca=...&modelo=...&año=...&color=...