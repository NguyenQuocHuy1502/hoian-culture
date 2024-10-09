import { images } from '@/constants'
import { ECategory, IObjectTotalData, IObjectTour } from '@/types/common'

export const listMenu = [
  {
    image: images.beach,
    category: ECategory.BEACH,
    title: 'Bãi biển',
  },
  {
    image: images.hotel,
    category: ECategory.HOTEL,
    title: 'Khách sạn Homestay',
  },
  {
    image: images.food,
    category: ECategory.FOOD,
    title: 'Ẩm thực',
  },
  {
    image: images.craft,
    category: ECategory.CRAFT,
    title: 'Làng chài',
  },
  {
    image: images.cafe,
    category: ECategory.CAFE,
    title: 'Quán cà phê',
  },
  {
    image: images.place,
    category: ECategory.PLACE,
    title: 'Địa điểm',
  },
]

export const tourList = [
  {
    label: '1 ngày',
    value: '1',
  },
  {
    label: '2 ngày 1 đêm',
    value: '2',
  },
  {
    label: '3 ngày 2 đêm',
    value: '3',
  },
  {
    label: '4 ngày 3 đêm',
    value: '4',
  },
]

const placeData = {
  id: ECategory.PLACE,
  title: 'Địa điểm',
  image: images.place,
  list: [
    {
      id: 1,
      image: images.hoian,
      category: ECategory.PLACE,
      title: 'Phố cổ Hội An',
      description:
        'Phố cổ Hội An là một thành phố cổ nằm ở hạ lưu sông Thu Bồn, thuộc tỉnh Quảng Nam, Việt Nam. Đây là một trong những khu đô thị cổ nổi tiếng nhất của Đông Nam Á, được UNESCO công nhận là di sản văn hóa thế giới từ năm 1999. Hội An nổi tiếng với kiến trúc cổ kính, văn hóa đa dạng và những hoạt động truyền thống vẫn được duy trì cho đến ngày nay.',
      body: [
        {
          title: 'Lịch sử và kiến trúc',
          content:
            'Phố cổ Hội An từng là một thương cảng sầm uất từ thế kỷ 15 đến thế kỷ 19. Thương nhân từ khắp nơi trên thế giới như Nhật Bản, Trung Quốc, Hà Lan, và Pháp đã đến đây buôn bán, tạo nên sự giao thoa văn hóa độc đáo. Kiến trúc của Hội An mang đậm nét Á Đông, với những ngôi nhà cổ, đình chùa, và hội quán được xây dựng bằng gỗ và được trang trí bằng những hoa văn tinh xảo. Đặc biệt, khu phố cổ Hội An còn nổi tiếng với những con đường nhỏ lát gạch và những chiếc đèn lồng rực rỡ vào ban đêm.',
        },
        {
          title: 'Văn hóa và lễ hội',
          content: `Hội An không chỉ nổi bật với kiến trúc cổ mà còn là nơi lưu giữ nhiều giá trị văn hóa truyền thống. Một trong những nét văn hóa đặc sắc của Hội An là lễ hội thả đèn hoa đăng trên sông Thu Bồn, diễn ra vào ngày rằm hàng tháng. Đây là dịp để người dân và du khách thả những chiếc đèn lồng mang theo ước nguyện xuống dòng sông, tạo nên một cảnh tượng lung linh huyền ảo. Ngoài ra, các hoạt động nghệ thuật như múa, hát dân gian, và biểu diễn nhạc cụ truyền thống cũng được tổ chức thường xuyên tại đây.`,
        },
        {
          title: 'Ẩm thực đặc sắc',
          content: `Hội An còn nổi tiếng với nền ẩm thực phong phú và đa dạng. Du khách đến đây không thể bỏ qua những món ăn đặc sản như cao lầu, mì Quảng, bánh bao, bánh vạc và chè bắp. Các món ăn ở Hội An thường được chế biến từ những nguyên liệu tươi ngon, kết hợp với những công thức truyền thống được truyền lại qua nhiều thế hệ. Đặc biệt, khu chợ đêm Hội An là nơi lý tưởng để du khách thưởng thức ẩm thực đường phố và mua sắm các sản phẩm thủ công mỹ nghệ.`,
        },
        {
          title: 'Ý nghĩa và tầm quan trọng',
          content: `Phố cổ Hội An không chỉ là một địa điểm du lịch nổi tiếng mà còn là biểu tượng của sự giao thoa văn hóa và tinh thần bảo tồn di sản. Hội An đã giữ gìn được nét đẹp văn hóa và kiến trúc truyền thống, đồng thời phát triển du lịch bền vững, tạo ra nguồn thu nhập quan trọng cho người dân địa phương. Với vị trí đặc biệt trong lịch sử thương mại và văn hóa Việt Nam, Hội An là một di sản quý báu, không chỉ của Việt Nam mà còn của thế giới.`,
        },
      ],
    },
    {
      id: 2,
      image: images.rungduabaymau,
      category: ECategory.PLACE,
      title: 'Rừng Dừa Bảy Mẫu',
      description:
        'Rừng Dừa Bảy Mẫu nằm tại xã Cẩm Thanh, Hội An, tỉnh Quảng Nam. Đây là một khu sinh thái nổi tiếng với hệ thống rừng dừa nước độc đáo, mang đậm nét văn hóa miền sông nước và là điểm đến yêu thích của du khách muốn trải nghiệm thiên nhiên hoang sơ cùng những hoạt động dân gian thú vị.',
      body: [
        {
          title: 'Lịch sử và vị trí',
          content:
            'Rừng Dừa Bảy Mẫu có lịch sử từ thời kỳ kháng chiến chống Pháp và Mỹ, khi nơi đây từng là căn cứ địa bí mật của lực lượng cách mạng. Khu rừng rộng hơn 100 hecta, được bao bọc bởi những rặng dừa nước mọc san sát hai bên bờ sông, tạo nên một khung cảnh yên bình và thơ mộng. Nơi đây cũng được gọi là “miền Tây thu nhỏ” giữa lòng Hội An bởi cảnh quan sông nước hữu tình đặc trưng của vùng đồng bằng sông Cửu Long.',
        },
        {
          title: 'Hoạt động trải nghiệm',
          content: `Du khách đến với Rừng Dừa Bảy Mẫu có thể tham gia nhiều hoạt động thú vị, trong đó nổi bật nhất là trải nghiệm đi thuyền thúng. Người dân địa phương sẽ chèo thuyền thúng đưa du khách khám phá sâu vào khu rừng dừa, nơi bạn có thể ngắm nhìn khung cảnh thiên nhiên tuyệt đẹp, lắng nghe tiếng chim hót và tận hưởng không khí trong lành. Ngoài ra, du khách còn được trải nghiệm các trò chơi dân gian trên thuyền như đua thuyền thúng, lắc thuyền thúng, và học cách làm các sản phẩm thủ công từ lá dừa như mũ, quạt, nhẫn.`,
        },
        {
          title: 'Ẩm thực miền sông nước',
          content: `Không chỉ nổi tiếng với cảnh quan, Rừng Dừa Bảy Mẫu còn thu hút du khách bởi ẩm thực miền sông nước đa dạng. Các món ăn từ tôm, cua, cá được đánh bắt trực tiếp tại khu vực, kết hợp với những gia vị đặc trưng của miền Trung Việt Nam, mang đến hương vị đậm đà khó quên. Một số món nổi bật mà du khách không thể bỏ qua bao gồm gỏi dừa, tôm nướng muối ớt, và cá bống kho tộ.`,
        },
        {
          title: 'Ý nghĩa và bảo tồn',
          content: `Rừng Dừa Bảy Mẫu không chỉ là một điểm du lịch sinh thái hấp dẫn mà còn có ý nghĩa lịch sử và văn hóa sâu sắc. Việc bảo tồn và phát triển khu rừng là một phần quan trọng trong việc duy trì hệ sinh thái ven biển, đồng thời giúp phát triển kinh tế cho người dân địa phương thông qua du lịch bền vững. Nơi đây còn mang giá trị về mặt giáo dục, là bài học thực tiễn về môi trường và sinh thái cho du khách, đặc biệt là thế hệ trẻ.`,
        },
      ],
    },
    {
      id: 3,
      image: images.chualongtuyen,
      category: ECategory.PLACE,
      title: 'Chùa Cầu Hội An',
      description:
        'Chùa Cầu là một biểu tượng văn hóa và lịch sử quan trọng của Hội An, còn được gọi là Cầu Nhật Bản do có sự đóng góp xây dựng của cộng đồng người Nhật Bản tại Hội An từ thế kỷ 17. Cầu mang đậm dấu ấn kiến trúc Á Đông và là điểm đến không thể bỏ qua cho du khách khi đến thăm phố cổ.',
      body: [
        {
          title: 'Lịch sử và kiến trúc',
          content:
            'Chùa Cầu được xây dựng vào cuối thế kỷ 16, khi Hội An là một trong những thương cảng phát triển nhất khu vực. Cầu có mái che bằng gỗ, nối liền hai bờ của con lạch nhỏ. Với thiết kế tinh xảo, cây cầu kết hợp hài hòa giữa phong cách kiến trúc Việt, Nhật và Trung Hoa, thể hiện sự giao thoa văn hóa giữa các quốc gia tại Hội An.',
        },
        {
          title: 'Ý nghĩa văn hóa và tôn giáo',
          content: `Chùa Cầu không chỉ là một cây cầu mà còn là nơi thờ cúng thần linh. Phía trên cây cầu có một ngôi chùa nhỏ thờ Bắc Đế Trấn Vũ, vị thần bảo hộ người dân khỏi thiên tai. Nơi đây còn gắn liền với nhiều truyền thuyết về rồng và tín ngưỡng dân gian, tạo thêm sức hút tâm linh cho du khách đến chiêm bái.`,
        },
        {
          title: 'Bảo tồn và phát triển',
          content: `Qua thời gian, Chùa Cầu đã trải qua nhiều lần trùng tu để giữ nguyên nét đẹp cổ kính của mình. Hội An và cộng đồng địa phương đang nỗ lực bảo tồn công trình kiến trúc này, đồng thời phát triển du lịch gắn liền với việc bảo vệ di sản văn hóa.`,
        },
      ],
    },
    {
      id: 4,
      image: images.nhatuancu,
      category: ECategory.PLACE,
      title: 'Nhà cổ Tấn Ký',
      description:
        'Nhà cổ Tấn Ký là một trong những ngôi nhà cổ nổi tiếng và lâu đời nhất ở Hội An, được xây dựng vào cuối thế kỷ 18. Đây là nơi lưu giữ các giá trị văn hóa và lịch sử độc đáo của Hội An, với lối kiến trúc cổ kính và sự pha trộn giữa phong cách Việt Nam, Nhật Bản, và Trung Quốc.',
      body: [
        {
          title: 'Kiến trúc và nội thất',
          content:
            'Ngôi nhà cổ được xây dựng chủ yếu bằng gỗ quý, với thiết kế phản ánh rõ nét phong cách kiến trúc Đông Á truyền thống. Các họa tiết chạm khắc tinh tế trên cửa, cột, và tường nhà là minh chứng cho tay nghề thủ công tinh xảo. Nội thất của ngôi nhà vẫn được giữ nguyên vẹn từ khi xây dựng, với nhiều hiện vật có giá trị lịch sử và văn hóa.',
        },
        {
          title: 'Lịch sử gia đình và văn hóa',
          content: `Ngôi nhà từng là nơi sinh sống và kinh doanh của gia đình họ Lê trong nhiều thế hệ. Đây cũng là địa điểm thể hiện sự phát triển của thương mại và văn hóa tại Hội An trong quá khứ. Ngôi nhà đã đón tiếp nhiều du khách trong và ngoài nước, mang lại trải nghiệm về cuộc sống của các thương nhân Hội An thời xưa.`,
        },
        {
          title: 'Bảo tồn và du lịch',
          content: `Nhà cổ Tấn Ký đã được UNESCO công nhận là di sản văn hóa thế giới, và hiện đang là một trong những điểm thu hút khách du lịch hàng đầu tại Hội An. Việc bảo tồn ngôi nhà này giúp giữ gìn những giá trị truyền thống của Hội An, đồng thời phát triển du lịch bền vững.`,
        },
        {
          title: 'Trải nghiệm du lịch',
          content: `Khi đến thăm Nhà cổ Tấn Ký, du khách có thể tham quan các không gian khác nhau của ngôi nhà, tìm hiểu về lịch sử của nó và khám phá những câu chuyện thú vị xung quanh gia đình họ Lê. Bên cạnh đó, du khách cũng có thể mua sắm các sản phẩm thủ công mỹ nghệ được bày bán quanh khu vực.`,
        },
      ],
    },
    {
      id: 5,
      image: images.denlonghoian,
      category: ECategory.PLACE,
      title: 'Đèn lồng Hội An - Lấp lánh điểm tô phố cổ',
      description:
        'Đèn lồng Hội An là biểu tượng của thành phố cổ này, không chỉ mang lại vẻ đẹp lung linh cho các con phố mà còn tượng trưng cho sự giao thoa văn hóa và truyền thống lâu đời của vùng đất này.',
      body: [
        {
          title: 'Lịch sử và ý nghĩa',
          content:
            'Đèn lồng xuất hiện tại Hội An từ thế kỷ 16, khi các thương nhân từ Nhật Bản và Trung Quốc mang theo văn hóa đèn lồng đến Việt Nam. Từ đó, đèn lồng trở thành nét đặc trưng của phố cổ, được treo dọc theo những con phố nhỏ, tạo nên không gian huyền ảo, rực rỡ mỗi khi đêm xuống.',
        },
        {
          title: 'Nghệ thuật chế tác',
          content: `Các nghệ nhân làm đèn lồng Hội An sử dụng khung tre và vải lụa để tạo nên những chiếc đèn lồng tinh tế. Quy trình làm đèn lồng đòi hỏi sự tỉ mỉ và kỹ thuật cao, từ việc chọn nguyên liệu đến trang trí hoa văn truyền thống. Mỗi chiếc đèn lồng mang trong mình câu chuyện văn hóa và tâm hồn người thợ thủ công.`,
        },
        {
          title: 'Đèn lồng trong văn hóa Hội An',
          content: `Đèn lồng không chỉ là biểu tượng của thành phố mà còn là một phần không thể thiếu trong các lễ hội truyền thống, đặc biệt là lễ hội đèn lồng được tổ chức vào ngày rằm hàng tháng. Vào những dịp lễ hội, phố cổ Hội An trở nên lung linh hơn bao giờ hết với hàng nghìn chiếc đèn lồng đủ màu sắc.`,
        },
        {
          title: 'Trải nghiệm làm đèn lồng',
          content: `Du khách đến Hội An có thể tham gia vào các lớp học làm đèn lồng, nơi họ sẽ được hướng dẫn từng bước để tạo ra chiếc đèn lồng của riêng mình. Đây là một trải nghiệm thú vị và mang tính giáo dục, giúp du khách hiểu thêm về nghệ thuật truyền thống của địa phương.`,
        },
      ],
    },
    {
      id: 6,
      image: images.langcuilu,
      category: ECategory.PLACE,
      title: 'Làng Củi Lũ - Trân trọng hoạ sắc Cơ Tu',
      description:
        'Làng Củi Lũ tại Hội An là nơi tập trung các nghệ nhân dân tộc Cơ Tu, chuyên chế tác các sản phẩm thủ công và nghệ thuật mang đậm nét văn hóa độc đáo của dân tộc mình.',
      body: [
        {
          title: 'Nghệ thuật và văn hóa Cơ Tu',
          content:
            'Người Cơ Tu nổi tiếng với nghệ thuật chạm khắc gỗ và dệt vải truyền thống. Tại Làng Củi Lũ, các nghệ nhân sử dụng các họa tiết đặc trưng của dân tộc mình để tạo ra những sản phẩm thủ công như mặt nạ, trang phục và các vật dụng hàng ngày.',
        },
        {
          title: 'Bảo tồn và phát triển',
          content: `Làng Củi Lũ không chỉ là nơi bảo tồn và phát triển nghệ thuật thủ công của người Cơ Tu mà còn là điểm du lịch văn hóa, mang lại cho du khách cơ hội tìm hiểu và khám phá văn hóa đặc sắc của dân tộc thiểu số này.`,
        },
        {
          title: 'Sản phẩm thủ công',
          content: `Du khách có thể tìm thấy nhiều sản phẩm thủ công độc đáo tại Làng Củi Lũ, từ các món đồ trang trí đến các sản phẩm sử dụng hàng ngày. Mỗi sản phẩm đều mang trong mình câu chuyện và tâm huyết của người nghệ nhân.`,
        },
        {
          title: 'Trải nghiệm văn hóa',
          content: `Tham quan Làng Củi Lũ, du khách không chỉ được chiêm ngưỡng các sản phẩm thủ công mà còn có thể tham gia vào các hoạt động truyền thống như dệt vải, chạm khắc gỗ. Đây là cơ hội để trải nghiệm văn hóa của người Cơ Tu một cách chân thực nhất.`,
        },
      ],
    },
    {
      id: 7,
      image: images.trangky,
      category: ECategory.PLACE,
      title: 'Làng Trang Ký',
      description:
        'Làng Trang Ký là một trong những làng nghề truyền thống nổi tiếng ở Hội An, nơi sản xuất giấy dó và các sản phẩm thủ công mỹ nghệ từ giấy. Đây là địa điểm lý tưởng cho những ai yêu thích nghệ thuật và văn hóa truyền thống.',
      body: [
        {
          title: 'Lịch sử và truyền thống',
          content:
            'Làng Trang Ký đã tồn tại hơn 400 năm, nổi tiếng với nghề làm giấy dó, một loại giấy truyền thống được sử dụng trong văn hóa Việt Nam. Du khách có thể tìm hiểu về quy trình sản xuất giấy và tham gia vào các lớp học làm giấy.',
        },
        {
          title: 'Sản phẩm và trải nghiệm',
          content: `Tại làng, du khách có thể mua các sản phẩm giấy dó như tranh vẽ, thiệp và quà lưu niệm. Ngoài ra, bạn còn có thể tham gia các hoạt động nghệ thuật như vẽ tranh trên giấy dó hoặc làm quà tặng thủ công.`,
        },
        {
          title: 'Quy trình sản xuất giấy',
          content: `Quy trình làm giấy dó bao gồm nhiều bước, từ việc chọn nguyên liệu như gỗ dâu, đến việc xử lý và làm sạch để tạo ra những tờ giấy chất lượng cao. Du khách có thể theo dõi quy trình này và hiểu thêm về nghệ thuật làm giấy truyền thống.`,
        },
        {
          title: 'Giá trị văn hóa',
          content: `Giấy dó không chỉ đơn thuần là một sản phẩm thủ công mà còn mang trong mình giá trị văn hóa và lịch sử sâu sắc. Các sản phẩm làm từ giấy dó thường được sử dụng trong các nghi lễ, trang trí và quà tặng trong các dịp lễ hội.`,
        },
      ],
    },
    {
      id: 8,
      image: images.bichhoa,
      category: ECategory.PLACE,
      title: 'Vườn Bích Hòa',
      description:
        'Vườn Bích Hòa là một khu vườn sinh thái nổi bật ở Hội An, nơi du khách có thể tận hưởng không khí trong lành và khám phá hệ sinh thái phong phú của miền Trung. Đây là địa điểm lý tưởng cho những ai yêu thích thiên nhiên và sự thư giãn.',
      body: [
        {
          title: 'Không gian xanh mát',
          content:
            'Vườn Bích Hòa được bao phủ bởi những cây cối xanh tươi và nhiều loài hoa đa dạng, tạo nên không gian thư giãn lý tưởng cho du khách. Khu vườn có những lối đi nhỏ, giúp bạn khám phá vẻ đẹp của thiên nhiên một cách dễ dàng.',
        },
        {
          title: 'Hoạt động khám phá',
          content: `Du khách có thể tham gia các hoạt động như đi bộ khám phá vườn, thưởng thức các món ăn nhẹ từ nguyên liệu tươi ngon, và tham gia các buổi học nấu ăn với các đầu bếp địa phương. Đây cũng là nơi lý tưởng để chụp ảnh và tận hưởng những khoảnh khắc bình yên.`,
        },
        {
          title: 'Giá trị sinh thái',
          content: `Vườn Bích Hòa không chỉ là một điểm đến hấp dẫn mà còn đóng vai trò quan trọng trong việc bảo tồn đa dạng sinh học. Nơi đây là môi trường sống cho nhiều loài thực vật và động vật quý hiếm, góp phần vào việc bảo vệ hệ sinh thái miền Trung.`,
        },
        {
          title: 'Trải nghiệm văn hóa',
          content: `Ngoài việc thưởng thức vẻ đẹp của thiên nhiên, du khách còn có thể tìm hiểu về các phong tục tập quán và văn hóa địa phương thông qua các hoạt động giao lưu với người dân bản địa, tạo ra những trải nghiệm đáng nhớ và phong phú.`,
        },
      ],
    },
  ],
}
const hotelData = {
  id: ECategory.HOTEL,
  title: 'Khách sạn Homestay',
  image: images.hotel,
  list: [
    {
      id: 9,
      image: images.ancienthousevillage,
      category: ECategory.HOTEL,
      title: 'Ancient House Village Resort & Spa',
      description:
        'Ancient House Village Resort & Spa mang đậm phong cách kiến trúc truyền thống với không gian xanh mát và yên bình, là nơi lý tưởng để nghỉ dưỡng và khám phá vẻ đẹp Hội An.',
      body: [
        {
          title: 'Thiết kế truyền thống',
          content:
            'Khu resort được xây dựng theo phong cách làng quê truyền thống với nhà gỗ và mái lá, bao quanh bởi vườn cây xanh mát. Các phòng nghỉ có thiết kế mở, mang lại cảm giác gần gũi với thiên nhiên.',
        },
        {
          title: 'Tiện ích và trải nghiệm',
          content: `Ancient House Village cung cấp các dịch vụ cao cấp như spa, hồ bơi ngoài trời, và nhà hàng phục vụ các món ăn truyền thống của Việt Nam. Du khách có thể tham gia các lớp học nấu ăn hoặc các buổi hướng dẫn làm đèn lồng Hội An.`,
        },
        {
          title: 'Vị trí thuận lợi',
          content: `Resort nằm trong khu vực yên tĩnh, chỉ cách phố cổ Hội An một quãng ngắn, dễ dàng cho du khách tham quan các điểm du lịch nổi tiếng của thành phố.`,
        },
        {
          title: 'Dịch vụ tận tình',
          content: `Đội ngũ nhân viên tại Ancient House Village luôn sẵn sàng hỗ trợ và phục vụ du khách với sự tận tâm, tạo ra những trải nghiệm nghỉ dưỡng khó quên.`,
        },
      ],
    },
    {
      id: 10,
      image: images.hoiancharm,
      category: ECategory.HOTEL,
      title: 'Hội An Charm Homestay',
      description:
        'Hội An Charm Homestay là nơi lý tưởng để khám phá sự ấm áp và thân thiện của người dân địa phương. Với vị trí thuận lợi gần phố cổ, homestay mang đến không gian thoải mái và gần gũi như ở nhà.',
      body: [
        {
          title: 'Không gian ấm cúng',
          content:
            'Homestay được thiết kế theo phong cách đơn giản nhưng ấm cúng, mang lại cảm giác gần gũi cho du khách. Các phòng nghỉ được trang bị đầy đủ tiện nghi với phong cách trang trí nhẹ nhàng, tinh tế.',
        },
        {
          title: 'Hoạt động văn hóa',
          content: `Du khách có thể dễ dàng đi bộ tham quan phố cổ Hội An hoặc tham gia các hoạt động văn hóa như làm đèn lồng, nấu ăn, và tham quan làng nghề truyền thống.`,
        },
        {
          title: 'Thân thiện và gần gũi',
          content: `Người dân địa phương rất thân thiện và sẵn sàng chia sẻ những câu chuyện về văn hóa và phong tục tập quán, tạo ra bầu không khí gần gũi và thân thuộc.`,
        },
        {
          title: 'Dịch vụ hỗ trợ',
          content: `Hội An Charm Homestay cung cấp dịch vụ hỗ trợ đặt tour và các hoạt động tham quan, giúp du khách dễ dàng khám phá vẻ đẹp của Hội An.`,
        },
        
      ],
    },
    {
      id: 11,
      image: images.allegrohoian,
      category: ECategory.HOTEL,
      title: 'Allegro Hội An - A Little Luxury Hotel & Spa',
      description:
        'Allegro Hội An mang đến sự sang trọng và tinh tế ngay giữa lòng phố cổ, với dịch vụ chuẩn 5 sao và không gian nghỉ dưỡng hiện đại nhưng vẫn giữ được nét đẹp truyền thống của Hội An.',
      body: [
        {
          title: 'Thiết kế sang trọng',
          content:
            'Khách sạn Allegro Hội An được thiết kế theo phong cách hiện đại nhưng vẫn tôn vinh nét đẹp văn hóa của phố cổ, với nội thất gỗ và những chi tiết trang trí tinh xảo. Các phòng nghỉ rộng rãi, với ban công nhìn ra phố hoặc vườn.',
        },
        {
          title: 'Tiện ích cao cấp',
          content: `Allegro cung cấp nhiều dịch vụ tiện nghi như hồ bơi, spa, và nhà hàng ẩm thực cao cấp. Du khách có thể thư giãn với các liệu pháp spa truyền thống hoặc tận hưởng ẩm thực đa dạng với các món ăn địa phương và quốc tế.`,
        },
        {
          title: 'Vị trí đắc địa',
          content: `Khách sạn nằm ngay trung tâm phố cổ, thuận tiện cho việc tham quan và khám phá các địa điểm lịch sử và văn hóa nổi tiếng của Hội An.`,
        },
        {
          title: 'Trải nghiệm độc đáo',
          content: `Allegro Hội An thường tổ chức các sự kiện văn hóa và nghệ thuật, mang đến cho du khách những trải nghiệm phong phú và đáng nhớ trong suốt kỳ nghỉ.`,
        },
        
      ],
    },
    {
      id: 12,
      image: images.terracottaresort,
      category: ECategory.HOTEL,
      title: 'Terracotta Resort & Spa Hội An',
      description:
        'Terracotta Resort & Spa nằm trong khu vực yên tĩnh của Hội An, mang đến cho du khách một kỳ nghỉ thanh bình và thư giãn với không gian xanh mát, dịch vụ tận tình và các tiện nghi hiện đại.',
      body: [
        {
          title: 'Không gian xanh',
          content:
            'Terracotta Resort được bao quanh bởi vườn cây và hoa lá, tạo nên không gian nghỉ dưỡng hòa hợp với thiên nhiên. Các phòng nghỉ được thiết kế theo phong cách hiện đại nhưng vẫn giữ được sự thoải mái và gần gũi.',
        },
        {
          title: 'Dịch vụ chăm sóc sức khỏe',
          content: `Resort cung cấp dịch vụ spa cao cấp với các liệu pháp massage thư giãn, cùng hồ bơi ngoài trời và phòng tập gym. Ngoài ra, nhà hàng của resort phục vụ các món ăn đặc trưng của Hội An với nguyên liệu tươi ngon.`,
        },
        {
          title: 'Hoạt động giải trí',
          content: `Terracotta Resort cung cấp nhiều hoạt động giải trí cho du khách như đi bộ trong khu vườn, tham gia lớp học yoga, hoặc tổ chức các buổi tiệc BBQ ngoài trời.`,
        },
        {
          title: 'Sự bình yên',
          content: `Với không khí yên tĩnh và phong cảnh thiên nhiên tuyệt đẹp, Terracotta Resort là nơi lý tưởng để thư giãn và tái tạo năng lượng trong những ngày nghỉ dưỡng.`,
        },
        
      ],
    },
    {
      id: 13,
      image: images.malialuxury,
      category: ECategory.HOTEL,
      title: 'Malia Boutique Luxury Villa Hội An',
      description:
        'Malia Boutique Luxury Villa mang đến không gian nghỉ dưỡng riêng tư, sang trọng và tinh tế với các biệt thự hướng ra vườn hoặc hồ bơi. Đây là nơi lý tưởng để tận hưởng kỳ nghỉ thư giãn giữa lòng phố cổ.',
      body: [
        {
          title: 'Biệt thự sang trọng',
          content:
            'Các biệt thự tại Malia được thiết kế theo phong cách hiện đại, với nội thất tinh tế và không gian mở, hướng ra hồ bơi hoặc khu vườn xanh mát. Mỗi biệt thự đều được trang bị đầy đủ tiện nghi, mang lại sự thoải mái tuyệt đối cho du khách.',
        },
        {
          title: 'Dịch vụ và tiện ích',
          content: `Malia cung cấp các dịch vụ cao cấp như hồ bơi riêng, spa, và nhà hàng với các món ăn đa dạng. Du khách cũng có thể thư giãn tại khu vườn nhiệt đới hoặc tham gia các lớp học yoga và thiền.`,
        },
        {
          title: 'Không gian riêng tư',
          content: `Với thiết kế biệt lập và không gian yên tĩnh, Malia Boutique Luxury Villa là nơi lý tưởng cho những ai muốn tận hưởng kỳ nghỉ riêng tư và lãng mạn.`,
        },
        {
          title: 'Trải nghiệm ẩm thực',
          content: `Nhà hàng của Malia phục vụ các món ăn địa phương và quốc tế, mang đến cho du khách những trải nghiệm ẩm thực đa dạng và phong phú trong suốt kỳ nghỉ.`,
        },
        
      ],
    },
    {
      id: 14,
      image: images.littleriverside,
      category: ECategory.HOTEL,
      title: 'Little Riverside Hội An',
      description:
        'Little Riverside là một khách sạn ven sông sang trọng, nơi du khách có thể tận hưởng sự yên bình và tầm nhìn tuyệt đẹp ra dòng sông Thu Bồn. Khách sạn mang đến không gian thư giãn với phong cách thiết kế Đông Dương đậm chất nghệ thuật.',
      body: [
        {
          title: 'Thiết kế và không gian',
          content:
            'Little Riverside được thiết kế với cảm hứng từ kiến trúc Đông Dương, mang lại sự sang trọng và tinh tế. Các phòng nghỉ có ban công rộng rãi, với tầm nhìn ra dòng sông hoặc khu vườn xanh mát, giúp du khách tận hưởng cảm giác thư thái và gần gũi với thiên nhiên.',
        },
        {
          title: 'Tiện ích và dịch vụ',
          content: `Khách sạn cung cấp nhiều tiện ích như hồ bơi ngoài trời, spa, và nhà hàng bên sông với thực đơn phong phú từ ẩm thực địa phương đến quốc tế. Du khách còn có thể tham gia các tour du thuyền trên sông Thu Bồn để ngắm hoàng hôn tuyệt đẹp.`,
        },
        {
          title: 'Vị trí bên sông',
          content: `Little Riverside nằm ven dòng sông Thu Bồn, tạo điều kiện thuận lợi cho việc tham quan và thưởng thức vẻ đẹp tự nhiên của Hội An từ những góc nhìn khác nhau.`,
        },
        {
          title: 'Sự yên bình',
          content: `Khách sạn mang lại không gian thư giãn yên bình, lý tưởng cho những ai muốn tránh xa sự ồn ào và nhộn nhịp của phố cổ Hội An.`,
        },
        
      ],
    },
    {
      id: 15,
      image: images.vinhhungemerald,
      category: ECategory.HOTEL,
      title: 'Vĩnh Hưng Emerald Resort',
      description:
        'Vĩnh Hưng Emerald Resort tọa lạc ngay bên bờ sông Thu Bồn, mang đến không gian nghỉ dưỡng lý tưởng cho những ai yêu thích thiên nhiên và sự thanh bình. Resort được thiết kế với phong cách gần gũi với thiên nhiên nhưng vẫn đầy đủ tiện nghi hiện đại.',
      body: [
        {
          title: 'Không gian thiên nhiên',
          content:
            'Resort nằm trong khu vực xanh mát, với những khu vườn nhiệt đới xung quanh và tầm nhìn ra dòng sông Thu Bồn thơ mộng. Các phòng nghỉ được trang trí hài hòa giữa phong cách hiện đại và truyền thống, giúp du khách có những phút giây thư giãn tuyệt vời.',
        },
        {
          title: 'Trải nghiệm và dịch vụ',
          content: `Tại Vĩnh Hưng Emerald Resort, du khách có thể tham gia các hoạt động như chèo thuyền kayak, đạp xe khám phá vùng quê Hội An, hoặc thư giãn tại hồ bơi ngoài trời. Nhà hàng của resort cũng phục vụ những món ăn đặc sản địa phương với nguyên liệu tươi ngon.`,
        },
        {
          title: 'Khám phá văn hóa',
          content: `Vĩnh Hưng Emerald Resort thường tổ chức các hoạt động văn hóa, giúp du khách tìm hiểu thêm về phong tục tập quán và lịch sử của vùng đất Hội An.`,
        },
        {
          title: 'Dịch vụ chuyên nghiệp',
          content: `Đội ngũ nhân viên tại resort luôn sẵn sàng phục vụ và hỗ trợ du khách với sự chu đáo và nhiệt tình, đảm bảo kỳ nghỉ của bạn trở nên trọn vẹn và thoải mái nhất.`,
        },
        
      ],
    },
  ],
}
const cafeData = {
  id: ECategory.CAFE,
  title: 'Quán cà phê',
  image: images.cafe,
  list: [
    {
      id: 16,
      image: images.cafe1,
      category: ECategory.CAFE,
      title: 'Faifo Café',
      description:
        'Faifo Café là một trong những quán cà phê nổi tiếng nhất tại Hội An, không chỉ bởi thức uống ngon mà còn nhờ view tầng thượng tuyệt đẹp với tầm nhìn bao quát toàn cảnh phố cổ. Nằm trong lòng Hội An, Faifo Café thu hút du khách nhờ không gian cổ kính và tinh tế, hòa quyện với nét đẹp văn hóa truyền thống của phố Hội.',
      body: [
        {
          title: 'Lịch sử và vị trí',
          content:
            'Faifo Café nằm ở trung tâm khu phố cổ Hội An, một địa điểm lý tưởng cho những ai muốn khám phá vẻ đẹp yên bình của thành phố này. Tên “Faifo” xuất phát từ tên gọi cũ của Hội An trong thời kỳ giao thương quốc tế. Quán cà phê đã trở thành một điểm đến quen thuộc cho cả du khách trong và ngoài nước, nơi mà họ có thể dừng chân, thưởng thức đồ uống và chiêm ngưỡng khung cảnh tuyệt đẹp của phố cổ.',
        },
        {
          title: 'Không gian quán',
          content:
            'Faifo Café nổi tiếng với không gian ấm cúng và thiết kế mang đậm phong cách cổ điển. Điểm đặc biệt của quán chính là tầng thượng với tầm nhìn toàn cảnh, nơi bạn có thể nhìn thấy những mái ngói đỏ xô nghiêng và những con đường nhỏ hẹp của phố Hội. Buổi sáng sớm hoặc lúc hoàng hôn là những thời điểm tuyệt vời để lên tầng thượng và tận hưởng không khí trong lành, yên bình của Hội An.',
        },
        {
          title: 'Thức uống và ẩm thực',
          content: `Faifo Café phục vụ nhiều loại thức uống như cà phê truyền thống, cà phê pha máy, sinh tố, và trà. Đặc biệt, cà phê Việt Nam tại đây được nhiều khách hàng đánh giá cao nhờ hương vị đậm đà và cách pha chế độc đáo. Ngoài ra, quán còn có các món bánh ngọt và đồ ăn nhẹ, phù hợp cho những buổi hẹn hò hoặc những giờ phút thư giãn bên tách cà phê.`,
        },
        {
          title: 'Điểm đến lý tưởng cho du khách',
          content: `Faifo Café không chỉ là nơi dừng chân để thưởng thức đồ uống, mà còn là địa điểm check-in yêu thích của nhiều du khách. Với không gian đẹp và view ấn tượng, quán là nơi lý tưởng để chụp những bức ảnh kỷ niệm. Đến với Faifo Café, bạn không chỉ thưởng thức cà phê mà còn đắm chìm trong nét đẹp hoài cổ và văn hóa đặc trưng của Hội An.`,
        },
      ],
    },
    {
      id: 17,
      image: images.cafe_the_hinh,
      category: ECategory.CAFE,
      title: 'Cafe Thể Hình',
      description:
        'Cafe Thể Hình không chỉ là quán cà phê mà còn là một không gian nghệ thuật với các tác phẩm của các nghệ sĩ địa phương. Quán mang đậm nét văn hóa Hội An với những chi tiết trang trí truyền thống.',
      body: [
        {
          title: 'Không gian nghệ thuật',
          content:
            'Quán được thiết kế với nhiều góc nghệ thuật, nơi du khách có thể thưởng thức cà phê trong một bầu không khí sáng tạo. Những bức tranh và tác phẩm điêu khắc được trưng bày tạo nên một không gian đậm chất văn hóa.',
        },
        {
          title: 'Thức uống độc đáo',
          content: `Cafe Thể Hình phục vụ các loại thức uống truyền thống và hiện đại, với hương vị thơm ngon, đặc biệt là cà phê trứng - một món đặc sản của Việt Nam. Đây cũng là nơi lý tưởng để thưởng thức những món ăn nhẹ được chế biến từ nguyên liệu địa phương.`,
        },
        {
          title: 'Sự kiện văn hóa',
          content: 'Quán thường xuyên tổ chức các buổi biểu diễn nhạc sống và triển lãm nghệ thuật, mang lại trải nghiệm phong phú cho khách hàng.',
        },
        {
          title: 'Dịch vụ tận tâm',
          content: `Đội ngũ nhân viên tại Cafe Thể Hình luôn sẵn sàng phục vụ và mang đến sự hài lòng tối đa cho từng khách hàng. Họ rất vui lòng giới thiệu về các tác phẩm nghệ thuật cũng như thức uống đặc trưng.`,
        },
      ],
    },
    {
      id: 18,
      image: images.cafe_moc,
      category: ECategory.CAFE,
      title: 'Café Mộc',
      description:
        'Café Mộc là quán cà phê mang đậm hơi thở của thiên nhiên với thiết kế gỗ tự nhiên và cây xanh bao quanh. Quán mang lại cảm giác gần gũi và yên bình, lý tưởng cho những ai yêu thích sự tĩnh lặng.',
      body: [
        {
          title: 'Thiết kế gần gũi',
          content:
            'Quán được xây dựng từ các vật liệu tự nhiên, tạo nên một không gian thoáng đãng và gần gũi với thiên nhiên. Du khách có thể thưởng thức cà phê bên những cây xanh, nghe tiếng chim hót và ngắm nhìn không gian sống động.',
        },
        {
          title: 'Thực đơn đa dạng',
          content: `Café Mộc phục vụ nhiều loại cà phê, trà và đồ uống giải khát, cùng với các món ăn nhẹ và bánh ngọt. Đặc biệt, quán còn có các món ăn mang đậm hương vị miền Trung Việt Nam.`,
        },
        {
          title: 'Không gian thư giãn',
          content: 'Café Mộc tạo ra không gian lý tưởng cho việc đọc sách hoặc làm việc, với những góc ngồi yên tĩnh và thoải mái.',
        },
        {
          title: 'Hỗ trợ cộng đồng',
          content: `Quán cam kết sử dụng nguyên liệu địa phương và hỗ trợ các nhà cung cấp nhỏ, góp phần phát triển kinh tế cộng đồng.`,
        },
      ],
    },
    {
      id: 19,
      image: images.cafe_huyen_thoai,
      category: ECategory.CAFE,
      title: 'Café Huyền Thoại',
      description:
        'Café Huyền Thoại mang đến cho du khách không gian hoài cổ với những kỷ vật lịch sử và tác phẩm nghệ thuật độc đáo. Quán là điểm đến cho những ai yêu thích khám phá văn hóa lịch sử của Hội An.',
      body: [
        {
          title: 'Không gian hoài cổ',
          content:
            'Quán được trang trí bằng những đồ vật cổ điển, từ bàn ghế đến đèn lồng, tạo nên một không gian sống động, gợi nhớ về quá khứ. Du khách có thể thưởng thức đồ uống trong bầu không khí đầy ắp những câu chuyện lịch sử.',
        },
        {
          title: 'Thức uống đặc sắc',
          content: `Café Huyền Thoại phục vụ nhiều loại thức uống mang hương vị đặc trưng của Việt Nam, bao gồm cà phê phin và trà sữa truyền thống. Đặc biệt, quán còn có những món ăn nhẹ được chế biến từ nguyên liệu địa phương, mang lại hương vị đặc sắc.`,
        },
        {
          title: 'Triển lãm nghệ thuật',
          content: 'Quán thường xuyên tổ chức các triển lãm nghệ thuật, giới thiệu những tác phẩm của các nghệ sĩ địa phương, giúp khách hàng có thêm trải nghiệm văn hóa.',
        },
        {
          title: 'Dịch vụ khách hàng tận tình',
          content: `Đội ngũ nhân viên luôn thân thiện và sẵn sàng tư vấn cho khách hàng về các món uống đặc trưng của quán.`,
        },
      ],
    },
    {
      id: 20,
      image: images.cafe_van_hoa,
      category: ECategory.CAFE,
      title: 'Cafe Văn Hóa',
      description:
        'Cafe Văn Hóa là nơi giao lưu văn hóa nghệ thuật, nơi tổ chức các buổi biểu diễn âm nhạc, triển lãm tranh và các sự kiện văn hóa đặc sắc. Quán mang đến không gian sống động và đầy cảm hứng.',
      body: [
        {
          title: 'Giao lưu văn hóa',
          content:
            'Cafe Văn Hóa thường xuyên tổ chức các hoạt động giao lưu văn hóa, tạo cơ hội cho du khách trải nghiệm âm nhạc truyền thống và các loại hình nghệ thuật khác của Việt Nam.',
        },
        {
          title: 'Thực đơn phong phú',
          content: `Quán phục vụ nhiều loại thức uống từ cà phê, trà, đến sinh tố, kết hợp với các món ăn nhẹ và bánh ngọt. Đặc biệt, các món ăn được chế biến từ nguyên liệu địa phương, mang lại hương vị độc đáo.`,
        },
        {
          title: 'Buổi biểu diễn nghệ thuật',
          content: 'Quán thường tổ chức các buổi biểu diễn nhạc sống và các hoạt động văn hóa, tạo không khí vui tươi cho khách hàng.',
        },
        {
          title: 'Chương trình khuyến mãi',
          content: `Café Văn Hóa có các chương trình khuyến mãi hấp dẫn cho khách hàng tham gia vào các sự kiện, mang lại nhiều ưu đãi cho thực đơn.`,
        },
      ],
    },
    {
      id: 21,
      image: images.cafe_tu_tam,
      category: ECategory.CAFE,
      title: 'Café Từ Tâm',
      description:
        'Café Từ Tâm là một quán cà phê đặc biệt, với mục tiêu tạo ra một không gian thân thiện và hỗ trợ cho các nghệ sĩ địa phương. Quán mang đến trải nghiệm thư giãn và đồng thời góp phần phát triển cộng đồng.',
      body: [
        {
          title: 'Không gian thân thiện',
          content:
            'Quán có thiết kế đơn giản nhưng ấm cúng, tạo cảm giác thoải mái cho du khách. Những bức tranh và sản phẩm thủ công của nghệ sĩ địa phương được trưng bày tại quán.',
        },
        {
          title: 'Thức uống ý nghĩa',
          content: `Café Từ Tâm phục vụ các loại thức uống và món ăn nhẹ với giá cả phải chăng. Mỗi món ăn đều mang một thông điệp tích cực, góp phần vào việc hỗ trợ cho các hoạt động văn hóa và nghệ thuật tại địa phương.`,
        },
        {
          title: 'Hỗ trợ nghệ sĩ địa phương',
          content: `Quán thường xuyên tổ chức các sự kiện và buổi triển lãm nghệ thuật, tạo cơ hội cho các nghệ sĩ địa phương giới thiệu tác phẩm của họ, giúp phát triển cộng đồng nghệ thuật.`,
        },
        {
          title: 'Sự kiện giao lưu',
          content: `Café Từ Tâm tổ chức các buổi giao lưu và hội thảo, nơi du khách có thể tham gia và học hỏi về nghệ thuật, góp phần tạo ra một cộng đồng kết nối và sáng tạo.`,
        },
      ],
    },
    {
      id: 22,
      image: images.cafe_thien,
      category: ECategory.CAFE,
      title: 'Café Thiền',
      description:
        'Café Thiền là một nơi lý tưởng cho những ai muốn tìm kiếm sự bình yên và tĩnh lặng trong không gian thiền. Quán mang đến không khí yên bình, thích hợp cho việc thư giãn và tập trung.',
      body: [
        {
          title: 'Không gian thiền tĩnh lặng',
          content:
            'Quán được thiết kế với nhiều khu vực ngồi khác nhau, tạo ra không gian yên tĩnh và thoải mái cho du khách. Du khách có thể thưởng thức cà phê trong không khí bình yên, thư giãn và tìm lại sự cân bằng.',
        },
        {
          title: 'Thức uống và trải nghiệm',
          content: `Café Thiền phục vụ các loại thức uống tự nhiên, từ cà phê hữu cơ đến trà thảo dược, giúp du khách thư giãn và tái tạo năng lượng. Đây là nơi lý tưởng để đọc sách, thiền định hoặc đơn giản chỉ là ngồi ngắm nhìn thiên nhiên.`,
        },
        {
          title: 'Hoạt động thiền định',
          content: `Quán thường tổ chức các buổi thiền và yoga, tạo điều kiện cho du khách tìm kiếm sự bình yên và kết nối với bản thân. Đây là một trải nghiệm tinh thần đáng nhớ.`,
        },
        {
          title: 'Không gian thư giãn',
          content: `Café Thiền có các khu vực ngoài trời, nơi du khách có thể ngắm nhìn thiên nhiên và thư giãn trong không khí trong lành. Đây là nơi lý tưởng để trốn khỏi nhịp sống hối hả.`,
        },
      ],
    },
  ],
}
const beachData = {
  id: ECategory.BEACH,
  title: 'Bãi biển',
  image: images.beach,
  list: [
    {
      id: 23,
      image: images.bien_cua_dai,
      category: ECategory.BEACH,
      title: 'Bãi Biển Cửa Đại',
      description:
        'Bãi biển Cửa Đại là một trong những bãi biển đẹp nhất Hội An, nổi tiếng với cát trắng mịn và làn nước trong xanh. Đây là nơi lý tưởng để thư giãn, tắm biển và tham gia các hoạt động thể thao dưới nước.',
      body: [
        {
          title: 'Đặc điểm tự nhiên',
          content:
            'Bãi biển Cửa Đại có chiều dài khoảng 7 km, với bãi cát trắng trải dài và nước biển trong xanh. Đặc biệt, nơi đây có cảnh quan thiên nhiên tuyệt đẹp, với những rặng dừa xanh rì bên bờ biển.',
        },
        {
          title: 'Hoạt động vui chơi',
          content: `Tại bãi biển Cửa Đại, du khách có thể tham gia nhiều hoạt động thú vị như tắm biển, lặn ngắm san hô, chèo thuyền kayak và thưởng thức hải sản tươi ngon tại các quán ven biển.`,
        },
        {
          title: 'Dịch vụ tiện ích',
          content: `Bãi biển Cửa Đại có nhiều dịch vụ tiện ích như ghế nằm, dù che nắng và các hoạt động thể thao nước được tổ chức thường xuyên, giúp du khách có trải nghiệm thoải mái và thú vị.`,
        },
        {
          title: 'Khung cảnh hoàng hôn',
          content: `Khung cảnh hoàng hôn tại bãi biển Cửa Đại rất đẹp và lãng mạn. Du khách có thể ngắm nhìn ánh hoàng hôn phản chiếu trên mặt nước, tạo nên những bức tranh thiên nhiên tuyệt mỹ.`,
        },
      ],
    },
    {
      id: 24,
      image: images.bien_an_bang,
      category: ECategory.BEACH,
      title: 'Bãi Biển An Bàng',
      description:
        'Bãi biển An Bàng là một bãi biển tuyệt đẹp nằm gần Hội An, nổi tiếng với không gian yên tĩnh và phong cảnh thiên nhiên hoang sơ. Đây là điểm đến lý tưởng cho những ai muốn tránh xa sự ồn ào của phố phường.',
      body: [
        {
          title: 'Không khí trong lành',
          content:
            'Bãi biển An Bàng có bãi cát trắng mịn, làn nước trong xanh và không khí trong lành, giúp du khách thư giãn và tái tạo năng lượng. Nơi đây cũng có nhiều nhà hàng và quán cà phê ven biển phục vụ đồ ăn và thức uống.',
        },
        {
          title: 'Hoạt động thể thao',
          content: `Du khách đến An Bàng có thể tham gia các hoạt động như lướt ván diều, đi bộ dọc bãi biển, hoặc đơn giản là nằm tắm nắng và ngắm biển. Bãi biển cũng thích hợp cho các buổi picnic cùng bạn bè và gia đình.`,
        },
        {
          title: 'Khám phá ẩm thực',
          content: `Tại bãi biển An Bàng, du khách có thể thưởng thức nhiều món ăn hải sản tươi ngon, cùng với các món ăn địa phương độc đáo tại các nhà hàng ven biển.`,
        },
        {
          title: 'Bầu không khí yên tĩnh',
          content: `Khác với những bãi biển đông đúc khác, An Bàng mang đến cho du khách một bầu không khí yên tĩnh và thư giãn, là nơi lý tưởng để ngồi lại, đọc sách hoặc tận hưởng thiên nhiên.`,
        },
      ],
    },
    {
      id: 25,
      image: images.bien_hai_van,
      category: ECategory.BEACH,
      title: 'Bãi Biển Hải Vân',
      description:
        'Bãi biển Hải Vân nằm ở phía Bắc Hội An, nổi tiếng với cảnh quan hùng vĩ và không khí trong lành. Đây là điểm dừng chân lý tưởng cho những ai yêu thích thiên nhiên và muốn khám phá vẻ đẹp hoang sơ.',
      body: [
        {
          title: 'Thiên nhiên tuyệt đẹp',
          content:
            'Bãi biển Hải Vân có những dãy núi xanh bao quanh và bãi cát vàng trải dài. Đến đây, du khách có thể ngắm nhìn cảnh đẹp núi non và biển cả, tạo nên bức tranh thiên nhiên tuyệt mỹ.',
        },
        {
          title: 'Khám phá văn hóa địa phương',
          content: `Bãi biển Hải Vân không chỉ đẹp mà còn có nhiều di tích lịch sử và văn hóa xung quanh. Du khách có thể ghé thăm các ngôi chùa, di tích và thưởng thức các món ăn đặc sản của vùng biển.`,
        },
        {
          title: 'Hoạt động khám phá',
          content: `Du khách có thể tham gia các tour khám phá quanh khu vực bãi biển Hải Vân, bao gồm trekking, đạp xe và thăm các làng chài gần đó để hiểu rõ hơn về cuộc sống của người dân địa phương.`,
        },
        {
          title: 'Địa điểm lý tưởng cho nhiếp ảnh',
          content: `Bãi biển Hải Vân với cảnh đẹp thiên nhiên hùng vĩ là địa điểm lý tưởng cho những ai đam mê nhiếp ảnh. Hãy mang theo máy ảnh để ghi lại những khoảnh khắc tuyệt đẹp nơi đây.`,
        },
      ],
    },
    {
      id: 26,
      image: images.bien_mong_coc,
      category: ECategory.BEACH,
      title: 'Bãi Biển Hà My',
      description:
        'Bãi biển Hà My là một bãi biển mới nổi gần Hội An, nổi bật với vẻ đẹp hoang sơ và ít người biết đến. Đây là nơi lý tưởng cho những ai muốn tìm kiếm sự yên bình và tĩnh lặng.',
      body: [
        {
          title: 'Không gian hoang sơ',
          content:
            'Bãi biển Hà My có bãi cát trắng và làn nước trong vắt. Với không gian ít người, nơi đây mang lại cảm giác gần gũi với thiên nhiên, giúp du khách thư giãn và tận hưởng những giây phút bình yên.',
        },
        {
          title: 'Trải nghiệm độc đáo',
          content: `Tại bãi biển Hà My, du khách có thể tham gia các hoạt động như câu cá, lặn biển và thưởng thức các món ăn hải sản tươi ngon từ những ngư dân địa phương. Đây cũng là nơi lý tưởng để tổ chức các buổi cắm trại bên bờ biển.`,
        },
        {
          title: 'Khung cảnh yên bình',
          content: `Khung cảnh tại bãi biển Hà My rất yên bình, với tiếng sóng vỗ và gió biển nhẹ nhàng. Đây là nơi lý tưởng để thư giãn và tìm kiếm sự tĩnh lặng trong tâm hồn.`,
        },
        {
          title: 'Giao lưu văn hóa',
          content: `Du khách có thể tìm hiểu về đời sống văn hóa của ngư dân địa phương, tham gia vào các hoạt động thường ngày của họ và thưởng thức các món ăn truyền thống được chế biến từ hải sản tươi sống.`,
        },
      ],
    },
  ],
}
const craftData = {
  id: ECategory.CRAFT,
  title: 'Làng nghề truyền thống ',
  image: images.craft,
  list: [
    {
      id: 26,
      image: images.langnghehoian1,
      category: ECategory.CRAFT,
      title: 'Làng nghề truyền thống ở Hội An',
      description:
        'Hội An không chỉ nổi tiếng với phố cổ mà còn được biết đến với các làng nghề truyền thống lâu đời. Những làng nghề này là minh chứng cho sự phát triển của văn hóa, nghệ thuật và thủ công mỹ nghệ của địa phương. Đến với Hội An, du khách không chỉ được chiêm ngưỡng kiến trúc cổ kính mà còn có cơ hội tìm hiểu về những giá trị văn hóa truyền thống thông qua các làng nghề.',
      body: [
        {
          title: 'Làng gốm Thanh Hà',
          content:
            'Làng gốm Thanh Hà có lịch sử hơn 500 năm, nổi tiếng với các sản phẩm gốm được làm thủ công. Từ những vật dụng hàng ngày như bát đĩa, lọ hoa, đến các tác phẩm nghệ thuật gốm tinh xảo, tất cả đều được tạo ra bởi đôi bàn tay khéo léo của những nghệ nhân làng gốm. Đến đây, du khách có thể tham quan các công đoạn sản xuất và tự tay làm thử các sản phẩm gốm dưới sự hướng dẫn của nghệ nhân.',
        },
        {
          title: 'Làng mộc Kim Bồng',
          content:
            'Làng mộc Kim Bồng nổi tiếng với nghề làm mộc, từ chế tác các công trình kiến trúc, nhà cổ cho đến các sản phẩm nội thất tinh xảo. Nghệ nhân Kim Bồng đã từng đóng góp nhiều vào việc xây dựng và tu sửa các công trình ở Hội An và Hội An. Đến với làng mộc Kim Bồng, du khách sẽ được chiêm ngưỡng các tác phẩm gỗ tuyệt đẹp và tìm hiểu thêm về quá trình chế tác công phu của các nghệ nhân.',
        },
        {
          title: 'Làng chiếu Bàn Thạch',
          content:
            'Làng chiếu Bàn Thạch có tuổi đời hàng trăm năm, nổi tiếng với các sản phẩm chiếu thủ công. Các sản phẩm chiếu từ làng Bàn Thạch không chỉ bền đẹp mà còn mang đậm nét truyền thống. Tại đây, du khách có thể chứng kiến quy trình đan chiếu tỉ mỉ và tìm hiểu về các loại chiếu khác nhau từ chiếu hoa, chiếu đơn giản đến các loại chiếu dệt theo yêu cầu.',
        },
        {
          title: 'Làng rau Trà Quế',
          content:
            'Làng rau Trà Quế nổi tiếng với các loại rau thơm tươi ngon, được canh tác hoàn toàn tự nhiên. Đây là nơi cung cấp rau cho các nhà hàng nổi tiếng ở Hội An và vùng lân cận. Khi đến Trà Quế, du khách không chỉ tham quan đồng rau xanh mát mà còn có cơ hội trải nghiệm công việc làm nông cùng người dân địa phương, học cách chăm sóc và trồng rau truyền thống.',
        },
        {
          title: 'Ý nghĩa văn hóa của các làng nghề',
          content:
            'Các làng nghề truyền thống tại Hội An không chỉ là nơi sản xuất hàng hóa, mà còn là không gian lưu giữ những giá trị văn hóa, nghệ thuật đặc sắc của vùng đất này. Qua nhiều thế kỷ, các làng nghề vẫn duy trì và phát triển, góp phần quan trọng trong việc bảo tồn và phát huy văn hóa địa phương. Đối với du khách, việc ghé thăm các làng nghề không chỉ mang lại kiến thức thú vị mà còn là cơ hội để hiểu rõ hơn về lịch sử và con người Hội An.',
        },
      ],
    },
    {
      id: 27,
      image: images.vuongiayviet,
      category: ECategory.CRAFT,
      title: 'Vườn Giấy Việt - Tinh hoa lắng đọng bến dừa',
      description:
        'Vườn Giấy Việt tại Hội An là một không gian nghệ thuật sáng tạo từ giấy dó, với các sản phẩm thủ công mang đậm dấu ấn văn hóa Việt Nam. Du khách đến đây có thể tham quan và trải nghiệm quy trình làm giấy truyền thống.',
      body: [
        {
          title: 'Quy trình sản xuất giấy',
          content:
            'Giấy dó được làm từ vỏ cây dó, qua các công đoạn phức tạp từ ngâm, phơi, đánh tơi và cán mỏng. Nghệ nhân tại Vườn Giấy Việt không chỉ giữ gìn kỹ thuật này mà còn sáng tạo ra nhiều sản phẩm như tranh, thiệp, và các vật dụng trang trí từ giấy.',
        },
        {
          title: 'Ý nghĩa văn hóa',
          content: `Giấy dó đã từng là vật liệu viết lách và in ấn của người Việt xưa, đặc biệt trong các tài liệu lịch sử, sắc phong, và tranh Đông Hồ. Vườn Giấy Việt góp phần bảo tồn và phát triển nghệ thuật này, mang lại cho du khách cái nhìn sâu sắc về một nghề thủ công tinh tế.`,
        },
        {
          title: 'Sản phẩm thủ công',
          content: `Tại Vườn Giấy Việt, du khách có thể tìm thấy nhiều sản phẩm thủ công đẹp mắt như thiệp chúc mừng, tranh treo tường, và các vật dụng trang trí khác được làm từ giấy dó.`,
        },
        {
          title: 'Trải nghiệm thực tế',
          content: `Du khách có thể tham gia vào quy trình làm giấy, từ việc ngâm vỏ cây đến việc tạo ra sản phẩm hoàn chỉnh, giúp họ hiểu rõ hơn về nghề thủ công truyền thống này.`,
        },
      ],
    },
    {
      id: 28,
      image: images.tabobamboo,
      category: ECategory.CRAFT,
      title: 'Taboo Bamboo - Câu chuyện mộc mạc tre xanh',
      description:
        'Taboo Bamboo là một xưởng thủ công chuyên sản xuất các sản phẩm từ tre tại Hội An, nơi nghệ thuật thủ công kết hợp với sự bền vững trong lối sống và văn hóa.',
      body: [
        {
          title: 'Nghệ thuật làm đồ tre',
          content:
            'Tại Taboo Bamboo, tre được sử dụng để tạo ra nhiều sản phẩm độc đáo như xe đạp, đồ trang trí và đồ dùng hàng ngày. Nghệ nhân ở đây tin rằng tre không chỉ là nguyên liệu dễ tiếp cận mà còn mang lại sự bền vững cho môi trường và cuộc sống.',
        },
        {
          title: 'Tinh thần bảo vệ môi trường',
          content: `Sản phẩm từ tre của Taboo Bamboo không chỉ đẹp mắt mà còn mang thông điệp bảo vệ môi trường. Xưởng tre này khuyến khích lối sống gần gũi với thiên nhiên và sự tận dụng tài nguyên một cách hiệu quả.`,
        },
        {
          title: 'Sản phẩm đa dạng',
          content: `Taboo Bamboo sản xuất một loạt các sản phẩm từ tre, bao gồm đồ trang trí, đồ dùng sinh hoạt, và quà tặng, tất cả đều mang phong cách sáng tạo và bền vững.`,
        },
        {
          title: 'Trải nghiệm tại xưởng',
          content: `Du khách có thể tham gia các buổi workshop tại Taboo Bamboo để tự tay làm các sản phẩm từ tre và hiểu thêm về quy trình sản xuất độc đáo này.`,
        },
      ],
    },
    {
      id: 29,
      image: images.timingmask,
      category: ECategory.CRAFT,
      title: 'Timing Mask - Phảng phất ký ức qua những mảng màu',
      description:
        'Timing Mask là một xưởng thủ công nhỏ tại Hội An, chuyên sản xuất các mặt nạ nghệ thuật được trang trí bằng màu sắc và hoa văn đặc trưng, mang trong mình những ký ức văn hóa và câu chuyện lịch sử.',
      body: [
        {
          title: 'Nghệ thuật làm mặt nạ',
          content:
            'Mỗi chiếc mặt nạ tại Timing Mask đều được chế tác thủ công từ gỗ và giấy, sau đó được vẽ tay bởi các nghệ nhân. Các mẫu mặt nạ thường phản ánh văn hóa dân gian, thần thoại và những câu chuyện lịch sử của Việt Nam.',
        },
        {
          title: 'Ý nghĩa văn hóa',
          content: `Mặt nạ không chỉ là một sản phẩm nghệ thuật mà còn là biểu tượng của văn hóa và tâm linh. Timing Mask lưu giữ và phát triển truyền thống này, giúp khách du lịch hiểu hơn về nghệ thuật Việt Nam qua từng mảng màu và hoa văn tinh xảo.`,
        },
        {
          title: 'Sản phẩm độc đáo',
          content: `Mặt nạ tại Timing Mask được thiết kế đa dạng với nhiều hình dáng và màu sắc, mỗi chiếc mặt nạ đều mang một câu chuyện riêng, thể hiện sự sáng tạo và tâm huyết của nghệ nhân.`,
        },
        {
          title: 'Trải nghiệm vẽ mặt nạ',
          content: `Du khách có thể tham gia vào hoạt động vẽ mặt nạ, từ việc chọn màu sắc cho đến trang trí, tạo ra sản phẩm mang đậm dấu ấn cá nhân và kỷ niệm đáng nhớ.`,
        },
      ],
    },
    {
      id: 30,
      image: images.langnghetranh,
      category: ECategory.CRAFT,
      title: 'Làng tranh Kim Bồng',
      description:
        'Làng tranh Kim Bồng nổi tiếng với những bức tranh được vẽ tay, phản ánh cuộc sống và phong cảnh của miền quê Việt Nam. Các nghệ nhân ở đây sử dụng màu sắc tự nhiên và kỹ thuật truyền thống để tạo ra những tác phẩm nghệ thuật độc đáo.',
      body: [
        {
          title: 'Quy trình vẽ tranh',
          content:
            'Tại làng tranh Kim Bồng, mỗi bức tranh đều được tạo ra từ sự tỉ mỉ và tâm huyết của người nghệ nhân. Họ sử dụng những loại màu sắc tự nhiên và kỹ thuật vẽ truyền thống để mang lại sự sống động cho các tác phẩm của mình. Du khách có thể tham gia vào quy trình vẽ tranh và tạo ra sản phẩm riêng.',
        },
        {
          title: 'Ý nghĩa văn hóa',
          content: `Các bức tranh từ Kim Bồng không chỉ là sản phẩm nghệ thuật mà còn là sự phản ánh văn hóa và phong tục tập quán của người dân địa phương. Đây là nơi lưu giữ những câu chuyện và hình ảnh đẹp về cuộc sống miền quê Việt Nam.`,
        },
        {
          title: 'Chủ đề tranh phong phú',
          content: `Tranh Kim Bồng thường mang nhiều chủ đề khác nhau, từ phong cảnh thiên nhiên, sinh hoạt đời thường đến các truyền thuyết dân gian, tất cả đều được thể hiện qua những nét vẽ sinh động và ý nghĩa.`,
        },
        {
          title: 'Trải nghiệm vẽ tranh',
          content: `Du khách có thể tham gia vào các lớp học vẽ tranh tại làng, từ đó học hỏi và thực hành kỹ thuật vẽ truyền thống, tạo ra những tác phẩm nghệ thuật mang đậm dấu ấn cá nhân.`,
        },
      ],
    },
    {
      id: 31,
      image: images.langnghephukien,
      category: ECategory.CRAFT,
      title: 'Làng lụa',
      description:
        'Hội An còn nổi tiếng với những sản phẩm phụ kiện thời trang được làm thủ công từ các chất liệu tự nhiên. Tại các làng nghề, nghệ nhân tạo ra những sản phẩm độc đáo và thời trang, từ túi xách, dây chuyền cho đến giày dép.',
      body: [
        {
          title: 'Sản phẩm đa dạng',
          content:
            'Làng lụa không chỉ đơn thuần sản xuất các sản phẩm thời trang mà còn sáng tạo ra những thiết kế độc đáo. Mỗi sản phẩm đều được làm bằng tay, đảm bảo chất lượng và sự tinh tế, mang đến cho khách hàng những trải nghiệm thú vị.',
        },
        {
          title: 'Ý nghĩa văn hóa',
          content: `Các sản phẩm thời trang từ Hội An không chỉ là phụ kiện mà còn mang trong mình bản sắc văn hóa của địa phương. Chúng là kết quả của sự sáng tạo và tâm huyết của các nghệ nhân, thể hiện nét đẹp văn hóa và nghệ thuật của người Việt.`,
        },
        {
          title: 'Chất liệu tự nhiên',
          content: `Nghệ nhân ở đây sử dụng các chất liệu tự nhiên như vải, da, và sợi, tạo ra những sản phẩm không chỉ đẹp mắt mà còn thân thiện với môi trường, mang lại sự thoải mái cho người sử dụng.`,
        },
        {
          title: 'Trải nghiệm mua sắm',
          content: `Du khách có thể tham quan và mua sắm tại các cửa hàng phụ kiện, nơi họ không chỉ tìm thấy những món đồ độc đáo mà còn có thể hiểu rõ hơn về quy trình làm ra chúng.`,
        },
      ],
    },
    {
      id: 32,
      image: images.langngheda,
      category: ECategory.CRAFT,
      title: 'Làng nghề điêu khắc đá',
      description:
        'Làng nghề điêu khắc đá tại Hội An nổi tiếng với các sản phẩm điêu khắc tinh xảo được chế tác từ đá tự nhiên. Các nghệ nhân ở đây khéo léo biến những khối đá thô ráp thành những tác phẩm nghệ thuật độc đáo.',
      body: [
        {
          title: 'Nghệ thuật điêu khắc',
          content:
            'Tại làng nghề điêu khắc đá, mỗi sản phẩm đều được tạo ra từ đôi bàn tay khéo léo của nghệ nhân. Họ sử dụng những công cụ truyền thống và kỹ thuật tinh xảo để chế tác ra những tác phẩm từ đá, từ bức tượng nhỏ cho đến những tác phẩm lớn.',
        },
        {
          title: 'Ý nghĩa văn hóa',
          content: `Sản phẩm điêu khắc đá không chỉ là sản phẩm thủ công mỹ nghệ mà còn mang trong mình các giá trị văn hóa sâu sắc. Chúng là biểu tượng của nghệ thuật điêu khắc Việt Nam, phản ánh tâm tư, tình cảm và tri thức của người nghệ nhân.`,
        },
        {
          title: 'Sản phẩm đa dạng',
          content: `Các sản phẩm điêu khắc đá rất phong phú, bao gồm tượng thần, các bức phù điêu, và đồ trang trí, tất cả đều thể hiện sự sáng tạo và tay nghề cao của các nghệ nhân.`,
        },
        {
          title: 'Trải nghiệm tại làng',
          content: `Du khách có thể tham quan làng nghề và chứng kiến quy trình điêu khắc đá, từ khâu chọn đá cho đến giai đoạn hoàn thiện, và thậm chí có thể tham gia vào một số hoạt động thực tế.`,
        },
      ],
    }
  ],
}
const foodData = {
  id: ECategory.FOOD,
  title: 'Ẩm thực',
  image: images.food,
  list: [
    {
      id: 33,
      image: images.banhmiphuong,
      category: ECategory.FOOD,
      title: 'Bánh Mì Phượng',
      description:
        'Bánh Mì Phượng là một trong những món ăn nổi tiếng của Hội An, từng được vinh danh bởi nhiều đầu bếp nổi tiếng trên thế giới. Đây là thương hiệu bánh mì đã tồn tại nhiều năm, thu hút không chỉ người dân địa phương mà còn cả du khách trong và ngoài nước nhờ hương vị đặc trưng và cách chế biến độc đáo.',
      body: [
        {
          title: 'Lịch sử hình thành',
          content:
            'Bánh Mì Phượng ra đời từ những năm 1980 tại phố cổ Hội An. Ban đầu, quán bánh mì chỉ là một tiệm nhỏ bán cho người dân địa phương. Nhờ hương vị thơm ngon và cách phục vụ tận tình, quán dần trở nên nổi tiếng và trở thành một trong những địa điểm không thể bỏ qua khi đến Hội An. Nhiều du khách quốc tế, trong đó có đầu bếp nổi tiếng Anthony Bourdain, đã khen ngợi và giới thiệu Bánh Mì Phượng trên nhiều kênh truyền hình quốc tế.',
        },
        {
          title: 'Thành phần và cách chế biến',
          content: `Bánh Mì Phượng nổi tiếng nhờ sự kết hợp hoàn hảo giữa vỏ bánh giòn rụm và nhân bánh đa dạng, phong phú. Bánh mì được làm từ bột mì tươi ngon, vỏ ngoài vàng óng và giòn tan. Nhân bánh bao gồm nhiều loại thịt nguội, pate, chả lụa, và các loại rau thơm như dưa leo, rau mùi. Điểm nhấn đặc biệt chính là nước sốt tự chế biến của quán, tạo nên hương vị độc đáo không lẫn với bất kỳ nơi nào.`,
        },
        {
          title: 'Sự yêu thích của du khách',
          content: `Bánh Mì Phượng đã trở thành một biểu tượng ẩm thực của Hội An, thu hút hàng ngàn du khách mỗi năm. Hàng dài người xếp hàng chờ mua bánh là hình ảnh quen thuộc tại quán. Nhiều người cho rằng, Bánh Mì Phượng chính là một trong những phiên bản bánh mì ngon nhất họ từng thưởng thức, không chỉ bởi hương vị mà còn bởi sự thân thiện của người chủ quán và không khí đậm chất Hội An.`,
        },
        {
          title: 'Ý nghĩa và phát triển',
          content: `Bánh Mì Phượng không chỉ là một món ăn, mà còn là niềm tự hào của ẩm thực Hội An. Với sự phát triển mạnh mẽ của du lịch, thương hiệu Bánh Mì Phượng đã không ngừng lớn mạnh, góp phần quảng bá ẩm thực Việt Nam ra thế giới. Sự kết hợp giữa truyền thống và sáng tạo trong từng chiếc bánh mì đã tạo nên một món ăn bình dị nhưng mang giá trị văn hóa cao.`,
        },
      ],
    },
    {
      id: 34,
      image: images.caolau,
      category: ECategory.FOOD,
      title: 'Cao Lầu Ba Bầu',
      description: 'Cao Lầu là món ăn đặc sản của Hội An với sợi mì dày, mềm, ăn kèm với thịt heo, rau sống và nước sốt đặc trưng.',
      body: [
        {
          title: 'Lịch sử hình thành',
          content: 'Cao Lầu có nguồn gốc từ thời kỳ giao thương, là sự kết hợp giữa các nền văn hóa ẩm thực khác nhau. Món ăn này đã trở thành biểu tượng ẩm thực của Hội An, hấp dẫn thực khách bởi vẻ ngoài hấp dẫn và hương vị độc đáo. Nhiều du khách đến Hội An không thể bỏ qua món ăn này trong hành trình khám phá ẩm thực địa phương.'
        },
        {
          title: 'Thành phần và cách chế biến',
          content: 'Sợi mì Cao Lầu được làm từ bột gạo, nước tro, và nước mưa, tạo nên hương vị đặc trưng. Món ăn thường kèm với thịt heo nướng, rau sống tươi mát và nước sốt đặc biệt, tạo nên sự hòa quyện tuyệt vời. Đặc biệt, nước sốt được chế biến từ nhiều nguyên liệu phong phú, mang lại một trải nghiệm ẩm thực không thể nào quên.'
        },
        {
          title: 'Hương vị đặc trưng',
          content: 'Cao Lầu nổi bật với sợi mì dày, có độ dai vừa phải, kết hợp hoàn hảo với vị ngọt của thịt heo và độ giòn của rau sống. Nước sốt chua ngọt làm cho món ăn trở nên hoàn hảo hơn, giúp thực khách cảm nhận được hương vị đặc sắc của Hội An.'
        },
        {
          title: 'Trải nghiệm thưởng thức',
          content: 'Thưởng thức Cao Lầu không chỉ đơn thuần là ăn mà còn là một trải nghiệm văn hóa. Du khách thường ngồi tại các quán ăn nhỏ ven đường, hòa mình vào không khí nhộn nhịp của phố cổ khi thưởng thức món ăn này.'
        },
      ],
    },
    {
      id: 35,
      image: images.miquangot,
      category: ECategory.FOOD,
      title: 'Mì Quảng Ớt',
      description: 'Mì Quảng nổi tiếng với sợi mì vàng, nước dùng thơm ngon và nhân đa dạng từ tôm, thịt gà, hay thịt heo.',
      body: [
        {
          title: 'Lịch sử',
          content: 'Mì Quảng có nguồn gốc từ miền Trung Việt Nam và mang đậm hương vị của vùng đất Hội An. Đây là món ăn đã tồn tại hàng trăm năm, từng là lựa chọn của người dân nơi đây và dần trở thành một trong những món ăn nổi tiếng nhất khi du khách đến Hội An.'
        },
        {
          title: 'Thành phần và cách chế biến',
          content: 'Mì Quảng được làm từ bột gạo, có màu vàng tự nhiên nhờ nghệ. Nước dùng từ xương heo hoặc gà thơm ngon, kèm theo nhiều loại thịt và rau sống tạo nên sự đa dạng cho món ăn. Đặc biệt, món ăn thường được trang trí với lạc rang và hành phi, tạo thêm độ giòn và hương vị đặc trưng.'
        },
        {
          title: 'Hương vị thơm ngon',
          content: 'Mì Quảng có hương vị thơm ngon và hấp dẫn, nhờ vào sự kết hợp hoàn hảo giữa nước dùng và các nguyên liệu tươi ngon. Sự kết hợp này tạo ra một trải nghiệm ẩm thực phong phú và đậm đà.'
        },
        {
          title: 'Trải nghiệm ẩm thực',
          content: 'Khi thưởng thức Mì Quảng, du khách không chỉ được trải nghiệm hương vị mà còn có cơ hội hiểu rõ hơn về văn hóa ẩm thực của người dân miền Trung. Mì Quảng thường được ăn kèm với rau sống tươi ngon, tạo nên sự hài hòa trong từng miếng ăn.'
        },
      ],
    },
    {
      id: 36,
      image: images.banhxeo,
      category: ECategory.FOOD,
      title: 'Bánh Xèo Hội An',
      description: 'Bánh xèo là món bánh truyền thống được làm từ bột gạo, chiên giòn và nhân tôm, thịt cùng với rau sống.',
      body: [
        {
          title: 'Lịch sử',
          content: 'Bánh xèo đã xuất hiện từ lâu trong ẩm thực miền Trung, đặc biệt là tại Hội An. Món ăn này không chỉ đơn thuần là thức ăn, mà còn phản ánh sự khéo léo và sáng tạo của người dân nơi đây trong việc kết hợp nguyên liệu tự nhiên.'
        },
        {
          title: 'Thành phần và cách chế biến',
          content: 'Bánh được làm từ bột gạo, nước dừa, và nhân từ tôm tươi, thịt heo, ăn kèm với rau sống và nước chấm. Bánh xèo khi được chiên giòn, có hình dáng giống như chiếc nón lá Việt Nam, mang đến không chỉ hương vị ngon mà còn là một trải nghiệm thị giác thú vị.'
        },
        {
          title: 'Hương vị hấp dẫn',
          content: 'Bánh xèo nổi bật với độ giòn bên ngoài và nhân bên trong đầy đặn. Món ăn này không chỉ ngon mà còn có màu sắc bắt mắt, thu hút thực khách ngay từ cái nhìn đầu tiên.'
        },
        {
          title: 'Trải nghiệm thưởng thức',
          content: 'Khi thưởng thức Bánh Xèo, du khách thường cuốn bánh trong lá rau sống và chấm nước mắm chua ngọt, tạo nên một trải nghiệm ẩm thực tuyệt vời và khó quên.'
        },
      ],
    },
    {
      id: 37,
      image: images.chehue,
      category: ECategory.FOOD,
      title: 'Chè Hội An',
      description: 'Chè Hội An nổi tiếng với nhiều loại chè đa dạng và hương vị thơm ngon, được phục vụ tại nhiều quán ăn ở Hội An.',
      body: [
        {
          title: 'Lịch sử',
          content: 'Chè Hội An có nguồn gốc từ cố đô, đã từ lâu trở thành một phần không thể thiếu trong ẩm thực Hội An. Sự kết hợp giữa các nguyên liệu tự nhiên đã tạo ra những món chè độc đáo, mang đậm phong cách của miền Trung Việt Nam.'
        },
        {
          title: 'Thành phần và cách chế biến',
          content: 'Các loại chè ở đây thường có nguyên liệu từ đậu xanh, đậu đỏ, nước cốt dừa, và nhiều loại trái cây như chuối, mít, và bột báng. Mỗi loại chè không chỉ mang hương vị riêng mà còn mang đến sự mát lành, thích hợp cho cả những ngày hè oi ả.'
        },
        {
          title: 'Hương vị độc đáo',
          content: 'Chè Hội An nổi bật với sự phong phú về hương vị và màu sắc, từ ngọt dịu của đậu cho đến vị béo ngậy của nước cốt dừa. Mỗi chén chè đều mang lại sự hài lòng cho thực khách.'
        },
        {
          title: 'Trải nghiệm thưởng thức',
          content: 'Khi đến Hội An, việc thưởng thức Chè Hội An tại các quán chè là một trải nghiệm không thể thiếu, giúp du khách hiểu hơn về văn hóa ẩm thực miền Trung và sự khéo léo trong việc chế biến món ăn này.'
        },
      ],
    },
    {
      id: 38,
      image: images.banhbeo,
      category: ECategory.FOOD,
      title: 'Bánh Bèo',
      description: 'Bánh bèo là món ăn nhẹ phổ biến tại Hội An, với lớp bột gạo mềm mại và nhân tôm thịt đặc trưng.',
      body: [
        {
          title: 'Lịch sử',
          content: 'Bánh bèo đã xuất hiện từ lâu trong ẩm thực miền Trung và đã trở thành món ăn đặc sản của Hội An. Với sự đơn giản trong nguyên liệu và cách chế biến, món ăn này thể hiện rõ nét văn hóa ẩm thực phong phú của người dân nơi đây.'
        },
        {
          title: 'Thành phần và cách chế biến',
          content: 'Bánh được làm từ bột gạo và nước, hấp chín trong các khuôn nhỏ. Khi bánh chín, người ta rắc lên trên tôm khô, hành phi và nước mắm, tạo nên hương vị hấp dẫn. Món bánh bèo thường được ăn kèm với rau sống, mang đến trải nghiệm ẩm thực thú vị.'
        },
        {
          title: 'Hương vị thơm ngon',
          content: 'Bánh bèo có hương vị nhẹ nhàng và thanh mát, phù hợp với khẩu vị của nhiều người. Vị mặn của tôm khô hòa quyện cùng nước mắm chua ngọt tạo nên sự hấp dẫn khó cưỡng.'
        },
        {
          title: 'Trải nghiệm thưởng thức',
          content: 'Khi thưởng thức Bánh Bèo, thực khách thường cảm nhận được sự mềm mại của bánh cùng với vị tươi ngon của các nguyên liệu đi kèm, mang đến một trải nghiệm ẩm thực thú vị.'
        },
      ],
    },
    {
      id: 39,
      image: images.suosach,
      category: ECategory.FOOD,
      title: 'Sò Sò Nướng',
      description: 'Sò sò nướng là món ăn hải sản đặc trưng của Hội An, thường được nướng với nước mắm và gia vị thơm ngon.',
      body: [
        {
          title: 'Lịch sử',
          content: 'Món sò nướng đã trở thành một phần không thể thiếu trong ẩm thực hải sản của Hội An, thu hút nhiều thực khách. Sò sò nướng không chỉ mang lại hương vị thơm ngon mà còn thể hiện sự đa dạng trong ẩm thực hải sản địa phương.'
        },
        {
          title: 'Thành phần và cách chế biến',
          content: 'Sò được lựa chọn tươi ngon, sau đó được nướng trên than hồng với nước mắm, tỏi, ớt và gia vị đặc trưng. Món ăn này thường được ăn kèm với rau sống và nước chấm, mang đến sự hài hòa giữa vị béo ngậy của sò và vị chua cay của gia vị.'
        },
        {
          title: 'Hương vị đặc trưng',
          content: 'Sò sò nướng có hương vị thơm ngon, béo ngậy, kết hợp với các loại gia vị tạo nên một món ăn hấp dẫn. Món ăn này là một sự lựa chọn tuyệt vời cho những ai yêu thích hải sản.'
        },
        {
          title: 'Trải nghiệm thưởng thức',
          content: 'Khi thưởng thức Sò Sò Nướng, thực khách thường cảm nhận được độ tươi ngon và hương vị đậm đà, mang lại một trải nghiệm ẩm thực thú vị và khó quên.'
        },
      ],
    },
    {
      id: 40,
      image: images.xoihat,
      category: ECategory.FOOD,
      title: 'Xôi Hạt',
      description: 'Xôi hạt là món ăn sáng đặc sản tại Hội An, với hương vị đậm đà và hình thức đẹp mắt.',
      body: [
        {
          title: 'Lịch sử',
          content: 'Xôi hạt đã có mặt từ lâu trong ẩm thực Việt Nam, đặc biệt là ở miền Trung với những biến thể khác nhau. Món ăn này không chỉ là lựa chọn ăn sáng mà còn là một phần trong các bữa tiệc truyền thống của người dân địa phương.'
        },
        {
          title: 'Thành phần và cách chế biến',
          content: 'Xôi được làm từ nếp, thường được kèm với thịt hoặc hải sản, và được chế biến với nhiều loại gia vị đặc trưng. Bên cạnh đó, món xôi còn được trang trí với hành phi và ruốc, tạo nên sự hấp dẫn cho thực khách.'
        },
        {
          title: 'Hương vị đậm đà',
          content: 'Xôi hạt có hương vị đậm đà, hòa quyện giữa vị ngọt của nếp và vị mặn của các loại thịt. Món ăn này mang đến sự thoải mái và ấm cúng, đặc biệt là trong những ngày lạnh.'
        },
        {
          title: 'Trải nghiệm thưởng thức',
          content: 'Khi thưởng thức Xôi Hạt, thực khách thường được cảm nhận sự dẻo mềm của xôi, cùng với độ giòn của hành phi và vị thơm ngon của ruốc, tạo nên một trải nghiệm ẩm thực khó quên.'
        },
      ],
    },
  ],
}

export const totalData: IObjectTotalData = {
  [ECategory.PLACE]: placeData,
  [ECategory.BEACH]: beachData,
  [ECategory.FOOD]: foodData,
  [ECategory.CRAFT]: craftData,
  [ECategory.CAFE]: cafeData,
  [ECategory.HOTEL]: hotelData,
}

export const allPosts = [...placeData.list, ...foodData.list, ...craftData.list]

export const tourSuggest: IObjectTour = {
  '1': [
    {
      day: 1,
      title: 'Buổi sáng',
      description: 'Ăn sáng - Cafe – dạo qua các hội quán',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 1,
      title: 'Buổi chiều',
      description: 'Ăn trưa – hóng gió biển – ăn vặt',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 1,
      title: 'Buổi tối',
      description: 'Dạo phố – ăn tối – thả đèn hoa đăng – đi thuyền trên sông Hoài',
      posts: [foodData.list[0], cafeData.list[0]],
    },
  ],
  '2': [
    {
      day: 1,
      title: 'Buổi sáng',
      description: 'Ăn sáng – Cafe – dạo qua các hội quán',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 1,
      title: 'Buổi chiều',
      description: 'Ăn trưa – hóng gió biển – ăn vặt',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 1,
      title: 'Buổi tối',
      description: 'Dạo phố – ăn tối – thả đèn hoa đăng – đi thuyền trên sông Hoài',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 2,
      title: 'Buổi sáng',
      description: 'Ăn sáng – Cafe – dạo qua các hội quán',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 2,
      title: 'Buổi chiều',
      description: 'Ăn trưa – hóng gió biển – ăn vặt',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 2,
      title: 'Buổi tối',
      description: 'Dạo phố – ăn tối – thả đèn hoa đăng – đi thuyền trên sông Hoài',
      posts: [foodData.list[0], cafeData.list[0]],
    },
  ],
}
