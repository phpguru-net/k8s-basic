# K8s Basic

## First Project

> Build nginx web server

```sh
kubectl apply -f nginx-deployment.yaml
kubectl get pod
kubectl get replicaset
kubectl get deployment
kubectl delete -f nginx-deployment.yaml
kubectl exec -it nginx-deployment-6995985744-22cc4 -- bin/sh

kubectl delete -f nginx-service.yaml
kubectl describe service nginx-service
kubectl get pod -o wide

kubectl get deployment nginx-deployment -o yaml > nginx-deployment-result.yaml
```
