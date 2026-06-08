# Para Josh Tonoto · Dos años contigo

Un recorrido interactivo por nuestra historia, contado como una constelación
(Acuario ♒ + Capricornio ♑) que se va uniendo recuerdo por recuerdo hasta el
11 de junio de 2026.

## Cómo editar los textos
Todo el contenido está en **`script.js`**, arriba del todo:
- `MOMENTOS` → cada recuerdo (fecha, título, texto, foto).
- `CARTA` → la carta final (cada línea entre comillas es un párrafo).

Solo cambia lo que está entre comillas. No hace falta tocar nada más.

## Las fotos
Están en la carpeta **`fotos/`**, nombradas por momento (`01-primera-vez.jpg`, etc.).
Si cambias una foto, usa el mismo nombre de archivo.

## La música
"Supernatural" — Ariana Grande.
- Si dejas el archivo **`musica/supernatural.mp3`**, suena ese.
- Si no, el sitio reproduce automáticamente el audio oficial de YouTube como respaldo.

## Cómo verlo en tu compu
Abre una terminal en esta carpeta y corre:
```
python3 -m http.server 8000
```
Luego entra a `http://localhost:8000` en tu navegador.

Hecho con cariño 💫
