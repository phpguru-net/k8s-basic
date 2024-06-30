# Lab 003

- [x] Deployment
- [x] Services
- [x] Networking

```sh
kubectl apply -f mysql-pod.yaml
kubectl apply -f mysql-service.yaml
kubectl apply -f pod.yaml
```

```sh
kubectl exec -it api1 -- /bin/sh
apk add curl
npm run seed
```

```sh
# new image
kubectl delete -f pod.yaml
kubectl apply -f pod.yaml
```

## With deployment

```sh
kubectl apply -f deployment.yaml
```

```sh
kubectl set image deployment/api-deployment api=sonnm/express-todo
kubectl rollout status deployment/api-deployment
# just wanna restart
kubectl rollout restart deployment/api-deployment
kubectl get pods
```
