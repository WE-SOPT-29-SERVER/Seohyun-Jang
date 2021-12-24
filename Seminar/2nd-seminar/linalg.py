import numpy
import sympy

arr = numpy.array([[1, -2, 3, 5],[2, 2, -1,0], [3,0,1,2],[1,0,2,0]])
arr_inv = numpy.linalg.inv(arr)
rank = numpy.linalg.matrix_rank(arr)
print(rank)

x = sym.Symbol('x')
a = sym.diff(((2*(1/4(1-2*x)**2-1)**3)-(3*((1/4(1-2*x)**2-1)**2)-3)),x)

print(a)