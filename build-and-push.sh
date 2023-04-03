# Lấy thời gian hiện tại dưới dạng yyyy-mm-dd_HH-MM-SS
 $timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"


# Build image
 docker build -t to-do-app$timestamp .
 # Tạo tag với tên image và timestamp
 docker tag to-do-app-$timestamp localhost:8082/repository/docker-hosted:to-do-ap_$timestamp
 # Pushbash build.sh
 docker push localhost:8082/repository/docker-hosted:to-do-ap_$timestamp