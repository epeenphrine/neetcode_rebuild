# Base Image
FROM python:3.7


# copy the directory neetcode_rebuild into docker image.


# set default environment variables
ENV PYTHONUNBUFFERED 1
ENV LANG C.UTF-8
ENV DEBIAN_FRONTEND=noninteractive 

# these are 100% optional here
ENV PORT=8888

# install dependencies 
RUN pip install pipenv && \
    cd NEETCODE_REBUILD && \
    pipenv install -r requirements.txt

EXPOSE 8888

#you need to change here to your directory name
CMD cd NEETCODE_REBUILD/neetcode/ && \
    pipenv run gunicorn neetcode.wsgi:application --bind 0.0.0.0:$PORT