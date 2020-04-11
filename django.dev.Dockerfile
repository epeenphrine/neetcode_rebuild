FROM python:3.7-alpine

WORKDIR /neetcode/

COPY ./ ./

RUN pip install -r requirements.txt

CMD cd neetcode && python manage.py runserver 0.0.0.0:8000