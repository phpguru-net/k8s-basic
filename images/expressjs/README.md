# Build docker image for expressjs

```sh
docker build . -t sonnm/expressjs:0.1

# Run the Docker container
docker run -d --name sonnm_express -p 1337:1337 sonnm/expressjs:0.1
```

```sh
docker push sonnm/expressjs:0.1
```

docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname
