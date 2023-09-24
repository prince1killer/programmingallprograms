#when we call function in same function is called recurtion
#one example of factorial
def fact(a):
    if(a == 1):
        return 1
    else:
        return a * fact(a-1)
print(fact(4))
print(fact(5))
print(fact(6))

