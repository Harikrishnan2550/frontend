import cart from "../assets/Union.png";
import account from "../assets/account.png";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";
import wed_18 from "../assets/wed_18.png";
import wed_15 from "../assets/wed_15.png";
import asize from "../assets/a4size.png";
import mini_album from "../assets/mini_album.png";
import banner1 from "../assets/banner1.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import utube from "../assets/utube.png";
import alt_1 from "../assets/album_alt_1.png";
import alt_2 from "../assets/album_alt_2.png";
import alt_3 from "../assets/album_alt_3.png";
import orders from '../assets/orders.png';
import profile from '../assets/profile.png';
import address from '../assets/address.png';
import contact from '../assets/contact.png';
import photo from '../assets/photo.png';
import deleteIcon from '../assets/delete.png';
import hamburger from '../assets/hamburger.png'

export const assets = {
  cart,
  account,
  logo,
  banner,
  banner1,
  fb,
  insta,
  orders,
  profile,
  address,
  contact,
  utube,
  photo,
  deleteIcon,
  hamburger
};

export const category = [
  {
    title: "Mini Albums (8×6)",
    image: mini_album,
  },
  {
    title: "A4 Size Albums (12×8)",
    image: asize,
  },
  {
    title: "Wedding Album (15×12)",
    image: wed_15,
  },
  {
    title: "Wedding Album (18×12)",
    image: wed_18,
  },
];

export const albums = [
  {
    id: "001",
    image: [mini_album, alt_1, alt_2, alt_3, banner1],
    title: "Mini Albums (8×6 In)",
    description: "A compact album to preserve your memories.",
    old_price: " 999",
    pages: [20, 30, 40,50,60,70,80,90,100],
    new_price: " 799",
    delivery: 5,
    offer: 20,
  },
  {
    id: "002",

    image: [asize, alt_1, alt_2, alt_3, banner1],
    title: "A4 Plane Cover (12×8 In)",
    description: "A compact album to preserve your memories.",
    old_price: " 999",
    pages: [20, 30, 40,50,60,70,80,90,100],
    new_price: "  799",
    delivery: 5,
    offer: 20,
  },
  {
    id: "003",

    image: [asize, alt_1, alt_2, alt_3, banner1],
    title: "A4 Hard Cover (15×12 In)",
    old_price: " 999",
    pages: [20, 30, 40,50,60,70,80,90,100],
    description: "A compact album to preserve your memories.",
    new_price: " 799",
    delivery: 5,
    offer: 20,
  },
  {
    id: "004",

    image: [wed_15, alt_1, alt_2, alt_3, banner1],
    title: "Wedding Album (15×12 In)",
    old_price: " 999",
    description: "A compact album to preserve your memories.",
    new_price: " 799",
    pages: [20, 30, 40,50,60,70,80,90,100],
    delivery: 5,
    offer: 20,
  },
  {
    id: "005",

    image: [mini_album, alt_1, alt_2, alt_3, banner1],
    title: "Mini Albums (8×6 In)",
    old_price: " 999",
    description: "A compact album to preserve your memories.",
    new_price: " 799",
    pages: [20, 30, 40,50,60,70,80,90,100],
    delivery: 5,
    offer: 20,
  },
  {
    id: "006",

    image: [asize, alt_1, alt_2, alt_3, banner1],
    title: "A4 Plane Cover (12×8 In)",
    old_price: "999",
    description: "A compact album to preserve your memories.",
    new_price: " 799",
    pages: [20, 30, 40,50,60,70,80,90,100],
    delivery: 5,
    offer: 20,
  },
  {
    id: "007",

    image: [asize, alt_1, alt_2, alt_3, banner1],
    title: "A4 Hard Cover (15×12 In)",
    old_price: "  999",
    description: "A compact album to preserve your memories.",
    new_price: "  799",
    pages: [20, 30, 40,50,60,70,80,90,100],
    delivery: 5,
    offer: 20,
  },
  {
    id: "008",

    image: [wed_15, alt_1, alt_2, alt_3, banner1],
    title: "Wedding Album (15×12 In)",
    old_price: " 999",
    description: "A compact album to preserve your memories.",
    new_price: " 799",
    pages: [20, 30, 40,50,60,70,80,90,100],
    delivery: 5,
    offer: 20,
  },
];
