# Thành Troy · Ngữ Văn Lớp 10

Chuyên trang học tập tương tác môn **Ngữ Văn lớp 10** về **Thành Troy (Tơ-roa)**, hệ thống các vị thần Hy Lạp và đoạn trích sử thi ***Héc-to từ biệt Ăng-đrô-mác*** (*I-li-át* — Hô-me-rơ).

---

## Cách Xuất Bản Thành Link GitHub Pages (`username.github.io/ten-du-an`)

Dự án đã được cấu hình sẵn đường dẫn tương đối (`base: './'`) để chạy ổn định trên **mọi tên repository** mà không cần sửa code. Bạn có thể chọn **1 trong 2 cách** dưới đây:

### Cách 1: Tải trực tiếp file HTML đơn (nhanh nhất, không cần cài Node.js)

1. Tạo một repository mới trên [GitHub](https://github.com/new) (chọn chế độ **Public**).
2. Tải toàn bộ thư mục dự án lên repository đó (đặc biệt là thư mục `docs/` đã chứa sẵn file `docs/index.html` đóng gói trọn vẹn giao diện và hình minh họa).
   - *Mẹo siêu nhanh:* Nếu không dùng Git, bạn chỉ cần mở repo mới trên GitHub → chọn **Add file → Upload files** → tải tệp `docs/index.html` vào gốc repo (hoặc giữ nguyên trong thư mục `docs/`).
3. Vào **Settings → Pages** trong repository vừa tạo:
   - Mục **Source**: chọn **Deploy from a branch**
   - Mục **Branch**: chọn **`main`** và thư mục **`/docs`** (hoặc **`/ (root)`** nếu bạn tải `index.html` thẳng ra thư mục gốc) → bấm **Save**.
4. Chờ khoảng 1 phút, GitHub sẽ hiển thị link công khai dạng:
   `https://<ten-tai-khoan-github>.github.io/<ten-repo>/`

### Cách 2: Tự động xuất bản bằng GitHub Actions

1. Đẩy toàn bộ mã nguồn dự án lên nhánh `main` của repository trên GitHub.
2. Vào **Settings → Pages** → mục **Source** chọn **GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` sẽ tự động build và phát hành trang web mỗi khi bạn cập nhật code.
