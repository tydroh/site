

export const categories = [
    { name: 'Вишиванки' },
    { name: 'Скатертини' },
    { name: 'Глечики' },
    { name: 'Деревяний декор' },
    { name: 'Сувеніри' },
    { name: 'Ікони' },
    { name: 'ЗСУ' },
  ];

  export const _ingredients = [
  {
    name: 'Галичина',
    price: 0,
    imageUrl: 'https://cdn.example.com/regions/halychyna.png',
  },
  {
    name: 'Буковина',
    price: 0,
    imageUrl: 'https://cdn.example.com/regions/bukovyna.png',
  },
  {
    name: 'Закарпаття',
    price: 0,
    imageUrl: 'https://cdn.example.com/regions/zakarpattia.png',
  },
  {
    name: 'Полісся',
    price: 0,
    imageUrl: 'https://cdn.example.com/regions/polissia.png',
  },
  {
    name: 'Поділля',
    price: 0,
    imageUrl: 'https://cdn.example.com/regions/podillia.png',
  },
  {
    name: 'Наддніпрянщина',
    price: 0,
    imageUrl: 'https://cdn.example.com/regions/naddniprianshchyna.png',
  },
  {
    name: 'Слобожанщина',
    price: 0,
    imageUrl: 'https://cdn.example.com/regions/slobozhanshchyna.png',
  },
  {
    name: 'Таврія',
    price: 0,
    imageUrl: 'https://cdn.example.com/regions/tavriia.png',
  },
  {
    name: 'Північне Причорномор’я',
    price: 0,
    imageUrl: 'https://cdn.example.com/regions/black-sea.png',
  },
  {
    name: 'Крим',
    price: 0,
    imageUrl: 'https://cdn.example.com/regions/crimea.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

  
 export const products = [
  // Вишиванки (categoryId: 1)
  {
    name: 'Чоловіча вишиванка з геометричним орнаментом',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 1,
  },
  {
    name: 'Жіноча вишиванка з квітковим візерунком',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 1,
  },
  {
    name: 'Дитяча вишиванка з червоним орнаментом',
    imageUrl: 'https://content.rozetka.com.ua/goods/images/big/176938784.jpg',
    categoryId: 1,
  },
  {
    name: 'Вишиванка з синім візерунком',
    imageUrl: 'https://images.prom.ua/61072901_vishivanka-cholovicha-hrestiki.jpg',
    categoryId: 1,
  },
  {
    name: 'Вишиванка з білим орнаментом',
    imageUrl: 'https://etnodim.ua/storage/seo/product/sltxq0geszok6eit.jpg',
    categoryId: 1,
  },
  {
    name: 'Вишиванка з зеленим візерунком',
    imageUrl: 'https://cdn.kasta.ua/image/1035/s3/supplier_content/879523743/1c764a184988f226e1fb3c61cec8098e/0421aadd3281c33513fbc685a5b3f8da.jpeg',
    categoryId: 1,
  },
  {
    name: 'Вишиванка з чорним орнаментом',
    imageUrl: 'https://images.prom.ua/6592455417_w640_h640_vishivanka-zorepad-iz.jpg',
    categoryId: 1,
  },
  {
    name: 'Вишиванка з жовтим візерунком',
    imageUrl: 'https://images.prom.ua/3801357496_w600_h600_3801357496.jpg',
    categoryId: 1,
  },

  // Скатертини (categoryId: 2)
  {
    name: 'Скатертина з вишивкою "Калина"',
    imageUrl: 'https://images.prom.ua/5893319443_skatertina-llyana-chervona.jpg',
    categoryId: 2,
  },
  {
    name: 'Скатертина з геометричним орнаментом',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 2,
  },
  {
    name: 'Скатертина з квітковим візерунком',
    imageUrl: 'https://images.prom.ua/5893321013_skatertina-llyana-karpatski.jpg',
    categoryId: 2,
  },
  {
    name: 'Скатертина з синім орнаментом',
    imageUrl: 'https://images.prom.ua/5893292754_skatertina-llyana-sinya.jpg',
    categoryId: 2,
  },
  {
    name: 'Скатертина з білим візерунком',
    imageUrl: 'https://img.joomcdn.net/40e2bc87c5d3cbe8ca50f63931d9a74fef83fe55_original.jpeg',
    categoryId: 2,
  },
  {
    name: 'Скатертина з зеленим орнаментом',
    imageUrl: 'https://images.prom.ua/5893317123_skatertina-llyana-zelena.jpg',
    categoryId: 2,
  },
  {
    name: 'Скатертина з чорним візерунком',
    imageUrl: 'https://images.prom.ua/6390427708_skatertina-llyana-ukrayinskij.jpg',
    categoryId: 2,
  },
  {
    name: 'Скатертина з жовтим орнаментом',
    imageUrl: 'https://kotonchyk.com/content/images/32/536x357l50nn0/35239982668570.jpg',
    categoryId: 2,
  },

  // Глечики (categoryId: 3)
  {
    name: 'Керамічний глечик з ручним розписом',
    imageUrl: 'https://images.prom.ua/1017543029_w200_h200_kuvshin-s-kryshkoj.jpg',
    categoryId: 3,
  },
  {
    name: 'Глечик з традиційним орнаментом',
    imageUrl: 'https://images.prom.ua/4675986696_w400_h400_kuvshin-glinyanyj-shlyahtyanskij.jpg',
    categoryId: 3,
  },
  {
    name: 'Глечик з квітковим візерунком',
    imageUrl: 'https://images.ua.prom.st/3225764693_w640_h2048_2397661942_w640_h640_2397661942.jpg?fresh=1&PIMAGE_ID=3225764693',
    categoryId: 3,
  },
  {
    name: 'Глечик з синім орнаментом',
    imageUrl: 'https://image-thumbs.shafastatic.net/-645493766_310_430',
    categoryId: 3,
  },
  {
    name: 'Глечик з білим візерунком',
    imageUrl: 'https://shop-cdn1-2.vigbo.tech/shops/107114/products/21083514/images/3-b977d4e026f82f0dce8b9d4265263646.jpg',
    categoryId: 3,
  },
  {
    name: 'Глечик з зеленим орнаментом',
    imageUrl: 'https://st.violity.com/auction/big/auctions/15/53/3/0/155303068.jpg',
    categoryId: 3,
  },
  {
    name: 'Глечик з чорним візерунком',
    imageUrl: 'https://mojahata.com.ua/components/com_virtuemart/shop_image/product/01ee14be4e4a5fb000805c4e8cf6df0f.jpg',
    categoryId: 3,
  },
  {
    name: 'Глечик з жовтим орнаментом',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKysguxR6eqHNXNjgw9-64FS5FrcyNOO8Wcg&s',
    categoryId: 3,
  },

  // Дерев’яний декор (categoryId: 4)
  {
    name: 'Дерев’яна шкатулка з різьбленням',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 4,
  },
  {
    name: 'Дерев’яна рамка для фото',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 4,
  },
  {
    name: 'Дерев’яна підставка для свічок',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 4,
  },
  {
    name: 'Дерев’яна фігурка птаха',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 4,
  },
  {
    name: 'Дерев’яна підвіска з орнаментом',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 4,
  },
  {
    name: 'Дерев’яна табличка з написом',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 4,
  },
  {
    name: 'Дерев’яна скринька для прикрас',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 4,
  },
  {
    name: 'Дерев’яна підставка для книг',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 4,
  },

  // Сувеніри (categoryId: 5)
  {
    name: 'Магніт "Слава Україні"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 5,
  },
  {
    name: 'Брелок з тризубом',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 5,
  },
  {
    name: 'Листівка з побажаннями',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 5,
  },
  {
    name: 'Подарункова упаковка',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 5,
  },
  {
    name: 'Свічка ручної роботи',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 5,
  },
  {
    name: 'Тканинна прикраса',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 5,
  },
  {
    name: 'Магніт з символікою',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 5,
  },
  {
    name: 'Браслет з бісеру',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 5,
  },

  // Ікони (categoryId: 6)
  {
    name: 'Ікона "Богородиця"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 6,
  },
  {
    name: 'Ікона "Ісус Христос"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 6,
  },
  {
    name: 'Ікона "Святий Миколай"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 6,
  },
  {
    name: 'Ікона "Свята Трійця"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 6,
  },
  {
    name: 'Ікона "Свята Варвара"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 6,
  },
  {
    name: 'Ікона "Святий Георгій"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 6,
  },
  {
    name: 'Ікона "Святий Петро"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 6,
  },
  {
    name: 'Ікона "Свята Софія"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 6,
  },

  // ЗСУ (categoryId: 7)
  {
    name: 'Прапор ЗСУ',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 7,
  },
  {
    name: 'Футболка "Слава Україні"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 7,
  },
  {
    name: 'Наліпка на авто "ЗСУ"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 7,
  },
  {
    name: 'Шапка "ЗСУ"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 7,
  },
  {
    name: 'Кружка "ЗСУ"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 7,
  },
  {
    name: 'Нашивка "ЗСУ"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 7,
  },
  {
    name: 'Магніт "ЗСУ"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 7,
  },
  {
    name: 'Брелок "ЗСУ"',
    imageUrl: 'https://images.prom.ua/5743531652_w215_h266_vishivanki-dlya-hlopchikiv.jpg',
    categoryId: 7,
  },
];



  
  