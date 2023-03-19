import React from 'react';
import company1 from "../images/company/company1.jpg"
import langnghe from "../images/products/phongngu/langnghe.jpg"
import langnghe2 from "../images/products/phongngu/langnghe2.jpg"
import ScrollToTopOnMount from './ScrollToTopOnMount';

function Introduce(props) {
    return (
      <div className="container mt-5 py-5 px-xl-5">
        <ScrollToTopOnMount />
        <h2>Giới thiệu</h2>
        <p>
          Đồ gỗ nội thất Đại Đồng Tâm – Đồ gỗ Mỹ nghệ làng nghề La Xuyên, thuộc
          xã Yên Ninh, huyện Ý Yên, tỉnh Nam Định (Có bề dày lịch sử hơn 1000
          năm).
        </p>
        <img
          className="border rounded ratio ratio-1x1 mt-5 py-5"
          alt=""
          src={company1}
        />
        <img
          className="border rounded ratio ratio-1x1 mt-5 py-5"
          alt=""
          src={langnghe}
        />
        <p>
          Đồ gỗ nội thất Đại Đồng Tâm đáp ứng đầy đủ mẫu mã, chủng loại theo yêu
          cầu của khách hàng. Sản phẩm của đồ gỗ Đại Đồng Tâm được sản xuất từ
          các loại gỗ tự nhiên, có giá trị thẩm mỹ và công năng cao như: gỗ
          Trắc, gỗ Mun, gỗ Hương, gỗ Gụ…phù hợp với nội thất văn phòng cao cấp,
          biệt thự, nhà hàng, khách sạn, Resort…Các sản phẩm được thiết kế hài
          hòa giữa phong cách hiện đại và truyền thống, có sự hòa trộn đặc sắc
          giữa nét văn hóa phương Đông và phương Tây. Mỗi sản phẩm là một tác
          phẩm nghệ thuật, được kết tinh từ bàn tay khéo léo và kinh nghiệm của
          những nghệ nhân tài hoa nhất nhì đất kinh bắc với niềm đam mê nghệ
          thuật chế tác qua nhiều thế hệ.
        </p>
        <img
          className="border rounded ratio ratio-1x1 mt-5 py-5"
          alt=""
          src={langnghe2}
        />
        <p className="mt-5 py-5">
          Ngoài ra, để đáp ứng thị hiếu và nhu cầu của khách hàng về dòng sản
          phẩm nội thất xu hướng hiện đại, phong cách phương tây, hay tân cổ
          điển, đồ gỗ Đại Đồng Tâm còn mang đến cho khách hàng những sản phẩm
          theo xu hướng hiện đại từ các chất liệu gỗ công nghiệp như: Veneer,
          Tần bì, óc chó, Sồi, Anh đào,… Với phương châm “Tốt gỗ, Tốt cả nước
          sơn”, Đồ gỗ Đại Đồng Tâm luôn coi trọng, đề cao chất lượng sản phẩm,
          lắng nghe để nắm bắt nhu cầu và hướng tới hoàn thiện dịch vụ ngày càng
          hoàn hảo. Đồ gỗ Đại Đồng Tâm cam kết bảo vệ quyền lợi của khách hàng
          với những chính sách bán hàng, hậu mãi đặc biệt. Đến với đồ gỗ Đại
          Đồng Tâm để được sử dụng dịch vụ về nội thất gỗ tốt nhất.
        </p>

        <h5>LIÊN HỆ VỚI CHÚNG TÔI</h5>
        <h4>ĐỒ GỖ ĐẠI ĐỒNG TÂM</h4>
        <p>Địa chỉ: Khu CN II - Quyết Phong - Yên Ninh - Ý Yên - Nam Định</p>
        <p>Điện thoại liên hệ: 0982385996</p>
      </div>
    );
}

export default Introduce;