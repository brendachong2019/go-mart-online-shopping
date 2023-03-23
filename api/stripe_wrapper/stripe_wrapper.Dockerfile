FROM python:3.9-slim

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

COPY . /app

EXPOSE 5006

ENTRYPOINT [ "python" ]

CMD ["stripe_wrapper.py"]