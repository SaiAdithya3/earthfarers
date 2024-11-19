import plasticsheets from "../assets/plasticsheets.jpg";
import fruits from "../assets/products/fruits.jpeg";
import vegetables from "../assets/products/vegetables.webp";
import powders from "../assets/products/powders.jpeg";
import tea from "../assets/products/tea.jpg";
import cotton from "../assets/products/cotton.webp";
import garlic from "../assets/products/garlic.avif";
import banana from "../assets/products/banana.webp";
import pomegranate from "../assets/products/pomegranate.jpeg";
import pineapple from "../assets/products/pineapple.webp";
import mangoes from "../assets/products/mangoes.jpg";
import jackfruit from "../assets/products/jackfruit.jpg";
import onions from "../assets/products/onions.jpg";
import garlicPowder from "../assets/products/garlic-powder.webp";
import bananaPowder from "../assets/products/banana-powder.jpg";
import guarGumPowder from "../assets/products/guargumpowder.webp";
import jackfruitPowder from "../assets/products/jackfruitpowder.png";
import tealeaf from "../assets/products/tealeaf.avif";
import rawCotton from "../assets/products/cotton.jpeg";
import cottonWaste from "../assets/products/cottonwaste.jpg";
import plasticFilm from "../assets/products/plasticfilm.pdf";
import rawPlastic from "../assets/products/rawplastic.pdf";
import opticalFiber from "../assets/products/opticalfibre.pdf";

const categories = [
  {
    imageUrl: fruits,
    title: "Fruits",
    description: "Banana, Pomegranates, Pineapple, Mango, Jackfruit",
    link: "/fruits",
    products: [
      {
        name: "Banana",
        description: "Fresh and ripe bananas.",
        imageUrl: banana,
        downloadUrl: "src/assets/products/banana.pdf",
      },
      {
        name: "Pomegranates",
        description: "Fresh pomegranates rich in nutrients.",
        imageUrl: pomegranate,
        downloadUrl: "src/assets/products/promograntes.pdf",
      },
      {
        name: "Pineapple",
        description: "Sweet and tangy pineapples.",
        imageUrl: pineapple,
        downloadUrl: "src/assets/products/pineapple.pdf",
      },
      {
        name: "Mango",
        description: "Sweet mangoes from the tropical region.",
        imageUrl: mangoes,
        downloadUrl: "src/assets/products/mangoes.pdf",
      },
      {
        name: "Jackfruit",
        description: "Large jackfruit with a sweet flavor.",
        imageUrl: jackfruit,
        downloadUrl: "src/assets/products/jackfruit.pdf",
      },
    ],
  },
  {
    imageUrl: vegetables,
    title: "Vegetables",
    description: "Fresh Garlic, Onion",
    link: "/vegetables",
    products: [
      {
        name: "Garlic",
        description: "Fresh organic garlic cloves.",
        imageUrl: garlic,
        downloadUrl: "src/assets/products/garlic.pdf",
      },
      {
        name: "Onion",
        description: "Fresh red onions for all your recipes.",
        imageUrl: onions,
        downloadUrl: "src/assets/products/onions.pdf",
      },
    ],
  },
  {
    imageUrl: powders,
    title: "Powder Form",
    description: "Garlic powder, Banana powder, Guar gum powder, Jackfruit powder",
    link: "/powder-form",
    products: [
      {
        name: "Garlic Powder",
        description: "100% pure garlic powder.",
        imageUrl: garlicPowder,
        downloadUrl: "src/assets/products/garlicpowder.pdf",
      },
      {
        name: "Banana Powder",
        description: "Natural banana powder for smoothies.",
        imageUrl: bananaPowder,
        downloadUrl: "src/assets/products/bananapowder.pdf",
      },
      {
        name: "Guar Gum Powder",
        description: "High-quality guar gum powder for culinary use.",
        imageUrl: guarGumPowder,
        downloadUrl: "src/assets/products/gargumpowder.pdf",
      },
      {
        name: "Jackfruit Powder",
        description: "Organic jackfruit powder for various recipes.",
        imageUrl: jackfruitPowder,
        downloadUrl: "src/assets/products/jackfruitpowder.pdf",
      },
    ],
  },
  {
    imageUrl: tea,
    title: "Tea",
    description: "High-quality tea from trusted suppliers",
    link: "/tea",
    products: [
      {
        name: "Green Tea",
        description: "Fresh green tea leaves from the best sources.",
        imageUrl: tealeaf,
        downloadUrl: "src/assets/products/tea.pdf",
      },
      {
        name: "Black Tea",
        description: "A rich and bold black tea for every occasion.",
        imageUrl: tealeaf,
        downloadUrl: "src/assets/products/tea.pdf",
      },
    ],
  },
  {
    imageUrl: cotton,
    title: "Raw Cotton & Cotton Waste",
    description: "Top-grade cotton for various uses",
    link: "/cotton",
    products: [
      {
        name: "Raw Cotton",
        description: "High-quality raw cotton for textile production.",
        imageUrl: rawCotton,
        downloadUrl: "src/assets/products/rawcotton.pdf",
      },
      {
        name: "Cotton Waste",
        description: "Cotton waste for recycling and other uses.",
        imageUrl: cottonWaste,
        downloadUrl: "src/assets/products/cottonwaste.pdf",
      },
    ],
  },
  {
    imageUrl: plasticsheets,
    title: "Plastic Products",
    description: "Plastic films, raw materials, optical fibers",
    link: "/plastic-products",
    products: [
      {
        name: "Plastic Films",
        description: "High-quality plastic films for various industries.",
        imageUrl: plasticsheets,
        downloadUrl: plasticFilm,
      },
      {
        name: "Raw Plastic Materials",
        description: "Raw plastic materials for manufacturing.",
        imageUrl: "src/assets/products/plasticraw.jpg",
        downloadUrl: rawPlastic,
      },
      {
        name: "Optical Fibers",
        description: "High-performance optical fibers for telecommunications.",
        imageUrl: "src/assets/products/fiberoptics.jpg",
        downloadUrl: opticalFiber,
      },
    ],
  },
];

export default categories;
