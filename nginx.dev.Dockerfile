FROM nginx:1.17.4
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY /neetcode/static/ /static/
COPY /neetcode/media/ /media/