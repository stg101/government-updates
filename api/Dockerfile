FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /home/app/api
COPY requirements.txt /home/app/api/
RUN pip install -r requirements.txt
COPY . /home/app/api/