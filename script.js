<script>
    // Tạo mảnh tuyết ngẫu nhiên với kích thước và vị trí khác nhau
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Ngẫu nhiên chọn kích thước (nhỏ, vừa, lớn)
        const size = Math.random();
        if (size < 0.33) {
            snowflake.classList.add('small');
        } else if (size < 0.66) {
            snowflake.classList.add('medium');
        } else {
            snowflake.classList.add('large');
        }

        // Vị trí ngẫu nhiên cho mảnh tuyết
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        
        document.body.appendChild(snowflake);

        // Xóa mảnh tuyết sau khi rơi xuống
        setTimeout(() => {
            snowflake.remove();
        }, 10000); // Sau 10 giây
    }

    // Tạo tuyết rơi liên tục
    setInterval(createSnowflake, 200); // Tạo một mảnh tuyết mỗi 200ms
</script>
