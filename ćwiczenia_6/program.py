# import of the library for HTTP requests
import requests

print('-'*25)
print('Results of the program')
print('-'*25)

url = 'http://localhost:8098/buckets/s25551/keys/Telescope'
headers = {'Content-type': 'application/json'}

# --------------------------------------------------
# inserting the document
data = '{"title": "Skywatcher Telescope N 200/1000 Explorer 200P EQ5", "manufacturer": "Skywatcher"}'
response = requests.put(url, headers=headers, data=data)

print('\nInserting the document')
print('Server response:', response.status_code)

# --------------------------------------------------
# retrieving the document
response = requests.get(url)

print('\nRetrieving the document')
print('Server response:', response.status_code)
print('Result:', response.text)

# --------------------------------------------------
# modifying the document
data = '{"title": "Skywatcher Telescope N 200/1000 Explorer 200P EQ5", "manufacturer": "Skywatcher", "type": "reflector", "type_of_build": "Newton", "aperture": "200", "price": 3579.00}'
response = requests.put(url, headers=headers, data=data)

print('\nModifying the document')
print('Server response:', response.status_code)

# --------------------------------------------------
# retrieving the document again
response = requests.get(url)

print('\nRetrieving the document again')
print('Server response:', response.status_code)
print('Result:', response.text)

# --------------------------------------------------
# deleting the document
response = requests.delete(url)

print('\nDeleting the document')
print('Server response:', response.status_code)

# --------------------------------------------------
# attempt to retrieve previously deleted document
response = requests.get(url)

print('\nRetrieving the deleted document')
print('Server response:', response.status_code)
print('Result:', response.text)
