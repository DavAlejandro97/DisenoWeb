# coding=utf-8
import os #Se necesita para hacer el clear de la pantalla
from time import sleep #Para simular el tiempo de carga del programa
import sys
import random

def Programa1():
	cont = 1500
	for x in range(1201):
		if (cont % 5) == 0:
			print("Es multiplo de 5")
		else:
			if (cont % 7) == 0:
				print("Es divisible entre 7")
			else:
				print (cont)
		cont+=1

def Programa2():
	while True:
		print ("-----------------------------------------------------------------")
		print ("--------- DAVID ALEJANDRO SILVA LÓPEZ --- PREBECARIO 15 ---------")
		print ("-----------------------------------------------------------------")
		print("¡Bienvenido al convertidor de grados!")
		print("1. De Celsius a Fahrenheit")
		print("2. De Farenheit a Celsius")
		print("3. Salir")
		print ("-----------------------------------------------------------------")
		op = input("Opcion deseada: ")
		
		if op == '1':
			c = int(input("Grados Celsius: "))
			f = 9.0/5.0 * c + 32
			print("Grados Fahrenheit: " + str(f))

		if op == '2':
			f = int(input("Grados Fahrenheit: "))
			c = int((f-32) * 5.0/9.0)
			print("Grados Celsius: " + str(c))

		if op == '3':
			print('Saliendo...')
			sleep(2)
			break

def Programa3():
	cont = 0

	user = str(input("Inserte nombre de usuario: "))
	num = random.randint(1,9)
	print("Hola " + user + " estoy pensando en un número entre el 1 y el 9")
	while True:
		intento = int(input("Intenta adivinar: "))
		cont+=1
		if intento > num:
			print("Tu estimación es muy alta")

		if intento < num:
			print("Tu estimacion es muy baja")

		if intento == num:
			break

	if intento == num:
		print('¡Genial, ' + user + '! Has ganado y eso solo te tomó ' + str(cont) + ' turnos')

def Programa4():
	i = 0
	a = 0
	b = 0
	for x in range(5):
		i+=1
		if (i%2) == 0:
			res = ""
			a +=1
			for j in range(a*i):
				res = res + ">"

		if (i%2) != 0:
			res = ""
			b +=1
			if (b%2) == 0:
				for j in range(i):
					res = res + "* "
			else:
				if i == 5:
					for j in range(2*i):
						res = res + "*"
				else:
					for j in range(i):
						res = res + "*"
		print (res)

	a = 2
	b = 2
	for x in range(5):
		i-=1
		if (i%2) == 0:
			res = ""
			for j in range(a*i):
				res = res + ">"
			a-=1

		if (i%2) != 0:
			res = ""
			if (b%2) == 0:
				for j in range(i):
					res = res + "* "
				b -=1
			else:
				for j in range(i):
					res = res + "*"

		print (res)


def Programa5():
	cad = ''
	word = input("Ingrese la(s) palabra(s) que desea invertir: ")
	c = len(word)
	while (c>0):
		cad=cad+word[c-1]
		c-=1
	print(cad)


def menu_principal():
	while True:
		#clearScreen()
		print ("Por favor, selecciona la opcion deseada: ") #Welcome again!
		print ("-----------------------------------------------------------------")
		print ("1. De 1500 a 2700 decir cuál es divisible entre 5 y multiplo de 7") 
		print ("2. Convertidor de Celcius a Fahrenheit") 
		print ("3. (Juego) Adivina el número entre 1 y 9")
		print ("4. Construye el patrón de símbolos")
		print ("5. Invierte tu palabra")
		print ("6. Salir") #Exit
		print ("-----------------------------------------------------------------")
		op = input('Opcion deseada: ') #Option chosen:
		#type(op)
		if op == '1':
			#clearScreen()
			Programa1()

		if op == '2':
			#clearScreen()
			Programa2();

		if op == '3':
			#clearScreen()
			Programa3();

		if op == '4':
			#clearScreen()
			Programa4();

		if op == '5':
			#clearScreen()
			Programa5();

		if op == '6':
			print('Saliendo...')
			sleep(2)
			break



menu_principal()

