function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    _id: {
      $oid: "60a2b6873755232a70ff626e",
    },
    name: "AMD Ryzen 5 3600XT",
    description:
      "Ryzen 5 3600 3.6GHz, GTX 1660 Super 6G, 500GB SSD, 16GB DDR4 3000MHz, RGB Fans, Windows 10 Home 64-bit, 802.11AC Wi-Fi",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2b6053755232a70ff626d",
      },
      image: {
        id: {
          $oid: "60a2b6023755232a70ff626c",
        },
        filename: "AMD Ryzen 5 3600XT.jpg",
        originalFilename: "AMD Ryzen 5 3600XT.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "c2b430f72cf309e76299b2cd1efe6468",
          public_id: "gamestech/60a2b6023755232a70ff626c",
          version: 1621276164,
          version_id: "b6b721c8de956c017097a58a7a06c3af",
          signature: "3c680dec65ca38fc163a1c3b272900a738825f28",
          width: 1095,
          height: 934,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T18:29:24Z",
          tags: [],
          bytes: 156403,
          type: "upload",
          etag: "a9d11647e3f49f8f3fd72aa46b52f797",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621276164/gamestech/60a2b6023755232a70ff626c.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621276164/gamestech/60a2b6023755232a70ff626c.jpg",
          original_filename: "file",
        },
      },
      altText: "AMD Ryzen 5 3600XT",
      __v: 0,
    },
    price: 3862800,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2bb425f710e40e261ac61",
    },
    name: "ASUS GeForce RTX 3080",
    description:
      "From top to bottom, the ROG Strix GeForce RTX™ 3080 has been radically improved to accommodate the impressive new Ampere chips from NVIDIA and to deliver the next wave of gaming performance innovation to the market. A fresh design and more metal surrounds a grouping of Axial-tech fans. Last gen's uniform fan layout has been usurped by a new rotation scheme and specialized roles for central and auxiliary fans. Below the blades, a larger, more impressive heatsink is ready for the most demanding thermal loads. The PCB has some new tricks up its sleeves, and even the backplate has received some performance-boosting changes. You've been waiting for the latest and greatest in GPU design - and this is it.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2bab05f710e40e261ac60",
      },
      image: {
        id: {
          $oid: "60a2baad5f710e40e261ac5f",
        },
        filename: "ASUS GeForce RTX 3080.jpg",
        originalFilename: "ASUS GeForce RTX 3080.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "bb13b25a29e1ec9f824d90cb5413f9a5",
          public_id: "gamestech/60a2baad5f710e40e261ac5f",
          version: 1621277359,
          version_id: "ea6f2ab5b03561bacd8552a2c13eb063",
          signature: "22738cba2fbf537ee826ef2bdbf35ee13ce3267a",
          width: 500,
          height: 500,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T18:49:19Z",
          tags: [],
          bytes: 67219,
          type: "upload",
          etag: "460c0dd4a2e95374401259bd8910d727",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621277359/gamestech/60a2baad5f710e40e261ac5f.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621277359/gamestech/60a2baad5f710e40e261ac5f.jpg",
          original_filename: "file",
        },
      },
      altText: "ASUS GeForce RTX 3080",
      __v: 0,
    },
    price: 15086273,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2bdf75f710e40e261ac64",
    },
    name: "Dell Alienware Aurora R10",
    description:
      "The new Alienware Aurora Ryzen Edition desktop gives you the power to develop and explore new worlds with up to 16-core 3rd generation AMD Ryzen processo",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2bd9c5f710e40e261ac63",
      },
      image: {
        id: {
          $oid: "60a2bd995f710e40e261ac62",
        },
        filename: "Dell Alienware Aurora R10.jpg",
        originalFilename: "Dell Alienware Aurora R10.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "18492a32553486a6a3d8896ef7bc81fb",
          public_id: "gamestech/60a2bd995f710e40e261ac62",
          version: 1621278107,
          version_id: "f7d1e5bf8a7f793b36081f64bbc46b0f",
          signature: "479e10b2baa73d7a25501695fecfa25133393146",
          width: 906,
          height: 1500,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T19:01:47Z",
          tags: [],
          bytes: 90916,
          type: "upload",
          etag: "e4162efd3d7e5f8614ca2304af2580e2",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621278107/gamestech/60a2bd995f710e40e261ac62.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621278107/gamestech/60a2bd995f710e40e261ac62.jpg",
          original_filename: "file",
        },
      },
      altText: "Alienware Aurora R10",
      __v: 0,
    },
    price: 21419300,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2bfe15f710e40e261ac67",
    },
    name: "Razer Rogue v3",
    description:
      "Store Laptops & Accompanying Peripherals: The backpack's main compartment is large enough for the Razer Blade 15 or any other 15 inch laptop, while the accessory compartment has ample space for electronics",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2bf915f710e40e261ac66",
      },
      image: {
        id: {
          $oid: "60a2bf8d5f710e40e261ac65",
        },
        filename: "Razer Rogue v3 15.6.jpg",
        originalFilename: "Razer Rogue v3 15.6.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "109f5a578195b28420af551eb5fdcbcb",
          public_id: "gamestech/60a2bf8d5f710e40e261ac65",
          version: 1621278608,
          version_id: "47391c2321e98028105b165a06f99d6a",
          signature: "9d6b3cd9e34285f6c29f97602cfd3f4b28786729",
          width: 572,
          height: 761,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T19:10:08Z",
          tags: [],
          bytes: 63116,
          type: "upload",
          etag: "a2e36d5620c09a9a7f935b265eed7497",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621278608/gamestech/60a2bf8d5f710e40e261ac65.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621278608/gamestech/60a2bf8d5f710e40e261ac65.jpg",
          original_filename: "file",
        },
      },
      altText: "Razer Rogue v3 15.6",
      __v: 0,
    },
    price: 1072893,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2c15b5f710e40e261ac6a",
    },
    name: "Lenovo Legion Recon",
    description:
      'Unbelievable storage - room for a 15. 6" Lenovo Gaming laptop, a large main compartment, plus dedicated pockets for all of your gaming gear and accessories. Fits up to 267 x 30 x 362 mm (10. 5 x 1. 2 x 14. 3 in)',
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2c1265f710e40e261ac69",
      },
      image: {
        id: {
          $oid: "60a2c1225f710e40e261ac68",
        },
        filename: "Lenovo Legion Recon.jpg",
        originalFilename: "Lenovo Legion Recon.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "820128c93f771a41acb30137144d6c69",
          public_id: "gamestech/60a2c1225f710e40e261ac68",
          version: 1621279013,
          version_id: "398d3b49849cea8c69b1c9e8a9569f8c",
          signature: "0b347dbf635d8b7f4fc8648f89b0a3584cc157d8",
          width: 587,
          height: 861,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T19:16:53Z",
          tags: [],
          bytes: 48760,
          type: "upload",
          etag: "ac9880f0fc4c3260d3b6838ff7e5aa4a",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621279013/gamestech/60a2c1225f710e40e261ac68.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621279013/gamestech/60a2c1225f710e40e261ac68.jpg",
          original_filename: "file",
        },
      },
      altText: "Razer Rogue v3",
      __v: 0,
    },
    price: 1072893,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2c2555f710e40e261ac6d",
    },
    name: "Asus ROG Phone 3",
    description:
      "The GameCool 3 cooling system in ROG Phone 3 uses an advanced 3D vapor chamber and a large heat sink that are precisely located to eliminate hotspots. The cooling system is incredibly effective at removing heat during full-speed operation via its specially designed vents. This comprehensive cooling system allows ROG Phone 3 to easily sustain peak performance during heavy gaming sessions, eliminating throttling to give you an expert edge against the competition.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2c20c5f710e40e261ac6c",
      },
      image: {
        id: {
          $oid: "60a2c2095f710e40e261ac6b",
        },
        filename: "Asus ROG Phone 3.jpg",
        originalFilename: "Asus ROG Phone 3.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "534b63520dec0edb770661aa38ef7216",
          public_id: "gamestech/60a2c2095f710e40e261ac6b",
          version: 1621279244,
          version_id: "c4f1cd903561bff585cd4c1540568774",
          signature: "d01997ec5caeb9db927f6e0be7917bb5c8226671",
          width: 1236,
          height: 1500,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T19:20:44Z",
          tags: [],
          bytes: 182360,
          type: "upload",
          etag: "73598b9c70a46196b098370fd2799951",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621279244/gamestech/60a2c2095f710e40e261ac6b.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621279244/gamestech/60a2c2095f710e40e261ac6b.jpg",
          original_filename: "file",
        },
      },
      altText: "Asus ROG Phone 3",
      __v: 0,
    },
    price: 11852251,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2c3495f710e40e261ac70",
    },
    name: "PEROINE Massage Gaming Chair",
    description:
      "MULTIFUNCTIONAL GAMING CHAIR】 - Our ergonomic gaming chair was designed for superior functional comfort as it features a multitude of adjusting systems and comfy seating. Ideal for long gaming sessions, our office chair is also perfect for your computer desk, long hours of office work and for great relaxation anywhere you need it.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2c2eb5f710e40e261ac6f",
      },
      image: {
        id: {
          $oid: "60a2c2e85f710e40e261ac6e",
        },
        filename: "PEROINE Massage Gaming Chair.jpg",
        originalFilename: "PEROINE Massage Gaming Chair.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "24d529ae2a24d8addd75c66167c20ca2",
          public_id: "gamestech/60a2c2e85f710e40e261ac6e",
          version: 1621279466,
          version_id: "5631d6f0bdbb8c5655a7e008ae37e382",
          signature: "8c9f15e36f352603d0a7e66e2a60d460dcedf6c1",
          width: 1140,
          height: 1492,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T19:24:26Z",
          tags: [],
          bytes: 88532,
          type: "upload",
          etag: "d8df16067ba6cc53199cb18c086645c6",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621279466/gamestech/60a2c2e85f710e40e261ac6e.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621279466/gamestech/60a2c2e85f710e40e261ac6e.jpg",
          original_filename: "file",
        },
      },
      altText: "PEROINE Massage Gaming Chair",
      __v: 0,
    },
    price: 1394793,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2c5535f710e40e261ac73",
    },
    name: "SCUF Prestige Custom Performance",
    description:
      "This wired and wireless pro-level controller is designed to improve every aspect of your gameplay. Controller features like paddles and adjustable hair triggers improve speed, accuracy, and precision. While our high-performance textured grip offers a new levels of gamer comfort. Be sure to check our special editions so look good while making your mark.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2c4995f710e40e261ac72",
      },
      image: {
        id: {
          $oid: "60a2c4965f710e40e261ac71",
        },
        filename: "SCUF Prestige Custom Performance.jpg",
        originalFilename: "SCUF Prestige Custom Performance.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "bb9f49f6d08efe4a8de14a2777f62ecb",
          public_id: "gamestech/60a2c4965f710e40e261ac71",
          version: 1621279896,
          version_id: "d44496d900fa2004e3e9498ccd219def",
          signature: "f7111747b40c1dcc6cfaeae40dcc3048cac8ac1c",
          width: 1500,
          height: 1500,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T19:31:36Z",
          tags: [],
          bytes: 83817,
          type: "upload",
          etag: "3cc3de268f82375ae95aac3be569497a",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621279896/gamestech/60a2c4965f710e40e261ac71.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621279896/gamestech/60a2c4965f710e40e261ac71.jpg",
          original_filename: "file",
        },
      },
      altText: "SCUF Prestige Custom Performance",
      __v: 0,
    },
    price: 1823993,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2c7525f710e40e261ac74",
    },
    name: "PowerA FUSION Pro",
    description:
      "Mappable Pro Pack - Map buttons to the rear paddles on-the-fly without letting go of the thumb sticks.",
    status: "DRAFT",
    price: 1287493,
    __v: 0,
    photo: {
      _id: {
        $oid: "60a2c77d5f710e40e261ac76",
      },
      image: {
        id: {
          $oid: "60a2c7785f710e40e261ac75",
        },
        filename: "PowerA FUSION Pro.jpg",
        originalFilename: "PowerA FUSION Pro.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "aa2b6d78fd549bd6ec4276105c799c8d",
          public_id: "gamestech/60a2c7785f710e40e261ac75",
          version: 1621280637,
          version_id: "1c354f7023c576146d48cb88474d6756",
          signature: "71cd7e955c16c5f6770e1cab386739a6db6cd57f",
          width: 1500,
          height: 1298,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T19:43:57Z",
          tags: [],
          bytes: 105779,
          type: "upload",
          etag: "8d328e7e5e269e55e4c6cb4099b7fec8",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621280637/gamestech/60a2c7785f710e40e261ac75.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621280637/gamestech/60a2c7785f710e40e261ac75.jpg",
          original_filename: "file",
        },
      },
      altText: "PowerA FUSION Pro",
      __v: 0,
    },
  },
  {
    _id: {
      $oid: "60a2c8825f710e40e261ac79",
    },
    name: "Playstation DualSense",
    description:
      "Haptic feedback - Feel physically responsive feedback to your in-game actions with dual actuators which replace traditional rumble motors. In your hands, these dynamic vibrations can simulate the feeling of everything from environments to the recoil of different weapons.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2c84c5f710e40e261ac78",
      },
      image: {
        id: {
          $oid: "60a2c8495f710e40e261ac77",
        },
        filename: "Playstation DualSense.jpg",
        originalFilename: "Playstation DualSense.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "d6b6444f14efe825bf4043c0f3fdcb8d",
          public_id: "gamestech/60a2c8495f710e40e261ac77",
          version: 1621280843,
          version_id: "e1ee1c1f0fafc42b8b1aaa139848c7d1",
          signature: "b38b4dcd29e2278848bb348916ac8e9abf1c6b58",
          width: 1500,
          height: 1500,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T19:47:23Z",
          tags: [],
          bytes: 73338,
          type: "upload",
          etag: "fd7e4ccdd08f089b0a9f55ca53eed1fe",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621280843/gamestech/60a2c8495f710e40e261ac77.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621280843/gamestech/60a2c8495f710e40e261ac77.jpg",
          original_filename: "file",
        },
      },
      altText: "Playstation DualSense",
      __v: 0,
    },
    price: 729425,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2c9135f710e40e261ac7c",
    },
    name: "Bimormat RGB Mouse Pad",
    description:
      "High Quality - Made of high elasticity natural rubber, this mouse mat is non-toxic and has no hazardous substances, safe for use. Anti-slip base can firmly grip your desktop and nylon stitched edges make the pad much more durable and longer lasting. Easily roll up the mouse pad without getting wrinkless or creases.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2c8b25f710e40e261ac7b",
      },
      image: {
        id: {
          $oid: "60a2c8af5f710e40e261ac7a",
        },
        filename: "Bimormat RGB Mouse Pad.jpg",
        originalFilename: "Bimormat RGB Mouse Pad.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "bcbcb18f571f6b6f499e1f9bb3391068",
          public_id: "gamestech/60a2c8af5f710e40e261ac7a",
          version: 1621280945,
          version_id: "f8683215f719b0ae92d49b9e927386d2",
          signature: "343e10ea47639f38b88a1a8c2bb71d990195619a",
          width: 1000,
          height: 882,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T19:49:05Z",
          tags: [],
          bytes: 90400,
          type: "upload",
          etag: "177aa7f77bcf8f71a143e1512f41ee58",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621280945/gamestech/60a2c8af5f710e40e261ac7a.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621280945/gamestech/60a2c8af5f710e40e261ac7a.jpg",
          original_filename: "file",
        },
      },
      altText: "Bimormat RGB Mouse Pad",
      __v: 0,
    },
    price: 300333,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2c9a35f710e40e261ac7f",
    },
    name: "Oculus Rift S",
    description:
      "Top VR gaming library: Blast, slash and soar your way through the top library in VR gaming. Oculus Rift S lets you play hundreds of games and exclusives already available in the Oculus store, with so much more to come.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2c9775f710e40e261ac7e",
      },
      image: {
        id: {
          $oid: "60a2c9755f710e40e261ac7d",
        },
        filename: "Oculus Rift S.jpg",
        originalFilename: "Oculus Rift S.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "8dd707105f44c92b22d5c05529932d21",
          public_id: "gamestech/60a2c9755f710e40e261ac7d",
          version: 1621281143,
          version_id: "1875667e6c3019f6507d3ec15fee45b0",
          signature: "10deda0ffbafaa0d8cd3377677e618f322bd72d5",
          width: 1500,
          height: 844,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T19:52:23Z",
          tags: [],
          bytes: 52218,
          type: "upload",
          etag: "cd1c20b7cfd5838a438b75e6a2ecb5f7",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621281143/gamestech/60a2c9755f710e40e261ac7d.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621281143/gamestech/60a2c9755f710e40e261ac7d.jpg",
          original_filename: "file",
        },
      },
      altText: "Oculus Rift S",
      __v: 0,
    },
    price: 4710470,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2caf55f710e40e261ac82",
    },
    name: "Asus ROG Strix XG49VQ 49",
    description:
      "49” dfhd (3840 x 1080) 1800R curved Super ultra-wide monitor with 144Hz and free Sync 2 HDR for immersive, smooth gaming with DisplayPort and HDMI connectivity49” dfhd (3840 x 1080) 1800R curved Super ultra-wide monitor with 144Hz and free Sync 2 HDR for immersive, smooth gaming with DisplayPort and HDMI connectivity",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2ca3b5f710e40e261ac81",
      },
      image: {
        id: {
          $oid: "60a2ca375f710e40e261ac80",
        },
        filename: "Asus ROG Strix XG49VQ 49.jpg",
        originalFilename: "Asus ROG Strix XG49VQ 49.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "eb742b20f69c39c71512acb159aacf31",
          public_id: "gamestech/60a2ca375f710e40e261ac80",
          version: 1621281338,
          version_id: "a58087110129805e1d04b6f4be0c8215",
          signature: "5747c4aba8c4b60f246cafd3deaa6e4703188642",
          width: 1498,
          height: 1050,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T19:55:38Z",
          tags: [],
          bytes: 178617,
          type: "upload",
          etag: "29064fbb008fc15d284a83d63f6f8150",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621281338/gamestech/60a2ca375f710e40e261ac80.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621281338/gamestech/60a2ca375f710e40e261ac80.jpg",
          original_filename: "file",
        },
      },
      altText: "Asus ROG Strix XG49VQ 49",
      __v: 0,
    },
    price: 8910407,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2cc1f5f710e40e261ac85",
    },
    name: "Razer Kraken Tournament Edition",
    description:
      "Retractable Noise Cancelling Microphone: An improved cardioid mic reduces background and ambient noises for crystal-clear communication",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2cbb65f710e40e261ac84",
      },
      image: {
        id: {
          $oid: "60a2cbb25f710e40e261ac83",
        },
        filename: "Razer Kraken Tournament Edition.jpg",
        originalFilename: "Razer Kraken Tournament Edition.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "5eab7747abc800bbe464b73e94e75ec1",
          public_id: "gamestech/60a2cbb25f710e40e261ac83",
          version: 1621281717,
          version_id: "66cf95f4049957f00a1cdddce8565610",
          signature: "a75fa2d084e4af033ff068c86aa0ed6b8cfd1cb5",
          width: 828,
          height: 810,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T20:01:57Z",
          tags: [],
          bytes: 51734,
          type: "upload",
          etag: "cfd7e2bc9294ffa19f45a9aeb6c11a19",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621281717/gamestech/60a2cbb25f710e40e261ac83.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621281717/gamestech/60a2cbb25f710e40e261ac83.jpg",
          original_filename: "file",
        },
      },
      altText: "Razer Kraken Tournament Edition",
      __v: 0,
    },
    price: 568583,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2cda25f710e40e261ac8b",
    },
    name: "NPET K10 Gaming Keyboard",
    description:
      "Professional Gaming Keyboard. UV coated keycaps and injection laser carving ABS keycaps design, the letter of characters never fade. Anti-sweat, prevents keycap damage, enhanced durability, and tactile feedback. Thick and firm stainless steel base plate, long service life, and never deforms. Metal and ABS construction make it more solid and reliable. NPET K10 gaming keyboard is more durable than the plastic keyboard, your best keyboard choice",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2cd535f710e40e261ac8a",
      },
      image: {
        id: {
          $oid: "60a2cd505f710e40e261ac89",
        },
        filename: "NPET K10 Gaming Keyboard.jpg",
        originalFilename: "NPET K10 Gaming Keyboard.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "7d1773256a224f239d2758fb95e8be8d",
          public_id: "gamestech/60a2cd505f710e40e261ac89",
          version: 1621282130,
          version_id: "5277782f569c850c87f36cc30ccce644",
          signature: "296bcfa667f7d0f5418d311ec0061bf9d7f66d5a",
          width: 1498,
          height: 761,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T20:08:50Z",
          tags: [],
          bytes: 108967,
          type: "upload",
          etag: "62afb74847e466c3c9bc11f2b5e24196",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621282130/gamestech/60a2cd505f710e40e261ac89.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621282130/gamestech/60a2cd505f710e40e261ac89.jpg",
          original_filename: "file",
        },
      },
      altText: "NPET K10 Gaming Keyboard",
      __v: 0,
    },
    price: 155049,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a2ce4a5f710e40e261ac8c",
    },
    name: "Razer Naga Pro",
    description:
      "The #1 Best-Selling Gaming Peripherals Manufacturer in the US: Source - The NPD Group, Inc. U.S. Retail Tracking Service, Keyboards, Mice, PC Headset/Pc Microphone, Gaming Designed, based on dollar sales, 2017-2021",
    status: "DRAFT",
    price: 15699,
    __v: 0,
    photo: {
      _id: {
        $oid: "60a2ce995f710e40e261ac8e",
      },
      image: {
        id: {
          $oid: "60a2ce965f710e40e261ac8d",
        },
        filename: "Razer Naga Pro.jpg",
        originalFilename: "Razer Naga Pro.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "31e9b150dbb2486b56b08764c214741e",
          public_id: "gamestech/60a2ce965f710e40e261ac8d",
          version: 1621282456,
          version_id: "cf3e0c610d744133915e239a97b0a22e",
          signature: "0cf87a3e430a5c837d87e9713e559032c816a89a",
          width: 1500,
          height: 1169,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T20:14:16Z",
          tags: [],
          bytes: 138278,
          type: "upload",
          etag: "7382dc5ce4b72374df910b26c2130c23",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621282456/gamestech/60a2ce965f710e40e261ac8d.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621282456/gamestech/60a2ce965f710e40e261ac8d.jpg",
          original_filename: "file",
        },
      },
      altText: "Razer Naga Pro",
      __v: 0,
    },
  },
  {
    _id: {
      $oid: "60a4b35aaca9562da23f44fa",
    },
    name: "UHURU Wireless Gaming Mouse",
    description:
      "Every button can be programmed by installing driver software, which makes the mouse more intelligent and meets more different games demand MMO gaming(Tips: The gaming driver is compatible with Windows only.). Every mouse button through 10 million times click test makes sure it's precise and endurable. Ergonomic Struction comfortable fit in games’ hand.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4b31daca9562da23f44f9",
      },
      image: {
        id: {
          $oid: "60a4b31baca9562da23f44f8",
        },
        filename: "UHURU Wireless Gaming Mouse.jpg",
        originalFilename: "UHURU Wireless Gaming Mouse.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "beea4fb896946a82279eff7aae48685f",
          public_id: "gamestech/60a4b31baca9562da23f44f8",
          version: 1621406493,
          version_id: "4cfa052977475852cfffc112cc4023f5",
          signature: "5184c267a1ad637e4ab0123f07115d861b6ac3b8",
          width: 1414,
          height: 1223,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T06:41:33Z",
          tags: [],
          bytes: 121373,
          type: "upload",
          etag: "90413e162531f6c6f1a2dde8ba290145",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621406493/gamestech/60a4b31baca9562da23f44f8.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621406493/gamestech/60a4b31baca9562da23f44f8.jpg",
          original_filename: "file",
        },
      },
      altText: "UHURU Wireless Gaming Mouse",
      __v: 0,
    },
    price: 182626,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4b5e4aca9562da23f44ff",
    },
    name: "Xbox Series X",
    description:
      "The most powerful console ever features our custom-designed processor, plus:   \nNew speed and performance capabilities thanks to the Xbox Velocity Architecture. 12 teraflops of power. True 4K gaming & 8K ready .120 FPS. 1TB custom SSD",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4b5a1aca9562da23f44fe",
      },
      image: {
        id: {
          $oid: "60a4b59faca9562da23f44fd",
        },
        filename: "Xbox X.jpg",
        originalFilename: "Xbox X.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "73ed98bd650e3979b8cfdd7dfdbc9a23",
          public_id: "gamestech/60a4b59faca9562da23f44fd",
          version: 1621407136,
          version_id: "f4f214d1fd8dffdd05b3ef29a5a47254",
          signature: "2be229ecfe2851a8a645a1834a1c986d5c957666",
          width: 1080,
          height: 1080,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T06:52:16Z",
          tags: [],
          bytes: 47591,
          type: "upload",
          etag: "e3c8cc1a37eefb33724c5c26cf3de2ca",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621407136/gamestech/60a4b59faca9562da23f44fd.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621407136/gamestech/60a4b59faca9562da23f44fd.jpg",
          original_filename: "file",
        },
      },
      altText: "Xbox Series X",
      __v: 0,
    },
    price: 5374892,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4b6b1aca9562da23f4502",
    },
    name: "Sony PS5",
    description:
      "The PS5™ console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation® games.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4b663aca9562da23f4501",
      },
      image: {
        id: {
          $oid: "60a4b661aca9562da23f4500",
        },
        filename: "Sony PS5.jpg",
        originalFilename: "Sony PS5.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "6a6a5b46e4f018a15e8915ec62ed8835",
          public_id: "gamestech/60a4b661aca9562da23f4500",
          version: 1621407331,
          version_id: "0ec7288da8929d84007ed22af641633d",
          signature: "90621dd8cfed4d269ef0ef8484cb0fb57d69bf55",
          width: 1146,
          height: 1242,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T06:55:31Z",
          tags: [],
          bytes: 71991,
          type: "upload",
          etag: "950d7b938e38c65496a2780d8e4f9c76",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621407331/gamestech/60a4b661aca9562da23f4500.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621407331/gamestech/60a4b661aca9562da23f4500.jpg",
          original_filename: "file",
        },
      },
      altText: "Sony PS5",
      __v: 0,
    },
    price: 5377392,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4c81daca9562da23f4507",
    },
    name: "DJI RoboMaster S1",
    description:
      "The RoboMaster S1 is a game-changing educational robot built to unlock the potential in every learner. Inspired by DJI's annual RoboMaster robotics competition, the S1 provides users with an in-depth understanding of science, math, physics, programming, and more through captivating gameplay modes and intelligent features.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4c800aca9562da23f4506",
      },
      image: {
        id: {
          $oid: "60a4c7ffaca9562da23f4505",
        },
        filename: "DJI RoboMaster S1.jpg",
        originalFilename: "DJI RoboMaster S1.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "e0e2a87da38f012f2f0170063483cd0a",
          public_id: "gamestech/60a4c7ffaca9562da23f4505",
          version: 1621411840,
          version_id: "c7dd29301b20fda38ce884ed3c4474b4",
          signature: "446e20b30dd113d2b50db8cc2d01c9a35b5190ec",
          width: 765,
          height: 716,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T08:10:40Z",
          tags: [],
          bytes: 53361,
          type: "upload",
          etag: "2783771abaa75ef42c01906f2019c7b1",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621411840/gamestech/60a4c7ffaca9562da23f4505.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621411840/gamestech/60a4c7ffaca9562da23f4505.jpg",
          original_filename: "file",
        },
      },
      altText: "DJI RoboMaster S1",
      __v: 0,
    },
    price: 5912730,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4c9e7aca9562da23f450a",
    },
    name: "Nintendo Switch Joy-Con Pair",
    description:
      "Customize your Switch with some wonderful Joy-Cons in awesome Blue and Neon Yellow. These Joy-Cons come in a pair, with matching black Nintendo Switch Controller Straps. ",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4c986aca9562da23f4509",
      },
      image: {
        id: {
          $oid: "60a4c984aca9562da23f4508",
        },
        filename: "Nintendo Switch Joy-Con Pair.jpeg.jpeg",
        originalFilename: "Nintendo Switch Joy-Con Pair.jpeg.jpeg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "5b8ef6acb68536d9c87cd14bc1ad15ec",
          public_id: "gamestech/60a4c984aca9562da23f4508",
          version: 1621412229,
          version_id: "c3f94f1500a35c896f63215a56d78ebf",
          signature: "0bcd2890151b31322089e5c136414070a8d9bfa7",
          width: 1400,
          height: 1000,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T08:17:09Z",
          tags: [],
          bytes: 94770,
          type: "upload",
          etag: "946d57d74bf8c0dd16ca0d28aa91529a",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621412229/gamestech/60a4c984aca9562da23f4508.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621412229/gamestech/60a4c984aca9562da23f4508.jpg",
          original_filename: "file",
        },
      },
      altText: "Nintendo Switch Joy-Con Pair",
      __v: 0,
    },
    price: 992445,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4cc9baca9562da23f450d",
    },
    name: "Lenovo LAVIE MINI",
    description:
      "Basically a pocket-size Windows PC, the Lenovo LAVIE MINI convertible PC has a super portable design yet boasts a vivid eight-inch WUXGA touch display. This Windows PC has an 11th-generation Intel Core processor, making it great for playing games or just doing everyday tasks.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4cc67aca9562da23f450c",
      },
      image: {
        id: {
          $oid: "60a4cc65aca9562da23f450b",
        },
        filename: "Lenovo LAVIE MINI.jpg",
        originalFilename: "Lenovo LAVIE MINI.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "4a80d7b2398d1ca6b7d63314e983d7ea",
          public_id: "gamestech/60a4cc65aca9562da23f450b",
          version: 1621412966,
          version_id: "28982094afcfa9d57e2004cc79a5a7e0",
          signature: "d4de7d31dc607af315baeb7c4d3f1c118cf96148",
          width: 1200,
          height: 1125,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T08:29:26Z",
          tags: [],
          bytes: 110725,
          type: "upload",
          etag: "7ffb4fa01bbbe602039d4dd4152e8733",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621412966/gamestech/60a4cc65aca9562da23f450b.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621412966/gamestech/60a4cc65aca9562da23f450b.jpg",
          original_filename: "file",
        },
      },
      altText: "Lenovo LAVIE MINI",
      __v: 0,
    },
    price: 7539000,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4cd7daca9562da23f4510",
    },
    name: "Western Digital SN850",
    description:
      "If you love downloading games, you need the Western Digital WD_BLACK SN850 NVMe SSD, which is available in three sizes: 500 GB, one terabyte, and two terabytes. A standout feature of this gaming device is that it comes with a downloadable WD_BLACK Dashboard where you can monitor your drive’s health. In fact, it even lets you optimize performance using gaming mode, so you can be at your best for intense gaming sessions. ",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4cc67aca9562da23f450c",
      },
      image: {
        id: {
          $oid: "60a4cc65aca9562da23f450b",
        },
        filename: "Lenovo LAVIE MINI.jpg",
        originalFilename: "Lenovo LAVIE MINI.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "4a80d7b2398d1ca6b7d63314e983d7ea",
          public_id: "gamestech/60a4cc65aca9562da23f450b",
          version: 1621412966,
          version_id: "28982094afcfa9d57e2004cc79a5a7e0",
          signature: "d4de7d31dc607af315baeb7c4d3f1c118cf96148",
          width: 1200,
          height: 1125,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T08:29:26Z",
          tags: [],
          bytes: 110725,
          type: "upload",
          etag: "7ffb4fa01bbbe602039d4dd4152e8733",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621412966/gamestech/60a4cc65aca9562da23f450b.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621412966/gamestech/60a4cc65aca9562da23f450b.jpg",
          original_filename: "file",
        },
      },
      altText: "Lenovo LAVIE MINI",
      __v: 0,
    },
    price: 1604730,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4cebfaca9562da23f4513",
    },
    name: "Lenovo Legion Slim 7i",
    description:
      "The Lenovo Legion Slim 7i gaming laptop is just 18 millimeters thick and weighs 3.9 pounds, making it lightweight and portable. The device features plenty of elements that make it suitable for gaming. For example, its FHD display and 60 Hz refresh rate mean you can play without interruptions. Plus, the 4K option enhances the visuals to create a realistic experience for gamers.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a2c1265f710e40e261ac69",
      },
      image: {
        id: {
          $oid: "60a2c1225f710e40e261ac68",
        },
        filename: "Lenovo Legion Recon.jpg",
        originalFilename: "Lenovo Legion Recon.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "820128c93f771a41acb30137144d6c69",
          public_id: "gamestech/60a2c1225f710e40e261ac68",
          version: 1621279013,
          version_id: "398d3b49849cea8c69b1c9e8a9569f8c",
          signature: "0b347dbf635d8b7f4fc8648f89b0a3584cc157d8",
          width: 587,
          height: 861,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-17T19:16:53Z",
          tags: [],
          bytes: 48760,
          type: "upload",
          etag: "ac9880f0fc4c3260d3b6838ff7e5aa4a",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621279013/gamestech/60a2c1225f710e40e261ac68.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621279013/gamestech/60a2c1225f710e40e261ac68.jpg",
          original_filename: "file",
        },
      },
      altText: "Razer Rogue v3",
      __v: 0,
    },
    price: 15515892,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4d851aca9562da23f4516",
    },
    name: "CORSAIR ONE a100",
    description:
      "You don’t need to lose desk space just to win your game. The CORSAIR ONE a100 compact gaming PC proves that a computer the size of a laptop can deliver impressive performance. In fact, this 12-liter gaming computer uses an AMD Ryzen 3000 series processor.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4ce44aca9562da23f4512",
      },
      image: {
        id: {
          $oid: "60a4ce42aca9562da23f4511",
        },
        filename: "Lenovo Legion Slim 7i.jpg",
        originalFilename: "Lenovo Legion Slim 7i.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "8b84f2ae9a3d51ba8513a7d9373f2e40",
          public_id: "gamestech/60a4ce42aca9562da23f4511",
          version: 1621413444,
          version_id: "dd239da1ae4a497def85f94fa40d9840",
          signature: "52640ce54d6a50170029b0d67cf3f598b55f3a6d",
          width: 1200,
          height: 900,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T08:37:24Z",
          tags: [],
          bytes: 83372,
          type: "upload",
          etag: "d8c946d561b7f2524d8cc63f6a855359",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621413444/gamestech/60a4ce42aca9562da23f4511.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621413444/gamestech/60a4ce42aca9562da23f4511.jpg",
          original_filename: "file",
        },
      },
      altText: "Lenovo Legion Slim 7i",
      __v: 0,
    },
    price: 43199892,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4d9a8aca9562da23f4519",
    },
    name: "SteelSeries Aerox 3",
    description:
      "Offering protection against dust, dirt, oil, fur, and liquids, the SteelSeries Aerox 3 Wireless water-resistant gaming mouse enhances your gaming. It features AquaBarrier for maximum protection against spills, so you needn’t stress about water damage. Aside from its durable design, it offers high levels of accuracy, thanks to the TrueMove Air Sensor.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4d98eaca9562da23f4518",
      },
      image: {
        id: {
          $oid: "60a4d98caca9562da23f4517",
        },
        filename: "SteelSeries Aerox 3.jpg",
        originalFilename: "SteelSeries Aerox 3.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "3531347881e07ef1beb14103d715b76e",
          public_id: "gamestech/60a4d98caca9562da23f4517",
          version: 1621416334,
          version_id: "2c7764e5e48ae7d2f8d9b3f1134a9d5b",
          signature: "008ea1e74d230d56cb10503324527289198bb8ca",
          width: 1200,
          height: 900,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T09:25:34Z",
          tags: [],
          bytes: 82636,
          type: "upload",
          etag: "3107848e211da40dc16d3644be4219e2",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621416334/gamestech/60a4d98caca9562da23f4517.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621416334/gamestech/60a4d98caca9562da23f4517.jpg",
          original_filename: "file",
        },
      },
      altText: "SteelSeries Aerox 3",
      __v: 0,
    },
    price: 1078392,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4e085aca9562da23f451c",
    },
    name: "Lenovo Legion Gaming",
    description:
      "The Lenovo Legion Gaming Smartphone comes with many impressive features. Its highlight is the side-mounted pop-up camera that houses a 20-megapixel sensor. This camera adds a quirky, unique touch, enabling you to take the perfect selfie. You can also move the camera on the side for a custom finish. ",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4e027aca9562da23f451b",
      },
      image: {
        id: {
          $oid: "60a4e025aca9562da23f451a",
        },
        filename: "Lenovo Legion Gaming.jpg",
        originalFilename: "Lenovo Legion Gaming.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "5f587a424e4d39d8a611f0ac53ed5c28",
          public_id: "gamestech/60a4e025aca9562da23f451a",
          version: 1621418022,
          version_id: "2f4f8069e4b6832980146f0406df8a98",
          signature: "29ad0dda14e6bd5a5050d44d4fee8b699401b5bd",
          width: 1200,
          height: 900,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T09:53:42Z",
          tags: [],
          bytes: 50987,
          type: "upload",
          etag: "c50848d370a97e0a6f76b2074d0f9df9",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621418022/gamestech/60a4e025aca9562da23f451a.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621418022/gamestech/60a4e025aca9562da23f451a.jpg",
          original_filename: "file",
        },
      },
      altText: "Lenovo Legion Gaming",
      __v: 0,
    },
    price: 15429700,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4e12aaca9562da23f451f",
    },
    name: "CORSAIR VENGEANCE i4200",
    description:
      "You need a computer that can keep up with your games. And the CORSAIR VENGEANCE i4200 Gaming Computer is that PC. Powered by the 10th-generation Intel Core processor, this CORSAIR PC ensures you’re ahead of the competition. And you’ll enjoy how it looks, too, thanks to the NVIDIA GeForce RTX graphics.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4e0f6aca9562da23f451e",
      },
      image: {
        id: {
          $oid: "60a4e0f4aca9562da23f451d",
        },
        filename: "CORSAIR VENGEANCE i4200.jpg",
        originalFilename: "CORSAIR VENGEANCE i4200.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "88adf1e578c4eb5fc4243535224c4d77",
          public_id: "gamestech/60a4e0f4aca9562da23f451d",
          version: 1621418230,
          version_id: "1ae3e49e4cab26ebe9720d3874079b7c",
          signature: "21f35e66c7ce639c7b5b9dc478a6ac48604d3ddc",
          width: 1200,
          height: 1125,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T09:57:10Z",
          tags: [],
          bytes: 165717,
          type: "upload",
          etag: "1a06ddf1668b1b908452424d11e9834e",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621418230/gamestech/60a4e0f4aca9562da23f451d.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621418230/gamestech/60a4e0f4aca9562da23f451d.jpg",
          original_filename: "file",
        },
      },
      altText: "CORSAIR VENGEANCE i4200",
      __v: 0,
    },
    price: 26447642,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4e1feaca9562da23f4522",
    },
    name: "ASUS ROG Swift 32-inch",
    description:
      "Use the newest gaming consoles at your desk without compromising when you have the ASUS ROG Swift 32-inch 4K gaming monitor. This gaming gadget boasts two HDMI 2.1 ports, allowing you to run games in 4K at 120 Hz on a compatible Windows PC, Xbox Series X, or PS5.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4e1b1aca9562da23f4521",
      },
      image: {
        id: {
          $oid: "60a4e1afaca9562da23f4520",
        },
        filename: "ASUS ROG Swift 32-inch.jpg",
        originalFilename: "ASUS ROG Swift 32-inch.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "d5783ccee790f0ad62d1385112e6cd4e",
          public_id: "gamestech/60a4e1afaca9562da23f4520",
          version: 1621418417,
          version_id: "d05358144a39fd30c672fdb342d64c35",
          signature: "c8122db3f16ef292439398ddcc8b6094d19d5994",
          width: 1200,
          height: 900,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T10:00:17Z",
          tags: [],
          bytes: 140558,
          type: "upload",
          etag: "5ee54d5596a917921da53213b76192b3",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621418417/gamestech/60a4e1afaca9562da23f4520.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621418417/gamestech/60a4e1afaca9562da23f4520.jpg",
          original_filename: "file",
        },
      },
      altText: "ASUS ROG Swift 32-inch",
      __v: 0,
    },
    price: 9704705,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4e2adaca9562da23f4525",
    },
    name: "MSI GE76 Raider Dragon",
    description:
      "You haven’t seen a computer like the MSI GE76 Raider Dragon Edition Tiamat laptop before. An homage to an ancient goddess, this MSI gaming laptop fuses spirits new and old. With an eye-catching pattern engraved on the lid, this computer measures 17.3 inches.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4e27baca9562da23f4524",
      },
      image: {
        id: {
          $oid: "60a4e278aca9562da23f4523",
        },
        filename: "MSI GE76 Raider Dragon.jpg",
        originalFilename: "MSI GE76 Raider Dragon.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "d9831c1e80d711163253caf4cca2e2e4",
          public_id: "gamestech/60a4e278aca9562da23f4523",
          version: 1621418618,
          version_id: "cef516f0ef699f475eceae404e6a7534",
          signature: "bb32d7140e30a50272eac66fb364748f63a3636a",
          width: 1200,
          height: 900,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T10:03:38Z",
          tags: [],
          bytes: 79785,
          type: "upload",
          etag: "db6ca8d0ea021f11ed35d8918149a57e",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621418618/gamestech/60a4e278aca9562da23f4523.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621418618/gamestech/60a4e278aca9562da23f4523.jpg",
          original_filename: "file",
        },
      },
      altText: "MSI GE76 Raider Dragon",
      __v: 0,
    },
    price: 25897205,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4e327aca9562da23f4528",
    },
    name: "ASTRO A03",
    description:
      "The ASTRO A03 In-Ear Monitors gaming earbuds are tuned with ASTRO Audio V2 to provide a tight distortion-free bass, as well as clear mids and highs. Furthermore, the extended frequency spectrum helps to bring sounds to life and create true-to-life audio.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4e2ffaca9562da23f4527",
      },
      image: {
        id: {
          $oid: "60a4e2fdaca9562da23f4526",
        },
        filename: "ASTRO A03.jpg",
        originalFilename: "ASTRO A03.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "653bb6d840216b23e2c1fc4c75816311",
          public_id: "gamestech/60a4e2fdaca9562da23f4526",
          version: 1621418751,
          version_id: "458216d6e3a5c4d22cf5073d8a7d3eac",
          signature: "361f77a80eb1813438ee0283eb5031522de9da03",
          width: 1200,
          height: 900,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T10:05:51Z",
          tags: [],
          bytes: 33297,
          type: "upload",
          etag: "d1c6b81e4baf9ba74128994ad3dc619e",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621418751/gamestech/60a4e2fdaca9562da23f4526.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621418751/gamestech/60a4e2fdaca9562da23f4526.jpg",
          original_filename: "file",
        },
      },
      altText: "ASTRO A03",
      __v: 0,
    },
    price: 539642,
    __v: 0,
  },
  {
    _id: {
      $oid: "60a4e392aca9562da23f452b",
    },
    name: "Dell G5 15",
    description:
      "The Dell G5 15 Special Edition Ryzen Gaming Laptop is a powerful, affordable machine ready to game wherever you are. The PC combines AMD Renoir-H Ryzen processors with eight Zen 2 cores at 2.9–4.2 GHz.",
    status: "DRAFT",
    photo: {
      _id: {
        $oid: "60a4e369aca9562da23f452a",
      },
      image: {
        id: {
          $oid: "60a4e367aca9562da23f4529",
        },
        filename: "Dell G5 15.jpg",
        originalFilename: "Dell G5 15.jpg",
        mimetype: "image/jpeg",
        encoding: "7bit",
        _meta: {
          asset_id: "81537bb6e5b1b71780a6c62f5cca2e7a",
          public_id: "gamestech/60a4e367aca9562da23f4529",
          version: 1621418856,
          version_id: "73235276261eb5698b3d2e4b428cc661",
          signature: "cceb531c9636eb00b3785eaeb9a8718aa4abdbed",
          width: 1200,
          height: 800,
          format: "jpg",
          resource_type: "image",
          created_at: "2021-05-19T10:07:36Z",
          tags: [],
          bytes: 68377,
          type: "upload",
          etag: "20b1eec0fb7203315ea20fc75e2dcd38",
          placeholder: false,
          url:
            "http://res.cloudinary.com/ianodad/image/upload/v1621418856/gamestech/60a4e367aca9562da23f4529.jpg",
          secure_url:
            "https://res.cloudinary.com/ianodad/image/upload/v1621418856/gamestech/60a4e367aca9562da23f4529.jpg",
          original_filename: "file",
        },
      },
      altText: "Dell G5 15",
      __v: 0,
    },
    price: 9175642,
    __v: 0,
  },
];
