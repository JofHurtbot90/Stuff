num = 5

if num > 6:
    print('number is less than 6')
elif num < 4:
    print('number is lesser than 4')
else:
    print('the number is 5')


age = 21

message = 'You are eligible' if age >= 18 else 'you are not eligible'

print(message)

for x in 'PYTHON':
    print(x)

for num in range(3):
    print(num)

number = 100
while number >= 1:
    print(number)
    number //= 2

x = 100

for number in range(3):
    if x > 1:
        print('positive')
        break
    
    else:
        print('negative')

for x in range(5):
    for y in range(3):
        print(x,y)

blockchain = []

def add_list():
    blockchain.append(3.2)
    print(blockchain)

add_list()
add_list()
add_list()
