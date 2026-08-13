const { PrismaClient } = require('@prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "website_builder"
});

const prisma = new PrismaClient({ adapter });

const categoriesData = {
  "kbs-lcd": {
    slug: "kbs-lcd",
    title: "KBS LCD EKRAN",
    products: [
      { id: 1, slug: "iphone-17-pro-max-ekran", name: "iPhone 17 Pro Max Ekran", price: "Toptan Fiyat Gör", image: "/emtech-assets/cover_screen-1.jpg", stock: "Stokta Var" },
      { id: 2, slug: "samsung-s24-ultra-lcd", name: "Samsung S24 Ultra Lcd", price: "Toptan Fiyat Gör", image: "/emtech-assets/product_1.jpg", stock: "Stokta Var" },
      { id: 3, slug: "xiaomi-14-pro-lcd", name: "Xiaomi 14 Pro Lcd", price: "Toptan Fiyat Gör", image: "/emtech-assets/pro_3.jpg", stock: "Kritik Stok" },
      { id: 4, slug: "oppo-find-x5-pro-ekran", name: "Oppo Find X5 Pro Ekran", price: "Toptan Fiyat Gör", image: "/emtech-assets/kbs_ekran.jpg", stock: "Stokta Var" },
      { id: 5, slug: "iphone-11-pro-max-kbs-lcd", name: "iPhone 11 Pro Max KBS Lcd", price: "Toptan Fiyat Gör", image: "/emtech-assets/product_1.jpg", stock: "Stokta Var" },
      { id: 6, slug: "iphone-13-kbs-lcd-ekran", name: "iPhone 13 KBS Lcd Ekr.", price: "Toptan Fiyat Gör", image: "/emtech-assets/product_2.jpg", stock: "Stokta Var" },
      { id: 102, slug: "lcd-iphone-14-pro-max", name: 'LCD - iPhone 14 Pro Max', price: 'Toptan Fiyat Gör', image: '/emtech-assets/fire.jpg', stock: 'Stokta Var' },
      { id: 103, slug: "lcd-iphone-13-pro-max", name: 'LCD - iPhone 13 Pro Max', price: 'Toptan Fiyat Gör', image: '/emtech-assets/power.jpg', stock: 'Stokta Var' },
      { id: 106, slug: "samsung-lcd-ekranlar", name: 'Samsung Lcd Ekranlar', price: 'Toptan Fiyat Gör', image: '/emtech-assets/product_1.jpg', stock: 'Stokta Var' }
    ]
  },
  "cmp-plus-lcd": {
    slug: "cmp-plus-lcd",
    title: "CMP PLUS LCD",
    products: [
      { id: 10, slug: "iphone-12-cmp-plus", name: "iPhone 12 CMP Plus", price: "Toptan Fiyat Gör", image: "/emtech-assets/product_2.jpg", stock: "Stokta Var" },
      { id: 11, slug: "iphone-11-cmp-plus", name: "iPhone 11 CMP Plus", price: "Toptan Fiyat Gör", image: "/emtech-assets/pro_5.jpg", stock: "Stokta Var" },
      { id: 12, slug: "iphone-13-pro-max-cmp", name: "iPhone 13 Pro Max CMP", price: "Toptan Fiyat Gör", image: "/emtech-assets/product_1.jpg", stock: "Stokta Var" },
      { id: 101, slug: "iphone-16-pro-ekran-a0123", name: 'iPhone 16 Pro - Ekran A0123', price: 'Toptan Fiyat Gör', image: '/emtech-assets/cover_screen-1.jpg', stock: 'Stokta Var' }
    ]
  },
  "kbs-batarya": {
    slug: "kbs-batarya",
    title: "KBS BATARYA",
    products: [
      { id: 5, slug: "huawei-p60-pro-batarya", name: "Huawei P60 Pro Batarya", price: "Toptan Fiyat Gör", image: "/emtech-assets/power.jpg", stock: "Stokta Var" },
      { id: 6, slug: "redmi-note-13-pro-batarya", name: "Redmi Note 13 Pro Batarya", price: "Toptan Fiyat Gör", image: "/emtech-assets/pro_8.jpg", stock: "Stokta Var" },
      { id: 20, slug: "iphone-11-yuksek-kapasite-batarya", name: "iPhone 11 Yüksek Kapasite Batarya", price: "Toptan Fiyat Gör", image: "/emtech-assets/power.jpg", stock: "Stokta Var" },
      { id: 21, slug: "iphone-12-pro-kbs-batarya", name: "iPhone 12 Pro KBS Batarya", price: "Toptan Fiyat Gör", image: "/emtech-assets/power.jpg", stock: "Stokta Var" },
      { id: 22, slug: "iphone-xr-kbs-orijinal-entegre", name: "iPhone XR KBS Orijinal Entegre", price: "Toptan Fiyat Gör", image: "/emtech-assets/power.jpg", stock: "Stokta Var" },
    ]
  },
  "cartel-max-power": {
    slug: "cartel-max-power",
    title: "CARTEL MAX POWER",
    products: [
      { id: 30, slug: "iphone-13-pro-max-cartel-batarya", name: "iPhone 13 Pro Max Cartel Batarya", price: "Toptan Fiyat Gör", image: "/emtech-assets/fire.jpg", stock: "Stokta Var" },
      { id: 31, slug: "iphone-14-plus-cartel-batarya", name: "iPhone 14 Plus Cartel Batarya", price: "Toptan Fiyat Gör", image: "/emtech-assets/fire.jpg", stock: "Stokta Var" },
      { id: 32, slug: "cartel-20w-hizli-sarj-adaptoru", name: "Cartel 20W Hızlı Şarj Adaptörü", price: "Toptan Fiyat Gör", image: "/emtech-assets/pro_5.jpg", stock: "Stokta Var" },
    ]
  }
};

async function seed() {
  try {
    let client = await prisma.client.findUnique({
      where: { slug: 'emtech-store' }
    });

    if (!client) {
      client = await prisma.client.create({
        data: {
          name: 'Emtech Store',
          slug: 'emtech-store',
          sector: 'E-commerce',
          status: 'LIVE'
        }
      });
    }

    const categoryEntries = Object.entries(categoriesData);
    let totalProducts = 0;

    for (let i = 0; i < categoryEntries.length; i++) {
      const [slug, data] = categoryEntries[i];

      let category = await prisma.ecomCategory.findFirst({
        where: { slug, clientId: client.id }
      });

      if (!category) {
        category = await prisma.ecomCategory.create({
          data: {
            clientId: client.id,
            name: data.title,
            slug: slug,
            order: i
          }
        });
      }

      for (const productData of data.products) {
        const existingProduct = await prisma.ecomProduct.findFirst({
          where: { 
            name: productData.name,
            categoryId: category.id
          }
        });

        if (!existingProduct) {
          const inStock = productData.stock === 'Stokta Var' || productData.stock === 'Kritik Stok';
          
          await prisma.ecomProduct.create({
            data: {
              clientId: client.id,
              categoryId: category.id,
              name: productData.name,
              price: 0,
              inStock: inStock,
              imageUrl: productData.image,
              brand: data.title 
            }
          });
          totalProducts++;
        }
      }
    }
    console.log(`Successfully seeded ${categoryEntries.length} categories and ${totalProducts} new products.`);
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
