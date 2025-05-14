import { type Event } from "@/types/Event";
import { EventCategories } from "@/consts/event-category";

export const EVENTS: Event[] = [
  {
    id: "89560ece-b15a-42db-a9dc-bdd154b8841d",
    title: "Festividad Tayta Niño 2025",
    date: "2025-01-26",
    category: EventCategories.Main,
    description:
      "Celebración principal de la festividad Tayta Niño en Huayucachi",
    prioste: "Juan Vilcas Ferrer y esposa Nancy Cuba Vila",
    imageUrl:
      "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/476562150_1189998699795570_3272211094281756444_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-y36IcxT8PQQ7kNvgG2jhzx&_nc_oc=Adghx55cTbqsL6pGihgAkl7z_yIpDWn1m4nZnqBBtq2MKivytVc6pzoTJZK_V9M1e86Lfb8-uSnq37mwYUsVykte&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=Y8oMlpXobtu8WNRr2SqoHw&oh=00_AYFheIWI7DP4-wN8_6vZtjb7pUEHOU4_wnq6jJuIBVT-tg&oe=67DCB349",
    gallery: [
      "5.webp",
      "cover.webp",
      "AP3.webp",
      "ARP1.webp",
      "ARP2.webp",
      "ARP4.webp",
      "ARP5.webp",
      "CP1.webp",
      "CP2.webp",
      "NW1.webp",
      "NW2.webp",
      "NW3.webp",
      "NW4.webp",
      "NW5.webp",
      "NWL1.webp",
      "NWL2.webp",
      "NWL3.webp",
      "NWL4.webp",
      "NWL5.webp",
    ],
    gallerySponsor: [
      {
        id: "celebraperu",
        name: "Celebra Perú",
        url: "https://www.youtube.com/@celebraperu",
        logo: {
          width: 100,
          height: 100,
        },
      },
      {
        id: "notiwanka",
        name: "NotiWanka",
        url: "https://www.facebook.com/NotiWanka.pe",
        logo: {
          width: 100,
          height: 100,
        },
      },
    ]
  },
  {
    id: "0559e10d-27ee-4e92-ac3e-7e99eb946f30",
    title: "Aniversario de la Hermandad",
    date: "2025-02-02",
    category: EventCategories.Institutional,
    description: "10° Aniversario de nuestra querida hermandad",
    imageUrl:
      "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/476610185_1148125423980553_8319415945465157033_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GE1a4shv80UQ7kNvgGdGNXJ&_nc_oc=Adgk96tONeUSIeJd6cGTEYCiYGzY5sNSJbNcSWeqDZpfs8BtOPwv63wZIRKRwfsTgnyoVyDPFBc907rNu0nNh-vV&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=6ArgiCgb8k2kVXXx418UEQ&oh=00_AYELSEzSm-ZQw0EuqL_djZz75S19liVDFmbYCnNKDxYG5Q&oe=67DCA182",
    gallery: [
      "3Bandits.webp",
      "cover.webp",
      "FullBrothers.webp",
      "BananaAndSon.webp",
      "BeforeFightHelmet.webp",
      "BrotherBirthday.webp",
      "BrothersDancingSquare.webp",
      "DrinkTime.webp",
      "FightTime.webp",
      "NewPromises.webp",
      "TheBand.webp",
      "WithTheBand.webp"
    ],
  }
];
