const { Schema } = require("mongoose");

class ApplicationState {
    constructor() {
        this.status;
        this.code;
        this.message;
    }

    getStatus(status, message) {
        this.status = status;
        switch (this.status) {
            case 100 - 199:
                this.code = "Informational";
                this.message = message ?? "Không phản hồi";
                break;
            case 200:
                this.code = "Successful";
                this.message = message ?? "Phản hồi thành công";
                break;
            case 300 - 399:
                this.code = "Redirection";
                this.message = message ?? "URL đã thay đổi";
                break;
            case 400 - 499:
                this.code = "Client error";
                this.message = message ?? "API không tồn tại";
                break;
            default:
                this.code = "Server error";
                this.message = message ?? "Lỗi máy chủ";
                break;
        }
        return this;
    }
}

module.exports = ApplicationState;