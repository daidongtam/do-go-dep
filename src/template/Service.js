import React from 'react';
import gosua from "../images/products/phongan/gosua.jpg" 
import baoquan from "../images/products/phongan/baoquan.jpg" 
import loaigo from "../images/products/phongan/loaigo.jpg" 
import giuongcuoi from "../images/products/phongan/giuongcuoi.jpg" 
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from './ScrollToTopOnMount';

function Service(props) {
    return (
        <div className="container mt-5 py-5 px-xl-5">
          <ScrollToTopOnMount />
            <div className='border-bottom mb-5'>
               <h4>Những loại gỗ quý và thơm nhất thế giới 2022</h4>
               <p>Gỗ tự nhiên là một trong những nguyên liệu được ứng dụng rất nhiều trong lĩnh vực sản xuất đồ gỗ, đồ nội thất. Chúng không chỉ có đặc tính bền chắc, tính thẩm mỹ cao mà 
                một số loại gỗ còn có mùi thơm đặc biệt. Trong bài viết sau đây, chúng tôi sẽ […]</p>
                <img
                className="border rounded ratio ratio-1x1 mt-5 py-5"
                alt=""
                src={gosua}
              />
              <Link  to="/service1"><button type="button" className="btn btn-danger mb-5 mt-3">Đọc tiếp</button></Link>
            </div>


            <div className='border-bottom mb-5'>
               <h4>Bí quyết bảo quản đồ gỗ nội thất luôn như mới theo thời gian</h4>
               <p>Nội thất bằng gỗ là sản phẩm được sử dụng phổ biến trong trang
                 trí nội thất vì chúng sở hữu vẻ đẹp vượt thời gian, độ bền chắc tốt. Tuy nhiên, sản phẩm này vẫn
                 có thể bị nguy hại bởi một số tác nhân bên ngoài như ánh sáng mặt trời, mối mọt, […]</p>
                <img
                className="border rounded ratio ratio-1x1 mt-5 py-5"
                alt=""
                src={baoquan}
              />
              <Link  to="/service2"><button type="button" class="btn btn-danger  mb-5 mt-3">Đọc tiếp</button></Link>
            </div>


            <div className='border-bottom mb-5'>
               <h4>5 Loại gỗ tự nhiên tốt nhất để sản xuất đồ gỗ nội thất</h4>
               <p>Gỗ tự nhiên là loại gỗ có tuổi thọ cao, ít bị hư hỏng trong quá trình sử dụng. Đồ nội thất làm bằng gỗ tự nhiên thường có kết cấu đồng chất, cứng cáp và có tính thẩm mỹ rất cao. Vậy đâu là 5 loại gỗ tự nhiên tốt nhất để gia công […]
                </p>
                <img
                className="border rounded ratio ratio-1x1 mt-5 py-5"
                alt=""
                src={loaigo}
              />
              <Link  to="/service3"><button type="button" class="btn btn-danger  mb-5 mt-3">Đọc tiếp</button></Link>
            </div>


            <div className='border-bottom mb-5'>
               <h4>Những mẫu giường đẹp nhất 2022 cho vợ chồng mới cưới</h4>
               <p>Đối với những đôi vợ chồng mới cưới, giường ngủ là một đồ vật cực kỳ quan trọng. Chúng không đơn giản là nơi để nghỉ ngơi, thư giãn mà còn mang lại những trải nghiệm tình yêu lãng mạn, đáng nhớ của đôi vợ chồng trẻ. Do đó, việc lựa chọn giường ngủ phải […]</p>
               <img
                className="border rounded ratio ratio-1x1 mt-5 py-5"
                alt=""
                src={giuongcuoi}
              />
              <Link  to="/service4"><button type="button" class="btn btn-danger  mb-5 mt-3">Đọc tiếp</button></Link>
            </div>
           
        </div>
    );
}

export default Service;