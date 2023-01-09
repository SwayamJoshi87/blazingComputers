/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short title for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  /*
    {
      id: "P1",
      title: "title 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */
  {
    id: "2000",
    title: "MSI GE76 Raider",
    description:
      "If you're looking for a laptop with desktop-level power, the MSI GE76 Raider is about as close as you'll get, though you may also have to spend a ton of money to get there. Still, with its high-end components like the Intel Core i9-12900HK and Nvidia GeForce RTX 3080 Ti.",
    price: 3999.99,
    imageUrl: "./image/raiderge.jpg",
    discontinued: false,
    categories: ["GMG-LPT"]
  },
  {
    id: "2001",
    title: "Razer Blade 15",
    description:
      "Razer has simplified its Blade 15 lineup, removing the advanced and base models, but what's left is still a very good, thin, stylish gaming notebook. The Blade 15 remains a favorite because it has strong performance (with a Core i7-127800H and an Nvidia GeForce RTX 3070 Ti in the model we reviewed) but is just 4.4 pounds and 0.57 inches thick.",
    price: 2499.99,
    imageUrl: "./image/rzblade.jpg",
    discontinued: false,
    categories: ["GMG-LPT"]
  },
  {
    id: "2002",
    title: "Alienware x17 R2",
    description:
      "The Alienware x17 R2 goes up to an Intel Core i9-12900HK and an Nvidia GeForce RTX 3080 Ti, some of the most powerful parts on the market. In our review, the laptop showed strong performance in both gaming and productivity.",
    price: 1099.99,
    imageUrl: "./image/alienwarex17.jpg",
    discontinued: false,
    categories: ["GMG-LPT"]
  },
  {
    id: "2003",
    title: "Acer Nitro 5",
    description:
      "The Acer Nitro 5 has long been our favorite gaming laptop for those on a tight budget.  The latest model we've tested, with an Intel Core i5-12500H and Nvidia GeForce RTX 3050 Ti offers decent performance for the price, as long as you're willing to turn down the settings on some games.",
    price: 1099.99,
    imageUrl: "./image/acernitro5.jpg",
    discontinued: false,
    categories: ["GMG-LPT"]
  },
  {
    id: "2004",
    title: "Asus ROG Zephyrus G14",
    description:
      "If you're a PC gamer on the go, a thin PC like the Asus ROG Zephyrus G14 may be up your alley. The Zephyrus uses an AMD Ryzen 9 6900HS and an AMD Radeon RX 6800S, as well as the company's proprietary features like SmartShift (to move power between the CPU and GPU) and SmartAccess Memory.",
    price: 2599.99,
    imageUrl: "./image/asuszephyrus.jpg",
    discontinued: false,
    categories: ["GMG-LPT"]
  },
  {
    id: "2005",
    title: "MSI GE76 Raider",
    description:
      "If you're looking for a laptop with desktop-level power, the MSI GE76 Raider is about as close as you'll get, though you may also have to spend a ton of money to get there. Still, with its high-end components like the Intel Core i9-12900HK and Nvidia GeForce RTX 3080 Ti.",
    price: 3999.99,
    imageUrl: "./image/raiderge.jpg",
    discontinued: false,
    categories: ["GMG-LPT"]
  },
  {
    id: "2006",
    title: "MSI Aegis RS",
    description:
      "The MSI Aegis RS 11th is a top-of-the line prebuilt gaming desktop. The 11th Gen Intel Core CPU and options for an RTX 3080 bring awesome gaming performance in a design that you can upgrade yourself down the line.",
    price: 5499.99,
    imageUrl: "./image/msiaegisrs.jpg",
    discontinued: false,
    categories: ["GMG-PCS"]
  },
  {
    id: "2007",
    title: "Alienware Aurora R13",
    description:
      "The Alienware Aurora R13 has slight changes generation over generation, with a more angled design and the option for a glass window to see your components. But in our review, what really surprised us is how quiet the Aurora R13 is during gaming.",
    price: 4200.0,
    imageUrl: "./image/alienwareaurorar13.jpg",
    discontinued: false,
    categories: ["GMG-PCS"]
  },
  {
    id: "2008",
    title: "iBuypower Revolt 3 i7BGv",
    description:
      "No intense lighting, no glass windows, just a small tower packed with gaming power. The iBuypower Revolt 3 has steel panels, black mesh and a largely subtle design. It's clever, though, with two headset hangers and a built-in handle to carry it to your next LAN party.",
    price: 2599.99,
    imageUrl: "./image/ibuypowerrevolt3.jpg",
    discontinued: false,
    categories: ["GMG-PCS"]
  },
  {
    id: "2009",
    title: "Corsair One i300",
    description:
      "In some ways, the Corsair One i300 is a console-like prebuilt PC. It takes up very little space on a desk with a 6.93 x 7.87-inch base that rises slightly taller than an Xbox Series X. But in that metal chassis is a set of top-end components, including an Intel Core i9-12900K, Nvidia GeForce RTX 3080 Ti, 64GB of DDR5 RAM and a 2TB PCIe Gen 4 NVMe SSD.",
    price: 3699.99,
    imageUrl: "./image/corsaironei300.jpg",
    discontinued: false,
    categories: ["GMG-PCS"]
  },

  {
    id: "2010",
    title: "Apple iMac 24-inch (2021)",
    description:
      "The Apple iMac 2021 (24-inch) is a breath of fresh air for the aging iMac line, arriving with a beautiful display, an excellent webcam and an array of bright new color schemes. This is also the first iMac to incorporate Apple’s M1 chip, a custom bit of silicon that’s already proven itself to be powerful and efficient.",
    price: 1299.99,
    imageUrl: "./image/appleimac2021.jpg",
    discontinued: false,
    categories: ["OFC-PCS"]
  },
  {
    id: "2011",
    title: "Microsoft Surface Studio 2",
    description:
      "The Microsoft Surface Studio 2 is the best thing around for anyone who does digital art, thanks to a gorgeous touchscreen that drops down low for comfortable touch and pen use. The better-than-4K display looks amazing, the touch screen supports both the Surface Pen and Surface Dial and the design is top-notch. The design alone would make this the best touchscreen all-in-one for drawing, but the addition of best-in-class pen support takes it up another level.",
    price: 5959.99,
    imageUrl: "./image/microsoftsurfacestudio2.jpg",
    discontinued: true,
    categories: ["OFC-PCS"]
  },
  {
    id: "2012",
    title: "Dell OptiPlex 7080",
    description:
      "Dell’s refined business tower means business, and it remains the best overall choice for a growing business that needs an office — and a PC that can handle a wide variety of business-related tasks. Dell’s wide array of model options also allows businesses to pick a version that matches their budget.",
    price: 971.0,
    imageUrl: "./image/delloptiplex7080.jpg",
    discontinued: false,
    categories: ["OFC-PCS"]
  },
  {
    id: "2013",
    title: "Dell XPS 8940",
    description:
      "Starting at well below $1,000, this XPS tower is perfect for sole proprietors and small offices that need a capable business computer but don’t want to pay too much for it. The included features impress at this price, including options like an 11th-Gen Intel Core i5 processor (starting with the i5-11400), 8GB of RAM, and a 1TB HDD for storage — although further tiers do allow you to upgrade to an SSD if you prefer..",
    price: 1000.0,
    imageUrl: "./image/dellxps8940.jpg",
    discontinued: false,
    categories: ["OFC-PCS"]
  },
  {
    id: "2014",
    title: "Falcon Northwest Talon",
    description:
      "Starting at $2,500 and reaching into five digits at the very top end, the Falcon Northwest Talon is no cheap PC. But this desktop delivers workstation-class performance in a compact footprint. Built in a midsize desktop chassis, the Talon is not a miniature system, but it’s pretty compact considering the hardware inside. Intel and AMD models are available, including new Ryzen 5000 processors. High-end configurations start with the eight-core, 16-thread Ryzen 7 5800X, and top out at the 16-core, 32-thread Ryzen 9 5950X.",
    price: 2500.0,
    imageUrl: "./image/falconnorthwesttalon.jpg",
    discontinued: false,
    categories: ["OFC-PCS"]
  },

  {
    id: "2015",
    title: "Lenovo ThinkPad X1 Nano",
    description:
      "Lenovo's ThinkPad X1 Nano is a great business laptop because it's powerful, long-lived, and easy to carry. Weighing in at just 2 pounds, the Nano is the lightest laptop on this list, but with a tested battery life of 12 hours it still has enough juice to last you through a day of work without needing a charger. You can also pay extra for 4G/5G connectivity, if you need to stay connected on the go.",
    price: 1479.99,
    imageUrl: "./image/lenovothinkpadx1nano.jpg",
    discontinued: false,
    categories: ["OFC-LPT"]
  },

  {
    id: "2016",
    title: "HP Spectre x360 14",
    description:
      "The HP Spectre x360 14 is a powerful convertible business laptop with a sleek, elegant design that provides excellent performance for both work and play. Available in three colors (silver, black, and navy blue) and sporting an ultra-thin profile of just 0.67 inches, the HP Spectre x360 brings a touch of sophisticated style to your desk that perfectly complements its internal components. ",
    price: 1135.0,
    imageUrl: "./image/hpspectre360.jpg",
    discontinued: false,
    categories: ["OFC-LPT"]
  },
  {
    id: "2017",
    title: "Apple MacBook Air with M1",
    description:
      "Apple revolutionized its laptops with the M1 chip, and the MacBook Air was one of the first devices to get one. This chip delivers better performance than the Air's ever seen, as well as incredible battery life: it lasted 14 hours and 41 minutes on the Tom's Guide battery test. Plus, the MacBook Air's webcam is clearer and more color-accurate than ever, thanks to signal processing, and the Magic Keyboard still delivers a great typing experience.",
    price: 1149.99,
    imageUrl: "./image/applemacbookairm1.jpg",
    discontinued: false,
    categories: ["OFC-LPT"]
  },
  {
    id: "2018",
    title: "Dell XPS 13 Plus",
    description:
      "judging by the title, you might think that the Dell XPS 13 Plus is a bigger version of Dell’s iconic laptop. But it’s actually quite the opposite. This is as minimalist a design as we’ve ever seen from Dell.",
    price: 1749.99,
    imageUrl: "./image/dellxps13plus.jpg",
    discontinued: false,
    categories: ["OFC-LPT"]
  },
  {
    id: "2019",
    title: "Microsoft Surface Laptop 5",
    description:
      "The Surface Laptop 5 isn't a bad device. The spacious keyboard and tall screen are great for getting work done, and the fact that Microsoft improved the brightness this time around makes the Surface Laptop 5 more usable outdoors than its predecessor. The newly-added Thunderbolt 4 support is also welcome, especially if you like to use external displays, and the upgrade to a 12th Gen Intel CPU delivers clear improvements in performance benchmarks.",
    price: 1689.99,
    imageUrl: "./image/microsoftsurfacelaptop5.jpg",
    discontinued: true,
    categories: ["OFC-LPT"]
  }
];
