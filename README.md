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

### MYSQL and PHPMYAdmin

```sh
kubectl apply -f mysql-secret.yaml
kubectl get secret mysql-root-password-secret
kubectl apply -f mysql-deployment.yaml
kubectl apply -f mysql-configmap.yaml
kubectl apply -f phpmyadmin-deployment.yaml
minikube service phpmyadmin-service
```

### Cluster Info

```sh
kubectl cluster-info
```

### Namespace

```sh
kubectl create namespace my-namespace
kubectl get configmap -n=default
kubectl get configmap -n=my-namespace
kubectl apply -f mysql-configmap.yaml -n=my-namespace
kubectl get configmap -n=my-namespace
kubectl get all -n=my-namespace
kubectl delete -f mysql-configmap.yaml -n=my-namespace
kubectl delete namespace my-namespace
```

### Ingress

```sh
minikube addons enable ingress
minikube addons enable ingress-dns
kubectl get pods -n ingress-nginx
```

Dashboard

```sh
minikube addons list | grep dashboard
# | dashboard                   | minikube | disabled     | Kubernetes                     |
minikube addons enable dashboard
kubectl get ns
kubectl get all -n kubernetes-dashboard
kubectl apply -f dashboard-ingress.yaml
kubectl get ingress -n kubernetes-dashboard --watch
# then use the ipaddress, assign it with your dns to resolve the domain
# in local we'll modify /etc/hosts
sudo nano /etc/hosts
# then tunnel to keep accessible
minikube tunnel
```

```sh
## k8s tutorial: because of using Docker Driver -> we must use this local ip address
127.0.0.1 dashboard.k8s-phpguru.local
```

### Quick test ingress and ingress-dns addons

```sh
kubectl create deployment web --image=gcr.io/google-samples/hello-app:1.0
kubectl expose deployment web --port=8080
kubectl apply -f example-ingress.yaml
```
