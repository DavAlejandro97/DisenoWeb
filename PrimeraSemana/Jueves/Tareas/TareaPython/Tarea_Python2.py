import os #Se necesita para hacer el clear de la pantalla
from time import sleep #Para simular el tiempo de carga del programa
import sys




def Programa1():
	lista = [1,2,3,4,5,6,7,8,9]
	obtener_par(lista)
	obtener_impar(lista)

def obtener_par(lista):
	i=0
	print("Numero de pares:")
	for x in range(0,len(lista)):
		if (lista[x]%2==0):
			i+=1
	print(i)

def obtener_impar(lista):
	i=0
	print("Numero de impares :")
	for x in range(0,len(lista)):
		if (lista[x]%2!=0):
			i+=1
	print(i)

def Programa2():
	datalist = [1452, 11.23, 1 + 2j, True, 'w3resource', (0, -1), [5, 12], {"clase": 'V', 'section': 'A'} ]
	for x in range(0,len(datalist)):
		print(datalist[x])
		print(type(datalist[x]))

def Programa3():
	for x in range(0,6):
		if x==3 or x==6:
			continue
		print(x)


def Programa4():
	n = int(input('Ingresa el número para calcular su factorial: '))
	base = 1
	if n == 0:
		print("1")
	else:
		for i in range(n,0,-1):
			base = base * i
		print (base)

def Programa5():
	txt = input('Ingrese texto: ')
	vocales = ['a','A','e','E','i','I','o','O','u','U']
	res = ''

	for letra in txt:
		if letra not in vocales:
			res += letra
	print (res)




def menu_principal():
	while True:
		#clearScreen()
		print ("-----------------------------------------------------------------")
		print ("--------- DAVID ALEJANDRO SILVA LÓPEZ --- PREBECARIO 15 ---------")
		print ("-----------------------------------------------------------------")
		print ("Por favor, selecciona la opcion deseada: ") #Welcome again!
		print ("-----------------------------------------------------------------")
		print ("1. Cuenta numeros pares e impares") 
		print ("2. Imprime elemento y su tipo") 
		print ("3. Imprime números del 0 al 6 excepto 3 y 6")
		print ("4. Factorial de un número")
		print ("5. Palabra sin vocales")
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