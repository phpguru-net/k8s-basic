# Express Todo

```sh
docker build . -t sonnm/express-todo

# Run the Docker container
docker run --env DB_URI=mysql://root:123456@localhost/k8s -d --name sonnm_express_todo -p 1337:1337 sonnm/express-todo
```

```sh
docker push sonnm/express-todo
```
