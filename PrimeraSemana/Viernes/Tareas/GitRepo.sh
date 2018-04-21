#Hola amigos, hoy vamos a ver las ventajas que git nos ofrece en linux desde la terminal
#La utilidad de este tipo de tecnologías se puede apreciar de una mejor manera en la 
#elaboracion de trabajos en equipo, en donde se desean compartir archivos de una manera
#práctica y eficiente

#Siendo la forma más sencilla para crear y modificar repositorios git ofrece los 
#siguientes comandos que podemos ejecutar desde la terminal de linux:

#Vamos a la carpeta que se desea compartir

#Inicia un repositorio local en la carpeta que se desea compartir
git init 

#Conecta la carpeta con el repositorio de GitHub
git remote add origin [direccion del repo](https://github.com/...git) 

#Prepara todos los archivos para subirlos al repositorio
git add .
git commit -m "Comentario que acompañe la actualizacion"

#Sube la actualizacion del repo a la cuenta de GitHub
git push origin master

#Revisa el estado de la carpeta respecto al repositorio en GitHub
git status


