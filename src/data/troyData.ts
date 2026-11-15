import heroTroyCitadel from '../assets/images/hero_troy_citadel_1794711130634.jpg';
import mythGoldenApple from '../assets/images/myth_golden_apple_1794711131691.jpg';
import sceneHectorAndromache from '../assets/images/scene_hector_andromache_1794711132026.jpg';
import artifactTrojanHorse from '../assets/images/artifact_trojan_horse_1794711132324.jpg';

export const TROY_IMAGES = {
  heroCitadel: heroTroyCitadel,
  goldenApple: mythGoldenApple,
  hectorFarewell: sceneHectorAndromache,
  trojanHorse: artifactTrojanHorse,
};

export interface TimelineStage {
  id: string;
  step: string;
  timeframe: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  caption: string;
  summary: string;
  keyConflict: string;
  literaryNote: string;
}

export const TIMELINE_STAGES: TimelineStage[] = [
  {
    id: 'golden-apple',
    step: '01',
    timeframe: 'Khởi nguồn thần thoại',
    title: 'Quả táo vàng bất hòa & Phán xét của Pa-rít',
    subtitle: 'Mối bất hòa từ đỉnh Ô-lim-pơ dẫn tới cuộc chiến mười năm',
    image: mythGoldenApple,
    imageAlt: 'Quả táo vàng nằm trên phiến đá cẩm thạch cạnh cành ô-liu trên đỉnh núi I-đa',
    caption: 'Hình 2 · Quả táo vàng khắc dòng chữ "Dành cho người đẹp nhất" khởi nguồn mối chia rẽ giữa các nữ thần.',
    summary:
      'Tại tiệc cưới của hải thần Thê-tít và vua Pê-lê, nữ thần Bất Hòa Ê-rít tung ra quả táo vàng ghi dòng chữ "Tặng người đẹp nhất". Ba nữ thần Hê-ra, A-tê-na và A-phrô-đi-tơ tranh chấp quyết liệt và giao quyền phân xử cho hoàng tử Pa-rít thành Tơ-roa.',
    keyConflict:
      'Pa-rít chọn A-phrô-đi-tơ để đổi lấy tình yêu của nàng Hê-len xinh đẹp — hoàng hậu xứ Xpác. Khi Pa-rít đưa Hê-len về Tơ-roa, liên quân Hy Lạp dưới trướng A-ga-mem-nông phát động chiến tranh.',
    literaryNote:
      'Cho thấy thế giới quan sử thi cổ đại: biến cố lịch sử của con người luôn bắt nguồn từ ý chí và xung đột của các vị thần.',
  },
  {
    id: 'ten-year-siege',
    step: '02',
    timeframe: 'Năm thứ 1 – Năm thứ 10',
    title: 'Mười năm vây hãm thành Tơ-roa & Cơn giận của A-sin',
    subtitle: 'Bức tường thành bất khả xâm phạm và sự can dự của thần linh',
    image: heroTroyCitadel,
    imageAlt: 'Toàn cảnh thành cổ Tơ-roa kiên cố nhìn ra biển Ê-giê và hạm đội chiến thuyền Hy Lạp',
    caption: 'Hình 3 · Thành Tơ-roa bên bờ biển Ê-giê kiên cường chống đỡ suốt thập kỷ trước hạm đội nghìn thuyền.',
    summary:
      'Suốt chín năm đầu, quân Hy Lạp không thể công phá bức tường đá do thần Pô-dê-i-đông và A-pô-lô góp sức xây dựng. Bước sang năm thứ mười — bối cảnh trực tiếp của sử thi I-li-át — dũng sĩ A-sin rút khỏi trận tuyến vì mâu thuẫn với chủ soái A-ga-mem-nông.',
    keyConflict:
      'Thiếu vắng A-sin, quân Hy Lạp liên tiếp thất thế. Hoàng tử Héc-to dẫn quân Tơ-roa phản công dồn dập tới tận bãi thuyền chiến của quân Hy Lạp.',
    literaryNote:
      'Chữ đầu tiên của I-li-át là "Mênis" (Cơn giận): tác phẩm không kể toàn bộ cuộc chiến mà tập trung vào 51 ngày cuối năm thứ mười.',
  },
  {
    id: 'hector-farewell',
    step: '03',
    timeframe: 'Khúc ca VI · Trọng tâm SGK Ngữ Văn 10',
    title: 'Héc-to từ biệt Ăng-đrô-mác tại cổng Xkê',
    subtitle: 'Khoảnh khắc nhân văn giữa bổn phận cộng đồng và tình cảm gia đình',
    image: sceneHectorAndromache,
    imageAlt: 'Hoàng tử Héc-to trong bộ giáp đồng dịu dàng từ biệt nàng Ăng-đrô-mác và con thơ tại cổng Xkê',
    caption: 'Hình 4 · Cuộc chia tay cảm động giữa chủ soái Héc-to và hiền thê Ăng-đrô-mác bên cổng Xkê.',
    summary:
      'Trước giờ trở lại chiến trường khốc liệt, Héc-to về thành tế thần và gặp vợ con tại cổng Xkê. Nàng Ăng-đrô-mác khẩn cầu chồng ở lại bảo toàn tính mạng cho gia đình, nhưng Héc-to vẫn chọn ra trận vì danh dự và nghĩa vụ bảo vệ thành Tơ-roa.',
    keyConflict:
      'Sự giằng xé nội tâm sâu sắc: Héc-to thấu hiểu bi kịch đang chờ vợ con nếu thành thất thủ, nhưng không thể sống hèn nhát quay lưng với đồng bào.',
    literaryNote:
      'Văn bản trọng tâm Bài 4 Ngữ Văn 10 (Kết nối tri thức): khắc họa chuẩn mực người anh hùng sử thi vừa dũng cảm vừa giàu tình thương.',
  },
  {
    id: 'trojan-horse',
    step: '04',
    timeframe: 'Hồi kết cuộc chiến',
    title: 'Mưu kế Con ngựa gỗ thành Troy',
    subtitle: 'Trí tuệ của Ô-đi-xê khép lại bản anh hùng ca bi tráng',
    image: artifactTrojanHorse,
    imageAlt: 'Bức họa minh họa con ngựa gỗ khổng lồ trước cổng thành đá Tơ-roa lúc hoàng hôn',
    caption: 'Hình 5 · Con ngựa gỗ khổng lồ do Ô-đi-xê bày mưu, được dựng bằng gỗ thông thiêng và dâng làm lễ vật giả.',
    summary:
      'Sau khi Héc-to ngã xuống dưới mũi giáo A-sin và A-sin cũng tử trận vì mũi tên bắn trúng gót chân, quân Hy Lạp dùng mưu của Ô-đi-xê: đóng một con ngựa gỗ khổng lồ giấu tinh binh bên trong rồi giả vờ rút thuyền.',
    keyConflict:
      'Bất chấp lời cảnh báo của công chúa Ca-xăng-đơ và tư tế La-ô-cô-ông, người dân Tơ-roa kéo ngựa vào thành ăn mừng. Đêm xuống, quân Hy Lạp mở cổng thành cho đại quân tràn vào.',
    literaryNote:
      'Sự sụp đổ của thành Tơ-roa mở ra hành trình mười năm phiêu lưu đầy thử thách trên biển cả của Ô-đi-xê trong sử thi Odyssey.',
  },
];

export type FigureFaction = 'all' | 'troy' | 'greece' | 'olympus';

export interface MythFigure {
  id: string;
  index: string;
  name: string;
  greekName: string;
  faction: Exclude<FigureFaction, 'all'>;
  factionLabel: string;
  category: 'Thần linh' | 'Anh hùng' | 'Nhân vật SGK';
  title: string;
  epithet: string;
  roleInWar: string;
  keyMoment: string;
  grade10Link: string;
}

export const MYTH_FIGURES: MythFigure[] = [
  {
    id: 'hector',
    index: '01',
    name: 'Hoàng tử Héc-to',
    greekName: 'Hector',
    faction: 'troy',
    factionLabel: 'Phe Thành Troy',
    category: 'Nhân vật SGK',
    title: 'Chủ soái quân đội thành Tơ-roa, con trưởng vua Pri-am',
    epithet: 'Héc-to lẫy lừng, mũ trụ sáng loáng',
    roleInWar:
      'Trụ cột tinh thần và quân sự vững chắc nhất bảo vệ thành Tơ-roa. Khác với A-sin chiến đấu vì danh dự cá nhân, Héc-to chiến đấu để che chở cho cha già, vợ hiền, con thơ và toàn thể nhân dân.',
    keyMoment:
      'Từ chối lời níu kéo của Ăng-đrô-mác tại cổng Xkê, cởi mũ trụ để dỗ con trai A-xti-a-nắc đang khóc thét rồi thanh thản bước ra mặt trận.',
    grade10Link:
      'Nhân vật trung tâm đoạn trích "Héc-to từ biệt Ăng-đrô-mác" (Ngữ Văn 10). Tiêu biểu cho vẻ đẹp bi tráng của người anh hùng sử thi cổ đại.',
  },
  {
    id: 'andromache',
    index: '02',
    name: 'Nàng Ăng-đrô-mác',
    greekName: 'Andromache',
    faction: 'troy',
    factionLabel: 'Phe Thành Troy',
    category: 'Nhân vật SGK',
    title: 'Hiền thê của Héc-to, con gái vua xứ Tê-bơ',
    epithet: 'Ăng-đrô-mác cánh tay trắng ngần',
    roleInWar:
      'Đại diện cho tiếng nói của tình yêu thương gia đình, khát vọng hòa bình và nỗi đau của người phụ nữ trước thảm họa chiến tranh.',
    keyMoment:
      'Ôm con chạy tới cổng Xkê, nhắc lại bi kịch gia đình đã mất hết cha và bảy anh em trai dưới tay A-sin để cầu xin Héc-to ở lại giữ tường thành.',
    grade10Link:
      'Là đối trọng nhân văn giúp bộc lộ trọn vẹn chiều sâu nội tâm, tình cảm vợ chồng và phụ tử của Héc-to trong bài học Ngữ Văn 10.',
  },
  {
    id: 'apollo',
    index: '03',
    name: 'Thần A-pô-lô',
    greekName: 'Apollo',
    faction: 'troy',
    factionLabel: 'Phe Thành Troy',
    category: 'Thần linh',
    title: 'Thần Ánh sáng, Âm nhạc, Cung tiễn & Tiên tri',
    epithet: 'A-pô-lô bắn xa không ai sánh kịp',
    roleInWar:
      'Vị thần bảo hộ đắc lực nhất của thành Tơ-roa. Thần gieo dịch bệnh xuống trại quân Hy Lạp ở Khúc ca I, thường xuyên tiếp sức cho Héc-to và dẫn đường cho mũi tên của Pa-rít bắn trúng gót chân A-sin.',
    keyMoment:
      'Xuất hiện ngay từ mở đầu sử thi I-li-át để trừng phạt sự kiêu ngạo của A-ga-mem-nông, khởi phát chuỗi biến cố cơn giận của A-sin.',
    grade10Link:
      'Minh họa cho đặc trưng "thần linh can dự trực tiếp vào chiến trận" trong thần thoại và sử thi Hy Lạp.',
  },
  {
    id: 'aphrodite',
    index: '04',
    name: 'Nữ thần A-phrô-đi-tơ',
    greekName: 'Aphrodite',
    faction: 'troy',
    factionLabel: 'Phe Thành Troy',
    category: 'Thần linh',
    title: 'Nữ thần Tình yêu & Sắc đẹp',
    epithet: 'A-phrô-đi-tơ hay mỉm cười quyến rũ',
    roleInWar:
      'Người trao tặng nàng Hê-len cho Pa-rít để nhận quả táo vàng, gián tiếp châm ngòi cho cuộc chiến mười năm và luôn tìm cách che chở hoàng tử Pa-rít trên chiến trường.',
    keyMoment:
      'Giải cứu Pa-rít thoát khỏi lưỡi gươm của Mê-nê-lát bằng cách phủ làn sương mù đưa chàng trở về cung điện Tơ-roa.',
    grade10Link:
      'Giải thích nguyên nhân thần thoại của cuộc chiến thành Troy và tính cách gần gũi, có phần thiên vị của các vị thần Hy Lạp.',
  },
  {
    id: 'ares',
    index: '05',
    name: 'Thần A-rét',
    greekName: 'Ares',
    faction: 'troy',
    factionLabel: 'Phe Thành Troy',
    category: 'Thần linh',
    title: 'Thần Chiến tranh & Lòng dũng mãnh',
    epithet: 'A-rét công phá thành lũy',
    roleInWar:
      'Đứng về phía thành Tơ-roa theo lời thuyết phục của A-phrô-đi-tơ, trực tiếp xuống trận địa sát cánh cùng các chiến binh Tơ-roa.',
    keyMoment:
      'Từng bị dũng sĩ Đi-ô-mét với sự trợ giúp của nữ thần A-tê-na đâm trọng thương, phải gầm vang như vạn người kêu la rút về Ô-lim-pơ.',
    grade10Link:
      'Cho thấy trong sử thi Hô-me-rơ, con người anh hùng đôi khi đạt tới tầm vóc ngang hàng, thậm chí đối đầu trực diện với thần linh.',
  },
  {
    id: 'athena',
    index: '06',
    name: 'Nữ thần A-tê-na',
    greekName: 'Athena',
    faction: 'greece',
    factionLabel: 'Phe Hy Lạp',
    category: 'Thần linh',
    title: 'Nữ thần Trí tuệ & Chiến lược công chính',
    epithet: 'Nữ thần A-tê-na mắt sáng long lanh',
    roleInWar:
      'Kiên quyết ủng hộ liên quân Hy Lạp sau khi bị Pa-rít từ chối trao quả táo vàng. Thần bảo trợ trí tuệ cho Ô-đi-xê và truyền cảm hứng cho mưu kế Con ngựa gỗ.',
    keyMoment:
      'Ngăn A-sin rút gươm chém A-ga-mem-nông ở Khúc ca I; đồng thời đánh lừa Héc-to trong trận quyết đấu cuối cùng.',
    grade10Link:
      'Tiêu biểu cho motip "thần trợ giúp" trong sử thi: trí tuệ sáng suốt luôn đồng hành cùng những chiến thắng của người Hy Lạp.',
  },
  {
    id: 'hera',
    index: '07',
    name: 'Nữ thần Hê-ra',
    greekName: 'Hera',
    faction: 'greece',
    factionLabel: 'Phe Hy Lạp',
    category: 'Thần linh',
    title: 'Nữ hoàng đỉnh Ô-lim-pơ, phu nhân thần Dớt',
    epithet: 'Nữ thần Hê-ra cánh tay trắng muốt',
    roleInWar:
      'Thù ghét thành Tơ-roa sâu sắc sau cuộc phán xét của Pa-rít, luôn thúc đẩy quân Hy Lạp chiến đấu đến cùng cho tới khi thành Troy sụp đổ.',
    keyMoment:
      'Dùng mưu khiến thần Dớt chìm vào giấc ngủ trên đỉnh núi I-đa để tạo cơ hội cho thần Pô-dê-i-đông xoay chuyển cục diện cứu nguy quân Hy Lạp.',
    grade10Link:
      'Thể hiện tâm lý nhân bản hóa đặc sắc của thần thoại Hy Lạp: thần linh cũng mang đầy đủ hỉ nộ ái ố như con người.',
  },
  {
    id: 'poseidon',
    index: '08',
    name: 'Thần Pô-dê-i-đông',
    greekName: 'Poseidon',
    faction: 'greece',
    factionLabel: 'Phe Hy Lạp',
    category: 'Thần linh',
    title: 'Chúa tể Biển cả & Những cơn địa chấn',
    epithet: 'Đấng làm rung chuyển mặt đất',
    roleInWar:
      'Giúp liên quân Hy Lạp vượt sóng dữ trong giai đoạn cuối cuộc chiến vì mối hận vua Tơ-roa xưa từng quỵt công xây thành lũy.',
    keyMoment:
      'Về sau trở thành thế lực thử thách lớn nhất ngăn trở hành trình trở về quê hương I-ta-cơ của Ô-đi-xê.',
    grade10Link:
      'Cầu nối quan trọng giữa hai bộ sử thi lớn trong Ngữ Văn 10: I-li-át và Ô-đi-xê (đoạn trích "Gặp Ka-ríp và Xi-la").',
  },
  {
    id: 'zeus',
    index: '09',
    name: 'Thần Dớt',
    greekName: 'Zeus',
    faction: 'olympus',
    factionLabel: 'Đỉnh Ô-lim-pơ',
    category: 'Thần linh',
    title: 'Chúa tể các vị thần, người giữ cán cân định mệnh',
    epithet: 'Thần Dớt tập hợp mây đen',
    roleInWar:
      'Đứng trên các phe phái để duy trì trật tự tối cao và cán cân số phận (Moirai). Tuy từng xót thương Héc-to trung hiếu, Dớt vẫn phải tuân theo định mệnh đã an bài.',
    keyMoment:
      'Nâng chiếc cân vàng để định đoạt số phận giữa A-sin và Héc-to; đĩa cân của Héc-to chìm xuống báo hiệu giờ khắc hy sinh.',
    grade10Link:
      'Làm rõ câu nói nổi tiếng của Héc-to trong SGK: "Không ai thoát khỏi số mệnh đã định sẵn cho mình."',
  },
  {
    id: 'achilles-odysseus',
    index: '10',
    name: 'A-sin & Ô-đi-xê',
    greekName: 'Achilles & Odysseus',
    faction: 'greece',
    factionLabel: 'Phe Hy Lạp',
    category: 'Anh hùng',
    title: 'Cặp bài trùng Sức mạnh vô song & Trí tuệ mưu lược',
    epithet: 'A-sin chân chạy như bay · Ô-đi-xê lắm mưu nhiều kế',
    roleInWar:
      'A-sin là chiến binh mạnh nhất Hy Lạp, mang bi kịch giữa vinh quang ngắn ngủi và cuộc sống bình yên. Ô-đi-xê là nhà chiến lược tạo ra bước ngoặt Con ngựa gỗ thành Troy.',
    keyMoment:
      'A-sin quay lại chiến trường trả thù cho bạn thân Pa-tơ-rô-clơ và hạ gục Héc-to; Ô-đi-xê kiến tạo mưu kế hạ thành sau 10 năm.',
    grade10Link:
      'Tạo nên cặp đối chiếu kinh điển trong Ngữ Văn 10: sức mạnh anh hùng cá nhân (A-sin), trách nhiệm cộng đồng (Héc-to) và trí tuệ vượt thử thách (Ô-đi-xê).',
  },
];

export interface AnnotatedPassage {
  id: string;
  sectionLabel: string;
  title: string;
  text: string;
  highlightedPhrase: string;
  noteTitle: string;
  literaryDevice: string;
  explanation: string;
  sgkQuestion: string;
  sgkAnswerHint: string;
}

export const EXCERPT_PASSAGES: AnnotatedPassage[] = [
  {
    id: 'passage-1',
    sectionLabel: 'Phần 1 · Khúc ca VI',
    title: 'Nỗi lo âu của nàng Ăng-đrô-mác tại cổng Xkê',
    text: 'Nghe tin quân Tơ-roa lâm nguy trước sức ép của quân A-kê-en, Ăng-đrô-mác cánh tay trắng ngần vội vã bồng con thơ A-xti-a-nắc chạy lên tháp canh, rồi lao tới gặp Héc-to tại cổng Xkê. Nàng nghẹn ngào nắm lấy tay chồng, khẩn cầu chàng đừng để đứa con sớm chịu cảnh mồ côi, đừng biến vợ thành góa phụ cô đơn giữa thành trì đang lung lay.',
    highlightedPhrase: 'Ăng-đrô-mác cánh tay trắng ngần',
    noteTitle: 'Tính ngữ cố định & Lời khẩn cầu đẫm nước mắt',
    literaryDevice: 'Tính ngữ sử thi (Epithète) & Ngôn ngữ đối thoại giàu cảm xúc',
    explanation:
      'Hô-me-rơ gọi Ăng-đrô-mác bằng tính ngữ "cánh tay trắng ngần" để tôn vinh vẻ đẹp thanh cao, dịu hiền. Nỗi sợ của nàng rất cụ thể và đời thường: cha mẹ và bảy anh em nàng đều đã tử trận dưới tay A-sin, giờ Héc-to là cả bầu trời và điểm tựa duy nhất.',
    sgkQuestion: 'Vì sao Ăng-đrô-mác tha thiết khuyên Héc-to ở lại giữ tháp canh thay vì xông ra chiến trường?',
    sgkAnswerHint:
      'Vì nàng thấu hiểu sự khốc liệt của chiến tranh, từng mất toàn bộ gia đình ruột thịt và dự cảm trước viễn cảnh Héc-to hy sinh nếu đối đầu trực diện với liên quân Hy Lạp.',
  },
  {
    id: 'passage-2',
    sectionLabel: 'Phần 2 · Khúc ca VI',
    title: 'Lời đáp của Héc-to: Danh dự, bổn phận và định mệnh',
    text: 'Héc-to lẫy lừng, mũ trụ sáng loáng dịu dàng nhìn vợ và đáp: "Phu nhân yêu quý, lòng ta cũng day dứt không nguôi trước những điều nàng vừa nói. Nhưng ta sẽ hổ thẹn xiết bao trước các chiến binh và phụ nữ thành Tơ-roa nếu như ta trốn tránh chiến trận như một kẻ hèn nhát. Chẳng một ai tránh được số mệnh đã an bài cho mình, dù là kẻ hèn nhát hay bậc anh hùng."',
    highlightedPhrase: 'Héc-to lẫy lừng, mũ trụ sáng loáng',
    noteTitle: 'Lí tưởng anh hùng sử thi & Ý thức về định mệnh',
    literaryDevice: 'Đối lập nội tâm & Giọng điệu trang nghiêm, bi tráng',
    explanation:
      'Héc-to không hề vô cảm hay ham chiến. Chàng thấu hiểu trọn vẹn nỗi đau của vợ ("lòng ta cũng day dứt không nguôi"), thậm chí nhìn thấy trước ngày thành Tơ-roa thất thủ. Nhưng danh dự trước cộng đồng và trách nhiệm bảo vệ tổ quốc buộc chàng phải đặt nghĩa vụ lên trên hạnh phúc riêng tư.',
    sgkQuestion: 'Câu nói của Héc-to thể hiện phẩm chất nào của người anh hùng sử thi cổ đại?',
    sgkAnswerHint:
      'Thể hiện tinh thần dũng cảm, trọng danh dự, ý thức sâu sắc về bổn phận với cộng đồng và thái độ bình tĩnh đối diện định mệnh, không trốn chạy hiểm nguy.',
  },
  {
    id: 'passage-3',
    sectionLabel: 'Phần 3 · Khúc ca VI',
    title: 'Chiếc mũ trụ sáng loáng và nụ cười qua hàng lệ',
    text: 'Nói rồi, người cha vĩ đại giơ tay đón lấy đứa con thơ. Nhưng cậu bé A-xti-a-nắc hoảng sợ nép chặt vào ngực vú nuôi, khiếp hãi trước chiếc mũ trụ bằng đồng sáng lóa và chùm lông ngựa rung rinh trên đỉnh đầu cha. Thấy vậy, cả Héc-to và Ăng-đrô-mác cùng bật cười dịu dàng. Héc-to liền tháo chiếc mũ trụ đặt xuống đất, bế con lên hôn trìu mến và cầu nguyện các vị thần phù hộ cho con lớn lên trở thành người dũng mãnh hơn cha.',
    highlightedPhrase: 'tháo chiếc mũ trụ đặt xuống đất',
    noteTitle: 'Chi tiết nghệ thuật đắt giá nhất đoạn trích',
    literaryDevice: 'Chi tiết tương phản giữa chiến binh và người cha',
    explanation:
      'Hành động tháo chiếc mũ trụ uy nghiêm để dỗ con thơ xóa nhòa ranh giới giữa một chủ soái lẫy lừng và một người cha hiền từ. Tiếng cười xen lẫn nước mắt của hai vợ chồng tạo nên nốt lặng nhân văn sâu sắc ngay trước ngưỡng cửa sinh tử.',
    sgkQuestion: 'Chi tiết Héc-to tháo mũ trụ để dỗ con có ý nghĩa nghệ thuật gì?',
    sgkAnswerHint:
      'Làm nổi bật vẻ đẹp toàn diện của nhân vật: bên cạnh khí phách anh hùng bất khuất là trái tim ấm áp, tình phụ tử thiêng liêng và khao khát hòa bình cho thế hệ tương lai.',
  },
];

export interface AnalysisPoint {
  index: string;
  title: string;
  summary: string;
  details: string;
}

export const CONTENT_ANALYSIS: AnalysisPoint[] = [
  {
    index: '01',
    title: 'Xung đột giữa tình cảm gia đình và nghĩa vụ cộng đồng',
    summary: 'Héc-to là cầu nối hài hòa giữa con người công dân và con người cá nhân.',
    details:
      'Khác với hình dung khô cứng về người hùng chỉ biết chém giết, Héc-to biết xót xa cho số phận vợ con nếu thành vỡ. Nhưng chàng chọn đặt danh dự dân tộc lên trên an toàn cá nhân, tạo nên tầm vóc bi tráng.',
  },
  {
    index: '02',
    title: 'Vai trò của thần linh và định mệnh trong sử thi Hy Lạp',
    summary: 'Con người cổ đại tin rằng mọi vinh quang hay sụp đổ đều nằm dưới sự dõi theo của các vị thần.',
    details:
      'Từ quả táo vàng của Ê-rít tới cán cân của thần Dớt hay sự trợ giúp của A-pô-lô và A-tê-na, yếu tố thần linh tạo nên không gian kỳ vĩ cho chiến trường Tơ-roa nhưng không làm lu mờ bản lĩnh tự quyết của con người.',
  },
  {
    index: '03',
    title: 'Bức tranh nhân đạo phản ánh nỗi đau chiến tranh',
    summary: 'Sử thi I-li-át ca ngợi anh hùng nhưng không hề tô hồng chiến tranh.',
    details:
      'Qua nước mắt của Ăng-đrô-mác và sự hoảng sợ của bé A-xti-a-nắc trước ánh đồng chiến giáp, Hô-me-rơ gián tiếp lên tiếng về cái giá đắt đỏ mà người phụ nữ và trẻ thơ phải gánh chịu.',
  },
];

export const ART_ANALYSIS: AnalysisPoint[] = [
  {
    index: '01',
    title: 'Hệ thống tính ngữ cố định giàu sức gợi',
    summary: 'Những cụm từ lặp lại trang trọng định danh bản chất nhân vật.',
    details:
      'Các cụm từ như "Héc-to lẫy lừng, mũ trụ sáng loáng", "Ăng-đrô-mác cánh tay trắng ngần", "thành Tơ-roa tường cao hào sâu" giúp khắc sâu đặc điểm nhân vật trong nghệ thuật diễn xướng truyền miệng.',
  },
  {
    index: '02',
    title: 'Nghệ thuật miêu tả tâm lý tinh tế qua cử chỉ',
    summary: 'Tâm trạng không chỉ bộc lộ qua lời thoại mà qua từng ánh nhìn, động tác nhỏ.',
    details:
      'Cái nắm tay của Ăng-đrô-mác, tiếng khóc của đứa trẻ, hành động cởi mũ trụ đặt xuống đất hay cái vuốt ve an ủi vợ là những nét chấm phá bậc thầy về tâm lý học nhân vật.',
  },
  {
    index: '03',
    title: 'Giọng điệu trang trọng, hào sảng kết hợp trữ tình',
    summary: 'Nhịp điệu câu văn chậm rãi, cân xứng như nhịp bước hành quân.',
    details:
      'Cách tổ chức đối thoại theo từng lượt lời dài, trang nhã phản ánh văn phong hùng biện đặc trưng của nền văn minh Hy Lạp cổ đại.',
  },
];

export interface CurriculumRow {
  workTitle: string;
  genre: string;
  textbook: string;
  coreTheme: string;
  connectionNote: string;
}

export const CURRICULUM_COMPARISON: CurriculumRow[] = [
  {
    workTitle: 'Héc-to từ biệt Ăng-đrô-mác (I-li-át)',
    genre: 'Sử thi Hy Lạp',
    textbook: 'Kết nối tri thức · Ngữ Văn 10',
    coreTheme: 'Cuộc chiến thành Troy, danh dự anh hùng & tình gia đình',
    connectionNote: 'Trọng tâm trực tiếp về Thành Troy và thần linh bảo hộ chiến trận.',
  },
  {
    workTitle: 'Gặp Ka-ríp và Xi-la (Ô-đi-xê)',
    genre: 'Sử thi Hy Lạp',
    textbook: 'Kết nối tri thức / Cánh diều · Ngữ Văn 10',
    coreTheme: 'Hành trình hậu chiến thành Troy của người anh hùng trí tuệ Ô-đi-xê',
    connectionNote: 'Tiếp nối trực tiếp sau sự kiện Con ngựa gỗ thành Troy.',
  },
  {
    workTitle: 'Prô-mê-tê và loài người / Hê-ra-clét',
    genre: 'Thần thoại Hy Lạp',
    textbook: 'Chân trời sáng tạo / Cánh diều · Ngữ Văn 10',
    coreTheme: 'Khởi nguồn nhân loại & chiến công phi thường của các vị thần, á thần',
    connectionNote: 'Cùng hệ thống thần thoại Hy Lạp với thần Dớt và đỉnh Ô-lim-pơ.',
  },
  {
    workTitle: 'Thần Trụ Trời',
    genre: 'Thần thoại suy nguyên Việt Nam',
    textbook: 'Chân trời sáng tạo / Cánh diều · Ngữ Văn 10',
    coreTheme: 'Giải thích nguồn gốc trời đất, núi sông bằng trí tưởng tượng kỳ vĩ',
    connectionNote: 'Lưu ý: Đôi khi học sinh tìm nhầm "Thần Trụ Trời" thành "Thần Troy" — đây là văn bản mở đầu phần Thần thoại Việt Nam.',
  },
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Đoạn trích "Héc-to từ biệt Ăng-đrô-mác" trong SGK Ngữ Văn 10 được trích từ tác phẩm nào?',
    options: [
      'Khúc ca VI, sử thi I-li-át của Hô-me-rơ',
      'Khúc ca IX, sử thi Ô-đi-xê của Hô-me-rơ',
      'Thần thoại Prô-mê-tê và loài người',
      'Sử thi Đăm Săn của dân tộc Ê-đê',
    ],
    correctIndex: 0,
    explanation:
      'Văn bản nằm trong Khúc ca VI của bộ sử thi I-li-át do đại thi hào Hô-me-rơ sáng tác, kể về năm thứ mười của cuộc chiến thành Troy.',
  },
  {
    id: 2,
    question: 'Trong thần thoại về cuộc chiến thành Troy, biến cố nào trực tiếp châm ngòi cho mối bất hòa giữa các nữ thần?',
    options: [
      'Thần Pô-dê-i-đông tạo ra sóng thần trên biển Ê-giê',
      'Quả táo vàng của nữ thần Bất Hòa Ê-rít và phán xét của Pa-rít',
      'Việc Ô-đi-xê đóng con ngựa gỗ khổng lồ',
      'Cơn giận của A-sin trước trại quân Hy Lạp',
    ],
    correctIndex: 1,
    explanation:
      'Quả táo vàng ghi dòng chữ "Dành cho người đẹp nhất" khiến Hê-ra, A-tê-na và A-phrô-đi-tơ tranh chấp; Pa-rít chọn A-phrô-đi-tơ để có nàng Hê-len, dẫn đến cuộc chiến.',
  },
  {
    id: 3,
    question: 'Nhóm các vị thần nào trên đỉnh Ô-lim-pơ đã tích cực bảo hộ cho Thành Troy (Tơ-roa)?',
    options: [
      'A-tê-na, Hê-ra và Pô-dê-i-đông',
      'A-pô-lô, A-phrô-đi-tơ và A-rét',
      'Dớt, Hê-pha-i-xtốt và Héc-mét',
      'Prô-mê-tê, A-tê-na và Ác-tê-mít',
    ],
    correctIndex: 1,
    explanation:
      'Thần Ánh sáng A-pô-lô, nữ thần Sắc đẹp A-phrô-đi-tơ và thần Chiến tranh A-rét đứng về phía thành Tơ-roa; trong khi Hê-ra, A-tê-na và Pô-dê-i-đông ủng hộ phe Hy Lạp.',
  },
  {
    id: 4,
    question: 'Tính ngữ cố định nào thường được Hô-me-rơ dùng để miêu tả hoàng tử Héc-to trong đoạn trích?',
    options: [
      'Héc-to chân chạy nhanh như gió',
      'Héc-to lắm mưu nhiều kế',
      'Héc-to lẫy lừng, mũ trụ sáng loáng',
      'Héc-to tập hợp mây đen',
    ],
    correctIndex: 2,
    explanation:
      '"Héc-to lẫy lừng, mũ trụ sáng loáng" là tính ngữ cố định đặc trưng gắn liền với diện mạo uy nghiêm và danh dự chiến binh của chủ soái thành Tơ-roa.',
  },
  {
    id: 5,
    question: 'Vì sao cậu bé A-xti-a-nắc lại khóc thét khi thấy cha mình (Héc-to) giơ tay bế?',
    options: [
      'Vì lâu ngày cậu bé không nhận ra giọng nói của cha',
      'Vì sợ hãi trước chiếc mũ trụ bằng đồng sáng lóa và chùm lông ngựa rung rinh',
      'Vì sợ tiếng reo hò của quân Hy Lạp ngoài cổng thành',
      'Vì cậu bé đang bị thương sau cuộc vây hãm',
    ],
    correctIndex: 1,
    explanation:
      'Hình ảnh chiến giáp lạnh lẽo đối lập với vẻ non nớt của đứa trẻ khiến Héc-to nhận ra cần tháo mũ trụ đặt xuống đất để trở về đúng vai trò người cha dịu dàng.',
  },
  {
    id: 6,
    question: 'Lý do sâu xa nhất khiến Héc-to quyết định vẫn quay lại chiến trường dù thương vợ con là gì?',
    options: [
      'Vì muốn giành lấy kho báu của quân Hy Lạp',
      'Vì sợ cơn giận của vua cha Pri-am',
      'Vì lòng tự trọng, danh dự chiến binh và trách nhiệm bảo vệ cộng đồng thành Tơ-roa',
      'Vì nhận được lời hứa bất tử từ nữ thần A-tê-na',
    ],
    correctIndex: 2,
    explanation:
      'Héc-to hiểu rõ bổn phận của người đứng đầu và không muốn hổ thẹn trước dân chúng Tơ-roa nếu trốn tránh trận địa như kẻ hèn nhát.',
  },
  {
    id: 7,
    question: 'Vị anh hùng Hy Lạp nào đã đề xuất mưu kế "Con ngựa gỗ thành Troy" giúp kết thúc cuộc chiến mười năm?',
    options: [
      'A-ga-mem-nông',
      'Mê-nê-lát',
      'Ô-đi-xê (Odysseus)',
      'Pa-tơ-rô-clơ',
    ],
    correctIndex: 2,
    explanation:
      'Ô-đi-xê với trí tuệ mưu lược và sự bảo trợ của nữ thần A-tê-na đã nghĩ ra kế đóng ngựa gỗ khổng lồ giấu tinh binh để mở toang cổng thành Troy từ bên trong.',
  },
  {
    id: 8,
    question: 'Nhận định nào đúng nhất khi phân biệt "Thành Troy (I-li-át)" với "Thần Trụ Trời" trong chương trình Ngữ Văn 10?',
    options: [
      'Cả hai đều là sử thi của đại thi hào Hô-me-rơ',
      '"Thành Troy" thuộc sử thi Hy Lạp kể chiến công anh hùng, còn "Thần Trụ Trời" là thần thoại suy nguyên Việt Nam giải thích nguồn gốc trời đất',
      '"Thần Trụ Trời" kể về cuộc chiến giữa các vị thần Ô-lim-pơ',
      'Cả hai văn bản đều viết bằng thể thơ lục bát',
    ],
    correctIndex: 1,
    explanation:
      'Nắm rõ ranh giới thể loại giúp học sinh Ngữ Văn 10 không nhầm lẫn giữa thần thoại suy nguyên Việt Nam (Thần Trụ Trời) và sử thi anh hùng Hy Lạp (I-li-át).',
  },
];

export interface StudyPromptCard {
  id: string;
  tag: string;
  prompt: string;
  outline: string[];
}

export const STUDY_FLASHCARDS: StudyPromptCard[] = [
  {
    id: 'card-1',
    tag: 'Phân tích nhân vật',
    prompt: 'Phân tích vẻ đẹp hình tượng người anh hùng Héc-to qua đoạn trích "Héc-to từ biệt Ăng-đrô-mác".',
    outline: [
      '1. Khí phách anh hùng: Ý thức sâu sắc về bổn phận với thành Tơ-roa, sẵn sàng đối mặt định mệnh và cái chết.',
      '2. Tình cảm nhân văn: Yêu thương, thấu hiểu nỗi đau của vợ (Ăng-đrô-mác) và nâng niu con thơ (tháo mũ trụ dỗ con).',
      '3. Nghệ thuật khắc họa: Tính ngữ cố định ("mũ trụ sáng loáng"), đối thoại trang nghiêm xen cử chỉ đời thường.',
    ],
  },
  {
    id: 'card-2',
    tag: 'Nghệ thuật sử thi',
    prompt: 'Nêu tác dụng của các tính ngữ cố định và yếu tố thần linh trong sử thi I-li-át.',
    outline: [
      '1. Tính ngữ cố định giúp định hình tính cách/diện mạo nhân vật nhất quán, tạo âm hưởng hào hùng cho lời kể truyền miệng.',
      '2. Thần linh (Dớt, A-pô-lô, A-tê-na...) phản ánh thế giới quan cổ đại: sự kiện nhân gian gắn liền ý chí siêu nhiên.',
      '3. Dù thần linh can dự, giá trị cốt lõi vẫn nằm ở bản lĩnh lựa chọn và phẩm giá của con người.',
    ],
  },
  {
    id: 'card-3',
    tag: 'Chi tiết tiêu biểu',
    prompt: 'Ý nghĩa biểu tượng của chi tiết "Héc-to tháo chiếc mũ trụ đặt xuống đất" khi bế con thơ.',
    outline: [
      '1. Chiếc mũ trụ bằng đồng đại diện cho chiến tranh, bổn phận và uy quyền của vị chủ soái.',
      '2. Hành động đặt mũ xuống đất đánh dấu khoảnh khắc Héc-to gác lại gươm giáo để làm người cha hiền dịu.',
      '3. Tiếng cười trong nước mắt tại cổng Xkê khẳng định khát vọng bình yên bất diệt giữa khói lửa.',
    ],
  },
  {
    id: 'card-4',
    tag: 'Liên hệ & Mở rộng',
    prompt: 'So sánh điểm giống và khác nhau giữa nhân vật anh hùng Héc-to (I-li-át) và Đăm Săn (sử thi Tây Nguyên).',
    outline: [
      '1. Điểm giống: Đều đại diện cho sức mạnh, danh dự và khát vọng bảo vệ sự phồn vinh của cộng đồng.',
      '2. Điểm khác: Héc-to mang màu sắc bi tráng, có chiều sâu giằng xé nội tâm gia đình - đất nước; Đăm Săn mang màu sắc lãng mạn, hào sảng chinh phục tự nhiên (nữ thần Mặt Trời).',
    ],
  },
];
