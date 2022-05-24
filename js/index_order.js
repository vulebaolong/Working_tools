const data_LDP = [
    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về phí vận chuyển',
        Explain: 'Thắc mắc chung về cước phí vận chuyển khi mua hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về cách gửi hàng',
        Explain: 'KH hỏi chung về các hình thức gửi hàng cho vận chuyển, seller hỏi về việc ẩn thông tin người mua khi xác nhận đơn/in phiếu gửi hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Khu vực không hỗ trợ giao hàng',
        Explain: 'Địa chỉ của buyer không nằm trong khu vực hỗ trợ giao hàng của DVVC',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Bật/tắt kênh vận chuyển',
        Explain: 'Seller yêu cầu bật/ tắt kênh vận chuyển',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về chương trình miễn phí vận chuyển',
        Explain: 'Thắc mắc chung về chính sách miễn phí vận chuyển.',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Yêu cầu gắn/ gỡ tag miễn phí vận chuyển',
        Explain: 'Yêu cầu gắn/ gỡ tag miễn phí vận chuyển',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Bật tính năng thanh toán COD',
        Explain: 'Hướng dẫn bật/tắt tính năng thanh toán COD',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung khác về vận chuyển',
        Explain: '- Khách liên hệ kiểm tra thông tin về vận chuyển của đơn hàng nhưng chưa cung cấp/ CS không kiểm tra được mã đơn hàng cụ thể để hỗ trợ (Riêng kênh Chat thì CS chọn LDP Chat chưa hoàn tất) <br/> - Câu hỏi chung khác về vận chuyển mà chưa có LDP cụ thể <br/> - Câu hỏi chung về đồng kiểm <br/> Ví dụ: Các vấn đề về Auto call, KH liên hệ hỏi ĐVVC có còn hỗ trợ ở khu vực của tôi không',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Phương thức vận chuyển',
        L3: 'Câu hỏi chung về phương thức vận chuyển',
        Explain: 'Seller/Buyer hỏi các thông tin chung về Phương thức vận chuyển',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Phương thức vận chuyển',
        L3: 'Seller yêu cầu thay đổi phương thức vận chuyển',
        Explain: 'Seller muốn đổi sang một phương thức vận chuyển khác cho đơn hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Phương thức vận chuyển',
        L3: 'Buyer không thể lựa chọn đơn vị vận chuyển',
        Explain: 'Buyer khiếu nại về việc không chọn được ĐVVC cụ thể như trước đây',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Phương thức vận chuyển',
        L3: 'Phí vận chuyển cao hơn khi chọn phương thức vận chuyển',
        Explain: 'Buyer khiếu nại về việc phí vận chuyển khi chọn phương thức vận chuyển cao hơn khi chọn ĐVVC cụ thể trước đây',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Phương thức vận chuyển',
        L3: 'Lỗi hệ thống liên quan đến phương thức vận chuyển',
        Explain: 'Lỗi hệ thống như: không chọn được phương thức vận chuyển, màn hình trắng, ....',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Phương thức vận chuyển',
        L3: 'Các khiếu nại khác',
        Explain: 'Các khiếu nại khác ngoài các LDP đã có ở trên của nhóm Phương thức vận chuyển (masking)',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Yêu cầu hủy đơn',
        Explain: 'Buyer/ seller yêu cầu huỷ đơn hàng <br/> Seller nghi ngờ buyer boom nhờ hủy đơn',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Seller muốn từ chối yêu cầu hủy đơn',
        Explain: 'Hướng dẫn seller từ chối yêu cầu hủy đơn của buyer',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Buyer rút yêu cầu hủy đơn',
        Explain: 'Hướng dẫn seller từ chối yêu cầu hủy đơn của buyer',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Seller không thể chấp nhận yêu cầu hủy đơn',
        Explain: 'Seller không thể nhấn đồng ý yêu cầu hủy đơn của buyer vì lỗi hệ thống hoặc do seller đã giao hàng cho vận chuyển',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Thắc mắc lý do đơn hàng bị hủy',
        Explain: 'Thắc mắc về lý do hủy đơn',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Seller đã gửi hàng nhưng đơn hủy trên hệ thống',
        Explain: 'Seller đã gửi hàng cho 3PL nhưng hệ thống cấp nhật hủy do pickup failed',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Đơn hàng hủy trước khi giao cho vận chuyển',
        Explain: 'Đơn hàng hủy trước khi Seller đã giao hàng cho vận chuyển',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Thay đổi chi tiết đơn hàng',
        L3: 'Yêu cầu thay đổi DVVC',
        Explain: 'KH muốn thay đổi đơn vị vận chuyển trên đơn hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Thay đổi chi tiết đơn hàng',
        L3: 'Thay đổi thông tin người nhận/ phương thức thanh toán',
        Explain: 'Yêu cầu thay đổi phương thức thanh toán, số điện thoại, địa chỉ lấy hàng/ nhận hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Không thể xác nhận đơn hàng',
        Explain: 'Không thể xác nhận đơn hàng: Seller nhấn xác nhận nhưng báo lỗi (ĐH chưa có trạng thái Request Created), không thể in phiếu gửi hàng (AWB), không thể xác nhận đơn do bị Pending bởi Fraud (hiển thị Đang được kiểm tra bởi Shopee)',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Không hiển thị mã vận đơn/ mã vận đơn bị trùng',
        Explain: 'Không hiển thị/ trùng mã vận đơn sau khi seller xác nhận, lỗi MVD (ĐH đã có trạng thái Request Created)',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Kiểm tra trạng thái lấy hàng',
        Explain: 'Đơn chưa Pickup Done còn trong thời hạn lấy hàng (Cả đơn bình thường và đơn THHT): <br/> - Seller liên hệ theo dõi hành trình lấy hàng khi chưa quá hạn lấy <br/> - Buyer liên hệ hỏi thông tin hành trình/ hối giao đơn hàng',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Hối lấy hàng',
        Explain: 'Đơn chưa Pickup Done quá thời hạn lấy hàng (Cả đơn bình thường và đơn THHT) => CS chuyển phiếu hối lấy: <br/> - Seller hối lấy hàng <br/> - Buyer liên hệ hỏi thông tin hành trình/ hối giao đơn hàng',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Shipper không đến/ lấy hàng trễ',
        Explain: 'Seller khiếu nại Shipper không đến lấy hàng + cập nhật sai thông tin không đến nhưng cập nhật hẹn lại ngày lấy/Seller không nghe máy mà CS cần chuyển 3PL KN',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Khiếu nại thái độ shipper',
        Explain: 'Seller khiếu nại thái độ Shipper/ Đơn Reverse, Buyer khiếu nại thái độ Shipper',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Seller đã gửi hàng nhưng chưa cập nhật trạng thái',
        Explain: 'Seller đã giao hàng cho shipper/gửi hàng tại bưu cục nhưng chưa được cập nhật trạng thái trên đơn hàng',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Yêu cầu lấy hàng lại',
        Explain: 'Seller yêu cầu Shipper qua lấy hàng lại do lấy lần 1, lần 2 không thành công (Ko khiếu nại Shipper cập nhật sai)',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác về việc gửi hàng không có lý do cụ thể <br/> - Đơn hàng quá cân không thể gửi hàng, Bưu cục đóng cửa không thể gửi hàng, 3PL từ chối lấy hàng... <br/> - Đơn trên hệ thống chưa Pickup Done nhưng thực tế 3PL báo đơn bị hủy',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: 'Shipper chưa lấy hàng nhưng đã cập nhật lấy thành công',
        Explain: 'Seller chưa giao hàng cho vận chuyển nhưng hệ thống cập nhật lấy thành công',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: '[Trước EDT] Theo dõi hành trình giao hàng',
        Explain: '- Khách liên hệ theo dõi hành trình ĐH/ Hối giao trước và trong EDT (Cả đơn Local và CB) <br/> - KH liên hệ khiếu nại sai trạng thái ca giao: Shipper không đến giao hàng nhưng cập nhật buyer hẹn lại ngày giao/ Buyer không nghe máy/ Buyer không có nhà... nhưng còn ca giao trong hạn EDT và KH không khiếu nại vận chuyển. <br/> Nếu khách khiếu nại vận chuyển thì chọn Shipper không đến giao hàng <br/> - Nếu cần chuyển phiếu hối giao thì chọn [Sau EDT] Hối giao',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: '[Sau EDT] Hối giao',
        Explain: '- Theo dõi hành trình ĐH/ Hối giao sau EDT (Cả đơn Local và CB) <br/> - KH liên hệ khiếu nại sai trạng thái ca giao: Shipper không đến giao hàng nhưng cập nhật buyer hẹn lại ngày giao/ Buyer không nghe máy/ Buyer không có nhà... quá EDT nhưng còn ca giao và KH không khiếu nại vận chuyển. <br/> Nếu khách khiếu nại vận chuyển thì chọn Shipper không đến giao hàng <br/> - TH CS cần chuyển phiếu hối giao',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: 'Yêu cầu giao hàng lại',
        Explain: 'Yêu cầu giao hàng lại do: <br/> Có hẹn với shipper dời ngày giao mà chưa thấy giao, hoặc cập nhật trạng thái chuyển hoàn nhưng KH yêu cầu giao tiếp.',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: 'Shipper không đến giao hàng',
        Explain: 'Chọn khi cần chuyển 3PL khiếu nại: Shipper hẹn nhưng không đến giao hàng cho buyer, Shipper cập nhật sai thông tin: Không đến giao hàng nhưng cập nhật buyer hẹn lại ngày giao/ Buyer không nghe máy...',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: 'Bưu cục đóng cửa',
        Explain: 'buyer liên hệ hỏi địa chỉ bưu cục nhận hàng nhưng ra đó bưu cục đóng cửa',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: 'Đã giao hàng nhưng chưa cập nhật trạng thái',
        Explain: '- Đơn hàng đã giao thành công nhưng chưa cập nhật trạng thái <br/> - Buyer đã nhận được hàng nhưng đơn bị hủy trên hệ thống',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: 'Các vấn đề vận chuyển khác',
        Explain: '- Các vấn đề khác về giao hàng không có lý do phiếu cụ thể: đồng kiểm, xin thông tin shipper, khiếu nại thái độ shipper, hỏi MVĐ <br/> - Đơn trên hệ thống đang trong hành trình giao nhưng thực tế 3PL báo đã hủy đơn <br/> - Đơn cập nhật Lost <br/> Đơn bắt giữ: <br/> + Buyer liên hệ: Theo dõi hành trình/ hối giao <br/> + Seller liên hệ: Các vấn đề vận chuyển khác',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Yêu cầu bằng chứng đã giao hàng',
        Explain: 'KH yêu cầu 3PL cung cấp bằng chứng đã giao hàng thành công',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Shipper thu sai tiền',
        Explain: 'Shipper thu sai tiền',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Chưa nhận hàng nhưng cập nhật giao hàng thành công',
        Explain: '- ĐH chưa Completed, KH khiếu nại chưa nhận hàng nhưng đơn cập nhật giao hàng thành công <br/> - Nếu đơn đã Completed (quá hạn khiếu nại): CS chọn Khiếu nại sau khi hết hạn Shopee đảm bảo',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Không thể nhấn Đã nhận hàng',
        Explain: 'DH đã giao thành công, cập nhật Delivery done nhưng buyer không thể nhấn Đã nhận hàng do lỗi hệ thống',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Các vấn đề về hoàn phí vận chuyển',
        Explain: 'Các vấn đề về hoàn phí vận chuyển',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Yêu cầu hoàn tiền mặt',
        Explain: 'Sử dụng trong các trường hợp lỗi 3pl thu dư tiền hoặc đền bù cho KH và khách muốn nhận tiền mặt thay vì qua số dư TK Shopee',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Khiếu nại thái độ shipper, nhân viên bưu cục',
        Explain: 'Khiếu nại thái độ shipper, nhân viên bưu cục, Shipper không đeo khẩu trang',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác liên quan đến giao hàng không có lý do phiếu cụ thể như Seller khiếu nại bưu tá cho buyer đồng kiểm, các vấn đề về hối lắp đặt',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hoàn hàng',
        L3: 'Kiểm tra trạng thái trả hàng',
        Explain: '- Seller liên hệ kiểm tra hành trình trả hàng (chưa quá hạn hoàn hàng) <br/> - Buyer liên hệ hối giao nhưng hệ thống ghi nhận chuyển hoàn <br/> - Khách khiếu nại không nhận được liên hệ giao nhưng đơn bị chuyển hoàn, CS tư vấn nhưng không chuyển khiếu nại 3PL, nếu chuyển khiếu nại thì chọn Shipper không đến giao hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hoàn hàng',
        L3: 'Hối chuyển hoàn',
        Explain: 'Seller hối chuyển hoàn hàng (đã quá hạn hoàn hàng)',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hoàn hàng',
        L3: 'Đơn hoàn thành công nhưng seller chưa nhận được hàng',
        Explain: 'Trạng thái hoàn thành công nhưng seller chưa nhận được hàng trả về/ nhận sai/ thiếu hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hoàn hàng',
        L3: 'Các vấn đề khác',
        Explain: '- Seller đã nhận được hàng hoàn nhưng hệ thống chậm/ chưa cập nhật trạng thái <br/> - Các vấn đề khác về khiếu nại hàng hoàn chưa có LDP cụ thể',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hỏng hàng/ mất hàng',
        L3: 'Khiếu nại hỏng hàng',
        Explain: 'Seller khiếu nại hàng hoàn bị hư hỏng/bể vỡ',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hỏng hàng/ mất hàng',
        L3: 'Khiếu nại mất hàng',
        Explain: 'Khiếu nại mất hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hỏng hàng/ mất hàng',
        L3: 'Kiểm tra trạng thái đơn mất hàng/ hỏng hàng',
        Explain: 'Seller kiểm tra kết quả xử lý khiếu nại hàng hư hỏng/bể vỡ của 3PL đến đâu rồi',
    },

    {
        L1: 'Thanh toán',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về hình thức thanh toán',
        Explain: 'Câu hỏi chung về các hình thức thanh toán trên Shopee',
    },

    {
        L1: 'Thanh toán',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về trả góp',
        Explain: 'Thắc mắc về hình thức thanh toán trả góp: làm thế nào để mua hàng trả góp, thời gian chuyển đổi hình thức, ngân hàng hỗ trợ, sản phẩm hỗ trợ, thắc mắc về phí xử lý khi mua trả góp,...',
    },

    {
        L1: 'Thanh toán',
        L2: 'Câu hỏi chung',
        L3: 'Yêu cầu xuất hóa đơn GTGT',
        Explain: 'KH yêu cầu xuất hóa đơn đỏ cho các giao dịch trên Shopee',
    },

    {
        L1: 'Thanh toán',
        L2: 'Câu hỏi chung',
        L3: 'Sai thông tin hóa đơn GTGT',
        Explain: 'Nhận hóa đơn đỏ sai thông tin: sai số tiền, địa chỉ, mã số thuế,....',
    },

    {
        L1: 'Thanh toán',
        L2: 'Tài khoản & bảo mật',
        L3: 'Thêm/ thay đổi TKNH',
        Explain: 'Hướng dẫn Thêm/thay đổi thông tin TKNH',
    },

    {
        L1: 'Thanh toán',
        L2: 'Tài khoản & bảo mật',
        L3: 'Thêm/ thay đổi thẻ tín dụng',
        Explain: 'Hướng dẫn Thêm/thay đổi thông tin thẻ tín dụng',
    },

    {
        L1: 'Thanh toán',
        L2: 'Tài khoản & bảo mật',
        L3: 'TKNH bị từ chối',
        Explain: 'Không thể thêm TKNH, TKNH bị từ chối do: lỗi Fraud, phát sinh từ ngân hàng phát hành thẻ, sau khi LRT bị hủy do Wrong BA, hệ thống từ chối để KH cập nhật lại chi nhánh ngân hàng (Agribank/ngân hàng nước ngoài),... ',
    },

    {
        L1: 'Thanh toán',
        L2: 'Tài khoản & bảo mật',
        L3: 'Thời gian xác minh TKNH lâu',
        Explain: 'KH phàn nàn về thời gian xác minh TKNH khi rút tiền',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Hướng dẫn thanh toán đơn hàng',
        Explain: 'Hướng dẫn thanh toán đơn hàng trên Shopee',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Đã thanh toán nhưng trạng thái đơn là chưa thanh toán/ hủy',
        Explain: 'Đã thanh toán nhưng trạng thái đơn là chưa thanh toán/ hủy, đơn đã thanh toán bị hủy KH chưa nhận được tiền hoàn (hình thức CC, iBanking) <br/> - Nếu thanh toán bằng ShopeePay thì chọn L1 là ShopeePay <br/> - Nếu thanh toán bằng Số dư TK Shopee thì chọn Thắc mắc về tiền hàng/ hoàn tiền qua ví',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Chuyển khoản dư/ thiếu/ trừ tiền 2 lần/ sai thông tin',
        Explain: '- KH thanh toán dư / thiếu số tiền trên đơn hàng (sử dụng cho hình thức bank tranfer) <br/> - KH bị trừ tiền 2 lần cho 1 đơn hàng (các hình thức thanh toán còn lại: CC, IBanking,...)',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Không nhận mã xác minh/ mã sai/ mã hết hạn',
        Explain: 'Không nhận mã xác minh/ mã sai/ mã hết hạn',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Không thể cung cấp biên lai/ bằng chứng thanh toán',
        Explain: 'KH không thể tải biên lai chuyển tiền, sau khi đã chuyển khoản thành công  bằng Bank tranfer',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Mất/ không cung cấp được biên lai/ bằng chứng thanh toán',
        Explain: 'KH không thể tải biên lai chuyển tiền, sau khi đã chuyển khoản thành công  bằng Bank tranfer',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Lỗi hệ thống liên quan đến thanh toán',
        Explain: 'Lỗi hệ thống khác liên quan đến việc thanh toán: lỗi màn hình trắng, lỗi ngay tại bước thanh toán đơn hàng,...',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Thanh toán không thành công/ bị từ chối',
        Explain: 'Thanh toán không thành công/ bị từ chối (sau khi nhập mã OTP)',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Không thể chọn hình thức thanh toán',
        Explain: 'KH không thể sử dụng phương thức thanh toán do không được whitelist hoặc do sản phẩm không hỗ trợ (VD: seller tắt PTTT, đơn CB không thể thanh toán bằng số dư TK Shopee) <br/> KH đang bị COD Black list',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thêm tiền vào ví',
        L3: 'Thắc mắc về tiền hàng/ hoàn tiền qua ví',
        Explain: '- Câu hỏi chung về quy trình hoàn tiền/ thêm tiền vào Số dư TK Shopee <br/> - Đơn hàng thanh toán bằng Số dư TK Shopee nhưng trạng thái là chưa thanh toán/hủy hoặc đơn bị hủy nhưng chưa nhận được tiền hoàn <br/> - Seller chưa nhận được tiền hàng do bị tạm hoãn để Fraud kiểm tra (tính năng Pending Escrow)',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thêm tiền vào ví',
        L3: 'Lỗi hệ thống về số dư ví ',
        Explain: 'Các vấn đề lỗi liên quan đến việc đơn hàng hoàn tất nhưng tiền hàng thanh toán không đúng, cần kiểm tra với PMT',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thêm tiền vào ví',
        L3: 'Đơn hàng hoàn tất nhưng tiền chưa cộng vào ví',
        Explain: 'Đơn hàng hoàn tất (trạng thái Completed) nhưng chưa chuyển trạng thái Escrow/Escrow Paid để thanh toán tiền cho seller.',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thêm tiền vào ví',
        L3: 'Doanh thu bị sai do chênh lệch cân nặng',
        Explain: 'Seller thắc mắc số tiền thanh toán cho đơn hàng không đúng, lệch cước do có chênh lệch cân nặng kiện hàng',
    },

    {
        L1: 'Thanh toán',
        L2: 'Rút tiền',
        L3: 'Hướng dẫn cách rút tiền',
        Explain: 'Hướng dẫn thao tác rút tiền (chưa có Withdrawal ID trên hệ thống), thay đổi mã PIN <br/> User muốn hủy lệnh rút tiền đã tạo',
    },

    {
        L1: 'Thanh toán',
        L2: 'Rút tiền',
        L3: 'Lệnh rút tiền bị hủy do sai TKNH',
        Explain: 'Lệnh rút tiền bị hủy do sai thông tin TKNH',
    },

    {
        L1: 'Thanh toán',
        L2: 'Rút tiền',
        L3: 'Lệnh rút tiền bị hủy do tài khoản có dấu hiệu bất thường',
        Explain: 'Lệnh rút tiền bị hủy do TK có dấu hiệu bất thường',
    },

    {
        L1: 'Thanh toán',
        L2: 'Rút tiền',
        L3: 'Lệnh rút tiền bị hủy bởi hệ thống',
        Explain: 'Lệnh rút tiền bị hủy bởi hệ thống do: có lỗi phát sinh, trước đó user yêu cầu hủy lệnh rút tiền, các trường hợp lệnh rút tiền bị hủy chưa rõ nguyên nhân,...',
    },

    {
        L1: 'Thanh toán',
        L2: 'Rút tiền',
        L3: 'Chưa nhận được tiền',
        Explain: 'KH thực hiện lệnh rút tiền (đã có Withdrawal ID trên hệ thống) nhưng chưa nhận được tiền vào TKNH',
    },

    {
        L1: 'Thanh toán',
        L2: 'Phí thanh toán',
        L3: 'Thắc mắc về phí bán hàng trên Shopee',
        Explain: 'Seller hỏi thông tin chung về các loại phí khi bán hàng trên Shopee (phí thanh toán), trường hợp seller hỏi doanh thu của đơn hàng cụ thể thì chọn. <br/> Các vấn đề về doanh thu <br/> Feedback về mức phí hiện tại',
    },

    {
        L1: 'Thanh toán',
        L2: 'Phí thanh toán',
        L3: 'Trừ sai phí thanh toán',
        Explain: 'Seller khiếu nại trừ sai số tiền phí thanh toán trên đơn hàng',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn tạo tài khoản',
        Explain: 'Hướng dẫn cách tạo TK Shopee hoặc KH tạo không được nhờ kiểm tra.',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Không thể đăng nhập/Đăng nhập không thành công',
        Explain: 'Buyer/Seller báo không thể đăng nhập vào tài khoản Shopee, ngoại trừ các trường hợp không thể đăng nhập do bị khóa tài khoản.',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn cài đặt thông báo',
        Explain: 'Buyer/Seller muốn cài đặt/không muốn nhận thông báo từ ứng dụng Shopee',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn tắt thông báo qua email',
        Explain: 'Buyer/Seller không muốn nhận thông báo của Shopee qua Email',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn thay đổi ngôn ngữ',
        Explain: 'Buyer/Seller muốn thay đổi ngôn ngữ trên ứng dụng Shopee',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn sử dụng Chat',
        Explain: 'Hướng dẫn buyer sử dụng tính năng Chat ngay cho Shop hoặc hướng dẫn Buyer/Seller tính năng Trò chuyện với Shopee để chat với nhân viên hỗ trợ, Buyer liên hệ yêu cầu xóa/chặn tin nhắn spam từ Shopee/Seller',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác liên quan đến Tài khoản và Bảo mật, Buyer liên hệ bị khóa tính năng bình luận trên livestream',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Yêu cầu tạo tài khoản trên số điện thoại đã được đăng ký',
        Explain: 'Yêu cầu tạo tài khoản/thêm/thay đổi trên số điện thoại đã được đăng ký => CS không dùng. <br/> CS sử dụng LDP : Thêm/ thay đổi SDT',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Thay đổi username',
        Explain: 'Yêu cầu thay đổi username',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Thêm/ thay đổi mail',
        Explain: 'Thêm/ thay đổi mail',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Thêm/ thay đổi SDT',
        Explain: 'Thêm/ thay đổi SDT',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Thay đổi mật khẩu',
        Explain: 'Thay đổi mật khẩu',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Thay đổi thiết lập shop',
        Explain: 'Thay đổi địa chỉ/thiết lập cơ bản/thông tin tài khoản',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Liên kết/ hủy liên kết mạng xã hội',
        Explain: 'Buyer hỏi về cách liên kết/hủy liên kết mạng xã hội',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Xóa tài khoản',
        Explain: 'Buyer/Seller muốn xóa tài khoản Shopee, xóa tài khoản tự động, thắc mắc SP gửi thông báo về việc sẽ xóa TK tự động',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Yêu cầu mở lại TK (Không Fraud)',
        Explain: 'User thắc mắc lý do hoặc yêu cầu mở lại tài khoản bị Banned/ Frozen KHÔNG liên quan đến Fraud (QC,Dispute,SOS)',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Mất điện thoại',
        Explain: 'Buyer/Seller báo mất điện thoại nhờ Shopee hỗ trợ',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Mất thẻ tín dụng',
        Explain: 'Buyer/Seller báo mất thẻ tín dụng nhờ Shopee hỗ trợ',
    },
    //===================================================================================
    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Mất thẻ tín dụng',
        Explain: 'Buyer/Seller báo mất thẻ tín dụng nhờ Shopee hỗ trợ',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Tài khoản bị ban/frozen cần Fraud xem xét (To Appeal)',
        Explain: 'Dùng cho các trường hợp sau:<br/> + Tài khoản bị ban/frozen cần Fraud kiểm tra lại quyết định khóa tài khoản. <br/> + Case To Appeal.',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Tài khoản bị ban/ frozen (No Appeal)',
        Explain: 'Dùng cho các trường hợp tài khoản bị đóng băng/khóa tài khoản do abuse Freeship, voucher, emulator... có tag No Appeal',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'TKNH bị khóa',
        Explain: 'Thắc mắc TKNH bị khóa',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Khóa thiết bị',
        Explain: 'Buyer/Seller báo mất thẻ tín dụng nhờ Shopee hỗ trợ',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Thẻ CC bị khóa',
        Explain: 'Thắc mắc thẻ CC bị khóa',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Không thể rút tiền',
        Explain: 'Buyer/Seller thắc mắc không thể thực hiện rút tiền được, Chặn rút tiền do Fraud /Payment',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Không thể thanh toán do TK có dấu hiệu bất thường ',
        Explain: 'Không thể thanh toán do TK có dấu hiệu bất thường',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Giới hạn sử dụng voucher',
        Explain: 'User hỏi về giới hạn/nhận được cảnh báo về sử dụng voucher <br/> không sử dụng được voucher do liên kết TK khác (bao gồm các loại voucher dành cho người dùng mới)',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Giới hạn lượt miễn phí vận chuyển',
        Explain: 'User hỏi về giới hạn/nhận được cảnh báo về giới hạn sử dụng mã miễn phí vận chuyển',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Không nhận được xu',
        Explain: 'User báo không nhận được xu vì vấn đề tài khoản gian lận',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Giới hạn sử dụng xu',
        Explain: 'User hỏi về giới hạn/nhận được cảnh báo về giới hạn sử dụng xu',
    },
    //==================================
    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Lừa đảo',
        L3: 'Normal account - ATO reported',
        Explain: 'Only Fraud Team use',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Lừa đảo',
        L3: 'Account appeal - ATO prevention',
        Explain: 'CS sử dụng đối với quy trình ATO',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Lừa đảo',
        L3: 'Các trường hợp lừa đảo',
        Explain: '- User báo về các trường hợp lừa đảo như: nhận được cuộc gọi lừa đảo, tri ân khách hàng <br/> - User thắc mắc lý do ban tài khoản vì lạm dụng chính sách THHT',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Lừa đảo',
        L3: 'Tố cáo lừa đảo/hack',
        Explain: 'User tố cáo lừa đảo, báo tài khoản bị hack <br/> User nhờ hủy lệnh rút tiền đã tạo do tài khoản bị hack, bị người khác tạo LRT',
    },
    //===========================
    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn trả hàng/ hoàn tiền',
        Explain: '- Hướng dẫn bấm khiếu nại cả đơn hàng hoặc hủy khiếu nại <br/> - Các hướng dẫn chung bao gồm trường hợp Buyer đã nhấn khiếu nại, đang chờ Seller phản hồi liên hệ CS nhờ hướng dẫn',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn buyer/ seller thương lượng về số tiền hoàn',
        Explain: 'Hướng dẫn thay đổi/ cách nhập số tiền hoàn cho phương thức Hoàn Tiền Ngay',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Câu hỏi chung',
        L3: 'Khiếu nại 1 phần đơn hàng',
        Explain: 'Hướng dẫn thao tác nhấn khiếu nại cho trường hợp buyer chỉ muốn hoàn tiền/THHT một hoặc một số sản phẩm trong đơn hàng',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn gửi trả hàng',
        Explain: 'Hướng dẫn buyer thao tác chọn hình thức trả hàng, cung cấp địa chỉ trả hàng của seller/kho Shopee, hướng dẫn đóng gói hàng trả, các vấn đề liên quan về việc chưa lấy hàng trả thành công',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn Seller phản hồi yêu cầu trả hàng/ hoàn tiền',
        Explain: 'Hướng dẫn Seller xử lý yêu cầu THHT của Buyer, Hướng dẫn seller phản hồi KN sau Processing',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi khác về Trả hàng & Hoàn tiền',
        Explain: 'Câu hỏi khác liên quan đến Trả hàng & Hoàn tiền, thắc mắc về chính sách THHT',
    },
    //=========================
    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Buyer muốn đổi hàng',
        Explain: 'Sản phẩm không phát sinh vấn đề khiếu nại nhưng buyer có nhu cầu đổi hàng do không phù hợp nhu cầu, đổi ý',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Theo dõi hành trình',
        Explain: 'Theo dõi trạng thái vận chuyển của hàng hoàn trả khi Buyer đã trả hàng thành công',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Seller chưa nhận được hàng hoàn trả',
        Explain: 'Seller báo chưa nhận được hàng hoàn trả <br/> Seller từ chối nhận/địa chỉ sai./số điện thoại nhận hàng sai.., buyer thu COD',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Yêu cầu cung cấp hóa đơn trả hàng',
        Explain: '- Hướng dẫn buyer cung cấp hóa đơn trả hàng (áp dụng cho trường hợp buyer chọn hình thức trả hàng Tự sắp xếp, các trường hợp Dispute yêu cầu Buyer tự gửi hàng) <br/> - Buyer không được input thông tin trả hàng lên hệ thống do lỗi hệ thống nên CS hướng dẫn cung cấp hóa đơn <br/> *Buyer có tạo lệnh thu hộ COD nhưng chưa bị từ chối, CS HD hủy lệnh',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Khiếu nại bị hủy do buyer không trả hàng đúng hạn',
        Explain: 'Khiếu nại bị hủy do buyer không trả hàng đúng hạn',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Buyer trả hàng đúng hạn nhưng khiếu nại bị huỷ',
        Explain: 'Buyer đã trả hàng đúng hạn nhưng khiếu nại bị hủy do lỗi 3PL cập nhật sai trạng thái hoặc hệ thống cập nhật sai (áp dụng cho cả trường hợp khiêu nại chưa cập nhật hủy)',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Khiếu nại hàng trả về hư hỏng',
        Explain: 'Khiếu nại hàng trả về hư hỏng',
    },
    //=======================================
    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Kiểm tra trạng thái hoàn tiền',
        Explain: 'Đơn hàng phát sinh khiếu nại THHT đã được chấp nhận hoàn tiền: Buyer liên hệ thắc mắc thời gian hoàn tiền, khi nào được hoàn tiền. Trường hợp Seller liên hệ, CS chọn nhánh Thanh toán/Thêm tiền vào ví',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Không nhận được tiền hoàn vào số dư TK Shopee',
        Explain: '- Đơn thanh toán COD phát sinh khiếu nại THHT đã được chấp nhận hoàn tiền nhưng buyer báo chưa nhận được tiền hoàn vào Số dư TK Shopee trong 24h <br/> - Đơn khiếu nại được Dispute xử lý offline hoàn tiền vào Số dư TK Shopee nhưng buyer báo chưa nhận được tiền hoàn vào Số dư TK Shopee trong thời gian 3-5 ngày làm việc ',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Không nhận được tiền hoàn vào TKNH',
        Explain: 'Buyer thắc mắc vẫn chưa nhận được tiền hoàn vào TKNH',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Không nhận được tiền hoàn vào thẻ tín dụng',
        Explain: 'Không nhận được tiền hoàn vào thẻ tín dụng',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Không được hoàn xu',
        Explain: 'Thắc mắc không được hoàn xu cho đơn THHT, thắc mắc không được hoàn xu phí trả hàng',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Không được hoàn voucher',
        Explain: 'Thắc mắc không được hoàn voucher cho đơn THHT',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Yêu cầu hoàn tiền vào TKNH',
        Explain: 'Buyer yêu cầu hoàn tiền vào TKNN cho đơn THHT được chấp nhận hoàn tiền',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Sai số tiền hoàn',
        Explain: 'Buyer thắc mắc/khiếu nại hoàn sai số tiền cho đơn khiếu nại THHT',
    },
    //========================
    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Khiếu nại',
        L3: 'Trạng thái xử lý khiếu nại',
        Explain: 'Buyer thắc mắc/khiếu nại hoàn sai số tiền cho đơn khiếu nại THHT',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Khiếu nại',
        L3: 'Sai số tiền hoàn',
        Explain: 'KH hỏi trạng thái xử lý khiếu nại đến đâu rồi <br/> Seller Mall thắc mắc đơn hàng xử lý KN khi chưa có kết quả cuối cùng cho các trạng thái THHT',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Khiếu nại',
        L3: 'Trạng thái vận chuyển của đơn trả hàng hoàn tiền',
        Explain: 'Xác minh với 3PL về trạng thái vận chuyển của đơn trả hàng hoàn tiền',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Khiếu nại',
        L3: 'Không đồng ý với kết quả xử lý khiếu nại',
        Explain: '- Không đồng ý với kết quả xử lý khiếu nại, yêu cầu xử lý lại <br/> - Mistake DP cần xử offline',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Khiếu nại',
        L3: 'Yêu cầu thêm bằng chứng',
        Explain: 'Dispute yêu cầu cung cấp thêm bằng chứng',
    },
    //==============================
    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Case Offline',
        L3: 'Khiếu nại trong hạn THHT nhưng đã bấm Complete',
        Explain: '- Còn trong hạn đảm bảo (3 ngày/7 ngày) nhưng buyer đã bấm Complete. <br/> - Đơn hàng Buyer dùng voucher còn 0đ không thể nhấn THHT (vẫn còn hạn 3 ngày/7 ngày). <br/> - Lỗi hệ thống không thể nhấn khiếu nại (vẫn còn hạn 3 ngày/7 ngày).',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Case Offline',
        L3: 'Khiếu nại sau khi hết hạn Shopee đảm bảo',
        Explain: '- Buyer Khiếu nại nhưng đơn đã quá hạn Shopee đảm bảo. <br/> - Quá hạn phản hồi dẫn đến hệ thống auto cronjob theo logic 2-6-2. <br/> - Tiếp nhận xử lý offline cho các trường hợp đơn lừa đảo, đơn cancellation, case crisis, fake. <br/> - Các trường hợp không nhấn được khiếu nại do đơn 0đ, lỗi hệ thống... nhưng quá hạn 3 ngày/7 ngày.',
    },

    {
        L1: 'Trả hàng/ Hoàn tiền',
        L2: 'Case Offline',
        L3: 'Khiếu nại ngoài quy trình',
        Explain: 'Thắc mắc khi nào hoàn tiền cho người mua/ thanh toán tiền cho người bán trên đơn hàng đã tiếp nhận khiếu nại offline.',
    },
    //================================
    {
        L1: 'Marketing',
        L2: 'Câu hỏi chung',
        L3: 'Thắc mắc các cuộc thi do Shopee tổ chức',
        Explain: 'Thắc mắc thể lệ các chương trình do Shopee tổ chức: bình chọn người bán,... <br/> Thắc mắc kết quả hoặc chưa nhận được quà Mini game Fanpage',
    },

    {
        L1: 'Marketing',
        L2: 'Câu hỏi chung',
        L3: 'Tài trợ/ Hợp tác cùng Shopee',
        Explain: 'KH liên hệ hợp tác trợ giá/ marketing, các chương trình liên quan đến tài trợ/hợp tác của Shopee,....',
    },

    {
        L1: 'Marketing',
        L2: 'Câu hỏi chung',
        L3: 'Góp ý về người mua',
        Explain: 'Góp ý của Người bán về Người mua: Người mua thô lỗ',
    },

    {
        L1: 'Marketing',
        L2: 'Câu hỏi chung',
        L3: 'Thắc mắc về thể lệ/ tính năng quảng cáo',
        Explain: 'Câu hỏi chung về thể lệ hoặc tính năng liên quan đến quảng cáo',
    },
    //=====================
    {
        L1: 'Marketing',
        L2: 'Chương trình khuyến mãi',
        L3: 'Thắc mắc về thể lệ',
        Explain: 'Thắc mắc thể lệ của chương trình khuyến mãi, cách mua gói Siêu voucher, các chương trình trong campaign, các chương trình ưu đãi của ngân hàng...',
    },

    {
        L1: 'Marketing',
        L2: 'Chương trình khuyến mãi',
        L3: 'Lỗi hệ thống liên quan đến chương trình khuyến mãi',
        Explain: 'Lỗi hệ thống từ các chương trình khuyến mãi',
    },

    {
        L1: 'Marketing',
        L2: 'Chương trình khuyến mãi',
        L3: 'Góp ý về chương trình khuyến mãi',
        Explain: 'Góp ý về hoạt động, cách thức, thể lệ,.. liên quan đến chương trình khuyến mãi',
    },
    //==================
    {
        L1: 'Marketing',
        L2: 'Games',
        L3: 'Câu hỏi chung về game',
        Explain: 'Câu hỏi chung liên quan đến các Game trên Shopee',
    },

    {
        L1: 'Marketing',
        L2: 'Games',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác liên quan đến Game trên Shopee',
    },

    {
        L1: 'Marketing',
        L2: 'Games',
        L3: 'Không nhận được quà',
        Explain: 'User phản ánh thắng giải nhưng chưa nhận được quà từ Game trên Shopee, đã nhận đượcc nhưng không biết cách kiểm tra',
    },
    //================
    {
        L1: 'Marketing',
        L2: 'Voucher/Promo',
        L3: 'Thắc mắc về thể lệ ',
        Explain: 'Sử dụng cho các trường hợp KH chưa claim voucher: chỉ thắc mắc về điều kiện sử dụng/T&C các chương trình khuyến mãi/mã giảm giá, cách claim mã giảm giá / FSV, không thể claim voucher do không nằm trong nhóm người dùng được chọn',
    },

    {
        L1: 'Marketing',
        L2: 'Voucher/Promo',
        L3: 'Hướng dẫn sử dụng voucher',
        Explain: 'Sử dụng trường hợp đã claim thành công, voucher có sẵn trong ví: Hướng dẫn sử dụng voucher, logic hoàn voucher nếu đơn hủy/THHT, chưa nhận được e voucher (ko phải DP). Không sử dụng được FSV do chưa đạt giá trị đơn tối thiểu, shop bị SQT',
    },

    {
        L1: 'Marketing',
        L2: 'Voucher/Promo',
        L3: 'Không thể sử dụng voucher',
        Explain: 'Không thể sử dụng voucher/CTKM  do hết lượt/hết hạn. Nếu bị giới hạn do Fraud CS chọn theo nhánh Fraud -> Gian Lận -> Giới hạn sử dụng voucher',
    },

    {
        L1: 'Marketing',
        L2: 'Voucher/Promo',
        L3: 'Không được hoàn voucher',
        Explain: 'Thắc mắc không được hoàn voucher cho đơn hủy theo logic của Shopee (đơn hủy do lỗi buyer, check trên nhiều đơn)',
    },

    {
        L1: 'Marketing',
        L2: 'Voucher/Promo',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác liên quan đến voucher/ promotion, quá 48h nhưng buyer chưa nhận được voucher hoàn về (CS chuyển Voucher team)',
    },
    //=====================
    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Câu hỏi chung về Paid Ads',
        Explain: 'Paid Ads là gì? <br/> CTKM là gì?',
    },

    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Làm thế để sử dụng PA/CTKM',
        Explain: 'Làm thế để sử dụng PA/CTKM',
    },

    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Hướng dẫn nạp tiền',
        Explain: 'Hướng dẫn nạp tiền Paid Ads',
    },

    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Chưa được cộng tiền vào ví paid ads sau khi đã nạp',
        Explain: 'Chưa được cộng tiền vào ví Paid Ads sau khi đã nạp',
    },

    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Chưa được cộng tiền khi tham gia chương trình SP',
        Explain: 'Chưa được cộng tiền khi tham gia chương trình campaign',
    },

    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Từ khóa không được cập nhật',
        Explain: 'Từ khóa không được cập nhật',
    },

    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Dữ liệu quảng cáo không được cập nhật',
        Explain: 'Dữ liệu quảng cáo không được cập nhật',
    },
    //========    

    {
        L1: 'Marketing',
        L2: 'Shopee xu',
        L3: 'Chương trình Shopee xu',
        Explain: 'Câu hỏi chung về Shopee Xu',
    },

    {
        L1: 'Marketing',
        L2: 'Shopee xu',
        L3: 'Chưa nhận/ chưa được hoàn xu',
        Explain: 'Chưa nhận được Xu, chưa được hoàn Xu',
    },

    {
        L1: 'Marketing',
        L2: 'Shopee xu',
        L3: 'Nhận sai số xu',
        Explain: 'Nhận sai số Shopee Xu',
    },

    {
        L1: 'Marketing',
        L2: 'Shopee xu',
        L3: 'Hạn sử dụng',
        Explain: 'Kiểm tra hạn sử dụng Xu',
    },
    //============
    {
        L1: 'Marketing',
        L2: 'Shopee Loyalty',
        L3: 'Shopee Reward là gì?',
        Explain: 'Shopee reward là gì?',
    },

    {
        L1: 'Marketing',
        L2: 'Shopee Loyalty',
        L3: 'Thắc mắc/ khiếu nại về Shopee reward',
        Explain: 'Thắc mắc/ khiếu nại về Shopee reward: chưa nhận được voucher sinh nhật, thăng hạng, không sử dụng được...',
    },

    {
        L1: 'Marketing',
        L2: 'Tiếp thị liên kết',
        L3: 'Câu hỏi chung về Tiếp thị liên kết',
        Explain: 'User thắc mắc về cách tham gia chương trình tiếp thị liên kết, hoa hồng..',
    },

    {
        L1: 'Marketing',
        L2: 'Tiếp thị liên kết',
        L3: 'Các vấn đề về Tiếp thị liên kết',
        Explain: 'User không thể đăng ký chương trình, đăng ký nhưng chưa có ai liên hệ hỗ trợ, chưa nhận được hoa hồng...',
    },
    //=======================
    {
        L1: 'BD',
        L2: 'Câu hỏi chung',
        L3: 'Góp ý về người bán',
        Explain: 'Buyer góp ý/phản hồi về Seller ',
    },

    {
        L1: 'BD',
        L2: 'SIP',
        L3: 'Câu hỏi chung về shop CB/ SIP',
        Explain: 'Only CBCS',
    },
    //===========================
    {
        L1: 'BD',
        L2: 'Chương trình khuyến mãi',
        L3: 'Các vấn đề về chương trình dành cho seller',
        Explain: 'Seller thắc mắc về các chương trình dành cho Seller <br/> Công cụ marketing “Quảng cáo tiếp thị liên kết”, công cụ Marketing Solution',
    },

    {
        L1: 'BD',
        L2: 'Chương trình khuyến mãi',
        L3: 'Khiếu nại chương trình bị sai T&C, bị lỗi',
        Explain: 'Các vấn về lỗi do BD ',
    },

    {
        L1: 'BD',
        L2: 'Chương trình khuyến mãi',
        L3: 'Yêu cầu hủy chương trình đang tham gia',
        Explain: 'Yêu cầu hủy chương trình đang tham gia',
    },

    {
        L1: 'BD',
        L2: 'Chương trình khuyến mãi',
        L3: 'Góp ý, phàn nàn về nhân viên ngành hàng',
        Explain: 'Góp ý, phàn nàn về nhân viên ngành hàng <br/> Seller liên hệ hỏi thông tin nhân viên ngành hàng',
    },

    {
        L1: 'BD',
        L2: 'Chương trình khuyến mãi',
        L3: 'Thắc mắc về thông báo/ thư mời tham gia chương trình của Shopee',
        Explain: 'Thắc mắc về thông báo/ thư mời tham gia chương trình của Shopee',
    },

    {
        L1: 'BD',
        L2: 'Seller Voucher',
        L3: 'Câu hỏi chung',
        Explain: 'Câu hỏi chung về Seller voucher <br/> * Chỉ chọn khi seller liên hệ về voucher được tạo bởi Shopee',
    },

    {
        L1: 'BD',
        L2: 'Seller Voucher',
        L3: 'Khiếu nại về Seller Voucher',
        Explain: 'Các vấn đề liên quan đến Seller voucher như: cách tạo, không sử dụng được seller voucher, <br/> Seller không tạo nhưng bị tính phí <br/> * Chỉ chọn khi seller liên hệ về voucher được tạo bởi Shopee',
    },
    //==========================
    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Yêu cầu thêm quyền lợi của gói FS Xtra',
        Explain: 'Seller góp ý thêm quyền lợi của gói FS Extra',
    },

    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Thắc mắc về thể lệ',
        Explain: 'Buyer/ Seller thắc mắc về thể lệ của chương trình FS Extra',
    },

    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Thắc mắc về phí FS Xtra',
        Explain: 'Các thắc mắc về việc tính phí/ trừ tiền FSX',
    },

    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác liên quan đến FS Extra',
    },

    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Yêu cầu tham gia',
        Explain: 'Seller hỏi về cách đăng ký gói FS Xtra, đã đăng ký nhưng chưa được kích hoạt',
    },

    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Yêu cầu hủy gói',
        Explain: 'Seller hỏi về cách hủy gói FS Xtra',
    },

    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Yêu cầu gắn/gỡ tag',
        Explain: 'Seller đã đăng ký/hủy gói nhưng chưa được gắn/gỡ tag <br/> Các vấn đề về mất tag khi đang tham gia gói',
    },
    //===================
    {
        L1: 'BD',
        L2: 'CCB - Voucher hoàn xu',
        L3: 'Thắc mắc về phí CCB - Voucher hoàn xu',
        Explain: 'Thắc mắc về phí voucher hoàn xu',
    },

    {
        L1: 'BD',
        L2: 'CCB - Voucher hoàn xu',
        L3: 'Yêu cầu tham gia',
        Explain: 'Seller hỏi về cách đăng ký gói Voucher Hoàn xu, đã đăng ký nhưng chưa được kích hoạt',
    },

    {
        L1: 'BD',
        L2: 'CCB - Voucher hoàn xu',
        L3: 'Yêu cầu hủy gói',
        Explain: 'Seller hỏi về cách hủy gói Voucher Hoàn xu',
    },

    {
        L1: 'BD',
        L2: 'CCB - Voucher hoàn xu',
        L3: 'Yêu cầu gắn/gỡ tag',
        Explain: 'Seller đã đăng ký/hủy gói nhưng chưa được gắn/gỡ tag <br/> Các vấn đề về mất tag khi đang tham gia gói',
    },
    //============
    {
        L1: 'BD',
        L2: 'Flash sale',
        L3: 'Đăng ký flash sale',
        Explain: 'Seller muốn đăng ký Flash Sale <br/> * Chỉ chọn khi seller liên hệ về chương trình Flashsale được tạo bởi Shopee',
    },

    {
        L1: 'BD',
        L2: 'Flash sale',
        L3: 'Các vấn đề về flash sale',
        Explain: 'Seller liên hệ về các vấn đề liên quan đến Flash Sale <br/> * Chỉ chọn khi seller liên hệ về chương trình Flashsale được tạo bởi Shopee',
    },

    {
        L1: 'BD',
        L2: 'Flash sale',
        L3: 'Các vấn đề về sản phẩm tham gia FS',
        Explain: 'Seller liên hệ về các vấn đề liên quan đến sản phẩm tham gia Flash Sale <br/> * Chỉ chọn khi seller liên hệ về chương trình Flashsale được tạo bởi Shopee',
    },
    //===============
    {
        L1: 'BD',
        L2: 'SBS',
        L3: 'Câu hỏi chung về shop SBS',
        Explain: 'SBS Only',
    },

    {
        L1: 'BD',
        L2: 'SBS',
        L3: 'Đăng ký flash sale',
        Explain: 'SBS Only',
    },
    //===============
    {
        L1: 'BD',
        L2: 'Shopee Mall',
        L3: 'Lỗi hệ thống',
        Explain: 'Lối hệ thống liên quan đến trang bán hàng',
    },

    {
        L1: 'BD',
        L2: 'Shopee Mall',
        L3: 'Các vấn đề về tính năng',
        Explain: 'Seller phản hồi/góp ý về các tính năng mới trong trang bán hàng',
    },

    {
        L1: 'BD',
        L2: 'Shopee Mall',
        L3: 'Seller muốn trở thành Shopee Mall',
        Explain: 'Seller muốn trở thành Shopee Mall',
    },

    {
        L1: 'BD',
        L2: 'Shopee Mall',
        L3: 'Thắc mắc phí phạt/ phí hoa hồng của Mall',
        Explain: 'SBS Only',
    },
    //======================
    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Hướng dẫn sử dụng',
        Explain: 'Hướng dẫn sử dụng Seller Center <br/> Các thông tin đến SYT, SYT+ (Tạm thời đến khi có Reason Code riêng cho SYT)',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về đơn hàng',
        Explain: 'Seller hỏi về việc xác nhận đơn hàng, cách kiểm tra tình trạng các đơn hàng',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về kênh vận chuyển',
        Explain: 'Seller thắc mắc hỏi cách thao tác bật/tắt kênh vận chuyển hoặc các issue liên quan đến việc cài đặt kênh vận chuyển trên Seller Center (Kênh người bán)',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Cách đăng bán sản phẩm',
        Explain: 'Seller hỏi về sản phẩm, cách đăng bán sản phẩm,... <br/> Seller bổ sung giấy tờ để đăng bán các sản phẩm kinh doanh có điều kiện',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về doanh thu',
        Explain: 'Seller hỏi về doanh thu của đơn hàng',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về marketing',
        Explain: 'Seller hỏi về các hoạt động/tính năng Marketing trên trang bán hàng như: tạo trò chơi, Shopee feed, Shopee Live, tạo chương trình khuyến mãi bằng các công cụ Marketing,... <br/> ** Chọn khi chương trình khuyến mãi do seller tự tạo, trường hợp do Shopee tạo chọn ở VN - L1 là BD',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về dữ liệu shop',
        Explain: 'Phân tích bán hàng, hoạt động bán hàng',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về thiết lập shop',
        Explain: 'Seller hỏi về các vấn đề thiết lập shop như: bật/tắt chế độ tạm nghỉ, tính năng trả giá,...',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về shop chat',
        Explain: 'Buyer liên hệ báo không chat được với Shop như: gửi tin nhắn không được, bị Shop chặn, nhận cảnh báo từ khóa vi phạm tiêu chuẩn cộng đồng, các trường hợp chặn chat người dùng',
    },
    //===============
    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Sao quả tạ',
        L3: 'Câu hỏi chung',
        Explain: 'Câu hỏi chung về điểm phạt sao quả tạ',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Sao quả tạ',
        L3: 'Tỷ lệ đơn hàng không thành công',
        Explain: 'Seller hỏi về tỷ lệ đơn không thành công/yêu cầu loại đơn hàng khỏi tỷ lệ',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Sao quả tạ',
        L3: 'Tỷ lệ giao hàng trễ',
        Explain: 'Seller có đơn hàng bị tính tỷ lệ LSR/yêu cầu loại đơn khỏi tỷ lệ LSR',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Sao quả tạ',
        L3: 'Khiếu nại điểm phạt NFR',
        Explain: 'Seller khiếu nại điểm/yêu cầu loại điểm phạt đơn hàng không thành công <br/> ** Dành cho seller đã bị tính điểm phạt',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Sao quả tạ',
        L3: 'Khiếu nại điểm phạt LSR',
        Explain: 'Seller khiếu nại/yêu cầu loại điểm phạt đơn hàng giao trễ <br/> ** Dành cho seller đã bị tính điểm phạt',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Tỉ lệ phản hồi chat',
        L3: 'Tỉ lệ phản hồi chat',
        Explain: 'Seller hỏi về tỷ lệ phản hồi chat',
    },
    //======================
    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Sản phẩm vi phạm',
        L3: 'Đăng sản phẩm trùng lặp',
        Explain: 'Seller đăng bán sản phẩm trùng lặp',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Sản phẩm vi phạm',
        L3: 'Đăng sản phẩm cấm',
        Explain: 'Seller thắc mắc sản phẩm bị khóa xóa, CS kiểm tra do Seller đăng sản phẩm cấm đã bị QC khóa, xóa',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Sản phẩm vi phạm',
        L3: 'Sản phẩm có chứa thông tin rác',
        Explain: 'Seller đăng bán sản phẩm có chứa thông tin rác',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Sản phẩm vi phạm',
        L3: 'Tăng giá bất hợp lý trước khuyến mãi',
        Explain: 'Seller thay đổi/tăng giá  trước khi diễn ra các chương trình khuyến mãi/campaign',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Sản phẩm vi phạm',
        L3: 'Sản phẩm chứa thông tin cá nhân',
        Explain: 'Seller đăng bán sản phẩm chứa thông tin cá nhân (thông tin liên hệ)',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Sản phẩm vi phạm',
        L3: 'Vi phạm nội dung Marketing',
        Explain: 'Seller sử dụng những công cụ marketing như: Shopee Feed, Shopee Live, tin nhắn quảng bá,... chứa nội dung vi phạm chính sách của Shopee',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Trạng thái sản phẩm',
        Explain: 'KH thắc mắc trạng thái SP đã được duyệt chưa hay đang ở trạng thái gì? Đăng SP thành công nhưng SP không hiển thị trên giao diện Shopee (TH tình trạng sp là Khóa / Xóa không chọn LDP này)',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Lỗi hệ thống liên quan đến đăng sản phẩm',
        Explain: 'Lỗi hệ thống liên quan đến việc đăng sản phẩm của Seller',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Tải sản phẩm hàng loạt',
        Explain: 'Seller đăng tải sản phẩm hàng loạt',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Sai ngành hàng',
        Explain: '-Seller đăng tải sản phẩm và chọn sai ngành hàng <br/> - Hướng dẫn chọn ngành hàng',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Xóa đánh giá/ xóa bình luận',
        Explain: 'Liên hệ để được hướng dẫn chỉnh sửa/ xóa đánh giá/xóa bình luận',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Tìm kiếm sản phẩm/ shop',
        Explain: 'Các vấn đề liên quan đến việc tìm kiếm sản phẩm và shop (Tìm kiếm sản phẩm không thấy (ko bao gồm sp bị ẩn bởi QC))',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Thắc mắc sản phẩm bị khóa/ xóa',
        Explain: 'Seller thắc mắc sản phẩm bị khóa/xóa',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Tố cáo sản phẩm',
        Explain: 'Seller muốn tố cáo sản phẩm shop khác',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Hàng giả/ hàng nhái',
        Explain: 'KH tố cáo sản phẩm hàng giả/nhái',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Pháp lý',
        L3: 'Seller khiếu nại vi phạm bản quyền hoặc sở hữu trí tuệ',
        Explain: 'Seller khiếu nại nhãn hiệu',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Pháp lý',
        L3: 'Yêu cầu từ cơ quan nhà nước',
        Explain: 'Yêu cầu/ liên hệ từ cục quản lý thị trường, bộ công thương, hội bảo vệ người tiêu dùng...',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Pháp lý',
        L3: 'Các vấn đề về bảo mật thông tin',
        Explain: 'Liên hệ về các vấn đề bảo mật thông tin của Shopee',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Pháp lý',
        L3: 'Buyer khiếu nại đến cục, cơ quan',
        Explain: 'Các trường hợp KH muốn kiện lên cục cạnh tranh, bảo vệ người tiêu dùng...',
    },
    //=========================
    {
        L1: 'ShopeePay',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về ví ShopeePay',
        Explain: 'Câu hỏi chung về Ví ShopeePay, muốn liên kết/hủy liên kết Ví ShopeePay',
    },

    {
        L1: 'ShopeePay',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về offline payment',
        Explain: 'Câu hỏi chung về thanh toán Offline.',
    },
    //============================
    {
        L1: 'ShopeePay',
        L2: 'Tạo tài khoản/ KYC',
        L3: 'Hướng dẫn tạo/ KYC ví ShopeePay',
        Explain: 'Hướng dẫn Buyer KYC ví ShopeePay, hỏi thời gian KYC trong bao lâu, buyer nhờ hỗ trợ KYC',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tạo tài khoản/ KYC',
        L3: 'Trạng thái KYC',
        Explain: 'Buyer thắc mắc tài khoản Ví ShopeePay đã được KYC thành công hay chưa',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tạo tài khoản/ KYC',
        L3: 'Lỗi khi tạo tài khoản ví ShopeePay',
        Explain: 'Lỗi phát sinh dẫn đến tạo Ví AirPay không thành công',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tạo tài khoản/ KYC',
        L3: 'Góp ý về quy trình KYC',
        Explain: 'Góp ý về quy trình KYC thẻ của Ví ShopeePay (thời gian xác minh lâu,...)',
    },
    //=========================
    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'Thay đổi thông tin tài khoản ví',
        Explain: 'Liên hệ thay đổi thông tin tài khoản Ví ShopeePay, xóa thông tin trên tài khoản ShopeePay cũ để đăng ký tài khoản ShopeePay mới',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'Thay đổi mật khẩu đặt lệnh',
        Explain: 'KH quên mật khẩu đặt lệnh và hỏi cách lấy lại mật khẩu',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'Ví bị lock/ frozen',
        Explain: 'Tài khoản Ví bị lock do quên mật khẩu đặt lệnh hoặc Frozen do vi phạm',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'TKNH bị từ chối',
        Explain: 'Không thể thêm TKNH, lỗi khi liên kết TKNH với ShopeePay, bị từ chối do lỗi Fraud, hoặc phát sinh từ ngân hàng phát hành thẻ ',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'Thời gian xác minh TKNH lâu',
        Explain: 'KH phàn nàn về thời gian xác minh TKNH khi rút tiền',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'Ví bị hack',
        Explain: 'Ví bị hack',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'Thay đổi/ thêm TKNH',
        Explain: 'Thay đổi/ thêm TKNH, buyer hỏi cách liên kết TKNH x ShopeePay',
    },
    //===============
    {
        L1: 'ShopeePay',
        L2: 'Nạp tiền',
        L3: 'Không hiển thị số dư sau khi nạp tiền',
        Explain: 'Không hiển thị số dư sau khi nạp tiền, giao dịch nạp tiền ví ShopeePay đang xử lý và buyer chưa nhận được tiền',
    },

    {
        L1: 'ShopeePay',
        L2: 'Nạp tiền',
        L3: 'Lỗi không thể nạp tiền',
        Explain: 'Lỗi không thể nạp tiền',
    },

    {
        L1: 'ShopeePay',
        L2: 'Nạp tiền',
        L3: 'Nạp sai số tiền',
        Explain: 'Nạp sai số tiền',
    },

    {
        L1: 'ShopeePay',
        L2: 'Nạp tiền',
        L3: 'Nạp tiền sai tài khoản',
        Explain: 'Nạp tiền sai tài khoản',
    },

    {
        L1: 'ShopeePay',
        L2: 'Nạp tiền',
        L3: 'Hướng dẫn nạp tiền',
        Explain: 'Hướng dẫn nạp tiền',
    },

    {
        L1: 'ShopeePay',
        L2: 'Nạp tiền',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác liên quan đến nạp tiền, chuyển tiền sang ví ShopeePay khác như: chuyển tiền nhưng chưa nhận được, hủy giao dịch,...',
    },

    {
        L1: 'ShopeePay',
        L2: 'Transfer',
        L3: 'Các vấn đề về QR code',
        Explain: 'Các vấn đề về QR code',
    },
    //===============
    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Hướng dẫn thanh toán đơn hàng',
        Explain: 'Hướng dẫn thanh toán đơn hàng trên Shopee',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Các vấn đề về hoàn tiền',
        Explain: 'Đơn hàng hủy quá 24h nhưng chưa nhận được tiền hoàn về ví ShopeePay',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Đã thanh toán nhưng trạng thái đơn là chưa thanh toán/ hủy',
        Explain: 'Đã thanh toán nhưng trạng thái đơn là chưa thanh toán/ hủy hoặc bị hủy nhưng chưa nhận được tiền hoàn (còn trong hạn hoàn tiền 24h)',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Chuyển khoản dư/ thiếu/ trừ tiền 2 lần',
        Explain: 'Thanh toán dư/ thiếu/ thanh toán 2 lần/ sai thông tin thanh toán',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Không nhận mã xác minh/ mã sai/ mã hết hạn',
        Explain: 'Không nhận mã xác minh/ mã sai/ mã hết hạn',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Không thể cung cấp biên lai/ bằng chứng thanh toán',
        Explain: 'Không thể cung cấp biên lai/ bằng chứng thanh toán',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Mất/ không cung cấp được biên lai/ bằng chứng thanh toán',
        Explain: 'Mất/ không cung cấp được biên lai/ bằng chứng thanh toán',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Hóa đơn thanh toán không hợp lệ',
        Explain: 'Hóa đơn thanh toán không hợp lệ',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Sai số tiền thanh toán',
        Explain: 'Sai số tiền thanh toán',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Các vấn đề về e-voucher',
        Explain: 'Các vấn đề về e-voucher offline payment',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Lỗi hệ thống liên quan đến thanh toán',
        Explain: 'Lỗi hệ thống liên quan đến thanh toán',
    },

    {
        L1: 'ShopeePay',
        L2: 'Rút tiền',
        L3: 'Hướng dẫn rút tiền từ ví ShopeePay',
        Explain: 'Hướng dẫn rút tiền từ ví ShopeePay, rút tiền từ ShopeePay về TKNH nhưng chưa nhận được',
    },

    {
        L1: 'ShopeePay',
        L2: 'Gian lận',
        L3: 'Không nhận được tiền hoàn từ ví ShopeePay.',
        Explain: 'Không nhận được tiền hoàn vào ví ShopeePay: các trường hợp ví ShopeePay bị lock, frozen, hệ thống sẽ hoàn tiền vào số dư TK Shopee',
    },
    //===============
    {
        L1: 'Digital product',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn sử dụng Digital Product',
        Explain: 'Hướng dẫn sử dụng Digital Product',
    },

    {
        L1: 'Digital product',
        L2: 'Câu hỏi chung',
        L3: 'Kiểm tra trạng thái đơn hàng',
        Explain: 'Kiểm tra trạng thái đơn hàng',
    },

    {
        L1: 'Digital product',
        L2: 'Câu hỏi chung',
        L3: 'Thắc mắc về thông tin sản phẩm',
        Explain: 'Thắc mắc về thông tin của các sản phẩm thuộc DP',
    },

    {
        L1: 'Digital product',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn sử dụng Voucher',
        Explain: 'Hướng dẫn sử dụng Voucher trên đơn DP',
    },

    {
        L1: 'Digital product',
        L2: 'Câu hỏi chung',
        L3: 'Góp ý về đối tác/ hệ thống/ dịch vụ',
        Explain: 'Góp ý về đối tác/ hệ thống/ dịch vụ',
    },
    //===============
    {
        L1: 'Digital product',
        L2: 'Thanh toán',
        L3: 'Hướng dẫn thanh toán',
        Explain: 'Hướng dẫn thanh toán, cấn trừ bảo lưu ( vé máy bay), cách quyên góp',
    },

    {
        L1: 'Digital product',
        L2: 'Thanh toán',
        L3: 'Hóa đơn',
        Explain: 'Hóa đơn, yêu cầu xuất hóa đơn VAT',
    },

    {
        L1: 'Digital product',
        L2: 'Thanh toán',
        L3: 'Phí dịch vụ',
        Explain: 'Thắc mắc về phí dịch vụ, phí giao dịch (thanh toán hóa đơn nước)',
    },

    {
        L1: 'Digital product',
        L2: 'Thanh toán',
        L3: 'Góp ý về giới hạn thanh toán',
        Explain: 'Góp ý về giới hạn hạn mức thanh toán',
    },
    //===========================================
    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Đã thanh toán nhưng chưa nhận được sản phẩm',
        Explain: 'Đã thanh toán nhưng chưa nhận được voucher/ dịch vụ, trạng thái Fulfilment Pending...(payment success)',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Không thể sử dụng voucher/ dịch vụ',
        Explain: 'Không thể sử dụng sản phẩm voucher/ dịch vụ đã mua, thẻ điện thoại/data mua thành công nhưng sử dụng/nạp báo lỗi',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Voucher/ dịch vụ khác mô tả',
        Explain: 'Voucher/ dịch vụ khác mô tả',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Yêu cầu gửi lại voucher/ mã code',
        Explain: 'Yêu cầu gửi lại voucher/ mã code',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Đơn hàng đã hoàn thành nhưng chưa nhận được voucher/ mã code',
        Explain: 'Trạng thái Fulfillment Success nhưng chưa nhận được voucher/ mã code',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Thay đổi thông tin đơn hàng',
        Explain: 'Thay đổi thông tin đơn hàng, mua thêm hành lý, thay đổi thời gian bay (TVLK)',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Yêu cầu hủy đơn',
        Explain: 'Buyer/ seller yêu cầu huỷ đơn hàng',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Đơn hàng bị hủy theo logic trên hệ thống',
        Explain: 'Đơn hàng bị hủy theo logic trên hệ thống: hết hàng, quá hạn thanh toán..',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Lỗi hệ thống liên quan đến thanh toán',
        Explain: 'Lỗi hệ thống khác',
    },
    //===============
    {
        L1: 'Digital product',
        L2: 'Gian lận',
        L3: 'Không thể thanh toán do TK có dấu hiệu bất thường',
        Explain: 'Không thể thanh toán do TK có dấu hiệu bất thường, hết hạn mức giao dịch đơn DP',
    },

    {
        L1: 'Digital product',
        L2: 'Gian lận',
        L3: 'Giới hạn sử dụng voucher',
        Explain: 'User hỏi về giới hạn hoặc nhận được cảnh báo khi sử dụng voucher DP (voucher trồng cây,...) do có tài khoản liên kết <br/> CS kiểm tra Voucher Type trên Portal nếu không phải DP thì cần chọn L1 Fraud hoặc Marketing',
    },

    {
        L1: 'Digital product',
        L2: 'Gian lận',
        L3: 'Không nhận được xu',
        Explain: 'User báo không nhận được xu vì vấn đề tài khoản gian lận',
    },

    {
        L1: 'Digital product',
        L2: 'Gian lận',
        L3: 'Giới hạn sử dụng xu',
        Explain: 'User hỏi về giới hạn/nhận được cảnh báo về giới hạn sử dụng xu',
    },
    //===============
    {
        L1: 'Digital product',
        L2: 'Hoàn tiền',
        L3: 'Trạng thái hoàn tiền',
        Explain: 'Thắc mắc về trạng thái, số tiền hoàn, trừ tiền 2 lần',
    },

    {
        L1: 'Digital product',
        L2: 'Hoàn tiền',
        L3: 'Không nhận được tiền hoàn',
        Explain: 'Không nhận được tiền hoàn đơn fail',
    },

    {
        L1: 'Digital product',
        L2: 'Hoàn tiền',
        L3: 'Buyer yêu cầu hoàn tiền',
        Explain: 'Chưa có giải thích',
    },
    //===============
    {
        L1: 'Câu hỏi chung',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Lỗi App',
        Explain: 'App/Web xảy ra sự cố lỗi mà KH phản ánh,',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Góp ý về app',
        Explain: 'Phàn nàn về App/web chậm/lag,..<br/> Góp ý để cải thiện chất lượng App/Web tốt hơn',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Góp ý về tính năng',
        Explain: 'KH yêu cầu nên bổ sung thêm 1 số tính năng, tích hợp ứng dụng khác,...',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Các lỗi khác',
        Explain: 'Lỗi hệ thống khác',
    },
    //===============
    {
        L1: 'Câu hỏi chung',
        L2: 'Câu hỏi chung về Shopee',
        L3: 'Shopee đảm bảo',
        Explain: 'Chính sách Shopee đảm bảo là gì? Các thắc mắc liên quan đến Shopee đảm bảo <br/> Yêu cầu bảo hành sản phẩm',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Câu hỏi chung về Shopee',
        L3: 'Các vấn đề chính sách/ quy định của Shopee',
        Explain: 'KH hỏi về chính sách mua/bán trên Shopee. <br/> Các vấn đề về tuyển dụng của Shopee,',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Câu hỏi chung về Shopee',
        L3: 'Hướng dẫn mua hàng',
        Explain: 'Hỏi cách đặt hàng, thông tin của đơn hàng: về sản phẩm, quà tặng đi kèm',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Câu hỏi chung về Shopee',
        L3: 'Hướng dẫn bán hàng',
        Explain: 'Hướng dẫn seller Việt Nam/CB cách bán hàng',
    },
    //===============
    {
        L1: 'Câu hỏi chung',
        L2: 'OTP',
        L3: 'Không nhận được sms OTP',
        Explain: 'Không nhận được sms OTP khi thanh toán, đăng kí, đăng nhập,...',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'OTP',
        L3: 'Không nhận được voice OTPg',
        Explain: 'Không nhận được voice OTP khi thanh toán, đăng kí, đăng nhập,...',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'OTP',
        L3: 'Các vấn đề khác',
        Explain: 'OTP bị sai không đăng nhập được, OTP gửi spam liên tục không ngừng,...',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Agent complaint',
        L3: 'Sử dụng từ thô tục với CS',
        Explain: 'KH dùng từ ngữ thô tục, phản cảm với CS khi hỗ trợ <br/> KH chỉ khiếu nại nhân viên và không có issue gì',
    },
    //===============
    {
        L1: 'Câu hỏi khác',
        L2: 'Câu hỏi khác',
        L3: 'Thư rác',
        Explain: 'Các vấn đề không liên quan đến Shopee, spam mail, không đồng ý kết quả từ Shopee (fl theo KB [KB][SOP] - Xử Lý Phiếu Backlog Và các trường hợp Spam Cases).',
    },

    {
        L1: 'Câu hỏi khác',
        L2: 'Câu hỏi khác',
        L3: 'Cuộc gọi bị mất kết nối',
        Explain: 'Cuộc gọi bị mất kết nối, không tín hiệu,...',
    },

    {
        L1: 'Câu hỏi khác',
        L2: 'Câu hỏi khác',
        L3: 'Chat chưa hoàn tất',
        Explain: '1. CS Live Chat: Khi KH không cung cấp thông tin cần hỗ trợ hoặc cung cấp nhưng ko đủ thông tin để chọn được L3 reason code (không cần chọn theo nội dung KH chat vs Bot, cs không thể chọn lý do phiếu Level 3/ Reason do: <br/> - KH không cung cấp thông tin hoặc thiếu thông tin để cs kiểm tra và biết vấn đề kh gặp là gì <br/> - Hoàn toàn ko có vấn đề cần hỗ trợ (chào Shopee, hi, kiểm tra giúp mình, hỗ trợ mình...out chat) <br/> - Khách liên hệ kiểm tra thông tin về vận chuyển của đơn hàng nhưng khách out chat khi chưa cung cấp/ CS không kiểm tra được mã đơn hàng cụ thể <br/> - KH chat tiếng anh và agent ko hiểu vấn đề kh gặp là gì <br/> Chat chưa hoàn tất nhưng đã có đầy đủ vấn đề và CS có thể xử lý được -> Chọn theo lý do phiếu đúng. <br/> 2 CCS: khi bắt đầu thì chọn Chat chưa hoàn tất cho đến khi có vấn đề cụ thể thì chọn lại Reason code phù hợp.',
    },
    //===============
    {
        L1: 'ShopeeFood',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn sử dụng Voucher',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn đặt hàng',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Đăng ký',
        L3: 'Hướng dẫn bán hàng với ShopeeFood',
        Explain: 'Hướng dẫn bán hàng, liên kết tài khoản ShopeeFood với Shopee <br/> Thay đổi thông tin tài khoản ShopeeFood <br/> Muốn trở thành tài xế ShopeFood',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Tài khoản và bảo mật',
        L3: 'Yêu cầu dừng hợp tác',
        Explain: 'Merchant muốn ngừng hợp tác với ShopeeFood hoặc buyer muốn hủy liên kết ShopeeFood x Shopee',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Yêu cầu về đơn hàng',
        L3: 'Đổi món',
        Explain: 'Thay đổi thông tin đơn hàng',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Thanh toán',
        L3: 'Không thể thanh toán COD',
        Explain: 'Đơn ShopeeFood trên Shopee không thể chọn thanh toán bằng tiền mặt,...',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Giao hàng',
        L3: 'Kiểm tra trạng thái giao hàng',
        Explain: 'Đơn ShopeeFood đang giao - Buyer thắc mắc khi nào nhận được hàng',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Giao hàng',
        L3: 'Khu vực không hỗ trợ giao hàng',
        Explain: 'Shipper ShopeeFood từ chối đơn vì khu vực không hỗ trợ giao',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Giao hàng',
        L3: 'Thay đổi thông tin giao hàng',
        Explain: 'KH liên hệ về việc thay đổi thông tin đơn ShopeeFood như: giờ giao, địa chỉ, SĐT...trên đơn hàng đang diễn ra',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Đã nhận hàng',
        L3: 'Món ăn khác với mô tả',
        Explain: 'Món ăn ShopeeFood khác mô tả, không giống thông tin, thiếu thành phần nguyên liệu',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Đã nhận hàng',
        L3: 'Phàn nàn về chất lượng món',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Đã nhận hàng',
        L3: 'Giao hàng trễ',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Hoàn tiền/ Hủy đơn hàng',
        L3: 'Kiểm tra trạng thái hoàn tiền',
        Explain: 'Buyer liên hệ thắc mắc thời gian hoàn tiền, khi nào được hoàn tiền...',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Hoàn tiền/ Hủy đơn hàng',
        L3: 'Không nhận được tiền hoàn',
        Explain: 'Buyer chưa nhận được tiền hoàn cho đơn hàng ShopeeFood bị hủy, bị trừ tiền 2 lần',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Hoàn tiền/ Hủy đơn hàng',
        L3: 'Sai số tiền hoàn',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Hoàn tiền/ Hủy đơn hàng',
        L3: 'Yêu cầu hủy đơn',
        Explain: 'Buyer yêu cầu hủy đơn hàng, hướng dẫn hủy đơn ShopeeFood',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Hoàn tiền/ Hủy đơn hàng',
        L3: 'Đơn hàng hủy theo Logic hệ thống',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Hoàn tiền/ Hủy đơn hàng',
        L3: 'Hết món',
        Explain: 'Đơn ShopeeFood quán hết món không đặt được, Quán từ chối đơn, Shipper đến quán hết món nhờ hủy đơn,...',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Góp ý chung/ vấn đề kỹ thuật',
        L3: 'Góp ý về tính năng/ lỗi',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Góp ý chung/ vấn đề kỹ thuật',
        L3: 'Góp ý về người mua',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Góp ý chung/ vấn đề kỹ thuật',
        L3: 'Đề nghị cải thiện tính năng',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Góp ý chung/ vấn đề kỹ thuật',
        L3: 'Phản hồi về Shipper',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Góp ý chung/ vấn đề kỹ thuật',
        L3: 'Phản hồi về cửa hàng, nhà hàng',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Marketing & BD_FD',
        L3: 'Cửa hàng đóng cửa',
        Explain: 'chưa có giải thích',
    },

    //==============================
    {
        L1: 'Bảo hiểm',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về sản phẩm',
        Explain: 'Thắc mắc về sản phẩm bảo hiểm, T&C, thông tin chung về bảo hiểm,...',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn thanh toán',
        Explain: 'Buyer hỏi cách mua bảo hiểm, các hình thức thanh toán có hỗ trợ mua bảo hiểm',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Câu hỏi chung',
        L3: 'Các vấn đề về bán bảo hiểm',
        Explain: 'Sản phẩm của seller không bán kèm được bảo hiểm (trường hợp chưa xác định được nguyên nhân) <br/> ** Nếu do thiết lập sai phân loại hàng chọn Sản phẩm & Pháp lý > Câu hỏi chung về sản phẩm > Sai ngành hàng',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Câu hỏi chung',
        L3: 'Chính sách/quy định của bảo hiểm',
        Explain: 'Sản phẩm của seller không bán kèm được bảo hiểm do là đồ đã qua sử dụng, Seller hỏi điều kiện để sản phẩm của shop có thể bán kèm bảo hiểm',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn kích hoạt',
        Explain: 'Buyer hỏi cách kích hoạt bảo hiểm, các thắc mắc khi kích hoạt bảo hiểm (thông tin cần gửi cho bảo hiểm để kích hoạt, bảo hiểm sẽ gửi SMS/Email kích hoạt qua đâu,...)',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn bồi thường',
        Explain: 'Buyer hỏi cách yêu cầu bồi thường bảo hiểm',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Không thể kích hoạt',
        Explain: '- Buyer kích hoạt bảo hiểm rơi vỡ màn hình bị từ chối do màn hình thiết bị không hợp lệ,... <br/> - Buyer kích hoạt bảo hiểm bị lỗi ',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Không nhận được SMS/Email kích hoạt',
        Explain: 'Đơn hàng Completed nhưng buyer không nhận được SMS/Email hướng dẫn kích hoạt bảo hiểm',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Kiểm tra trạng thái kích hoạt',
        Explain: 'Buyer nhờ kiểm tra trạng thái kích hoạt, đã gửi thông tin kích hoạt nhưng chưa nhận được SMS/Email xác nhận từ bảo hiểm',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Kiểm tra trạng thái bồi thường',
        Explain: 'Buyer nhờ kiểm tra trạng thái yêu cầu bồi thường bảo hiểm, lý do yêu cầu bồi thường bị từ chối, đã yêu cầu bồi thường nhưng chưa được bảo hiểm phản hồi',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Không nhận được tiền bồi thường',
        Explain: 'Buyer đã yêu cầu bồi thường thành công nhưng chưa nhận được tiền',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Sai số tiền bồi thường',
        Explain: 'Buyer đã nhận được tiền bồi thường nhưng khiếu nại nhận sai/thiếu tiền',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Sản phẩm khác mô tả',
        Explain: 'Buyer phản ánh chính sách bảo hiểm khác với T&C',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Hoàn tiền/Hủy đơn hàng',
        L3: 'Yêu cầu hủy bảo hiểm',
        Explain: 'Buyer chỉ muốn hủy bảo hiểm, KHÔNG có khiếu nại về sản phẩm chính đã mua <br/> ** Trường hợp có khiếu nại về sản phẩm chính chọn L1 Trả hàng/hoàn tiền',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Hoàn tiền/Hủy đơn hàng',
        L3: 'Hết hạn Shopee đảm bảo',
        Explain: 'Buyer chỉ muốn hủy bảo hiểm nhưng liên hệ sau hạn khiếu nại',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Hoàn tiền/Hủy đơn hàng',
        L3: 'Kiểm tra trạng thái hoàn tiền',
        Explain: 'Buyer đã được chấp nhận hủy bảo hiểm và hỏi thời gian nhận được tiền hoàn, tiền sẽ hoàn về đâu,...',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Hoàn tiền/Hủy đơn hàng',
        L3: 'Không nhận được tiền hoàn',
        Explain: 'Buyer đã được chấp nhận hủy bảo hiểm nhưng quá thời gian chưa nhận được tiền hoàn',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Hoàn tiền/Hủy đơn hàng',
        L3: 'Sai số tiền hoàn',
        Explain: 'Buyer đã được hủy bảo hiểm và nhận được tiền nhưng có khiếu nại nhận sai/thiếu tiền',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Hoàn tiền/Hủy đơn hàng',
        L3: 'Khiếu nại kết quả xử lý',
        Explain: 'Không đồng ý với kết quả L2 xử lý trường hợp buyer yêu cầu hủy bảo hiểm do: không thỏa điều kiện hủy bảo hiểm,...',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Góp ý về tính năng/lỗi',
        Explain: 'Buyer góp ý về tính năng: tự động chọn mua Bảo hiểm thiết bị di động và Bảo hiểm thiết bị điện tử,...',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Góp ý về chính sách/đối tác',
        Explain: 'Buyer góp ý về chính sách bồi thường của công ty bảo hiểm: hạn mức, thời gian yêu cầu bồi thường, thời gian xử lý yêu cầu bồi thường,...',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Lỗi hệ thống liên quan đến thanh toán',
        Explain: 'Các lỗi phát sinh liên quan đến hệ thống, App/Web xảy ra sự cố mà khách hàng phản ánh,...',
    },




]