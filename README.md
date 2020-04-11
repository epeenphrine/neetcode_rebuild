# NEETcode rebuild 

## About 
the project uses djangorestframework as backend to server contents/files and REACTjs as frontend to display the contents.

## Run 
```pip install -r requirements.txt```\
```npm install```\
```npm run dev```\
```python neetcode/manage.py runserver```

## Run in Docker
- development : ```docker-compose -f docker-compose.yml up```
  - this will create a node container for node and python to run webpack and django
- production :
first collectstatic: ```python neetcode/manage.py collectstatic --noinput```\
and then run: ```docker-compose -f prod.yml```
  - this will create a nginx container and python container to run nginx and django
