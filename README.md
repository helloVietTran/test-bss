## Công nghệ
  Node.js, EJS, MongoDB
  
## Kết nối database và insert data sample
Khởi động mongodb bằng docker, tạo mới database tên là `flash_sale`:

```
db.saleproducts.insertOne({
  name: "Iphone 15",
  price: 1000,
})
```

Copy ID của sale product vừa insert và dán vào field product của document sau:

```
db.flashsales.insertOne({
  product: ObjectId("67d0abcd1234567890abcdef"), // thay bằng id thực tế
  startTime: new Date("2026-03-11T09:00:00"), // thay thời gian mong muốn
  endTime: new Date("2026-03-11T11:00:00"),
  saleStock: 20
})
```

## Cài đặt project
```
  git clone https://github.com/helloVietTran/test-bss
  cd test-bss
  npm install
  npm run dev
```

## Trang flash sale: http://localhost:3000

## Luồng xử lý 
```
User mở website
        ↓
GET /
        ↓
Server kiểm tra flash sale time
        ↓
Nếu hợp lệ → hiển thị product
        ↓
User nhập phone
        ↓
POST /order
        ↓
Server kiểm tra:
- phone hợp lệ
- phone chưa order
- stock còn
        ↓
Lưu PreOrder vào database ( đếm số document pre order > 20 hay chưa)
```

