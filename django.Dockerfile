FROM python:3.7

WORKDIR /neetcode/

COPY ./ ./

RUN pip install pipenv && pipenv install -r requirements.txt

CMD cd neetcode && pipenv run python -u python manage.py runserver 0.0.0.0:8000 