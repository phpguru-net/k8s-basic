# Kubernetes Lab 002

Deploy expressjs app from this image sonnm/expressjs

```sh
kubectl get pods
kubectl run api \
  --image=sonnm/expressjs \
  --port=1337


kubectl get pods -o wide
kubectl describe pod api
```

Expose

```sh
kubectl expose pod api --type=LoadBalancer --port=1337 --target-port=1337
kubectl get services
kubectl describe service api
```

## Delete

```sh
kubectl delete pod api
kubectl delete service api
```

## With yaml

```sh
kubectl apply -f pod.yaml
kubectl apply -f service.yaml

kubectl delete -f pod.yaml
kubectl delete -f service.yaml
```

## Debug error pods

```sh
kubectl describe pod api
kubectl logs pod/api
```

## Summary

### Pods:

- Can contain multiple containers.
- Containers within a pod share the same network namespace, meaning they can communicate with each other via localhost and share storage volumes.
- Each container can expose different ports.

### Use Cases:

- Main Application + Sidecar: Main application container and helper containers (e.g., logging, monitoring, proxies).
- Microservices: Run different parts of an application in separate containers within the same pod for tightly coupled microservices.

### Labels and Selectors:

- Use labels to manage and select pods.
- Services use selectors to route traffic to the appropriate pods.
