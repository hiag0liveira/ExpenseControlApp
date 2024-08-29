aws ecr get-login-password --region us-east-1 --profile [SEU_PROFILE] | docker login --username AWS --password-stdin [SEU_ECR]
docker build -t crud .
docker tag crud:latest [SEU_ECR]/crud:latest
docker push [SEU_ECR]/crud:latest