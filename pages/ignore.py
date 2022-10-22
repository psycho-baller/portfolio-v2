prefixes = []
Lang_of_Z = ["01", "0101", "010101", "01010101", "0101010101", "010101010101"]
Z = "010101" # possible string from the language defined above (A in the assignment)
for index in range(len(Z)):
    prefixes.append(Z[:index])# index goes from 0 to (the length of Z)-1
return prefixes