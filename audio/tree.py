from os import listdir
from os.path import isfile, join

l = []

for i in range(1, 8):
	l.append([f for f in listdir(str(i))])

print(l)