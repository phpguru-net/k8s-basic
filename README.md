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

kubectl apply -f nginx-service.yaml
kubectl describe service nginx-service
kubectl get pod -o wide
kubectl get deployment nginx-deployment -o yaml > nginx-deployment-result.yaml
kubectl delete -f nginx-service.yaml
```

## Secret must be in base64 format

```sh
# sample
echo -n '123456' | base64
```

## Check mysql service status

```sh
kubectl get deployment mysql-deployment
kubectl get pods -l app=mysql-main
kubectl get service mysql-service
kubectl describe service mysql-service

kubectl get secret mysql-root-password-secret
```

## Secret

```sh
kubectl create secret generic mysql-root-password-secret --from-literal=mysql_root_password='yourpassword'

# from text file
kubectl create secret generic mysql-root-password-secret --from-file=mysql_root_password=mysql_root_password.txt
# verify
kubectl get secret mysql-root-password-secret
```

Using

```yaml
env:
  - name: MYSQL_ROOT_PASSWORD
    valueFrom:
      secretKeyRef:
        name: mysql-root-password-secret
        key: mysql_root_password
```
