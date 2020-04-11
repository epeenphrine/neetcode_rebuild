FROM python:3.7

WORKDIR /neetcode/

COPY ./ ./

RUN  pip install -r requirements.txt && python neetcode/manage.py collectstatic --noinput 

CMD cd neetcode && gunicorn neetcode.wsgi:application --bind 0.0.0.0:8000