
    // Hiển thị nút khi cuộn trang xuống 20px
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("backToTop").style.display = "block";
        } else {
            document.getElementById("backToTop").style.display = "none";
        }
    }

    // Khi nhấn nút, cuộn lên đầu trang
    document.getElementById("backToTop").onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

