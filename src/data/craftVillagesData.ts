import { CraftVillage, Artisan } from '../types/craft';

export const INITIAL_CRAFT_VILLAGES: CraftVillage[] = [
  {
    id: 'bat-trang',
    name: 'Làng Gốm Bát Tràng',
    category: 'ceramic',
    categoryLabel: 'Gốm sứ truyền thống',
    province: 'Hà Nội',
    locationAddress: 'Xã Bát Tràng, Huyện Gia Lâm, Thành phố Hà Nội (bên bờ tả ngạn sông Hồng)',
    establishedEra: 'Thời nhà Lý (Thế kỷ XI - khoảng năm 1010)',
    patronSaint: 'Thần linh bản thổ & Các bậc tiền hiền 19 dòng họ lập làng',
    heritageStatus: 'Di sản Văn hóa Phi vật thể Quốc gia (Công nhận năm 2019)',
    coverImage: '/src/assets/images/hero_craft_village_battrang_1794233894576.jpg',
    briefDescription: 'Bát Tràng là làng nghề gốm sứ cổ truyền lừng danh bậc nhất Việt Nam với hơn 1.000 năm lịch sử. Nổi tiếng với kỹ nghệ nung lò bầu, lò hộp và các dòng men cổ trứ danh như men rạn, men ngọc, men lam, men nâu, gốm Bát Tràng từng theo các đoàn thuyền buôn xuôi dòng sông Hồng vươn ra biển lớn khắp năm châu.',
    historicalChronology: [
      {
        period: 'Năm 1010 - Thời Lý',
        title: 'Khởi dựng làng gốm bên bến Bồ Lô',
        content: 'Khi vua Lý Thái Tổ dời đô từ Hoa Lư về Thăng Long, 5 dòng họ làm gốm lớn vùng Bồ Bát (Yên Mô, Ninh Bình) gồm họ Trần, Vương, Nguyễn, Lê, Phạm đã di cư theo dòng sông Hồng đến vùng đất bồi phù sa trù phú Bát Tràng để lập lò gốm cung cấp đồ thờ tự và ngự dụng cho kinh thành.'
      },
      {
        period: 'Thế kỷ XV - XVII (Thời Lê - Mạc)',
        title: 'Thời kỳ hoàng kim & Dòng men Lam, men Rạn đỉnh cao',
        content: 'Bát Tràng mở rộng giao thương hàng hải quốc tế sang Nhật Bản, Hà Lan, Đông Nam Á. Các nghệ nhân sáng tạo nên dòng men rạn tam thái độc nhất vô nhị và các bộ lư hương, chân đèn đồ sộ mang dấu ấn mỹ thuật Đại Việt.'
      },
      {
        period: 'Thế kỷ XVIII - XIX (Thời Nguyễn)',
        title: 'Bảo tồn kỹ nghệ gia truyền qua thăng trầm biến thiên',
        content: 'Các phường gốm chuyển sang làm đồ sứ cao cấp, đồ gia dụng men xanh lam phục vụ cung đình Huế và đời sống nhân dân, giữ vững các bí kíp phối liệu đất sét trắng và tro trấu.'
      },
      {
        period: 'Thế kỷ XXI - Hiện đại',
        title: 'Chuyển đổi số & Tinh hoa vươn tầm toàn cầu',
        content: 'Bát Tràng hiện có hàng trăm xưởng gốm công nghệ cao kết hợp bí truyền thủ công, quy hoạch bảo tàng gốm Bát Tràng (Trung tâm Tinh hoa Làng nghề Việt) và số hóa hồ sơ di sản phục vụ du lịch văn hóa quốc gia.'
      }
    ],
    culturalSignificance: 'Gốm Bát Tràng không đơn thuần là vật dụng thường nhật mà là hồn cốt của đất và lửa, biểu trưng cho sự giao hòa giữa âm dương, ngũ hành (Kim - Mộc - Thủy - Hỏa - Thổ) và đôi bàn tay tài hoa của nghệ nhân Việt.',
    festival: {
      name: 'Hội làng gốm Bát Tràng & Lễ rước nước sông Hồng',
      dateLunar: 'Ngày 14 đến 16 tháng 2 Âm lịch hàng năm',
      description: 'Lễ hội tổ chức long trọng với nghi thức rước nước thiêng giữa dòng sông Hồng về đình làng tắm gội linh vị tổ nghề, kèm theo lễ dâng hương và trình diễn tài nghệ nặn gốm bàn xoay thủ công truyền thống.'
    },
    coordinates: {
      lat: 20.9765,
      lng: 105.9123
    },
    metrics: {
      artisanTotal: 48,
      consentedCount: 36,
      activeWorkshops: 215,
      ocopProductsCount: 89
    },
    audioNarration: {
      title: 'Bát Tràng - Ngàn năm hồn đất lửa Thăng Long',
      duration: '03:45',
      speaker: 'Giọng đọc Di sản Hà Nội',
      transcript: 'Về thăm Bát Tràng, nghe tiếng đất thở dưới vòng quay miên man của bàn xoay gỗ. Đất sét trắng dẻo quánh được lắng lọc từ lòng sông, thấm đượm mồ hôi và tâm huyết của bao thế hệ nghệ nhân. Mỗi giọt men lam, mỗi đường rạn chân chim đều cất giữ câu chuyện ngàn năm của nền văn minh lúa nước và tài hoa người thợ thủ công Đại Việt...'
    },
    productionProcess: [
      {
        stepNumber: 1,
        stageName: 'Giai đoạn 1',
        title: 'Chọn & Xử lý đất sét (Lắng lọc phù sa)',
        summary: 'Khai thác đất sét trắng hoặc đất sét trúc thôn có độ dẻo cao, chịu nhiệt trên 1.250°C. Ngâm đất trong hệ thống bể 4 ngăn (bể đánh, bể lắng, bể phơi và bể ủ) từ 2-4 tháng để loại bỏ triệt để tạp chất ôxít sắt.',
        technicalDetails: [
          'Độ ẩm của đất sét sau lọc phải đạt 22% - 24% để đảm bảo không nứt vỡ khi kéo phôi.',
          'Dùng bể lắng ngâm thủy lực cổ truyền để hạt sét đạt kích thước siêu mịn đồng nhất.',
          'Công đoạn nhào đất bằng chân và xắt lát mỏng để phá bọt khí hoàn toàn.'
        ],
        traditionalTools: ['Thước xắt đất bằng dây thép mỏng', 'Bàn dầm bùn gỗ lim', 'Bể lọc tam cấp cổ'],
        artisanSecret: 'Đất phải "ủ chín" đủ độ ngấu, ngửi thấy mùi phù sa đằm và sờ mịn màng như lụa mới được phép đưa lên bàn xoay.',
        estimatedDuration: '60 - 90 ngày chuẩn bị cốt đất',
        soundAmbientLabel: 'Tiếng khuấy bùn và gõ thước gỗ đập đất'
      },
      {
        stepNumber: 2,
        stageName: 'Giai đoạn 2',
        title: 'Tạo hình trên bàn xoay thủ công (Chuốt gốm)',
        summary: 'Người thợ ngồi trên ghế cao, dùng chân đạp trợ lực hoặc người phụ đẩy để bàn xoay gỗ quay tròn đều. Nghệ nhân dùng hai bàn tay khéo léo nâng cốt đất, vuốt thành dáng bình, lọ, thạp hay bát đĩa theo đúng tỷ lệ vàng.',
        technicalDetails: [
          'Yêu cầu tay nghề tối thiểu 7 năm để giữ được tâm phôi ổn định không lệch trục.',
          'Vuốt cốt gốm từ dưới đáy lên miệng, duy trì độ dày thành gốm đồng đều từ 4mm - 7mm.',
          'Định hình hoa văn nổi như rồng cuộn, hoa sen bằng kỹ thuật đắp nổi phù điêu ngay khi đất còn ẩm.'
        ],
        traditionalTools: ['Bàn xoay gỗ nghiến truyền thống', 'Thanh cạo tre láng mặt', 'Dây cung cắt đáy gốm'],
        artisanSecret: 'Hơi thở của người thợ phải hòa nhịp cùng vòng quay; một tích tắc lệch nhịp tay sẽ làm cốt gốm bị vặn mình khi vào lò lửa nung cao nhiệt.',
        estimatedDuration: '45 phút / tác phẩm thủ công độc bản',
        soundAmbientLabel: 'Tiếng bàn xoay rù rì êm ái cùng tiếng nước vuốt đất'
      },
      {
        stepNumber: 3,
        stageName: 'Giai đoạn 3',
        title: 'Phơi sấy & Sửa mộc (Tiện gọt tinh xảo)',
        summary: 'Sản phẩm mộc sau tạo hình được đem phơi trong bóng râm hoặc sấy nhiệt độ thấp để ráo nước từ từ. Sau đó đưa lại lên bàn xoay để dùng dao thép tiện gọt gọt bớt phần đất thừa, gọt nhẵn miệng và tạo chân đế.',
        technicalDetails: [
          'Tuyệt đối không phơi gốm mộc dưới nắng gắt vì sẽ gây nứt nẻ và biến dạng cốt đất.',
          'Kiểm tra độ khô tự nhiên đến khi đất chuyển từ màu nâu ướt sang màu xám tro đanh chắc.',
          'Gắn các chi tiết phụ như quai ấm, núm nắp bình bằng hồ sét đặc quánh.'
        ],
        traditionalTools: ['Bộ dao tiện mộc bằng thép nhíp xe', 'Dùi chọc lỗ quai ấm', 'Miếng da cừu đánh bóng'],
        artisanSecret: 'Thời điểm tiện mộc là lúc đất "nửa ướt nửa khô" - lấy móng tay bấm nhẹ có vết nhưng không dính đất.',
        estimatedDuration: '3 - 5 ngày phơi sấy râm mát',
        soundAmbientLabel: 'Tiếng dao gọt mộc sột soạt gạt từng lớp dăm đất khô'
      },
      {
        stepNumber: 4,
        stageName: 'Giai đoạn 4',
        title: 'Họa pháp vẽ men Lam & Chế tác men Rạn cổ',
        summary: 'Nghệ nhân dùng bút lông thỏ vẽ họa tiết sơn thủy, tích cổ, hoa cúc dây, tùng hạc lên thân gốm bằng màu lam coban. Sau đó phủ lớp men tro trấu hoặc men đá vôi theo công thức bí truyền gia tộc.',
        technicalDetails: [
          'Men rạn được tạo ra từ sự chênh lệch hệ số giãn nở nhiệt giữa cốt đất sét và bài men tro quặng.',
          'Họa sĩ vẽ gốm chỉ có 1 nét vẽ duy nhất, vì đất mộc hút màu ngay lập tức, không thể tẩy xóa hay sửa chữa.',
          'Kỹ thuật nhúng men hoặc dội men phải chuẩn xác trong 3 giây để nước men phủ phẳng như gương.'
        ],
        traditionalTools: ['Bút lông thỏ tỉa nét cổ', 'Chén sành nghiền màu', 'Gáo múc men tráng đáy'],
        artisanSecret: 'Pha men bằng tro trấu nếp cái hoa vàng kết hợp đá thạch anh nghiền mịn; màu vẽ lấy từ quặng ôxít tự nhiên không hóa chất.',
        estimatedDuration: '1 - 2 ngày vẽ tỉ mỉ và nhúng men',
        soundAmbientLabel: 'Tiếng ngọn bút lông chấm men và tiếng dội men óc ách'
      },
      {
        stepNumber: 5,
        stageName: 'Giai đoạn 5',
        title: 'Đốt lò nung ở 1.250°C - 1.300°C (Luyện lửa)',
        summary: 'Sản phẩm được xếp vào bao nung chịu lửa bằng đất samốt, đưa vào lò nung (lò bầu cổ hoặc lò gas hiện đại). Đốt lửa tăng nhiệt độ từ từ theo chu trình nghiêm ngặt, giữ nhiệt đỉnh và làm nguội tự nhiên.',
        technicalDetails: [
          'Giai đoạn sấy ấm (0 - 400°C) thoát hết ẩm trong 12 giờ đầu.',
          'Giai đoạn nung oxy hóa và khử (800 - 1.280°C) để men tan chảy, hòa quyện vào cốt xương gốm.',
          'Thời gian làm nguội từ 1.280°C xuống nhiệt độ phòng mất từ 24 - 36 giờ để tránh sốc nhiệt làm vỡ gốm.'
        ],
        traditionalTools: ['Hộp bao nung samốt', 'Côn đo nhiệt Sege', 'Cửa quan sát mắt mèo'],
        artisanSecret: 'Quan sát màu ngọn lửa qua khe mắt mèo để đoán nhiệt: Lửa đỏ là 900°C, lửa vàng chanh là 1.150°C, lửa trắng sáng rực rỡ là đạt 1.280°C.',
        estimatedDuration: '3 ngày đêm đỏ lửa và ủ nguội lò',
        soundAmbientLabel: 'Tiếng lò lửa rực rỡ gầm vang và tiếng đất biến hóa thành gốm'
      },
      {
        stepNumber: 6,
        stageName: 'Giai đoạn 6',
        title: 'Ra lò, Thấm mực tàu & Kiểm định thành phẩm',
        summary: 'Mở cửa lò khi nhiệt độ đã hạ hoàn toàn. Với dòng men rạn cổ, nghệ nhân dùng mực tàu hoặc nước chè đặc quét đều lên bề mặt để mực thấm sâu vào các đường nứt chân chim, làm nổi bật đường vân rạn huyền ảo.',
        technicalDetails: [
          'Kiểm tra âm thanh: Dùng thanh gỗ gõ nhẹ vào thân gốm, nếu vang như chuông bạc là đạt độ chín cốt.',
          'Loại bỏ ngay các sản phẩm bị cong vênh, sống men, bọt khí hoặc rạn vỡ không đồng đều.',
          'Khắc triện dấu tên nghệ nhân và làng gốm Bát Tràng dưới đáy cốt gốm.'
        ],
        traditionalTools: ['Bàn chải lông ngựa quét mực', 'Kính lúp kiểm tra chân rạn', 'Búa cao su thẩm âm gốm'],
        artisanSecret: 'Mực tàu thấm men rạn phải ủ ẩm 24 giờ sau đó lau sạch; đường rạn sẽ đanh lại vĩnh cửu cùng thời gian.',
        estimatedDuration: '1 ngày kiểm tra và hoàn thiện',
        soundAmbientLabel: 'Tiếng gõ thanh âm gốm lanh lảnh vang xa như tiếng chuông'
      }
    ],
    products: [
      {
        id: 'bt-01',
        villageId: 'bat-trang',
        name: 'Bình Hút Lộc Men Rạn Cổ "Thuận Buồm Xuôi Gió"',
        artisanId: 'nnnd-tran-do',
        artisanName: 'NNND. Trần Độ',
        material: 'Đất sét trắng trầm tích sông Hồng, men rạn tro trấu cổ, dát vàng 24K',
        ocopRank: 5,
        dimensions: 'Cao 68cm x Đường kính bụng 42cm',
        culturalMeaning: 'Bình dáng hút lộc miệng loe thu tài, cổ thon giữ của, thân phình chứa đựng phúc đức ấm no. Họa tiết thuyền buồm căng gió tượng trưng cho hành trình hanh thông, công thành danh toại.',
        techniquesUsed: ['Vuốt tay thủ công bàn xoay', 'Phục dựng men rạn thế kỷ XVII', 'Đắp nổi phù điêu', 'Dát điểm vàng ròng'],
        estimatedTime: '45 ngày công nghệ nhân',
        image: '/src/assets/images/hero_craft_village_battrang_1794233894576.jpg',
        priceReference: '28.500.000 VNĐ - 45.000.000 VNĐ',
        curatorNote: 'Tác phẩm đạt chuẩn OCOP 5 sao quốc gia, phục dựng nguyên bản bài men rạn thời Hậu Lê.'
      },
      {
        id: 'bt-02',
        villageId: 'bat-trang',
        name: 'Bộ Lư Hương Đỉnh Đồng Gốm Men Lam Giả Cổ Tam Hợp',
        artisanId: 'nnut-vuong-manh-tuan',
        artisanName: 'NNƯT. Vương Mạnh Tuấn',
        material: 'Đất sét cao lanh, quặng chàm tự nhiên, men ngọc xanh lơ',
        ocopRank: 5,
        dimensions: 'Lư hương cao 52cm, Cặp hạc chầu cao 65cm',
        culturalMeaning: 'Biểu tượng của không gian thờ tự linh thiêng, hội tụ linh khí trời đất cầu cho quốc thái dân an, gia đạo trường tồn.',
        techniquesUsed: ['Vẽ men lam dưới men ngọc', 'Nung lò 1.300°C khử hoàn toàn độc tố', 'Chạm khắc hoa văn mây lửa'],
        estimatedTime: '30 ngày chế tác',
        image: '/src/assets/images/hero_craft_village_battrang_1794233894576.jpg',
        priceReference: '16.000.000 VNĐ - 22.000.000 VNĐ',
        curatorNote: 'Đạt giải Tinh hoa Thủ công Mỹ nghệ Thăng Long - Hà Nội.'
      }
    ]
  },
  {
    id: 'van-phuc',
    name: 'Làng Lụa Vạn Phúc (Hà Đông)',
    category: 'silk',
    categoryLabel: 'Lụa & Dệt may truyền thống',
    province: 'Hà Nội',
    locationAddress: 'Phường Vạn Phúc, Quận Hà Đông, Thành phố Hà Nội (bên bờ sông Nhuệ)',
    establishedEra: 'Hơn 1.000 năm (khoảng năm 866 thời Đường)',
    patronSaint: 'Bà Ả Lã Đê Nương (Tổ nghề dệt lụa Vạn Phúc)',
    heritageStatus: 'Di sản Văn hóa Phi vật thể Quốc gia (Công nhận năm 2023)',
    coverImage: '/src/assets/images/craft_silk_vanphuc_1794233895275.jpg',
    briefDescription: 'Lụa Vạn Phúc nức danh ngàn đời với câu ca "Chiếu Nga Sơn, gạch Bát Tràng / Vải tơ Nam Định, lụa hàng Vạn Phúc". Đặc sản lụa Vân Vạn Phúc có đặc tính ấm áp vào mùa đông, mát mẻ rượi nhẹ vào mùa hè, hoa văn ẩn hiện tinh tế dưới ánh sáng mặt trời.',
    historicalChronology: [
      {
        period: 'Thế kỷ IX (Năm 866)',
        title: 'Bà Ả Lã Đê Nương truyền dạy nghề dệt',
        content: 'Bà Ả Lã Đê Nương - một người con gái đảm đang vùng đất này đã chỉ dạy dân làng cách trồng dâu, nuôi tằm, ươm tơ, dệt lụa, đặt nền móng cho làng nghề dệt vĩ đại nhất miền Bắc.'
      },
      {
        period: 'Thời Nhà Nguyễn (Thế kỷ XIX)',
        title: 'Được phong làm Quốc phục tiến vua',
        content: 'Lụa Vạn Phúc được triều đình nhà Nguyễn lựa chọn may hoàng bào cho vua chúa và hoàng tộc triều Nguyễn tại kinh đô Huế.'
      },
      {
        period: 'Năm 1931 - 1932 (Thời Pháp thuộc)',
        title: 'Vươn tầm thế giới tại Hội chợ Marseille và Paris',
        content: 'Lụa Hà Đông lần đầu tiên tham gia triển lãm quốc tế tại Marseille (Pháp) và được người Pháp đánh giá là một trong những dòng lụa tinh tế, quý phái nhất Đông Dương.'
      },
      {
        period: 'Hiện đại hóa & Bảo tồn số',
        title: 'Phát triển thương hiệu du lịch làng nghề quốc gia',
        content: 'Phố lụa Vạn Phúc kết hợp con đường ô rực rỡ, trung tâm bảo tồn tơ lụa tự nhiên và ứng dụng truy xuất nguồn gốc mã QR dệt trên biên lụa.'
      }
    ],
    culturalSignificance: 'Lụa tơ tằm Vạn Phúc mang vẻ đẹp dịu dàng, trang nhã của người phụ nữ Việt Nam, kết tinh sự mềm mại của tơ trời và sự nhẫn nại dệt gấm thêu hoa của người thợ thủ công.',
    festival: {
      name: 'Tuần lễ Văn hóa - Du lịch - Thương mại Làng lụa Vạn Phúc',
      dateLunar: 'Mồng 8 tháng 11 Dương lịch hàng năm',
      description: 'Lễ rước kiệu tôn vinh Thành hoàng làng và Tổ nghề Ả Lã Đê Nương, hội chợ trình diễn kỹ thuật dệt lụa sa, lụa quế và đêm hội áo dài truyền thống.'
    },
    coordinates: {
      lat: 20.9789,
      lng: 105.7725
    },
    metrics: {
      artisanTotal: 34,
      consentedCount: 28,
      activeWorkshops: 140,
      ocopProductsCount: 52
    },
    audioNarration: {
      title: 'Vạn Phúc - Tiếng thoi dệt huyền thoại nghìn năm',
      duration: '03:12',
      speaker: 'Giọng đọc Truyền thanh Di sản',
      transcript: 'Bước chân vào làng lụa Vạn Phúc, âm thanh lách cách của thoi đưa trên khung cửi rộn rã như khúc hoan ca của đất trời. Từng sợi tơ vàng óng ả nhả ra từ kén tằm, qua bàn tay tần tảo của các bà, các mẹ, đã kết tinh thành tấc lụa mượt mà mát rượi, nâng niu vẻ đẹp phụ nữ Việt qua ngút ngàn thế kỷ...'
    },
    productionProcess: [
      {
        stepNumber: 1,
        stageName: 'Giai đoạn 1',
        title: 'Trồng dâu, nuôi tằm & Ươm tơ tằm nguyên chất',
        summary: 'Kén tằm vàng hoặc kén trắng sau khi nhả tơ tròn đầy được cho vào nồi nước sôi để làm mềm chất keo xê-ri-xin. Dùng đũa khuấy tìm mối tơ và rút thành sợi tơ nõn tinh khiết.',
        technicalDetails: [
          'Nhiệt độ nước ươm tơ duy trì ổn định 80°C - 85°C để sợi tơ không bị đứt đoạn.',
          'Kết hợp từ 10 đến 12 sợi tơ kén đơn để bện thành 1 sợi tơ tằm chuẩn dệt.',
          'Quấn tơ vào guồng quay tạo thành các con tơ óng vàng tự nhiên.'
        ],
        traditionalTools: ['Nồi ươm tơ bằng đồng đỏ', 'Guồng tơ quay tay tre', 'Chổi tơ gom mối kén'],
        artisanSecret: 'Chọn kén tằm chín vàng ruộm đều đặn, không bị đốm đen để sợi tơ dai bóng và có độ bắt sáng tuyệt đối.',
        estimatedDuration: '25 ngày chu kỳ tằm nhả kén',
        soundAmbientLabel: 'Tiếng tằm ăn rỗi rào rào như mưa rơi và tiếng guồng quay tơ'
      },
      {
        stepNumber: 2,
        stageName: 'Giai đoạn 2',
        title: 'Mắc cửi, Nối tơ & Lên khung dệt cổ truyền',
        summary: 'Công đoạn chuẩn bị sợi dọc cực kỳ phức tạp. Hàng nghìn sợi tơ mỏng mảnh như tơ nhện được luồn chính xác qua từng go dệt và lược cài hoa văn mà không được phép rối hay đứt một sợi.',
        technicalDetails: [
          'Khung dệt lụa Vân cần từ 3.200 đến 4.800 sợi tơ dọc trên một khổ rộng 90cm.',
          'Cài đặt các thẻ bìa đục lỗ mẫu hoa văn (hệ thống rập hoa văn tựa như tiền thân máy tính).',
          'Độ căng của sợi dệt phải đồng đều 100% bằng hệ thống đối trọng đá xanh cổ.'
        ],
        traditionalTools: ['Bàn mắc cửi quay tròn', 'Khung go dệt bằng tre cật', 'Thoi dệt gỗ nghiến'],
        artisanSecret: 'Bàn tay người thợ luồn tơ phải sạch mát, không đổ mồ hôi tay để sợi tơ không bị xỉn màu tự nhiên.',
        estimatedDuration: '4 - 7 ngày kỳ công mắc cửi',
        soundAmbientLabel: 'Tiếng thanh go gõ nhẹ và tiếng luồn sợi thì thầm'
      },
      {
        stepNumber: 3,
        stageName: 'Giai đoạn 3',
        title: 'Dệt Lụa Vân hoa chìm nổi trên khung cửi',
        summary: 'Người thợ đạp bàn đạp nhịp nhàng, tay giật con thoi bay qua bay lại mang theo sợi ngang. Kỹ thuật dệt lụa Vân độc đáo tạo nên các hoa văn hình mây, cánh bướm, chữ Thọ chìm nổi biến ảo theo góc nhìn.',
        technicalDetails: [
          'Lụa Vân đòi hỏi thoi dệt chạy 2 lớp sợi đan chéo phức tạp: Vân là mây, lớp nền lụa sa mỏng thoáng khí còn hoa văn dệt dày đặc.',
          'Tốc độ dệt trung bình của nghệ nhân chỉ đạt khoảng 2 đến 3 mét lụa vân hoa mỗi ngày.',
          'Giữ nhịp chân đạp đều đặn để mật độ sợi khít chặt, không tạo lỗ rỗ trên mặt vải.'
        ],
        traditionalTools: ['Khung cửi gỗ lim cổ', 'Bộ thoi bay lòng máng', 'Thước đo cữ lụa'],
        artisanSecret: 'Nhịp tim và nhịp thở của người dệt phải hòa cùng nhịp thoi đưa; giật thoi nặng tay sẽ cộm sợi, nhẹ tay vải sẽ nhão.',
        estimatedDuration: '1 ngày dệt được 2 - 3 mét lụa cao cấp',
        soundAmbientLabel: 'Tiếng lách cách thoi đưa nhịp nhàng trên khung cửi'
      },
      {
        stepNumber: 4,
        stageName: 'Giai đoạn 4',
        title: 'Nấu tẩy chuội keo (Làm mềm sợi lụa)',
        summary: 'Lụa mộc sau dệt còn thô cứng vì lớp keo tự nhiên của tằm. Lụa được cuộn tròn thả vào nồi nước sôi pha tro bếp củi rơm hoặc nước bồ kết để tẩy sạch keo tự nhiên mà không dùng hóa chất tẩy công nghiệp.',
        technicalDetails: [
          'Nước nấu tẩy dùng nước mưa hoặc nước giếng khơi ngọt lành để lụa mềm mượt.',
          'Nấu liên tục trong 3 - 4 giờ ở nhiệt độ 95°C, đảo đều nhẹ nhàng tránh xước mặt lụa.',
          'Rửa lại nhiều lần bằng nước mát sạch cho đến khi sợi lụa óng mềm rủ như làn nước.'
        ],
        traditionalTools: ['Chảo đồng đại nấu chuội', 'Đũa cả gỗ khuấy lụa', 'Bể nước giếng khơi trong vắt'],
        artisanSecret: 'Dùng tro cây vừng hoặc tro củi xoan pha nước ngâm lụa; chất kiềm tự nhiên trong tro giúp lụa bền sợi cả trăm năm.',
        estimatedDuration: '8 giờ nấu chuội và xả nước',
        soundAmbientLabel: 'Tiếng nước sôi ùng ục và tiếng giũ lụa trong bể nước mát'
      },
      {
        stepNumber: 5,
        stageName: 'Giai đoạn 5',
        title: 'Nhuộm màu thảo mộc tự nhiên & Phơi gió',
        summary: 'Nhuộm lụa bằng các nguyên liệu thảo mộc truyền thống: củ nâu cho màu nâu trầm cổ điển, lá chàm cho sắc xanh thẫm, hoàng đằng cho sắc vàng rực, cánh kiến cho màu đỏ tía. Sau đó căng phơi trên sào tre dưới gió thu mát lành.',
        technicalDetails: [
          'Nhúng lụa qua dung dịch màu nhiều lần, vắt kiệt và phơi gió để màu ăn sâu vào lõi tơ.',
          'Phơi lụa trong bóng râm thoáng gió, tránh ánh nắng mặt trời chiếu trực tiếp làm giòn sợi.',
          'Dùng con lăn đá cẩm thạch cán phẳng mặt lụa sau khi khô để tăng độ bóng ngọc trai.'
        ],
        traditionalTools: ['Thùng gỗ sồi ngâm màu thảo mộc', 'Sào tre phơi lụa dài 12m', 'Khối đá cẩm thạch là lụa'],
        artisanSecret: 'Mỗi mẻ nhuộm thảo mộc mang một sắc thái riêng biệt theo độ nắng gió, tạo nên tính độc bản không tấm lụa nào trùng lặp tấm lụa nào.',
        estimatedDuration: '2 ngày nhuộm và phơi khô tự nhiên',
        soundAmbientLabel: 'Tiếng lụa bay phần phật trong làn gió mát đầu thu'
      }
    ],
    products: [
      {
        id: 'vp-01',
        villageId: 'van-phuc',
        name: 'Tấm Lụa Vân Cánh Bướm Tơ Tằm Thảo Mộc Thượng Hạng',
        artisanId: 'nnut-trieu-thi-tinh',
        artisanName: 'NNƯT. Triệu Thị Tình',
        material: '100% tơ tằm tự nhiên Bảo Lộc & Vạn Phúc, nhuộm cánh kiến và củ nâu',
        ocopRank: 5,
        dimensions: 'Khổ rộng 90cm x Dài 15 mét (cây lụa nguyên bản)',
        culturalMeaning: 'Hoa văn cánh bướm vờn mây đại diện cho sự tự do, thanh tao và tình yêu son sắt trường tồn.',
        techniquesUsed: ['Dệt hoa chìm nổi lụa Vân cổ', 'Nhuộm màu thảo mộc gia truyền', 'Chuội tro bếp không hóa chất'],
        estimatedTime: '20 ngày dệt thủ công',
        image: '/src/assets/images/craft_silk_vanphuc_1794233895275.jpg',
        priceReference: '6.500.000 VNĐ - 12.000.000 VNĐ / khúc vải áo dài',
        curatorNote: 'Được tuyển chọn trưng bày tại triển lãm tơ lụa quốc tế ASEAN.'
      }
    ]
  },
  {
    id: 'dong-ho',
    name: 'Làng Tranh Dân Gian Đông Hồ',
    category: 'folk-painting',
    categoryLabel: 'Tranh dân gian truyền thống',
    province: 'Bắc Ninh',
    locationAddress: 'Xã Song Hồ, Thị xã Thuận Thành, Tỉnh Bắc Ninh (bên bờ nam sông Đuống)',
    establishedEra: 'Thế kỷ XVI (thời Hậu Lê)',
    patronSaint: 'Tiền nhân các dòng họ Nguyễn Đăng, Nguyễn Thể...',
    heritageStatus: 'Hồ sơ đệ trình UNESCO ghi danh Di sản Văn hóa Phi vật thể cần bảo vệ khẩn cấp',
    coverImage: '/src/assets/images/craft_dongho_woodblock_1794233896259.jpg',
    briefDescription: 'Tranh dân gian Đông Hồ gắn liền với ký ức Tết cổ truyền dân tộc: "Tranh Đông Hồ gà lợn nét tươi trong / Màu dân tộc sáng bừng trên giấy điệp" (Hoàng Cầm). Điểm độc đáo có một không hai là giấy in làm từ vỏ sò điệp nghiền mịn lấp lánh ánh xà cừ và màu sắc hoàn toàn từ cỏ cây quặng khoáng.',
    historicalChronology: [
      {
        period: 'Thế kỷ XVI - XVII',
        title: 'Sáng tạo dòng tranh khắc gỗ dân gian độc bản',
        content: 'Bắt đầu từ thế kỷ 16, các nghệ nhân làng Đông Hồ bên dòng sông Đuống đã sáng tạo ra phương pháp khắc ván gỗ in tranh nhiều màu phục vụ nhu cầu tâm linh và chơi Tết của người nông dân châu thổ Bắc Bộ.'
      },
      {
        period: 'Thế kỷ XIX - Nửa đầu TK XX',
        title: 'Chợ tranh Tết Đông Hồ rực rỡ bên bến sông',
        content: 'Vào tháng Chạp hàng năm, chợ tranh Đông Hồ họp thâu đêm suốt sáng. Thương lái từ khắp bốn phương chèo thuyền về mua hàng triệu bản tranh gà, lợn, chuột, tranh chúc tụng mang đi khắp nước.'
      },
      {
        period: 'Năm 2020 - Nay',
        title: 'Hồ sơ UNESCO & Số hóa di sản tranh khắc gỗ',
        content: 'Việt Nam hoàn thiện hồ sơ đệ trình UNESCO công nhận nghề làm tranh dân gian Đông Hồ là Di sản văn hóa phi vật thể của nhân loại cần bảo vệ khẩn cấp.'
      }
    ],
    culturalSignificance: 'Phản ánh sinh động ước vọng giản dị mà thiêng liêng của người Việt về một cuộc sống sung túc, ấm no, con đàn cháu đống, hòa hợp thiên nhiên và đả kích thói hư tật xấu.',
    festival: {
      name: 'Chợ Tranh Tết Đông Hồ & Hội tưởng niệm tổ nghề',
      dateLunar: 'Tháng Chạp (ngày 6, 11, 16, 21, 26 tháng 12 Âm lịch) và rằm tháng 3',
      description: 'Phiên chợ tranh độc nhất vô nhị chỉ họp vào cuối năm để đón Tết và lễ dâng hương các bậc tiền hiền khai sáng nghề khắc ván in tranh.'
    },
    coordinates: {
      lat: 21.0543,
      lng: 106.0789
    },
    metrics: {
      artisanTotal: 18,
      consentedCount: 15,
      activeWorkshops: 12,
      ocopProductsCount: 30
    },
    audioNarration: {
      title: 'Đông Hồ - Hồn dân tộc lấp lánh trên giấy điệp',
      duration: '02:58',
      speaker: 'Giọng đọc Di sản Kinh Bắc',
      transcript: 'Lắng nghe nhịp chày đập giấy Dó bên bờ sông Đuống, ngắm ánh vỏ điệp lấp lánh như vảy bạc của trăng sao. Tranh Đông Hồ không cầu kỳ hoa mỹ mà mộc mạc, tươi tắn như chính nụ cười của người nông dân chân lấm tay bùn sau một mùa lúa bội thu...'
    },
    productionProcess: [
      {
        stepNumber: 1,
        stageName: 'Giai đoạn 1',
        title: 'Làm Giấy Dó & Quét hồ điệp lấp lánh',
        summary: 'Giấy Dó truyền thống làm từ vỏ cây dó rừng được quét một lớp hồ nếp quấy với bột vỏ điệp (vỏ con sò điệp biển nung chín và tán mịn). Dùng chổi lá thông quét đều tạo nên các đường vân xước óng ánh.',
        technicalDetails: [
          'Vỏ điệp biển nướng chín, giã trong cối đá thành bột trắng tinh xà cừ.',
          'Hồ dán nấu từ bột gạo nếp cái hoa vàng quánh mịn, không chua.',
          'Quét hồ điệp bằng chổi lá thông (thớ) theo chiều dọc để tạo gân tranh tự nhiên.'
        ],
        traditionalTools: ['Chổi quét thớ bằng lá thông tươi', 'Bát sành đựng hồ điệp', 'Chõ quấy hồ nếp'],
        artisanSecret: 'Hồ điệp phải quấy thật dẻo tay; vỏ điệp càng mịn thì ánh xà cừ khi ra ánh sáng mặt trời càng lung linh biến ảo.',
        estimatedDuration: '2 ngày chuẩn bị giấy điệp',
        soundAmbientLabel: 'Tiếng chổi lá thông quét sột soạt trên nền giấy Dó mỏng manh'
      },
      {
        stepNumber: 2,
        stageName: 'Giai đoạn 2',
        title: 'Khắc ván in tranh bằng gỗ thị (Kỹ nghệ tạo hình)',
        summary: 'Nghệ nhân dùng bộ đục chuyên dụng để chạm khắc hình ảnh lên thớ gỗ thị hoặc gỗ lồng mực. Mỗi bức tranh cần từ 4 đến 5 ván in: 1 ván nét đen và 3-4 ván in từng mảng màu riêng biệt.',
        technicalDetails: [
          'Gỗ thị dẻo dai, thớ mịn, không co ngót và không mối mọt dù ngấm nước màu hàng chục năm.',
          'Độ sâu của nét khắc từ 2mm - 3mm để giữ mực in sắc nét không bị nhòe.',
          'Các góc mộng định vị phải chính xác tuyệt đối để khi in chồng màu các lớp không bị lệch.'
        ],
        traditionalTools: ['Bộ ve đục thép tôi', 'Búa vồ gỗ lim', 'Đá mài bùn mài sắc lưỡi đục'],
        artisanSecret: 'Khắc ngược bản nét chữ và họa tiết; nét khắc phải có "độ vát lưỡi rựa" để khi ép in tranh nét mực thoát đều đặn.',
        estimatedDuration: '15 - 30 ngày cho một bộ ván in tranh mới',
        soundAmbientLabel: 'Tiếng đục chạm canh cách gõ đều trên phiến gỗ thị'
      },
      {
        stepNumber: 3,
        stageName: 'Giai đoạn 3',
        title: 'Chế tác màu sắc tự nhiên từ cỏ cây, khoáng vật',
        summary: 'Không dùng bất kỳ giọt phẩm màu hóa học nào. Màu sắc Đông Hồ hoàn toàn từ thiên nhiên: Màu đen từ than lá tre đốt kín; màu vàng từ hoa hòe hoặc củ dành dành; màu đỏ từ sỏi son đỏ trên núi Thiên Thai; màu xanh từ gỉ đồng hoặc lá chàm.',
        technicalDetails: [
          'Than lá tre phơi khô hạ thổ rồi nghiền nát tạo màu đen tuyền bóng mờ.',
          'Nước hoa hòe sao vàng nấu sôi cô đặc tạo sắc vàng ấm áp như nắng thu.',
          'Đá son mài trên đá mài tạo màu đỏ son linh thiêng bền bỉ hàng trăm năm.'
        ],
        traditionalTools: ['Cối đá giã than tre', 'Nồi đồng cô nước hoa hòe', 'Thớt gỗ nghiền màu sỏi'],
        artisanSecret: 'Mỗi mẻ màu pha cùng một lượng hồ nếp vừa đủ để màu bám chắc vào giấy điệp mà không bị bong tróc theo năm tháng.',
        estimatedDuration: '3 ngày chưng cất và pha chế các hũ màu',
        soundAmbientLabel: 'Tiếng giã cối đá đều đặn nghiền các sắc màu tự nhiên'
      },
      {
        stepNumber: 4,
        stageName: 'Giai đoạn 4',
        title: 'In tranh từng lớp màu & Bản nét then cuối cùng',
        summary: 'Dùng xơ mướp khô quét màu lên ván in. Đặt giấy điệp úp lên mặt ván, dùng xơ mướp thứ hai chà nhẹ lên lưng giấy để màu ngấm đều. In lần lượt từng màu: màu đỏ trước, vàng, xanh rồi cuối cùng mới in ván nét đen để chốt khung hình.',
        technicalDetails: [
          'Phải đợi màu trước khô ráo hoàn toàn mới được in màu tiếp theo lên giấy.',
          'Lực chà xơ mướp phải đều tay khắp mặt tranh, tránh làm rách giấy Dó mỏng.',
          'Ván nét đen (nét then) là linh hồn bức tranh, quyết định sự thần thái của nhân vật.'
        ],
        traditionalTools: ['Xơ mướp khô rửa sạch', 'Bàn in gỗ nghiêng 15 độ', 'Bìa kẹp căn góc tranh'],
        artisanSecret: 'Xơ mướp già có độ đàn hồi tự nhiên hoàn hảo hơn mọi loại bọt biển nhân tạo, giúp mực màu thấm đượm vào thớ giấy.',
        estimatedDuration: '1 ngày in mẻ tranh 50 tờ',
        soundAmbientLabel: 'Tiếng xơ mướp chà rào rào trên lưng giấy Dó'
      },
      {
        stepNumber: 5,
        stageName: 'Giai đoạn 5',
        title: 'Phơi tranh nơi lộng gió & Đóng triện bảo chứng',
        summary: 'Tranh in xong được rải trên phên tre hoặc kẹp trên dây thép phơi nơi thoáng gió râm mát. Kiểm tra từng bản in, loại bỏ tranh lem mực rồi đóng triện đỏ của dòng họ nghệ nhân bảo chứng.',
        technicalDetails: [
          'Không phơi trực tiếp dưới ánh nắng mặt trời kẻo làm cong giòn giấy Dó.',
          'Kiểm tra độ phủ màu và độ sáng của ánh điệp.',
          'Đóng triện son dấu danh tính dòng họ nghệ nhân Đông Hồ.'
        ],
        traditionalTools: ['Phên tre phơi tranh dài', 'Triện đồng khắc chữ Nôm dòng họ', 'Hộp son chu sa'],
        artisanSecret: 'Phơi bằng ngọn gió nam ấm áp để màu tranh ngấu sâu, giữ tranh thơm ngát mùi cỏ cây hoa lá và nếp mới.',
        estimatedDuration: '1 - 2 ngày hoàn thiện',
        soundAmbientLabel: 'Tiếng phên tre rung rinh và hương thơm tranh mới ngào ngạt'
      }
    ],
    products: [
      {
        id: 'dh-01',
        villageId: 'dong-ho',
        name: 'Tranh Đôi "Vinh Hoa - Phú Quý" Khắc Gỗ Cổ Truyền',
        artisanId: 'nnnd-nguyen-dang-che',
        artisanName: 'NNND. Nguyễn Đăng Chế',
        material: 'Giấy Dó quét điệp tự nhiên, màu thảo mộc quặng son, bản khắc gỗ thị hơn 100 năm',
        ocopRank: 5,
        dimensions: '40cm x 60cm mỗi bức (Bộ đôi)',
        culturalMeaning: 'Bé trai ôm gà trống tượng trưng cho sự dũng cảm, ngũ đức và vinh hoa. Bé gái ôm vịt tượng trưng cho sự duyên dáng, sinh sôi nảy nở và phú quý ấm no.',
        techniquesUsed: ['In thủ công 5 bản ván màu', 'Giấy Dó điệp quét thớ lá thông', 'Màu son núi Thiên Thai'],
        estimatedTime: '7 ngày chế tác mộc',
        image: '/src/assets/images/craft_dongho_woodblock_1794233896259.jpg',
        priceReference: '850.000 VNĐ - 1.600.000 VNĐ / bộ nguyên bản kèm khung tre',
        curatorNote: 'Bảo vật phục dựng từ bản khắc cổ thời Nguyễn của dòng họ Nguyễn Đăng.'
      }
    ]
  },
  {
    id: 'non-chuong',
    name: 'Làng Nón Chuông (Thanh Oai)',
    category: 'bamboo',
    categoryLabel: 'Nón lá & Thủ công truyền thống',
    province: 'Hà Nội',
    locationAddress: 'Xã Phương Trung (Làng Chuông), Huyện Thanh Oai, Thành phố Hà Nội',
    establishedEra: 'Thế kỷ VIII (Thời Tiền Lê - Lý)',
    patronSaint: 'Bà Hai đền Cổ Đông (Tổ nghề chằm nón lá)',
    heritageStatus: 'Làng nghề truyền thống tiêu biểu Thủ đô Hà Nội',
    coverImage: '/src/assets/images/craft_silk_vanphuc_1794233895275.jpg',
    briefDescription: 'Làng Chuông từ ngàn xưa đã nổi tiếng với các sản phẩm nón lá, nón quai thao, nón ba tầm duyên dáng. Chiếc nón làng Chuông không chỉ che mưa che nắng mà đã trở thành biểu tượng thanh thoát, e ấp của người phụ nữ Việt Nam trong tà áo dài.',
    historicalChronology: [
      {
        period: 'Thế kỷ VIII - X',
        title: 'Khởi dựng nghề chằm nón lá ven sông Đáy',
        content: 'Dân làng bên bờ sông Đáy đã học nghề đan nón từ thời phong kiến sơ khai, phục vụ nhu cầu che mưa nắng của binh lính và người nông dân Bắc Bộ.'
      },
      {
        period: 'Thế kỷ XIX (Thời Nguyễn)',
        title: 'Thời kỳ rực rỡ của nón quai thao tiến cung',
        content: 'Nón quai thao làng Chuông với đường kính tròn rộng, quai thao bằng tơ tím tơ đen trở thành phục sức quý phái của các tiểu thư khuê các và thiếu nữ quan họ Kinh Bắc.'
      },
      {
        period: 'Thế kỷ XXI',
        title: 'Đổi mới sáng tạo nón lụa, nón sen mỹ thuật',
        content: 'Nghệ nhân làng Chuông sáng tạo thêm nón lá bồ đề, nón lụa Hà Đông, nón vẽ hoa sen phục vụ du khách năm châu.'
      }
    ],
    culturalSignificance: 'Chiếc nón lá là biểu tượng văn hóa thanh tao gắn với tà áo dài duyên dáng, gửi gắm sự dịu dàng và nét đẹp đoan trang của người phụ nữ Việt Nam.',
    festival: {
      name: 'Hội làng Chuông & Phiên chợ Nón mồng 4, 10, 14, 20, 24, 30 Âm lịch',
      dateLunar: 'Mồng 10 tháng Giêng Âm lịch',
      description: 'Phiên chợ nón họp từ sáng sớm tinh mơ ven đê sông Đáy, hội tụ hàng vạn chiếc nón trắng muốt và lễ rước Thành hoàng làng.'
    },
    coordinates: {
      lat: 20.8524,
      lng: 105.7891
    },
    metrics: {
      artisanTotal: 22,
      consentedCount: 19,
      activeWorkshops: 85,
      ocopProductsCount: 24
    },
    audioNarration: {
      title: 'Làng Chuông - Vành nón nghiêng che nét duyên thầm',
      duration: '02:40',
      speaker: 'Giọng đọc Thuyết minh Duyên hải',
      transcript: 'Ai về thăm lại làng Chuông, ngắm bàn tay thoăn thoắt khâu từng đường kim mũi cước trên vành nón trắng tinh khôi. Mười sáu vành nón uốn cong như trăng rằm, gom cả nắng hè và hương gió đồng nội nâng niu vẻ đẹp hồn hậu nước non...'
    },
    productionProcess: [
      {
        stepNumber: 1,
        stageName: 'Giai đoạn 1',
        title: 'Chọn lá lụi & Là lá phẳng phiu bằng lưỡi cày',
        summary: 'Lá nón đem từ rừng đồi miền Trung về được phơi sương, phơi nắng. Nghệ nhân dùng lưỡi cày gang hơ nóng trên than hồng miết từng chiếc lá cho phẳng phiu mà không bị cháy xém.',
        technicalDetails: ['Nhiệt độ lưỡi gang khoảng 70°C vừa đủ', 'Là nhẹ tay từng phiến lá trắng xanh', 'Xếp lá theo độ dày đều nhau'],
        traditionalTools: ['Lưỡi cày gang cổ', 'Bọc giẻ lau lá', 'Bếp than đượm'],
        artisanSecret: 'Hơ lưỡi cày vừa tới nhiệt; nóng quá lá sẽ giòn gãy, nguội quá lá sẽ quăn mép không phẳng.',
        estimatedDuration: '2 ngày chuẩn bị và là lá',
        soundAmbientLabel: 'Tiếng xèo xèo êm ái khi miết lá trên lưỡi gang ấm'
      },
      {
        stepNumber: 2,
        stageName: 'Giai đoạn 2',
        title: 'Uốn 16 vành nón bằng nứa tre dẻo dai',
        summary: 'Vót nứa cật tròn đều, uốn thành 16 vòng tròn đường kính thu nhỏ dần từ vành đáy lên chóp nón. 16 vành nón này được xếp vào khung nón chuẩn xác.',
        technicalDetails: ['16 vành nón biểu trưng cho 16 tuổi trăng tròn tròn trịa', 'Mối nối vành nứa dùng chỉ cước cột chặt không gồ ghề', 'Khoảng cách giữa các vành đồng đều từng milimét'],
        traditionalTools: ['Khung nón bằng gỗ xoan', 'Dao vót vành nứa siêu bén', 'Dây đo cữ'],
        artisanSecret: 'Chọn nứa cật rừng già bánh tẻ để vành nón dẻo dai không bao giờ gãy gập dù gặp mưa bão.',
        estimatedDuration: '1 ngày vót và vào khung 10 chiếc nón',
        soundAmbientLabel: 'Tiếng dao vót nứa xoèn xoẹt giòn tan'
      },
      {
        stepNumber: 3,
        stageName: 'Giai đoạn 3',
        title: 'Chằm nón bằng sợi cước tơ trong suốt',
        summary: 'Xếp 2 lớp lá: lớp trong lá mỏng, ở giữa lót mo tre tăng độ cứng cáp chống thấm, ngoài cùng là lớp lá trắng muốt. Nghệ nhân dùng kim khâu từng mũi cước đều tăm tắp.',
        technicalDetails: ['Mỗi chiếc nón có hàng nghìn mũi khâu cách đều nhau 1mm', 'Đầu chỉ giấu kín đáo không lộ mối nối', 'Khâu nẹp vành chắc chắn'],
        traditionalTools: ['Kim khâu nón chuốt nhọn', 'Ống chỉ cước cước tơ trong suốt', 'Kìm kéo mũi kim'],
        artisanSecret: 'Mũi khâu phải giấu sợi cước vào thớ lá, nhìn từ ngoài vào mượt mà như một dải lụa không vết chỉ.',
        estimatedDuration: '4 - 5 giờ khâu 1 chiếc nón kỳ công',
        soundAmbientLabel: 'Tiếng rút sợi cước soàn soạt qua kẽ lá nón'
      }
    ],
    products: [
      {
        id: 'nc-01',
        villageId: 'non-chuong',
        name: 'Nón Quai Thao Nghệ Thuật Làng Chuông Thượng Phẩm',
        material: 'Lá cọ trắng, vành nứa cật, quai thao tơ tằm dệt thủ công có tua rua tím',
        ocopRank: 4,
        dimensions: 'Đường kính 75cm, quai tơ dài 1m',
        culturalMeaning: 'Trang phục truyền thống gắn liền với điệu hát Dân ca Quan họ Bắc Ninh, tôn vinh nét e ấp duyên dáng của người con gái Kinh Bắc.',
        techniquesUsed: ['Chằm nón 16 vành', 'Bện quai thao tơ tằm cổ', 'Gắn gương soi mini lòng chóp nón'],
        estimatedTime: '3 ngày công tỉ mỉ',
        image: '/src/assets/images/craft_silk_vanphuc_1794233895275.jpg',
        priceReference: '650.000 VNĐ - 1.200.000 VNĐ',
        curatorNote: 'Sản phẩm phục vụ biểu diễn nghệ thuật di sản dân tộc và ngoại giao văn hóa.'
      }
    ]
  }
];

// Danh sách nghệ nhân đã ký biên bản đồng ý công bố thông tin số hóa (Bảo tồn di sản theo quy định nhà nước)
export const INITIAL_ARTISANS: Artisan[] = [
  {
    id: 'nnnd-tran-do',
    villageId: 'bat-trang',
    fullName: 'Trần Độ',
    birthYear: 1957,
    gender: 'male',
    title: 'Nghệ nhân Nhân dân',
    titleAcronym: 'NNND',
    avatar: '/src/assets/images/artisan_portrait_tran_do_1794233896847.jpg',
    experienceYears: 52,
    generation: 'Đời thứ 18 dòng họ Trần gốm Bát Tràng',
    consentStatus: true,
    consentDate: '12/04/2024',
    consentDocRef: 'BB-CBTT/2024-NN-018 (Biên bản đồng ý công bố thông tin di sản)',
    workshopName: 'Xưởng Gốm Trần Độ Tinh Hoa Cổ Điển',
    address: 'Số 12, Thôn 1 Làng cổ Bát Tràng, Gia Lâm, Hà Nội',
    phone: '0913 228 945',
    email: 'nghenhantrando.battrang@heritage.vn',
    quote: 'Làm gốm không chỉ cần bàn tay khéo mà phải có cái tâm tĩnh lặng. Ngọn lửa trong lò nung cũng như ngọn lửa đam mê trong lòng người thợ, khi nào đất hòa làm một với hồn người thì men ngọc mới cất lời.',
    achievements: [
      'Phong tặng danh hiệu Nghệ nhân Nhân dân cấp Nhà nước năm 2016',
      'Phục dựng thành công trên 70 bài men gốm cổ thời Lý, Trần, Lê, Mạc đã thất truyền hàng trăm năm',
      'Chế tác bộ 1.000 tác phẩm gốm dâng Đại lễ 1000 năm Thăng Long - Hà Nội',
      'Được Nhà nước tin tưởng giao phục chế hiện vật gốm hoàng cung tại Hoàng thành Thăng Long'
    ],
    signatureSpecialty: 'Phục dựng các dòng men rạn tam thái, men ngọc celadon cổ thời Lý - Trần và đỉnh gốm thờ ngự dụng',
    isVerifiedConsent: true
  },
  {
    id: 'nnut-vuong-manh-tuan',
    villageId: 'bat-trang',
    fullName: 'Vương Mạnh Tuấn',
    birthYear: 1963,
    gender: 'male',
    title: 'Nghệ nhân Ưu tú',
    titleAcronym: 'NNƯT',
    avatar: '/src/assets/images/hero_craft_village_battrang_1794233894576.jpg',
    experienceYears: 44,
    generation: 'Đời thứ 6 dòng họ Vương Bát Tràng',
    consentStatus: true,
    consentDate: '18/06/2024',
    consentDocRef: 'BB-CBTT/2024-NN-029 (Biên bản đồng ý công bố thông tin di sản)',
    workshopName: 'Cơ sở Gốm Tử Sa Tuấn Bát Tràng',
    address: 'Xóm 3, Xã Bát Tràng, Gia Lâm, Hà Nội',
    phone: '0904 156 388',
    email: 'vuongmanhtuan.pottery@battrang.org',
    quote: 'Gốm đất đỏ tử sa Bát Tràng không thua kém bất kỳ dòng ấm trà nào trên thế giới. Đất phù sa sông Hồng qua bàn tay tôi luyện tỏa ra vị trà thơm thuần khiết nhất.',
    achievements: [
      'Danh hiệu Nghệ nhân Ưu tú năm 2019',
      'Nghiên cứu thành công dòng ấm gốm Tử Sa gốm Việt giữ nhiệt và dưỡng trà đặc sắc',
      'Huy chương Vàng Hội chợ Hàng thủ công mỹ nghệ quốc tế'
    ],
    signatureSpecialty: 'Chế tác ấm chén gốm đất đỏ tử sa và đồ thờ men lam trầm mặc',
    isVerifiedConsent: true
  },
  {
    id: 'nnut-trieu-thi-tinh',
    villageId: 'van-phuc',
    fullName: 'Triệu Thị Tình',
    birthYear: 1954,
    gender: 'female',
    title: 'Nghệ nhân Ưu tú',
    titleAcronym: 'NNƯT',
    avatar: '/src/assets/images/artisan_portrait_trieu_thi_tinh_1794233897310.jpg',
    experienceYears: 56,
    generation: 'Đời thứ 5 dòng họ Triệu dệt lụa Vạn Phúc',
    consentStatus: true,
    consentDate: '24/05/2024',
    consentDocRef: 'BB-CBTT/2024-NN-005 (Biên bản đồng ý công bố thông tin di sản)',
    workshopName: 'Xưởng Dệt Lụa Tơ Tằm Cổ Truyền Triệu Tình',
    address: 'Phố Lụa Vạn Phúc, Phường Vạn Phúc, Quận Hà Đông, Hà Nội',
    phone: '0983 451 279',
    email: 'trieuthitinh.silk@vanphuc.vn',
    quote: 'Mỗi tiếng lách cách của thoi đưa là nhịp đập của trái tim làng lụa. Dù cơ khí hóa có phát triển đến đâu, tấc lụa dệt tay từ tình yêu quê hương vẫn có linh hồn mà máy móc không thể nào sao chép được.',
    achievements: [
      'Phong tặng danh hiệu Nghệ nhân Ưu tú ngành nghề dệt thủ công năm 2016',
      'Khôi phục thành công kỹ thuật dệt Lụa Sa cổ và Lụa Vân Cánh Bướm truyền thống',
      'Đại diện nghệ nhân Việt Nam trình diễn nghề dệt tại Pháp, Nhật Bản và Hàn Quốc',
      'Đào tạo và truyền nghề miễn phí cho hơn 120 thiếu nữ và người khuyết tật địa phương'
    ],
    signatureSpecialty: 'Kỹ nghệ dệt lụa Vân hoa chìm nổi cổ truyền và nhuộm màu thảo mộc thiên nhiên',
    isVerifiedConsent: true
  },
  {
    id: 'nnnd-nguyen-dang-che',
    villageId: 'dong-ho',
    fullName: 'Nguyễn Đăng Chế',
    birthYear: 1935,
    gender: 'male',
    title: 'Nghệ nhân Nhân dân',
    titleAcronym: 'NNND',
    avatar: '/src/assets/images/craft_dongho_woodblock_1794233896259.jpg',
    experienceYears: 70,
    generation: 'Đời thứ 20 dòng họ Nguyễn Đăng làng tranh Đông Hồ',
    consentStatus: true,
    consentDate: '05/03/2024',
    consentDocRef: 'BB-CBTT/2024-NN-001 (Biên bản đồng ý công bố thông tin di sản)',
    workshopName: 'Trung tâm Bảo tồn & Gìn giữ Tranh Dân gian Đông Hồ Nguyễn Đăng Chế',
    address: 'Thôn Đông Khê, Xã Song Hồ, Thị xã Thuận Thành, Tỉnh Bắc Ninh',
    phone: '0912 384 521',
    email: 'nguyendangche.dongho@heritage.vn',
    quote: 'Tôi dành cả cuộc đời lặn lội gom từng bản ván in cổ của cha ông bị thất lạc. Tranh Đông Hồ là hồn dân tộc, chừng nào dòng sông Đuống còn chảy thì màu dân tộc trên giấy điệp không bao giờ được phép phai tàn.',
    achievements: [
      'Nghệ nhân Nhân dân đầu tiên của làng tranh dân gian Đông Hồ',
      'Sưu tầm và phục dựng hơn 200 bộ ván in cổ quý hiếm từ thế kỷ XVIII đến nay',
      'Tự bỏ vốn xây dựng Trung tâm Bảo tồn Tranh Đông Hồ rộng hơn 5.000m² đón hàng vạn du khách quốc tế',
      'Cố vấn trưởng hồ sơ quốc gia đệ trình UNESCO công nhận nghề tranh Đông Hồ'
    ],
    signatureSpecialty: 'Khắc ván in gỗ thị và pha chế bảng màu tự nhiên từ lá tre, sỏi son, hoa hòe, sò điệp',
    isVerifiedConsent: true
  },
  {
    id: 'nnut-nguyen-van-su',
    villageId: 'non-chuong',
    fullName: 'Tạ Thu Hương (Nghệ nhân Nón Chuông)',
    birthYear: 1968,
    gender: 'female',
    title: 'Nghệ nhân Ưu tú',
    titleAcronym: 'NNƯT',
    avatar: '/src/assets/images/craft_silk_vanphuc_1794233895275.jpg',
    experienceYears: 42,
    generation: 'Đời thứ 4 làm nón Làng Chuông',
    consentStatus: true,
    consentDate: '10/05/2024',
    consentDocRef: 'BB-CBTT/2024-NN-031 (Biên bản đồng ý công bố thông tin di sản)',
    workshopName: 'Cơ sở Sản xuất Nón Lá Nghệ Thuật Thu Hương',
    address: 'Làng Chuông, Xã Phương Trung, Huyện Thanh Oai, Hà Nội',
    phone: '0979 382 190',
    email: 'thuhuong.nonchuong@heritage.vn',
    quote: 'Chiếc nón lá che đầu cho người nông dân, chở che cả nét duyên dáng con gái Việt. Mỗi mũi kim tôi khâu như gửi trọn niềm tự hào về truyền thống quê hương mình vào từng vành nứa cong cong.',
    achievements: [
      'Được trao tặng danh hiệu Nghệ nhân Hà Nội năm 2018',
      'Sáng tạo dòng nón lụa và nón lá sen xuất khẩu sang hơn 20 quốc gia châu Âu và Nhật Bản',
      'Chủ trì khôi phục thành công mẫu nón quai thao cổ trang phục Quan họ Kinh Bắc'
    ],
    signatureSpecialty: 'Chế tác nón quai thao 3 tầng và nón lá bồ đề mỹ nghệ cao cấp',
    isVerifiedConsent: true
  }
];
