# Sử dụng image node phiên bản v14.16.0
FROM node:14.16.0

# Đặt thư mục làm thư mục làm việc cho ứng dụng
WORKDIR /app

# Sao chép file package.json và package-lock.json vào image
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép các tệp trong thư mục hiện tại vào thư mục làm việc của image
COPY . .

# Xây dựng ứng dụng React
RUN npm run build

# Thiết lập các biến môi trường
ENV PORT 3000

# Mở cổng 3000 trên container
EXPOSE 3000

# Khởi động ứng dụng với web server
CMD ["npm", "start"]
