ECR_REGISTRY="SEU_REGISTRY"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_REGISTRY
docker build -t crud .
docker tag crud:latest $ECR_REGISTRY/crud:latest
docker push $ECR_REGISTRY/crud:latest
ß