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
    prioste: "Juan Pérez Mamani",
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
  },
  {
    id: "0559e10d-27ee-4e92-ac3e-7e99eb946f30",
    title: "Aniversario de la Hermandad",
    date: "2025-02-02",
    category: EventCategories.Institutional,
    description: "10° Aniversario de nuestra querida hermandad",
    imageUrl:
      "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/476610185_1148125423980553_8319415945465157033_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GE1a4shv80UQ7kNvgGdGNXJ&_nc_oc=Adgk96tONeUSIeJd6cGTEYCiYGzY5sNSJbNcSWeqDZpfs8BtOPwv63wZIRKRwfsTgnyoVyDPFBc907rNu0nNh-vV&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=6ArgiCgb8k2kVXXx418UEQ&oh=00_AYELSEzSm-ZQw0EuqL_djZz75S19liVDFmbYCnNKDxYG5Q&oe=67DCA182",
    /* .r-------- k3v1n k3v1n 140 KB Tue Apr  1 20:24:53 2025  3Bandits.webp
.r-------- k3v1n k3v1n 181 KB Tue Apr  1 BananaAndSon.webp
.r-------- k3v1n k3v1n 153 KB Tue Apr  1 BeforeFightHelmet.webp
.r-------- k3v1n k3v1n 214 KB Tue Apr  1 BrotherBirthday.webp
.r-------- k3v1n k3v1n 267 KB Tue Apr  1 BrothersDancingSquare.webp
.r-------- k3v1n k3v1n 281 KB Sat Mar 29 cover.webp
.r-------- k3v1n k3v1n  69 KB Tue Apr  1 DrinkTime.webp
.r-------- k3v1n k3v1n  65 KB Tue Apr  1 FightTime.webp
.r-------- k3v1n k3v1n 185 KB Tue Apr  1 FullBrothers.webp
.r-------- k3v1n k3v1n  96 KB Tue Apr  1 NewPromises.webp
.r-------- k3v1n k3v1n 150 KB Tue Apr  1 TheBand.webp
.r-------- k3v1n k3v1n 110 KB Tue Apr  1 WithTheBand.webp */
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
  },
  {
    id: "48cd887b-963c-4702-9462-099e5a828718",
    title: "Matrimonio Hermano Juanito",
    date: "2026-05-20",
    category: EventCategories.Social,
    description: "Matrimonio de nuestro hermando Juanito con Juanita",
    imageUrl:
      "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/476641690_1148133170646445_4552216106177949502_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sijtpR281KIQ7kNvgHXv5mt&_nc_oc=AdjmwmjOjzaOB-4lwVcJ9RER3ZYL6w3vYlFO1E-i1cHK3pmMEWqm2u3QoX0CgUTUoOpEU3OJmFnMHsk6eTakiKk1&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=0887VXKvyzP1MnrGlgvlag&oh=00_AYFlNwZM3BVKr66I5qCc4yLxNmrEWObQm2voMSm563gErA&oe=67DC91D6",
    gallery: ["/images/gallery/aniv-1.jpg"],
  },
];
/* Rellena esta variable con los nombres de las imagenes que etan dentro de la carpeta public/img/events/main/89560ece-b15a-42db-a9dc-bdd154b8841d */
