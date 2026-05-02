(() => {
  const STORAGE = {
    theme: 'vs_theme',
    lang: 'vs_lang',
    search: 'vs_search',
    cart: 'vs_cart',
    wishlist: 'vs_wishlist',
    newsletter: 'vs_newsletter',
    announcement: 'vs_announcement',
  };

  const WHATSAPP_NUMBER = '971500000000';
  const DEFAULT_THEME = 'dark';
  const DEFAULT_LANG = 'en';

  const EMIRATES = {
    dubai: { label: 'Dubai', lat: 25.2048, lng: 55.2708, zoom: 11, note: { en: 'Delivery to Dubai: 1–2 business days.', ar: 'التوصيل إلى دبي: من 1 إلى 2 يوم عمل.' } },
    abu_dhabi: { label: 'Abu Dhabi', lat: 24.4539, lng: 54.3773, zoom: 10, note: { en: 'Delivery to Abu Dhabi: 2–3 business days.', ar: 'التوصيل إلى أبوظبي: من 2 إلى 3 أيام عمل.' } },
    sharjah: { label: 'Sharjah', lat: 25.3463, lng: 55.4209, zoom: 11, note: { en: 'Delivery to Sharjah: 1–2 business days.', ar: 'التوصيل إلى الشارقة: من 1 إلى 2 يوم عمل.' } },
    ajman: { label: 'Ajman', lat: 25.4052, lng: 55.5136, zoom: 12, note: { en: 'Delivery to Ajman: 2 business days.', ar: 'التوصيل إلى عجمان: خلال يومين عمل.' } },
    rak: { label: 'Ras Al Khaimah', lat: 25.8007, lng: 55.9762, zoom: 10, note: { en: 'Delivery to Ras Al Khaimah: 2–3 business days.', ar: 'التوصيل إلى رأس الخيمة: من 2 إلى 3 أيام عمل.' } },
    fujairah: { label: 'Fujairah', lat: 25.1288, lng: 56.3265, zoom: 10, note: { en: 'Delivery to Fujairah: 2–3 business days.', ar: 'التوصيل إلى الفجيرة: من 2 إلى 3 أيام عمل.' } },
    umm_al_quwain: { label: 'Umm Al Quwain', lat: 25.5647, lng: 55.5555, zoom: 12, note: { en: 'Delivery to Umm Al Quwain: 2 business days.', ar: 'التوصيل إلى أم القيوين: خلال يومين عمل.' } },
  };

  const PRODUCTS = [
    { id: 1, slug: 'noir-eclat', image: 'images/1.jpeg', name: 'Noir Éclat', nameAr: 'نوار إكلات', notes: 'Bergamot, iris root, smoked amber, velvet woods.', notesAr: 'برغموت، جذور السوسن، عنبر مدخن، أخشاب مخملية.', description: 'A shadowed opening of citrus and iris that settles into ambered woods.', descriptionAr: 'افتتاحية من البرغموت والسوسن تنتهي إلى أخشاب دافئة وعنبر.', category: 'oriental', rating: 4.8, reviews: 47, price: 245, volumePrices: { '30': 185, '50': 245, '100': 375 }, bestseller: true, newest: true, pyramid: ['Bergamot', 'Iris root', 'Smoked amber'], heart: ['Rose dust', 'Cashmere smoke', 'Velvet woods'], base: ['Musk', 'Amber', 'Soft resin'] },
    { id: 2, slug: 'cuir-lumiere', image: 'images/2.jpeg', name: 'Cuir Lumière', nameAr: 'كوير لوميار', notes: 'Saffron, soft leather, cedar smoke, iris petals.', notesAr: 'زعفران، جلد ناعم، دخان الأرز، بتلات السوسن.', description: 'Supple leather, saffron heat, and a polished woody trail.', descriptionAr: 'جلد رقيق مع حرارة الزعفران وأثر خشبي مصقول.', category: 'oriental', rating: 4.9, reviews: 61, price: 295, volumePrices: { '30': 210, '50': 295, '100': 420 }, bestseller: true, newest: false, pyramid: ['Saffron', 'Soft leather', 'Cedar smoke'], heart: ['Iris petals', 'Suede', 'Resin'], base: ['Amber', 'Tonka', 'Dry woods'] },
    { id: 3, slug: 'marj', image: 'images/3.jpeg', name: 'Marj', nameAr: 'مرج', notes: 'Damask rose, candied lychee, silk musk, amber glaze.', notesAr: 'ورد دمشقي، ليتشي مسكر، مسك حريري، طبقة عنبرية.', description: 'A luminous rose with delicate fruit and a satin-soft finish.', descriptionAr: 'ورد مضيء مع لمسة فاكهية نهائية ناعمة كالسّاتان.', category: 'floral', rating: 4.7, reviews: 88, price: 185, volumePrices: { '30': 149, '50': 185, '100': 295 }, bestseller: true, newest: true, pyramid: ['Lychee', 'Rose water', 'Bergamot'], heart: ['Damask rose', 'Peony', 'Silk musk'], base: ['Amber glaze', 'Cashmere', 'Vanilla skin'] },
    { id: 4, slug: 'amber-veil', image: 'images/4.jpeg', name: 'Amber Veil', nameAr: 'حجاب العنبر', notes: 'Cardamom, vanilla orchid, incense smoke, suede amber.', notesAr: 'هيل، فانيلا الأوركيد، دخان البخور، عنبر سويدي.', description: 'A glowing amber veil with soft spice and slow-burning resin.', descriptionAr: 'ستار عنبري متوهج مع بهارات ناعمة وراتنج بطيء الاشتعال.', category: 'oriental', rating: 4.8, reviews: 39, price: 320, volumePrices: { '30': 225, '50': 320, '100': 490 }, bestseller: false, newest: false, pyramid: ['Cardamom', 'Vanilla orchid', 'Incense smoke'], heart: ['Suede', 'Amber', 'Jasmine'], base: ['Labdanum', 'Musk', 'Cashmere woods'] },
    { id: 5, slug: 'sable-rose', image: 'images/5.jpeg', name: 'Sable Rosé', nameAr: 'سابل روزيه', notes: 'Neroli, suede petals, sandalwood milk, pink pepper.', notesAr: 'نيرولي، بتلات سويدية، حليب الصندل، فلفل وردي.', description: 'Silky floral suede with a creamy sandalwood core.', descriptionAr: 'زهري حريري بلمسة سويدية وقلب من الصندل الكريمي.', category: 'floral', rating: 4.9, reviews: 52, price: 210, volumePrices: { '30': 160, '50': 210, '100': 320 }, bestseller: false, newest: true, pyramid: ['Neroli', 'Pink pepper', 'Citrus peel'], heart: ['Suede petals', 'Jasmine', 'Orchid'], base: ['Sandalwood milk', 'White musk', 'Amber'] },
    { id: 6, slug: 'nuit-cuir', image: 'images/6.jpeg', name: 'Nuit Cuir', nameAr: 'ليل الجلد', notes: 'Clary sage, black leather, patchouli, smoky vetiver.', notesAr: 'ميرمية، جلد أسود، باتشولي، فيتيفر مدخن.', description: 'A darker leather profile with herbaceous lift and smoky depth.', descriptionAr: 'تكوين جلدي داكن مع لمسة عشبية وعمق مدخن.', category: 'oriental', rating: 4.8, reviews: 44, price: 375, volumePrices: { '30': 260, '50': 375, '100': 550 }, bestseller: false, newest: false, pyramid: ['Clary sage', 'Black leather', 'Patchouli'], heart: ['Cedar', 'Resin', 'Iris'], base: ['Smoky vetiver', 'Amberwood', 'Musk'] },
    { id: 7, slug: 'iris-noir', image: 'images/7.jpeg', name: 'Iris Noir', nameAr: 'سوسن أسود', notes: 'Pear blossom, iris butter, white tea, translucent amber.', notesAr: 'أزهار الكمثرى، زبدة السوسن، شاي أبيض، عنبر شفاف.', description: 'Airy iris and pear blossom wrapped in a clear amber halo.', descriptionAr: 'سوسن خفيف مع أزهار الكمثرى محاط بهالة عنبرية شفافة.', category: 'fresh', rating: 4.7, reviews: 33, price: 245, volumePrices: { '30': 185, '50': 245, '100': 375 }, bestseller: false, newest: false, pyramid: ['Pear blossom', 'White tea', 'Petitgrain'], heart: ['Iris butter', 'Honeysuckle', 'Muguet'], base: ['Amber', 'White musk', 'Cashmere wood'] },
    { id: 8, slug: 'golden-veil', image: 'images/8.jpeg', name: 'Golden Veil', nameAr: 'الحجاب الذهبي', notes: 'Mandarin zest, black tea, cedar leaf, dry vetiver.', notesAr: 'قشر اليوسفي، شاي أسود، ورق الأرز، فيتيفر جاف.', description: 'A crisp citrus opening over tea and dry woods.', descriptionAr: 'افتتاحية حمضية منعشة فوق الشاي والأخشاب الجافة.', category: 'fresh', rating: 4.8, reviews: 41, price: 295, volumePrices: { '30': 210, '50': 295, '100': 420 }, bestseller: true, newest: false, pyramid: ['Mandarin zest', 'Black tea', 'Basil'], heart: ['Cedar leaf', 'Muguet', 'Clary sage'], base: ['Vetiver', 'Moss', 'Amber'] },
    { id: 9, slug: 'shadow-petal', image: 'images/9.jpeg', name: 'Shadow Petal', nameAr: 'بتلة الظل', notes: 'Bergamot, gardenia shadow, smoked amber, cashmere moss.', notesAr: 'برغموت، ظل الغاردينيا، عنبر مدخن، طحلب كشميري.', description: 'A petal-dark floral with an ambered moss trail.', descriptionAr: 'زهري داكن بآثار عنبرية وطابع طحلبي فاخر.', category: 'floral', rating: 4.9, reviews: 64, price: 420, volumePrices: { '30': 295, '50': 420, '100': 625 }, bestseller: false, newest: false, pyramid: ['Bergamot', 'Gardenia shadow', 'Cashmere moss'], heart: ['Rose', 'Jasmine', 'Orris'], base: ['Smoked amber', 'Musk', 'Dry woods'] },
    { id: 10, slug: 'bin-shaikh', image: 'images/10.jpeg', name: 'Bin Shaikh', nameAr: 'بن شيخ', notes: 'Oud smoke, saffron leather, rose resin, royal musk.', notesAr: 'دخان العود، جلد الزعفران، راتنج الورد، مسك ملكي.', description: 'A regal oud composition with saffron, rose, and ceremonial depth.', descriptionAr: 'تركيبة عود فخمة مع الزعفران والورد وعمق احتفالي.', category: 'oriental', rating: 5.0, reviews: 93, price: 625, volumePrices: { '30': 450, '50': 625, '100': 890 }, bestseller: true, newest: false, pyramid: ['Saffron', 'Rosebuds', 'Elemi'], heart: ['Oud smoke', 'Leather', 'Geranium'], base: ['Royal musk', 'Ambergris accord', 'Balsam'] },
    { id: 11, slug: 'velvet-ember', image: 'images/11.jpeg', name: 'Velvet Ember', nameAr: 'جمرة مخملية', notes: 'Black fig, rose absolute, tonka, dark musk.', notesAr: 'تين أسود، مطلق الورد، تونكا، مسك داكن.', description: 'A dark fig-and-rose profile with velvet warmth.', descriptionAr: 'تين وورد داكنان مع دفء مخملي عميق.', category: 'floral', rating: 4.8, reviews: 57, price: 275, volumePrices: { '30': 195, '50': 275, '100': 410 }, bestseller: false, newest: false, pyramid: ['Black fig', 'Pink pepper', 'Plum'], heart: ['Rose absolute', 'Hedione', 'Cinnamon leaf'], base: ['Tonka', 'Dark musk', 'Soft amber'] },
    { id: 12, slug: 'smoke-fleur', image: 'images/12.jpeg', name: 'Smoke Fleur', nameAr: 'دخان الزهرة', notes: 'Incense veil, vanilla orchid, cypress, amber powder.', notesAr: 'ستار بخور، فانيلا الأوركيد، سرو، بودرة عنبرية.', description: 'A polished incense-floral blend made for gifting rituals.', descriptionAr: 'مزيج بخوري زهري مصقول ومناسب لطقوس الإهداء.', category: 'dakhoon', rating: 4.7, reviews: 28, price: 245, volumePrices: { '30': 185, '50': 245, '100': 375 }, bestseller: false, newest: false, pyramid: ['Incense veil', 'Bergamot', 'Elemi'], heart: ['Vanilla orchid', 'Cypress', 'White florals'], base: ['Amber powder', 'Musk', 'Cedar'] },
    { id: 13, slug: 'nuit-blanche', image: 'images/13.jpeg', name: 'Nuit Blanche', nameAr: 'ليلة بيضاء', notes: 'Neroli mist, suede iris, sandalwood cream, peppered musk.', notesAr: 'ضباب النيرولي، سوسن سويدي، كريم الصندل، مسك فلفلي.', description: 'A refined white floral that bridges daylight and evening.', descriptionAr: 'زهري أبيض راقٍ ينتقل بسلاسة من النهار إلى المساء.', category: 'fresh', rating: 4.8, reviews: 36, price: 295, volumePrices: { '30': 210, '50': 295, '100': 420 }, bestseller: false, newest: true, pyramid: ['Neroli mist', 'Bergamot', 'Basil'], heart: ['Suede iris', 'Orange blossom', 'Jasmine tea'], base: ['Sandalwood cream', 'Peppered musk', 'Cashmere'] },
    { id: 14, slug: 'ignite-oud', image: 'images/14.jpeg', name: 'Ignite Oud', nameAr: 'عود مشتعل', notes: 'Burnt oud, saffron glow, caramel resin, black cedar.', notesAr: 'عود محترق، وهج الزعفران، راتنج كراميلي، أرز أسود.', description: 'A bold oud with caramelized resin and embered woods.', descriptionAr: 'عود جريء مع راتنج كراميلي وأخشاب متوهجة.', category: 'oriental', rating: 5.0, reviews: 79, price: 550, volumePrices: { '30': 390, '50': 550, '100': 790 }, bestseller: true, newest: false, pyramid: ['Burnt oud', 'Saffron glow', 'Black pepper'], heart: ['Caramel resin', 'Rose heart', 'Cypriol'], base: ['Black cedar', 'Amber', 'Aged musk'] },
    { id: 15, slug: 'noir-botanique', image: 'images/15.jpeg', name: 'Noir Botanique', nameAr: 'نوار نباتي', notes: 'Green fig, orris, tea leaf, mineral amber.', notesAr: 'تين أخضر، أوريس، ورق الشاي، عنبر معدني.', description: 'A botanical composition with a mineral amber finish.', descriptionAr: 'تركيبة نباتية بنهاية عنبرية معدنية نقية.', category: 'fresh', rating: 4.7, reviews: 24, price: 210, volumePrices: { '30': 160, '50': 210, '100': 320 }, bestseller: false, newest: false, pyramid: ['Green fig', 'Tea leaf', 'Petitgrain'], heart: ['Orris', 'Cyclamen', 'Moss'], base: ['Mineral amber', 'Vetiver', 'Musk'] },
    { id: 16, slug: 'rose-cendre', image: 'images/16.jpeg', name: 'Rose Cendre', nameAr: 'ورد رمادي', notes: 'Mandarin smoke, black tea, cedar, grey musk.', notesAr: 'دخان اليوسفي، شاي أسود، أرز، مسك رمادي.', description: 'A smoky rose tempered by tea and cedar elegance.', descriptionAr: 'ورد مدخن تتوازنه أناقة الشاي والأرز.', category: 'floral', rating: 4.8, reviews: 48, price: 320, volumePrices: { '30': 225, '50': 320, '100': 490 }, bestseller: false, newest: false, pyramid: ['Mandarin smoke', 'Lemon peel', 'Pepper'], heart: ['Rose', 'Black tea', 'Cedar'], base: ['Grey musk', 'Vetiver', 'Amberwood'] },
    { id: 17, slug: 'lune-saffron', image: 'images/17.jpeg', name: 'Lune Saffron', nameAr: 'زعفران القمر', notes: 'Moonlit bergamot, iris root, amber cloth, white oud.', notesAr: 'برغموت قمري، جذور السوسن، قماش عنبري، عود أبيض.', description: 'A moon-bright oud with saffron and delicate iris.', descriptionAr: 'عود مضيء بقمره مع الزعفران والسوسن الرقيق.', category: 'oriental', rating: 4.9, reviews: 53, price: 375, volumePrices: { '30': 260, '50': 375, '100': 550 }, bestseller: false, newest: true, pyramid: ['Moonlit bergamot', 'Saffron', 'Pear'], heart: ['Iris root', 'White oud', 'Jasmine'], base: ['Amber cloth', 'Musk', 'Cedar'] },
    { id: 18, slug: 'atelier-musk', image: 'images/18.jpeg', name: 'Atelier Musk', nameAr: 'مسك الأتيليه', notes: 'Soft musk, suede petals, cedar dust, vanilla smoke.', notesAr: 'مسك ناعم، بتلات سويد، غبار الأرز، دخان الفانيلا.', description: 'A tactile musk that feels tailored and intimate.', descriptionAr: 'مسك ملموسي يمنح إحساسًا مصممًا وحميميًا.', category: 'gift', rating: 4.8, reviews: 31, price: 245, volumePrices: { '30': 185, '50': 245, '100': 375 }, bestseller: false, newest: false, pyramid: ['Soft musk', 'Pear skin', 'Bergamot'], heart: ['Suede petals', 'Iris', 'Cedar dust'], base: ['Vanilla smoke', 'Amber', 'Cashmere'] },
    { id: 19, slug: 'ebene-silk', image: 'images/19.jpeg', name: 'Ébène Silk', nameAr: 'حرير الأبنوس', notes: 'Dark plum, rose absolute, tonka bean, black amber.', notesAr: 'برقوق داكن، ورد مطلق، حبة تونكا، عنبر أسود.', description: 'Silk-smooth darkness with rose and plum richness.', descriptionAr: 'ظلمة ناعمة كالحرير مع غنى الورد والبرقوق.', category: 'oriental', rating: 4.9, reviews: 68, price: 420, volumePrices: { '30': 295, '50': 420, '100': 625 }, bestseller: false, newest: false, pyramid: ['Dark plum', 'Saffron', 'Cardamom'], heart: ['Rose absolute', 'Tonka bean', 'Geranium'], base: ['Black amber', 'Musk', 'Oud haze'] },
    { id: 20, slug: 'dawn-amber', image: 'images/20.jpeg', name: 'Dawn Amber', nameAr: 'عنبر الفجر', notes: 'Orange dawn, incense milk, vanilla orchid, warm amber.', notesAr: 'فجر برتقالي، حليب بخوري، فانيلا أوركيد، عنبر دافئ.', description: 'A sunrise amber with airy incense and creamy florals.', descriptionAr: 'عنبر مشرق مع بخور خفيف وزهور كريمية.', category: 'fresh', rating: 4.7, reviews: 29, price: 275, volumePrices: { '30': 195, '50': 275, '100': 410 }, bestseller: false, newest: false, pyramid: ['Orange dawn', 'Bergamot', 'Ginger'], heart: ['Incense milk', 'Vanilla orchid', 'Jasmine'], base: ['Warm amber', 'Musk', 'Sandalwood'] },
    { id: 21, slug: 'paris-nocturne', image: 'images/21.jpeg', name: 'Paris Nocturne', nameAr: 'باريس الليلية', notes: 'Neroli, suede, sandalwood, pink pepper, iris dust.', notesAr: 'نيرولي، سويد، صندل، فلفل وردي، غبار السوسن.', description: 'A city-floral with a tailored suede edge.', descriptionAr: 'زهري حضري بحافة سويدية مصممة بعناية.', category: 'floral', rating: 4.8, reviews: 45, price: 295, volumePrices: { '30': 210, '50': 295, '100': 420 }, bestseller: false, newest: false, pyramid: ['Neroli', 'Pink pepper', 'Bergamot'], heart: ['Suede', 'Iris dust', 'Jasmine'], base: ['Sandalwood', 'Musk', 'Amber'] },
    { id: 22, slug: 'drift-iris', image: 'images/22.jpeg', name: 'Drift Iris', nameAr: 'انجراف السوسن', notes: 'Jasmine drift, patchouli veil, resin amber, cedar mist.', notesAr: 'انسياب ياسمين، ستار باتشولي، عنبر راتنجي، ضباب الأرز.', description: 'Iris and jasmine floating over resinous woods.', descriptionAr: 'سوسن وياسمين يطفوان فوق أخشاب راتنجية.', category: 'oriental', rating: 4.8, reviews: 37, price: 320, volumePrices: { '30': 225, '50': 320, '100': 490 }, bestseller: false, newest: true, pyramid: ['Jasmine drift', 'Bergamot', 'Blackcurrant'], heart: ['Patchouli veil', 'Iris', 'Resin'], base: ['Amber', 'Cedar mist', 'Musk'] },
    { id: 23, slug: 'cuir-velvet', image: 'images/23.jpeg', name: 'Cuir Velvet', nameAr: 'جلد مخملي', notes: 'Pear blossom, oud mist, white tea, amber grain.', notesAr: 'أزهار الكمثرى، ضباب العود، شاي أبيض، حبيبات عنبرية.', description: 'A velvet-smooth oud softened by pear blossom and tea.', descriptionAr: 'عود ناعم كالمخمل مع أزهار الكمثرى والشاي.', category: 'oriental', rating: 4.9, reviews: 50, price: 490, volumePrices: { '30': 350, '50': 490, '100': 710 }, bestseller: true, newest: false, pyramid: ['Pear blossom', 'Saffron', 'Elemi'], heart: ['Oud mist', 'White tea', 'Rose'], base: ['Amber grain', 'Suede', 'Musk'] },
    { id: 24, slug: 'oro-rose', image: 'images/24.jpeg', name: 'Oro Rose', nameAr: 'أورو روز', notes: 'Golden mandarin, black tea, cedar, vetiver smoke.', notesAr: 'يوسفي ذهبي، شاي أسود، أرز، دخان الفيتيفر.', description: 'A gift-ready rose in a polished citrus frame.', descriptionAr: 'ورد جاهز للإهداء داخل إطار حمضي مصقول.', category: 'gift', rating: 4.8, reviews: 42, price: 245, volumePrices: { '30': 185, '50': 245, '100': 375 }, bestseller: false, newest: false, pyramid: ['Golden mandarin', 'Bergamot', 'Ginger'], heart: ['Black tea', 'Rose', 'Cedar'], base: ['Vetiver smoke', 'Amber', 'Musk'] },
    { id: 25, slug: 'moon-fig', image: 'images/25.jpeg', name: 'Moon Fig', nameAr: 'تين القمر', notes: 'Bergamot, fig leaf, smoked amber, velvet woods.', notesAr: 'برغموت، ورق التين، عنبر مدخن، أخشاب مخملية.', description: 'A green fig scent with shadowed amber undertones.', descriptionAr: 'رائحة تين خضراء بنفحات عنبرية داكنة.', category: 'fresh', rating: 4.7, reviews: 34, price: 210, volumePrices: { '30': 160, '50': 210, '100': 320 }, bestseller: false, newest: false, pyramid: ['Bergamot', 'Fig leaf', 'Blackcurrant'], heart: ['Iris root', 'Fig pulp', 'Jasmine'], base: ['Smoked amber', 'Velvet woods', 'Musk'] },
    { id: 26, slug: 'dark-jardin', image: 'images/26.jpeg', name: 'Dark Jardin', nameAr: 'حديقة داكنة', notes: 'Saffron, black leather, cedar smoke, iris petals.', notesAr: 'زعفران، جلد أسود، دخان الأرز، بتلات السوسن.', description: 'A nocturnal garden of leather, iris, and smoke.', descriptionAr: 'حديقة ليلية من الجلد والسوسن والدخان.', category: 'oriental', rating: 4.8, reviews: 40, price: 375, volumePrices: { '30': 260, '50': 375, '100': 550 }, bestseller: false, newest: false, pyramid: ['Saffron', 'Black leather', 'Clary sage'], heart: ['Iris petals', 'Rose', 'Cedar'], base: ['Cedar smoke', 'Amber', 'Vetiver'] },
    { id: 27, slug: 'satin-resin', image: 'images/27.jpeg', name: 'Satin Resin', nameAr: 'راتنج ساتان', notes: 'Black fig, rose resin, tonka, warm musk.', notesAr: 'تين أسود، راتنج الورد، تونكا، مسك دافئ.', description: 'A silky resin scent with fig and rose at its core.', descriptionAr: 'رائحة راتنجية حريرية تتوسطها نغمات التين والورد.', category: 'floral', rating: 4.9, reviews: 58, price: 420, volumePrices: { '30': 295, '50': 420, '100': 625 }, bestseller: false, newest: true, pyramid: ['Black fig', 'Bergamot', 'Pink pepper'], heart: ['Rose resin', 'Tonka', 'Jasmine'], base: ['Warm musk', 'Amberwood', 'Patchouli'] },
    { id: 28, slug: 'noir-intense', image: 'images/28.jpeg', name: 'Noir Intense', nameAr: 'نوار مكثف', notes: 'Smoked woods, incense, vanilla orchid, black amber.', notesAr: 'أخشاب مدخنة، بخور، فانيلا الأوركيد، عنبر أسود.', description: 'A dramatic nocturne of smoke, incense, and black amber.', descriptionAr: 'ليلة درامية من الدخان والبخور والعنبر الأسود.', category: 'oriental', rating: 5.0, reviews: 71, price: 550, volumePrices: { '30': 390, '50': 550, '100': 790 }, bestseller: true, newest: false, pyramid: ['Smoked woods', 'Black pepper', 'Bergamot'], heart: ['Incense', 'Vanilla orchid', 'Labdanum'], base: ['Black amber', 'Musk', 'Aged cedar'] },
  ];

  const I18N = {
    en: {
      'theme.dark': 'Dark', 'theme.light': 'Light',
      'nav.home': 'Home', 'nav.gallery': 'Gallery', 'nav.about': 'About', 'nav.cart': 'Cart', 'nav.saved': 'Saved', 'nav.location': 'Location',
      'search.placeholder': 'Search fragrances', 'search.button': 'Search', 'search.clear': 'Clear search',
      'hero.eyebrow': 'Ultra-luxury perfume atelier', 'hero.title': 'Perfume as atmosphere.', 'hero.copy': 'Velvet Scents composes sensual fragrances with rare depth, quiet confidence, and a cinematic finish. The storefront is editorial, layered, and intentionally immersive.', 'hero.discover': 'Discover the Gallery', 'hero.explore': 'Explore the Maison', 'hero.whatsapp': 'Chat on WhatsApp',
      'meta.craft': 'Maison crafting', 'meta.craft.desc': 'Small-batch compositions', 'meta.limited': 'Limited editions', 'meta.limited.desc': 'Rare, numbered releases', 'meta.gift': 'Gift-ready service', 'meta.gift.desc': 'Wrapped and delivered with care',
      'gallery.eyebrow': 'Full collection', 'gallery.title': 'The gallery opens every composition.', 'gallery.copy': 'Explore the complete Velvet Scents collection. Search by name or notes, sort the edit, and save favorites without leaving the page.', 'gallery.viewcart': 'View cart', 'gallery.buynow': 'Buy now', 'gallery.add': 'Add to Cart', 'gallery.saved': 'Saved', 'gallery.save': 'Save',
      'gallery.filters.all': 'All', 'gallery.filters.oriental': 'Oud & Oriental', 'gallery.filters.floral': 'Floral', 'gallery.filters.fresh': 'Fresh', 'gallery.filters.gift': 'Gift Sets', 'gallery.filters.dakhoon': 'Dakhoon', 'gallery.filters.saved': 'Saved',
      'gallery.sort.label': 'Sort', 'gallery.sort.priceAsc': 'Price Low–High', 'gallery.sort.priceDesc': 'Price High–Low', 'gallery.sort.newest': 'Newest', 'gallery.sort.bestseller': 'Bestseller',
      'gallery.noresults': 'No fragrances match', 'gallery.noresults.help': 'Try a different term or clear the search.', 'gallery.results': 'Showing {count} fragrances',
      'cart.eyebrow': 'Shopping bag', 'cart.title': 'Your collection, ready for checkout.', 'cart.copy': 'Build a refined order and send it directly to WhatsApp.', 'cart.continue': 'Continue shopping', 'cart.learnmore': 'Learn more', 'cart.empty.title': 'Your collection awaits.', 'cart.empty.copy': 'Add a fragrance to begin curating your order.', 'cart.browse': 'Browse fragrances', 'cart.subtotal': 'Subtotal', 'cart.shipping': 'Shipping', 'cart.complimentary': 'Complimentary', 'cart.total': 'Total', 'cart.linetotal': 'Line total', 'cart.order': 'Order via WhatsApp', 'cart.qty': 'Qty', 'cart.remove': 'Remove', 'cart.name': 'Full name', 'cart.phone': 'Phone number', 'cart.emirate': 'Select Emirate / City', 'cart.message': 'Order note', 'cart.whatsappnote': 'Hi Velvet Scents, I would like to order:', 'cart.ordercopy': 'We will open WhatsApp with your full order summary.',
      'gifting.eyebrow': 'The art of gifting', 'gifting.title': 'Gift rituals with a composed finish.', 'gifting.copy': 'Curated sets, elegant wrapping, and a presentation that feels considerate from the first glance.', 'gifting.browse': 'Browse gifts', 'gifting.openbag': 'Open bag',
      'service.shipping.title': 'Swift shipping', 'service.shipping.desc': 'Orders are prepared carefully and shipped across the UAE with timely updates.', 'service.payment.title': 'Secure payment', 'service.payment.desc': 'Checkout is designed for clarity, including support for common payment methods.', 'service.cod.title': 'Cash on delivery', 'service.cod.desc': 'Pay when your order arrives if you prefer a simpler checkout flow.', 'service.care.title': 'Client care', 'service.care.desc': 'Our team supports you with fragrance guidance, gifting advice, and order follow-up.',
      'spotlight.eyebrow': 'A gracious invitation', 'spotlight.title': 'Book a private consultation.', 'spotlight.copy': 'Share your preferred notes and occasion, and we will help shape a refined fragrance edit.', 'spotlight.reserve': 'Reserve now',
      'brand.desc': 'Ultra-luxury French perfumery crafted with editorial restraint and cinematic depth.',
      'about.eyebrow': 'Maison profile', 'about.title': 'A fragrance house made for quiet magnetism.', 'about.copy': 'Velvet Scents is shaped by French composition, sculptural packaging, and a devotion to long-lasting atmosphere. The brand is built for people who want elegance with presence.', 'about.browse': 'Browse the Gallery', 'about.opencart': 'Open Cart', 'about.philosophy.eyebrow': "Founder's letter", 'about.philosophy.title': 'Craft, composition, and discretion - a modern maison.', 'about.philosophy.copy1': 'Velvet Scents began as a private atelier built around one idea: a perfume should feel like a room, not an accessory. We source carefully, refine in small batches, and let every composition rest before it leaves the house.', 'about.philosophy.copy2': 'The result is a house that moves between French structure and Middle Eastern warmth, pairing luminous openings with deep, lingering bases. Packaging, naming, and delivery are all designed to feel composed, intimate, and deliberate.', 'about.team': 'The perfumers and creative team', 'about.source': 'Ingredients and sourcing philosophy', 'about.awards': 'Awards and press', 'about.timeline': 'Maison timeline', 'about.consult': 'Book a private consultation',
      'newsletter.eyebrow': 'Newsletter', 'newsletter.title': 'Join the private list.', 'newsletter.copy': 'Receive first access to limited launches, fragrance notes, and intimate maison updates.', 'newsletter.email': 'Email address', 'newsletter.subscribe': 'Subscribe', 'newsletter.loading': 'Submitting...', 'newsletter.success': "You're on the private list.", 'newsletter.error': 'Please enter a valid email address.',
      'footer.house': 'House', 'footer.clientcare': 'Client Care', 'footer.social': 'Social', 'footer.location': 'Shop Location', 'footer.location.addr': 'Velvet Scents Atelier, Dubai, UAE', 'footer.developed': 'Developed by Abdul Rehman Ali', 'footer.linkedin': 'LinkedIn', 'footer.rights': 'All rights reserved © Velvet Scents 2026', 'footer.whatsapp': 'WhatsApp', 'footer.tiktok': 'TikTok', 'footer.shipping': 'Shipping', 'footer.returns': 'Returns', 'footer.gifting': 'Gifting', 'footer.ourstory': 'Our Story', 'footer.gallery': 'Gallery', 'footer.cart': 'Cart',
      'location.note.default': 'Delivery across the UAE is available from the atelier.', 'map.label': 'Select Emirate / City', 'map.loading': 'Loading map...', 'map.popup': 'Velvet Scents Atelier — Dubai, UAE',
      'quiz.title': 'Fragrance finder', 'quiz.copy': 'Tell us the mood, occasion, and strength you want.', 'quiz.cta': 'Find my match', 'quiz.result': 'Recommended for you', 'quiz.mood': 'Mood', 'quiz.occasion': 'Occasion', 'quiz.strength': 'Strength', 'quiz.warm': 'Warm', 'quiz.fresh': 'Fresh', 'quiz.mysterious': 'Mysterious', 'quiz.daily': 'Daily', 'quiz.evening': 'Evening', 'quiz.gift': 'Gift', 'quiz.light': 'Light', 'quiz.medium': 'Medium', 'quiz.intense': 'Intense',
      'announcement': 'Free delivery across UAE on orders over AED 300 · Cash on delivery available',
      'product.eyebrow': 'Product detail', 'product.volume': 'Volume', 'product.pyramid': 'Scent pyramid', 'product.add': 'Add to Cart', 'product.buy': 'Buy Now', 'product.back': 'Back to gallery', 'product.recommend': 'You may also like', 'product.notfound': 'The fragrance you selected is unavailable.',
    },
    ar: {
      'theme.dark': 'داكن', 'theme.light': 'فاتح',
      'nav.home': 'الرئيسية', 'nav.gallery': 'المعرض', 'nav.about': 'عن الدار', 'nav.cart': 'السلة', 'nav.saved': 'المحفوظات', 'nav.location': 'الموقع',
      'search.placeholder': 'ابحث عن العطور', 'search.button': 'بحث', 'search.clear': 'مسح البحث',
      'hero.eyebrow': 'أتولييه عطور فائق الفخامة', 'hero.title': 'العطر كجوٍّ محيط.', 'hero.copy': 'تصوغ Velvet Scents عطوراً حسّية بعمق نادر وثقة هادئة ولمسة سينمائية. الواجهة تحريرية ومصممة لتجربة غامرة.', 'hero.discover': 'استكشف المعرض', 'hero.explore': 'استكشف الدار', 'hero.whatsapp': 'تحدث عبر واتساب',
      'meta.craft': 'صناعة الدار', 'meta.craft.desc': 'تركيبات صغيرة الدفعات', 'meta.limited': 'إصدارات محدودة', 'meta.limited.desc': 'إصدارات نادرة مرقمة', 'meta.gift': 'خدمة جاهزة للإهداء', 'meta.gift.desc': 'تغليف وتوصيل بعناية',
      'gallery.eyebrow': 'المجموعة الكاملة', 'gallery.title': 'المعرض يفتح كل تركيبة.', 'gallery.copy': 'استكشف مجموعة Velvet Scents كاملة. ابحث بالاسم أو النوتات، وفرز الاختيارات، واحفظ المفضلة دون مغادرة الصفحة.', 'gallery.viewcart': 'عرض السلة', 'gallery.buynow': 'اشترِ الآن', 'gallery.add': 'أضف إلى السلة', 'gallery.saved': 'محفوظ', 'gallery.save': 'حفظ',
      'gallery.filters.all': 'الكل', 'gallery.filters.oriental': 'عود وشرقي', 'gallery.filters.floral': 'زهري', 'gallery.filters.fresh': 'منعش', 'gallery.filters.gift': 'صناديق هدايا', 'gallery.filters.dakhoon': 'دخون', 'gallery.filters.saved': 'المحفوظات',
      'gallery.sort.label': 'الترتيب', 'gallery.sort.priceAsc': 'السعر من الأقل إلى الأعلى', 'gallery.sort.priceDesc': 'السعر من الأعلى إلى الأقل', 'gallery.sort.newest': 'الأحدث', 'gallery.sort.bestseller': 'الأكثر مبيعاً',
      'gallery.noresults': 'لا توجد عطور تطابق', 'gallery.noresults.help': 'جرّب مصطلحاً آخر أو امسح البحث.', 'gallery.results': 'عرض {count} عطور',
      'cart.eyebrow': 'سلة التسوق', 'cart.title': 'مجموعتك جاهزة لإتمام الطلب.', 'cart.copy': 'أكمل طلباً أنيقاً وأرسله مباشرة إلى واتساب.', 'cart.continue': 'تابع التسوق', 'cart.learnmore': 'اعرف المزيد', 'cart.empty.title': 'مجموعتك بانتظارك.', 'cart.empty.copy': 'أضف عطراً لتبدأ بتنسيق طلبك.', 'cart.browse': 'تصفح العطور', 'cart.subtotal': 'المجموع الفرعي', 'cart.shipping': 'الشحن', 'cart.complimentary': 'مجاني', 'cart.total': 'الإجمالي', 'cart.linetotal': 'إجمالي السطر', 'cart.order': 'اطلب عبر واتساب', 'cart.qty': 'الكمية', 'cart.remove': 'حذف', 'cart.name': 'الاسم الكامل', 'cart.phone': 'رقم الهاتف', 'cart.emirate': 'اختر الإمارة / المدينة', 'cart.message': 'ملاحظة الطلب', 'cart.whatsappnote': 'مرحباً Velvet Scents، أرغب في الطلب:', 'cart.ordercopy': 'سنفتح واتساب مع ملخص طلبك الكامل.',
      'gifting.eyebrow': 'فن الإهداء', 'gifting.title': 'طقوس هدية بلمسة نهائية راقية.', 'gifting.copy': 'مجموعات منتقاة، تغليف أنيق، وتقديم يترك انطباعاً مدروساً من النظرة الأولى.', 'gifting.browse': 'تصفح الهدايا', 'gifting.openbag': 'افتح السلة',
      'service.shipping.title': 'شحن سريع', 'service.shipping.desc': 'تُجهز الطلبات بعناية وتُشحن داخل الإمارات مع تحديثات منتظمة.', 'service.payment.title': 'دفع آمن', 'service.payment.desc': 'صُمم الدفع بوضوح مع دعم وسائل الدفع الشائعة.', 'service.cod.title': 'الدفع عند الاستلام', 'service.cod.desc': 'يمكنك الدفع عند وصول الطلب إذا فضلت مسار دفع أبسط.', 'service.care.title': 'خدمة العملاء', 'service.care.desc': 'فريقنا يدعمك في اختيار العطر ونصائح الإهداء ومتابعة الطلب.',
      'spotlight.eyebrow': 'دعوة راقية', 'spotlight.title': 'احجز استشارة خاصة.', 'spotlight.copy': 'شاركنا بالنوتات المناسبة والمناسبة المطلوبة، وسنساعدك على اختيار عطور متناسقة.', 'spotlight.reserve': 'احجز الآن',
      'brand.desc': 'صناعة عطور فرنسية فائقة الفخامة بلمسة تحريرية هادئة وعمق سينمائي.',
      'about.eyebrow': 'ملف الدار', 'about.title': 'دار عطور صُممت لجاذبية هادئة.', 'about.copy': 'تتشكل Velvet Scents من التكوين الفرنسي، والتغليف النحتي، والالتزام بأثر عطري طويل الأمد. صُممت للباحثين عن أناقةٍ ذات حضور.', 'about.browse': 'تصفح المعرض', 'about.opencart': 'افتح السلة', 'about.philosophy.eyebrow': 'رسالة المؤسس', 'about.philosophy.title': 'الصنعة، التركيب، والتحفظ - دار عصرية.', 'about.philosophy.copy1': 'بدأت Velvet Scents كأتولييه خاص حول فكرة واحدة: يجب أن يبدو العطر مثل غرفة لا كملحق. نختار المواد بعناية، ونطور التركيبات على دفعات صغيرة، ونمنح كل عطر وقتاً للراحة قبل خروجه من الدار.', 'about.philosophy.copy2': 'النتيجة دار تتحرك بين البنية الفرنسية والدفء الشرقي، مع افتتاحيات مضيئة وقواعد عميقة طويلة الأثر. كما صُمم التغليف والتسمية والتسليم ليبدو متماسكاً وحميمياً ومقصوداً.', 'about.team': 'العطارون والفريق الإبداعي', 'about.source': 'المكونات ومصادرها', 'about.awards': 'الجوائز والظهور الإعلامي', 'about.timeline': 'الخط الزمني للدار', 'about.consult': 'احجز استشارة خاصة',
      'newsletter.eyebrow': 'النشرة البريدية', 'newsletter.title': 'انضم إلى القائمة الخاصة.', 'newsletter.copy': 'احصل على أولوية الوصول للإطلاقات المحدودة ونوتات العطر وتحديثات الدار الحصرية.', 'newsletter.email': 'البريد الإلكتروني', 'newsletter.subscribe': 'اشترك', 'newsletter.loading': 'جارٍ الإرسال...', 'newsletter.success': 'أنت الآن ضمن القائمة الخاصة.', 'newsletter.error': 'يرجى إدخال بريد إلكتروني صالح.',
      'footer.house': 'الدار', 'footer.clientcare': 'خدمة العملاء', 'footer.social': 'التواصل', 'footer.location': 'موقع المتجر', 'footer.location.addr': 'أتولييه Velvet Scents، دبي، الإمارات', 'footer.developed': 'تم التطوير بواسطة عبد الرحمن علي', 'footer.linkedin': 'لينكدإن', 'footer.rights': 'جميع الحقوق محفوظة © Velvet Scents 2026', 'footer.whatsapp': 'واتساب', 'footer.tiktok': 'تيك توك', 'footer.shipping': 'الشحن', 'footer.returns': 'الإرجاع', 'footer.gifting': 'الإهداء', 'footer.ourstory': 'قصتنا', 'footer.gallery': 'المعرض', 'footer.cart': 'السلة',
      'location.note.default': 'التوصيل متاح داخل الإمارات من الأتيليه.', 'map.label': 'اختر الإمارة / المدينة', 'map.loading': 'جارٍ تحميل الخريطة...', 'map.popup': 'أتولييه Velvet Scents — دبي، الإمارات',
      'quiz.title': 'دليل العطر المناسب', 'quiz.copy': 'أخبرنا بالمزاج والمناسبة والقوة التي تريدها.', 'quiz.cta': 'اعثر على الترشيح', 'quiz.result': 'ترشيحاتك', 'quiz.mood': 'المزاج', 'quiz.occasion': 'المناسبة', 'quiz.strength': 'القوة', 'quiz.warm': 'دافئ', 'quiz.fresh': 'منعش', 'quiz.mysterious': 'غامض', 'quiz.daily': 'يومي', 'quiz.evening': 'مسائي', 'quiz.gift': 'هدية', 'quiz.light': 'خفيف', 'quiz.medium': 'متوسط', 'quiz.intense': 'قوي',
      'announcement': 'توصيل مجاني داخل الإمارات للطلبات فوق 300 درهم · الدفع عند الاستلام متاح',
      'product.eyebrow': 'تفاصيل المنتج', 'product.volume': 'الحجم', 'product.pyramid': 'هرم العطر', 'product.add': 'أضف إلى السلة', 'product.buy': 'اشترِ الآن', 'product.back': 'العودة إلى المعرض', 'product.recommend': 'قد يعجبك أيضاً', 'product.notfound': 'العطر المحدد غير متاح.',
    },
  };

  const PRODUCT_MAP = new Map(PRODUCTS.map(product => [String(product.id), product]));
  const PRODUCT_SLUG_MAP = new Map(PRODUCTS.map(product => [product.slug, product]));

  const state = {
    theme: localStorage.getItem(STORAGE.theme) === 'light' ? 'light' : DEFAULT_THEME,
    lang: localStorage.getItem(STORAGE.lang) === 'ar' ? 'ar' : DEFAULT_LANG,
    search: localStorage.getItem(STORAGE.search) || '',
  };

  function readJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || ''); } catch { return fallback; }
  }

  function writeJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getCart() {
    const cart = readJSON(STORAGE.cart, []);
    return Array.isArray(cart) ? cart : [];
  }

  function setCart(cart) {
    writeJSON(STORAGE.cart, cart);
    syncCartBadge();
    if (document.querySelector('.cart-items')) renderCart();
  }

  function addToCart(productId, volume = '50', qty = 1) {
    const cart = getCart();
    const existing = cart.find(item => String(item.id) === String(productId) && item.volume === volume);
    if (existing) existing.qty += qty;
    else cart.push({ id: Number(productId), volume, qty });
    setCart(cart);
  }

  function updateCartQty(productId, volume, qty) {
    const cart = getCart().map(item => (String(item.id) === String(productId) && item.volume === volume ? { ...item, qty } : item)).filter(item => item.qty > 0);
    setCart(cart);
  }

  function removeCartItem(productId, volume) {
    setCart(getCart().filter(item => !(String(item.id) === String(productId) && item.volume === volume)));
  }

  function getWishlist() {
    const wishlist = readJSON(STORAGE.wishlist, []);
    return Array.isArray(wishlist) ? wishlist.map(String) : [];
  }

  function setWishlist(wishlist) {
    writeJSON(STORAGE.wishlist, Array.from(new Set(wishlist.map(String))));
    if (document.querySelector('.gallery-grid')) renderGallery();
  }

  function toggleWishlist(productId) {
    const wishlist = getWishlist();
    const id = String(productId);
    const index = wishlist.indexOf(id);
    if (index >= 0) wishlist.splice(index, 1); else wishlist.push(id);
    setWishlist(wishlist);
  }

  function t(key) {
    return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
  }

  function currency(value) {
    return `AED ${Number(value).toLocaleString('en-AE')}`;
  }

  function setTheme(theme) {
    state.theme = theme === 'light' ? 'light' : 'dark';
    localStorage.setItem(STORAGE.theme, state.theme);
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.classList.toggle('theme-light', state.theme === 'light');
    document.documentElement.classList.toggle('theme-dark', state.theme !== 'light');
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.checked = state.theme === 'light';
  }

  function setLanguage(lang) {
    state.lang = lang === 'ar' ? 'ar' : 'en';
    localStorage.setItem(STORAGE.lang, state.lang);
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('#lang-select').forEach(select => { select.value = state.lang; });
    document.querySelectorAll('#lang-select-mobile').forEach(select => { select.value = state.lang; });
    translateStaticText();
    updateThemeLabels();
    renderPage();
  }

  function translateStaticText() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (key) element.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (key) element.setAttribute('placeholder', t(key));
    });
  }

  function updateThemeLabels() {
    document.querySelectorAll('.theme-switch-text').forEach(track => {
      const spans = track.querySelectorAll('span');
      if (spans[0]) spans[0].textContent = t('theme.dark');
      if (spans[1]) spans[1].textContent = t('theme.light');
    });
  }

  function syncCartBadge() {
    const count = getCart().reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll('.badge').forEach(badge => {
      badge.textContent = String(count);
      badge.hidden = count === 0;
    });
  }

  function normalize(value) {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function productMatchesSearch(product, query) {
    if (!query) return true;
    return [product.name, product.notes, product.description, product.category].some(value => normalize(value).includes(query));
  }

  function buildProductCard(product) {
    const saved = getWishlist().includes(String(product.id));
    const labelName = state.lang === 'ar' ? (product.nameAr || product.name) : product.name;
    const labelNotes = state.lang === 'ar' ? (product.notesAr || product.notes) : product.notes;
    return `
      <article class="gallery-card" data-product-id="${product.id}" data-category="${product.category}">
        <button class="wishlist-btn ${saved ? 'is-active' : ''}" type="button" data-wishlist="${product.id}" aria-pressed="${saved}">${saved ? '♥' : '♡'}</button>
        <a class="gallery-link" href="product.html?slug=${product.slug}">
          <div class="gallery-media"><img src="${product.image}" alt="${product.name} fragrance bottle" width="1200" height="1500" loading="lazy" /></div>
        </a>
        <div class="gallery-card__body">
          <div class="gallery-card__heading">
            <span class="gallery-number">${String(product.id).padStart(2, '0')}</span>
            <h3>${labelName}</h3>
          </div>
          <p>${labelNotes}</p>
          <div class="gallery-card__meta"><span class="rating">${product.rating.toFixed(1)} ★ (${product.reviews})</span><strong>${currency(product.price)}</strong></div>
          <div class="gallery-card__actions">
            <button class="btn btn-small" type="button" data-add="${product.id}" data-volume="50">${t('gallery.add')}</button>
            <button class="btn btn-small secondary" type="button" data-buy="${product.id}" data-volume="50">${t('gallery.buynow')}</button>
          </div>
        </div>
      </article>`;
  }

  function renderGallery() {
    const grid = document.querySelector('.gallery-grid');
    if (!grid) return;
    const wrapper = grid.parentElement;
    const query = normalize(localStorage.getItem(STORAGE.search) || state.search || '');
    state.search = query;
    if (!wrapper.querySelector('.gallery-toolbar')) {
      grid.insertAdjacentHTML('beforebegin', `
        <div class="gallery-toolbar">
          <div class="filter-tabs">
            <button class="filter-tab is-active" data-filter="all" type="button">${t('gallery.filters.all')}</button>
            <button class="filter-tab" data-filter="oriental" type="button">${t('gallery.filters.oriental')}</button>
            <button class="filter-tab" data-filter="floral" type="button">${t('gallery.filters.floral')}</button>
            <button class="filter-tab" data-filter="fresh" type="button">${t('gallery.filters.fresh')}</button>
            <button class="filter-tab" data-filter="gift" type="button">${t('gallery.filters.gift')}</button>
            <button class="filter-tab" data-filter="dakhoon" type="button">${t('gallery.filters.dakhoon')}</button>
            <button class="filter-tab" data-filter="saved" type="button">${t('gallery.filters.saved')}</button>
          </div>
          <div class="gallery-toolbar__actions">
            <label class="gallery-sort"><span>${t('gallery.sort.label')}</span>
              <select id="gallery-sort" class="lang-select">
                <option value="recommended">${t('gallery.sort.bestseller')}</option>
                <option value="price-asc">${t('gallery.sort.priceAsc')}</option>
                <option value="price-desc">${t('gallery.sort.priceDesc')}</option>
                <option value="newest">${t('gallery.sort.newest')}</option>
              </select>
            </label>
            <button id="clear-search-btn" class="btn btn-small secondary" type="button">${t('search.clear')}</button>
          </div>
          <div class="gallery-results"></div>
        </div>`);
    }

    const toolbar = wrapper.querySelector('.gallery-toolbar');
    const sortSelect = toolbar.querySelector('#gallery-sort');
    const clearButton = toolbar.querySelector('#clear-search-btn');
    const results = toolbar.querySelector('.gallery-results');
    const activeFilter = toolbar.dataset.filter || 'all';
    const activeSort = sortSelect.value || toolbar.dataset.sort || 'recommended';
    toolbar.dataset.filter = activeFilter;
    toolbar.dataset.sort = activeSort;
    toolbar.querySelectorAll('.filter-tab').forEach(tab => tab.classList.toggle('is-active', tab.dataset.filter === activeFilter));

    const filtered = PRODUCTS.filter(product => {
      if (!productMatchesSearch(product, query)) return false;
      if (activeFilter === 'all') return true;
      if (activeFilter === 'saved') return getWishlist().includes(String(product.id));
      if (activeFilter === 'dakhoon') return product.category === 'dakhoon' || product.name.toLowerCase().includes('dakhoon') || product.description.toLowerCase().includes('dakhoon');
      return product.category === activeFilter;
    });

    filtered.sort((a, b) => {
      if (activeSort === 'price-asc') return a.price - b.price;
      if (activeSort === 'price-desc') return b.price - a.price;
      if (activeSort === 'newest') return Number(b.newest) - Number(a.newest) || a.id - b.id;
      return Number(b.bestseller) - Number(a.bestseller) || b.reviews - a.reviews;
    });

    grid.innerHTML = filtered.map(buildProductCard).join('') || `<div class="empty-state"><h3>${t('gallery.noresults')} ${query ? `"${state.search}"` : ''}</h3><p>${t('gallery.noresults.help')}</p><button class="btn secondary" type="button" id="clear-search-empty">${t('search.clear')}</button></div>`;
    results.textContent = t('gallery.results').replace('{count}', String(filtered.length));
    clearButton.hidden = !state.search;

    toolbar.querySelectorAll('.filter-tab').forEach(tab => {
      tab.onclick = () => {
        toolbar.dataset.filter = tab.dataset.filter;
        renderGallery();
      };
    });
    sortSelect.onchange = () => {
      toolbar.dataset.sort = sortSelect.value;
      renderGallery();
    };
    clearButton.onclick = () => {
      state.search = '';
      localStorage.removeItem(STORAGE.search);
      const input = document.getElementById('search-input');
      if (input) input.value = '';
      renderGallery();
    };
    grid.querySelector('#clear-search-empty')?.addEventListener('click', () => {
      state.search = '';
      localStorage.removeItem(STORAGE.search);
      const input = document.getElementById('search-input');
      if (input) input.value = '';
      renderGallery();
    });
    grid.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => addToCart(button.dataset.add, button.dataset.volume || '50')));
    grid.querySelectorAll('[data-buy]').forEach(button => button.addEventListener('click', () => {
      addToCart(button.dataset.buy, button.dataset.volume || '50');
      location.href = 'cart.html';
    }));
    grid.querySelectorAll('[data-wishlist]').forEach(button => button.addEventListener('click', () => toggleWishlist(button.dataset.wishlist)));
    grid.querySelectorAll('.gallery-card').forEach(card => {
      card.addEventListener('click', event => {
        if (event.target.closest('button')) return;
        location.href = `product.html?slug=${PRODUCT_MAP.get(card.dataset.productId)?.slug || ''}`;
      });
    });
  }

  function renderCart() {
    const itemsContainer = document.querySelector('.cart-items');
    const summary = document.querySelector('.cart-summary');
    if (!itemsContainer || !summary) return;
    const cart = getCart();
    const lang = state.lang;
    const subtotal = cart.reduce((sum, item) => {
      const product = PRODUCT_MAP.get(String(item.id));
      return sum + ((product?.volumePrices?.[item.volume] || product?.price || 0) * item.qty);
    }, 0);
    const shipping = subtotal >= 300 || subtotal === 0 ? 0 : 25;
    const total = subtotal + shipping;

    itemsContainer.innerHTML = cart.length ? cart.map(item => {
      const product = PRODUCT_MAP.get(String(item.id));
      if (!product) return '';
      const title = lang === 'ar' ? (product.nameAr || product.name) : product.name;
      const notes = lang === 'ar' ? (product.notesAr || product.notes) : product.notes;
      const price = product.volumePrices?.[item.volume] || product.price;
      return `
        <article class="cart-item" data-product-id="${product.id}" data-volume="${item.volume}">
          <img class="cart-item__image" src="${product.image}" alt="${product.name} fragrance bottle" width="900" height="1125" loading="lazy" />
          <div class="cart-item__body">
            <div>
              <h3>${title}</h3>
              <p>${notes}</p>
              <small>${item.volume}ml</small>
            </div>
            <div class="cart-item__meta"><strong>${currency(price)}</strong><span>${t('cart.total')}: ${currency(price * item.qty)}</span></div>
          </div>
          <div class="cart-item__controls">
            <button class="qty-btn" type="button" data-dec>−</button>
            <span class="qty-btn">${t('cart.qty')} ${item.qty}</span>
            <button class="qty-btn" type="button" data-inc>+</button>
            <button class="remove-btn" type="button" data-remove>${t('cart.remove')}</button>
          </div>
        </article>`;
    }).join('') : `
      <div class="empty-state">
        <h3>${t('cart.empty.title')}</h3>
        <p>${t('cart.empty.copy')}</p>
        <a class="btn" href="gallery.html">${t('cart.browse')}</a>
      </div>`;

    summary.innerHTML = `
      <span class="eyebrow">${t('cart.eyebrow')}</span>
      <div class="summary-row"><strong>${t('cart.subtotal')}</strong><span>${currency(subtotal)}</span></div>
      <div class="summary-row"><strong>${t('cart.shipping')}</strong><span>${shipping ? currency(shipping) : t('cart.complimentary')}</span></div>
      <div class="summary-total"><strong>${t('cart.total')}</strong><span>${currency(total)}</span></div>
      <form class="checkout-form" id="checkout-form">
        <input type="text" name="name" placeholder="${t('cart.name')}" aria-label="${t('cart.name')}" required />
        <input type="tel" name="phone" placeholder="${t('cart.phone')}" aria-label="${t('cart.phone')}" required />
        <select name="emirate" aria-label="${t('cart.emirate')}" required>
          <option value="">${t('cart.emirate')}</option>
          ${Object.values(EMIRATES).map(emirate => `<option value="${emirate.label}">${emirate.label}</option>`).join('')}
        </select>
        <textarea name="message" placeholder="${t('cart.message')}" aria-label="${t('cart.message')}"></textarea>
        <button class="btn" type="submit">${t('cart.order')}</button>
        <p class="order-message">${t('cart.ordercopy')}</p>
      </form>`;

    itemsContainer.querySelectorAll('.cart-item').forEach(itemEl => {
      const productId = itemEl.dataset.productId;
      const volume = itemEl.dataset.volume;
      const current = cart.find(item => String(item.id) === String(productId) && item.volume === volume);
      itemEl.querySelector('[data-inc]').onclick = () => updateCartQty(productId, volume, (current?.qty || 1) + 1);
      itemEl.querySelector('[data-dec]').onclick = () => updateCartQty(productId, volume, Math.max(1, (current?.qty || 1) - 1));
      itemEl.querySelector('[data-remove]').onclick = () => removeCartItem(productId, volume);
    });

    document.getElementById('checkout-form')?.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const name = String(formData.get('name') || '').trim();
      const phone = String(formData.get('phone') || '').trim();
      const emirate = String(formData.get('emirate') || '').trim();
      const note = String(formData.get('message') || '').trim();
      if (!name || !phone || !emirate) return;
      const lines = cart.map(item => {
        const product = PRODUCT_MAP.get(String(item.id));
        const title = product ? (lang === 'ar' ? (product.nameAr || product.name) : product.name) : `Item ${item.id}`;
        return `${title} x${item.qty} (${item.volume}ml)`;
      }).join(', ');
      const message = `${t('cart.whatsappnote')} ${lines}. Total: ${currency(total)}. Name: ${name}. Phone: ${phone}. Emirate: ${emirate}. ${note}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    });
  }

  function renderProductPage() {
    const mount = document.querySelector('[data-product-page]');
    if (!mount) return;
    const slug = new URLSearchParams(location.search).get('slug');
    const product = slug ? PRODUCT_SLUG_MAP.get(slug) : PRODUCTS[0];
    if (!product) {
      mount.innerHTML = `<section class="section"><div class="container empty-state"><h3>${t('product.notfound')}</h3><a class="btn" href="gallery.html">${t('cart.browse')}</a></div></section>`;
      return;
    }
    const lang = state.lang;
    mount.innerHTML = `
      <section class="section product-detail">
        <div class="container product-detail__grid">
          <div class="product-detail__media">
            <img src="${product.image}" alt="${product.name} fragrance bottle" width="1200" height="1500" />
          </div>
          <div class="product-detail__copy">
            <span class="eyebrow">${t('product.eyebrow')}</span>
            <h1 class="page-title">${lang === 'ar' ? (product.nameAr || product.name) : product.name}</h1>
            <p class="page-copy">${lang === 'ar' ? (product.descriptionAr || product.description) : product.description}</p>
            <div class="detail-meta"><strong>${currency(product.price)}</strong><span>${product.rating.toFixed(1)} ★ (${product.reviews})</span></div>
            <div class="detail-block"><h3>${t('product.volume')}</h3><div class="volume-buttons">${Object.entries(product.volumePrices).map(([volume, price]) => `<button class="volume-pill${volume === '50' ? ' is-active' : ''}" type="button" data-volume="${volume}" data-price="${price}">${volume}ml - ${currency(price)}</button>`).join('')}</div></div>
            <div class="detail-block"><h3>${t('product.pyramid')}</h3><div class="product-detail__pyramid"><div><strong>Top</strong><p>${product.pyramid[0]}</p></div><div><strong>Heart</strong><p>${product.pyramid[1]}</p></div><div><strong>Base</strong><p>${product.pyramid[2]}</p></div></div></div>
            <div class="hero-actions"><button class="btn" id="detail-add">${t('product.add')}</button><button class="btn secondary" id="detail-buy">${t('product.buy')}</button><a class="btn secondary" href="gallery.html">${t('product.back')}</a></div>
          </div>
        </div>
      </section>
      <section class="section"><div class="container"><div class="detail-block"><h3>${t('product.recommend')}</h3><div class="gallery-grid recommendations-grid"></div></div></div></section>`;
    const volumeButtons = mount.querySelectorAll('.volume-pill');
    let selectedVolume = '50';
    const selectedPrice = () => product.volumePrices[selectedVolume] || product.price;
    const priceEl = mount.querySelector('#detail-add');
    const setActive = () => {
      volumeButtons.forEach(btn => btn.classList.toggle('is-active', btn.dataset.volume === selectedVolume));
      priceEl.innerHTML = `${t('product.add')} - ${currency(selectedPrice())}`;
    };
    volumeButtons.forEach(button => button.addEventListener('click', () => { selectedVolume = button.dataset.volume; setActive(); }));
    setActive();
    mount.querySelector('#detail-add').onclick = () => addToCart(product.id, selectedVolume);
    mount.querySelector('#detail-buy').onclick = () => { addToCart(product.id, selectedVolume); location.href = 'cart.html'; };
    const related = PRODUCTS.filter(item => item.category === product.category && item.id !== product.id).slice(0, 3);
    const relatedGrid = mount.querySelector('.recommendations-grid');
    relatedGrid.innerHTML = related.map(buildProductCard).join('');
    relatedGrid.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => addToCart(button.dataset.add, button.dataset.volume || '50')));
    relatedGrid.querySelectorAll('[data-buy]').forEach(button => button.addEventListener('click', () => { addToCart(button.dataset.buy, button.dataset.volume || '50'); location.href = 'cart.html'; }));
    relatedGrid.querySelectorAll('[data-wishlist]').forEach(button => button.addEventListener('click', () => toggleWishlist(button.dataset.wishlist)));
  }

  function renderAboutExtras() {
    const panel = document.querySelector('.about-panel');
    if (!panel || panel.dataset.enriched === '1') return;
    panel.dataset.enriched = '1';
    panel.insertAdjacentHTML('beforeend', `
      <section class="about-extra"><h3>${t('about.philosophy.eyebrow')}</h3><p>${t('about.philosophy.copy1')}</p><p>${t('about.philosophy.copy2')}</p></section>
      <section class="about-extra"><h3>${t('about.team')}</h3><p>Founder's atelier images and product-direction portraits would sit here in a full content build.</p></section>
      <section class="about-extra"><h3>${t('about.source')}</h3><p>We prioritize responsibly sourced naturals, modern aroma molecules, and extrait-level concentration to preserve depth and longevity.</p></section>
      <section class="about-extra"><h3>${t('about.awards')}</h3><p>Featured in private client edits and boutique gifting guides for its refined presentation and long wear.</p></section>
      <section class="about-extra"><h3>${t('about.timeline')}</h3><ul><li>2024 - Atelier founded</li><li>2025 - First numbered launch</li><li>2026 - UAE delivery and concierge support</li></ul></section>
      <section class="about-extra about-extra--cta"><h3>${t('about.consult')}</h3><a class="btn" href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener">${t('hero.whatsapp')}</a></section>`);
  }

  function renderHomeExtras() {
    const heroActions = document.querySelector('.hero-actions');
    if (heroActions && !heroActions.querySelector('[data-whatsapp-cta]')) {
      const button = document.createElement('a');
      button.className = 'btn secondary';
      button.href = `https://wa.me/${WHATSAPP_NUMBER}`;
      button.target = '_blank';
      button.rel = 'noopener';
      button.dataset.whatsappCta = '1';
      button.textContent = t('hero.whatsapp');
      heroActions.appendChild(button);
    }
    const ticker = document.querySelector('.hero-home__ticker');
    if (ticker && !ticker.dataset.ready) {
      ticker.dataset.ready = '1';
      ticker.innerHTML = `
        <div class="ticker-row ticker-row--forward"><span>VELVET SCENTS</span><span>Marj</span><span>Oud &amp; Roses</span><span>Bin Shaikh</span><span>Ignite Oud</span></div>
        <div class="ticker-row ticker-row--reverse"><span>VELVET SCENTS</span><span>Private edit</span><span>Dubai delivery</span><span>Maison</span><span>Gift ritual</span></div>`;
    }
  }

  function initAnnouncementBar() {
    if (localStorage.getItem(STORAGE.announcement) === '1' || document.querySelector('.announcement-bar')) return;
    const bar = document.createElement('div');
    bar.className = 'announcement-bar';
    bar.innerHTML = `<span>${t('announcement')}</span><button type="button" aria-label="Dismiss announcement">×</button>`;
    document.body.prepend(bar);
    bar.querySelector('button').onclick = () => { localStorage.setItem(STORAGE.announcement, '1'); bar.remove(); };
  }

  function initScrollTop() {
    if (document.querySelector('.scroll-top')) return;
    const button = document.createElement('button');
    button.className = 'scroll-top';
    button.type = 'button';
    button.textContent = '↑';
    button.setAttribute('aria-label', 'Scroll to top');
    button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(button);
    const update = () => button.classList.toggle('is-visible', window.scrollY > 400);
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  function initNewsletter() {
    const form = document.querySelector('.newsletter-form');
    if (!form || form.dataset.ready === '1') return;
    form.dataset.ready = '1';
    const input = form.querySelector('input[type="email"]');
    const button = form.querySelector('button[type="submit"]');
    if (!input || !button) return;
    const feedback = document.createElement('p');
    feedback.className = 'newsletter-message';
    form.after(feedback);
    form.onsubmit = async event => {
      event.preventDefault();
      const email = input.value.trim();
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        feedback.textContent = t('newsletter.error');
        feedback.classList.add('is-error');
        return;
      }
      button.disabled = true;
      const original = button.textContent;
      button.textContent = t('newsletter.loading');
      const saved = readJSON(STORAGE.newsletter, []);
      if (!saved.includes(email)) saved.push(email);
      writeJSON(STORAGE.newsletter, saved);
      await new Promise(resolve => setTimeout(resolve, 500));
      feedback.textContent = t('newsletter.success');
      feedback.classList.remove('is-error');
      button.textContent = original;
      button.disabled = false;
      input.value = '';
    };
  }

  function initQuiz() {
    const anchor = document.querySelector('.newsletter');
    if (!anchor || document.querySelector('.quiz-panel')) return;
    anchor.insertAdjacentHTML('beforebegin', `
      <section class="section quiz-section"><div class="container"><div class="quiz-panel"><span class="eyebrow">${t('quiz.title')}</span><h2>${t('quiz.copy')}</h2><div class="quiz-grid"><select id="quiz-mood"><option value="warm">${t('quiz.warm')}</option><option value="fresh">${t('quiz.fresh')}</option><option value="mysterious">${t('quiz.mysterious')}</option></select><select id="quiz-occasion"><option value="daily">${t('quiz.daily')}</option><option value="evening">${t('quiz.evening')}</option><option value="gift">${t('quiz.gift')}</option></select><select id="quiz-strength"><option value="light">${t('quiz.light')}</option><option value="medium">${t('quiz.medium')}</option><option value="intense">${t('quiz.intense')}</option></select></div><button class="btn" id="quiz-run" type="button">${t('quiz.cta')}</button><div class="quiz-results" hidden></div></div></div></section>`);
    const panel = document.querySelector('.quiz-panel');
    if (!panel) return;
    panel.querySelector('#quiz-run').onclick = () => {
      const mood = panel.querySelector('#quiz-mood').value;
      const strength = panel.querySelector('#quiz-strength').value;
      let picks = PRODUCTS.filter(product => mood === 'fresh' ? product.category === 'fresh' : mood === 'warm' ? product.category === 'oriental' : product.rating >= 4.8);
      if (strength === 'intense') picks = picks.filter(product => product.rating >= 4.8 || product.price >= 320);
      picks = picks.slice(0, 3);
      const results = panel.querySelector('.quiz-results');
      results.hidden = false;
      results.innerHTML = picks.map(product => `<a class="quiz-result-card" href="product.html?slug=${product.slug}"><img src="${product.image}" alt="${product.name} fragrance bottle" width="800" height="1000" /><strong>${state.lang === 'ar' ? (product.nameAr || product.name) : product.name}</strong></a>`).join('');
    };
  }

  function initMap() {
    const mapFrame = document.querySelector('.footer-location .map-frame');
    if (!mapFrame || !window.L || mapFrame.dataset.ready === '1') return;
    mapFrame.dataset.ready = '1';
    mapFrame.innerHTML = '<div id="map" style="min-height:300px;width:100%"></div>';
    const map = L.map('map', { scrollWheelZoom: false }).setView([25.2048, 55.2708], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors', maxZoom: 18 }).addTo(map);
    const marker = L.marker([25.2048, 55.2708], { icon: L.divIcon({ className: 'velvet-marker', html: '<span></span>', iconSize: [24, 24], iconAnchor: [12, 12] }) }).addTo(map);
    marker.bindPopup(t('map.popup')).openPopup();
    setTimeout(() => map.invalidateSize(), 300);
    const select = document.createElement('select');
    select.id = 'emirate-select';
    select.className = 'lang-select';
    select.innerHTML = `<option value="">${t('map.label')}</option>${Object.entries(EMIRATES).map(([key, emirate]) => `<option value="${key}">${emirate.label}</option>`).join('')}`;
    const note = document.createElement('p');
    note.id = 'delivery-note';
    note.className = 'delivery-note';
    note.textContent = t('location.note.default');
    mapFrame.before(select, note);
    select.onchange = () => {
      const emirate = EMIRATES[select.value];
      if (!emirate) return;
      map.setView([emirate.lat, emirate.lng], emirate.zoom, { animate: true });
      marker.setLatLng([emirate.lat, emirate.lng]);
      marker.bindPopup(`${emirate.label} — Velvet Scents Atelier`).openPopup();
      note.textContent = emirate.note[state.lang];
    };
  }

  function initSearchForms() {
    document.querySelectorAll('#site-search').forEach(form => {
      const input = form.querySelector('#search-input');
      if (!input) return;
      if (!input.value && state.search) input.value = state.search;
      form.onsubmit = event => {
        event.preventDefault();
        state.search = input.value.trim();
        localStorage.setItem(STORAGE.search, state.search);
        if (location.pathname.toLowerCase().includes('gallery')) renderGallery(); else location.href = 'gallery.html';
      };
    });
  }

  function initMobileMenu() {
    const inner = document.querySelector('.mobile-menu-inner');
    if (!inner || inner.dataset.ready === '1') return;
    inner.dataset.ready = '1';
    const search = document.querySelector('.site-search')?.cloneNode(true);
    if (search) {
      search.classList.add('mobile-search');
      const mobileInput = search.querySelector('#search-input');
      if (mobileInput) mobileInput.id = 'search-input-mobile';
      search.querySelector('button').textContent = t('search.button');
      inner.appendChild(search);
      search.onsubmit = event => {
        event.preventDefault();
        const query = (search.querySelector('input[type="search"]')?.value || '').trim();
        state.search = query;
        localStorage.setItem(STORAGE.search, query);
        location.href = 'gallery.html';
      };
    }
    const switches = document.createElement('div');
    switches.className = 'mobile-switches';
    switches.innerHTML = `<label class="theme-switch theme-switch--mobile" for="theme-toggle"><span class="theme-switch-track" aria-hidden="true"><span class="theme-switch-thumb"></span></span><span class="theme-switch-text"><span>${t('theme.dark')}</span><span>${t('theme.light')}</span></span></label><select id="lang-select-mobile" class="lang-select"><option value="en">EN</option><option value="ar">العربية</option></select>`;
    inner.appendChild(switches);
    switches.querySelector('#lang-select-mobile').value = state.lang;
    switches.querySelector('#lang-select-mobile').onchange = event => setLanguage(event.target.value);
  }

  function initFooterLinks() {
    document.querySelectorAll('.footer-links a[href="#location"]').forEach(link => { link.href = 'index.html#location'; });
  }

  function renderHome() { renderHomeExtras(); initQuiz(); }
  function renderGalleryPage() { renderGallery(); }
  function renderCartPage() { renderCart(); }
  function renderAboutPage() { renderAboutExtras(); }
  function renderProductPageEntry() { renderProductPage(); }

  function renderPage() {
    const path = location.pathname.toLowerCase();
    if (path.includes('gallery')) renderGalleryPage();
    if (path.includes('cart')) renderCartPage();
    if (path.includes('about')) renderAboutPage();
    if (path.includes('product')) renderProductPageEntry();
    if (path.endsWith('index.html') || path === '/' || path.endsWith('/')) renderHome();
    initMap();
    syncCartBadge();
  }

  function init() {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.classList.add(`theme-${state.theme}`);
    setTheme(state.theme);
    setLanguage(state.lang);
    initAnnouncementBar();
    initScrollTop();
    initSearchForms();
    initThemeControls();
    initLanguageControls();
    initMobileMenu();
    initNewsletter();
    initFooterLinks();
    renderPage();
    syncCartBadge();
    document.body.classList.add('page-ready');
  }

  function initThemeControls() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    toggle.checked = state.theme === 'light';
    toggle.onchange = () => setTheme(toggle.checked ? 'light' : 'dark');
  }

  function initLanguageControls() {
    const select = document.getElementById('lang-select');
    if (!select) return;
    select.value = state.lang;
    select.onchange = () => setLanguage(select.value);
  }

  function initAnnouncementBar() {
    if (localStorage.getItem(STORAGE.announcement) === '1' || document.querySelector('.announcement-bar')) return;
    const bar = document.createElement('div');
    bar.className = 'announcement-bar';
    bar.innerHTML = `<span>${t('announcement')}</span><button type="button" aria-label="Dismiss">×</button>`;
    bar.querySelector('button').onclick = () => { localStorage.setItem(STORAGE.announcement, '1'); bar.remove(); };
    document.body.prepend(bar);
  }

  function initScrollTop() {
    if (document.querySelector('.scroll-top')) return;
    const button = document.createElement('button');
    button.className = 'scroll-top';
    button.type = 'button';
    button.textContent = '↑';
    button.setAttribute('aria-label', 'Scroll to top');
    button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(button);
    const update = () => button.classList.toggle('is-visible', window.scrollY > 400);
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  window.VS = { PRODUCTS, PRODUCT_MAP, PRODUCT_SLUG_MAP, t, addToCart, toggleWishlist, getCart };
  window.addEventListener('DOMContentLoaded', init);
})();
