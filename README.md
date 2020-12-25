This project frontend is developed in React JS and backend in django with the use of django REST Framework to devlope API.
In this we use :-
- Django REST Framework : is a powerful and flexible toolkit for building Web APIs
- django-cors-header : is for app for handling the server headers required for Cross-Origin-Resource-Sharing(CORS).

This is going to useful when we try to access the API from different applciation (React).

To intialize the project in the local server state .
- Intialize viruatlenv and activate the virtual enviornment.

## Steps to run local project 
First we create a django project than we will install:
```
pip install requirements.txt
```
To intialize frontend use :-
```
cd frontend
npm install
```
Activate the virtualenv
run in terminal :-
```
python manage.py makemigrations
python manage.py migrate
python manage.py shell
```
The above command will run a shell inside the project.
The below command we use to create object of the user manually using save() method.
```
from demoApp.models import Student
obj = Student(name="Rohan",email="r@gmail.com",document="2345",phone="12345").save()
```
Run the django app using 
```
python manage.py runserver
```
then execute
```
cd frontend
npm start
```
