import React from 'react';
import gosua from "../images/products/phongan/gosua.jpg" 
import gosua1 from "../images/products/phongan/gosua1.jpg" 
import gohuong from "../images/products/phongan/gohuong.jpg" 
import gopomu from "../images/products/phongan/gopomu.jpg" 
import ScrollToTopOnMount from './ScrollToTopOnMount';

function Service1(props) {
    return (
      <div className="container mt-5 py-5 px-xl-5">
        <ScrollToTopOnMount />
        <h3 className="text-center">
          Những loại gỗ quý và thơm nhất thế giới 2022
        </h3>
        <img
          className="border rounded ratio ratio-1x1 mt-5 py-5"
          alt=""
          src={gosua}
        />
        <p>
          Gỗ tự nhiên là một trong những nguyên liệu được ứng dụng rất nhiều
          trong lĩnh vực sản xuất đồ gỗ, đồ nội thất. Chúng không chỉ có đặc
          tính bền chắc, tính thẩm mỹ cao mà một số loại gỗ còn có mùi thơm đặc
          biệt. Trong bài viết sau đây, chúng tôi sẽ giới thiệu một số loại gỗ
          quý và thơm được khách hàng ưu chuộng nhất trên thị trường hiện nay.
        </p>
        <div className="mt-5">
          <h4>Gỗ Sưa</h4>
          <p>
            Gỗ Sưa là một loại gỗ thuộc họ Đậu, cây gỗ nhỡ, chiều cao khoảng từ
            6-12 m, sinh trưởng trung bình. Gỗ Sưa được coi là một loại gỗ quý
            và thơm quyến rũ. Mùi thơm của gỗ Sưa dịu nhẹ giống với Hương Trầm.
            Tuy nhiên, khi đốt thì gỗ Sữa lại có mùi khá khó chịu và có tàn màu
            trắng đục.
          </p>
          <img
            className="border rounded ratio ratio-1x1 mt-5 py-5"
            alt=""
            src={gosua1}
          />
          <p>Gỗ Sưa không chỉ đẹp mà còn có mùi thơm đặc biệt</p>
          <p>
            Gỗ Sưa có thớ gỗ mịn, vân gỗ rất đẹp mắt. Thời xưa, gỗ Sưa được dùng
            để đóng đồ nội thất ở trong cung đình dành cho vua chúa. Nhiều người
            quan niệm rằng mùi thơm nhạt nhưng dễ chịu của gỗ Sưa tượng trưng
            cho sự cao quý, vinh hoa. Ngoài ứng dụng trong nội thất, gỗ Sưa còn
            được sử dụng trong Y học với rất nhiều công dụng cho sức khỏe.
          </p>
        </div>

        <div className="mt-5">
          <h4>Gỗ Hương</h4>
          <p>
            Nếu đã liệt kê những loại gỗ quý và thơm thì không thể không kể đến
            gỗ Hương. Gỗ Hương có rất nhiều tên gọi khác nhau như hương nghệ,
            hương xoan, hương đỏ…Nhưng về cơ bản, gỗ Hương có thể chia thành 2
            loại là gỗ Hương Lào (gỗ Giáng Hương) và gỗ Hương Nam Phi (gỗ Hương
            đỏ).
          </p>
          <img
            className="border rounded ratio ratio-1x1 mt-5 py-5"
            alt=""
            src={gohuong}
          />
          <p>Gỗ Hương được rất nhiều người yêu thích.</p>
          <p>
            Gỗ Hương có đặc điểm chung là chất gỗ cứng, chắc và nặng. Thớ gỗ
            mỏng, mịn còn vân gỗ thì rất đẹp mắt. Vì trong gỗ Hương có chứa một
            lượng tinh dầu khá lớn nên khi ngâm vào nước, gỗ Hương sẽ khiến nước
            chuyển sang màu vàng xanh (giống màu nước chè). Đây cũng là một
            trong những cách đơn giản nhất để có thể nhận biết gỗ Hương. Lượng
            tinh dầu này giúp gỗ Hương có thể kháng được mối mọt, bền với thời.
            Mùi thơm của gỗ Hương rất nhẹ nhàng, tạo được cảm giác thoải mái,
            xua tan mệt mỏi và căng thẳng. Do vậy, gỗ Hương được rất nhiều người
            yêu thích.
          </p>
        </div>

        <div className="mt-5">
          <h4>Gỗ Pơ Mu</h4>
          <p>
            Gỗ Pơ Mu là một loại gỗ quý, thân lớn và thẳng, đạt chiều cao trung
            bình từ 25 – 30 m. Vỏ cây Pơ Mu có màu ánh nâu hoặc nâu xám và rất
            dễ bị bong tróc khi cây còn non. Một số cây già có thể lên tới hàng
            trăm tuổi, vỏ cây có vết nứt theo chiều dọc. Nếu ngửi kỹ, bạn sẽ cảm
            thấy một mùi thơm nhẹ ở bên trong.
          </p>
          <img
            className="border rounded ratio ratio-1x1 mt-5 py-5"
            alt=""
            src={gopomu}
          />
          <p>Gỗ Hương và Gỗ Pơ Mu được ứng dụng nhiều trong nội thất</p>
          <p>
            Gỗ Pơ Mu tuy là một họ của thông nhưng lại được đánh giá cao cấp hơn
            thông rất nhiều. Gỗ Pơ Mu khi mới sẽ có màu vàng sáng giống như gỗ
            thông nhưng sau một thời gian sẽ bị xỉn màu, ngả sang màu vàng trầm
            hơn. Gỗ có vân đẹp, nhẹ và rất bền; có khả năng kháng được mối mọt
            và thậm chí còn xua đuổi được côn trùng. Điểm đặc biệt của gỗ Pơ Mu
            là mùi thơm độc đáo mà không có một loại gỗ nào có được. Hương thơm
            thoang thoảng của gỗ Pơ Mu giúp điều hòa không khí trong nhà, giảm
            căng thẳng thần kinh và tạo được cảm giác dễ chịu.
          </p>
        </div>
        <div className='mt-5'>
          <p>
            Trên đây là những loại gỗ quý và thơm được nhiều khách hàng ưa
            chuộng nhất từ xưa đến nay. Sử dụng đồ gỗ tự nhiên không chỉ mang
            lại phong cách sang trọng mà còn rất tốt cho sức khỏe của gia chủ.
            Do đó, bạn nên tìm hiểu và lựa chọn kỹ đồ gỗ tại những cơ sở uy tín,
            chuyên nghiệp để có thể sở hữu được những sản phẩm chất lượng nhất.
          </p>
          <p>
            Công ty Đồ gỗ Nội Thất Đại Đồng Tâm – Đồ Gỗ La Xuyên chúc bạn và gia
            đình luôn luôn khỏe mạnh.
          </p>
        </div>
      </div>
    );
}

export default Service1;