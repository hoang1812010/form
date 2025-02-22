<script>
    // Hàm Buff DPI: Yêu cầu người dùng nhập DPI và hiển thị lại
    function buffDPI() {
        let dpi = prompt("Nhập DPI mong muốn:");
        if (dpi) {
            // Kiểm tra xem người dùng có nhập số hợp lệ hay không
            if (!isNaN(dpi) && dpi > 0) {
                alert("DPI bạn vừa nhập là: " + dpi);
            } else {
                alert("Vui lòng nhập một số hợp lệ cho DPI!");
            }
        } else {
            alert("Bạn chưa nhập DPI!");
        }
    }

    // Hàm Config: Hiển thị thông báo cấu hình (tạm thời)
    function config() {
        alert("Cấu hình đang được phát triển!");
    }

    // Hàm chọn chức năng: Hiển thị thông báo hoặc tùy chọn dựa trên yêu cầu người dùng
    function chooseFunction() {
        let selectedFunction = prompt("Chọn chức năng:\n1. Chức năng A\n2. Chức năng B\n3. Chức năng C");

        // Xử lý lựa chọn của người dùng
        switch (selectedFunction) {
            case '1':
                alert("Bạn đã chọn Chức năng A!");
                break;
            case '2':
                alert("Bạn đã chọn Chức năng B!");
                break;
            case '3':
                alert("Bạn đã chọn Chức năng C!");
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
        }
    }

    // Hàm submit tổng hợp: Hiển thị lại thông tin nhập từ các chức năng trước khi gửi
    function submitForm() {
        const confirmed = confirm("Bạn có chắc chắn muốn gửi thông tin không?");
        if (confirmed) {
            alert("Thông tin đã được gửi thành công!");
        } else {
            alert("Hủy gửi thông tin.");
        }
    }
</script>
