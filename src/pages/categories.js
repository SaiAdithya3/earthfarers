import plasticsheets from "../assets/plasticsheets.jpg";

const categories = [
    {
      imageUrl:
        "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
      title: "Fruits",
      description: "Banana, Pomegranates, Pineapple, Mango, Jackfruit",
      link: "/fruits",
      products: [
        {
          name: "Banana",
          description: "Fresh and ripe bananas.",
          imageUrl:
            "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
          downloadUrl: "/downloads/banana.pdf",
        },
        {
          name: "Pomegranates",
          description: "Fresh pomegranates rich in nutrients.",
          imageUrl:
            "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
          downloadUrl: "/downloads/pomegranates.pdf",
        },
        {
          name: "Pineapple",
          description: "Sweet and tangy pineapples.",
          imageUrl:
            "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
          downloadUrl: "/downloads/pineapple.pdf",
        },
        {
          name: "Mango",
          description: "Sweet mangoes from the tropical region.",
          imageUrl:
            "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
          downloadUrl: "/downloads/mango.pdf",
        },
        {
          name: "Jackfruit",
          description: "Large jackfruit with a sweet flavor.",
          imageUrl:
            "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
          downloadUrl: "/downloads/jackfruit.pdf",
        },
      ],
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Vegetables",
      description: "Fresh Garlic, Onion",
      link: "/vegetables",
      products: [
        {
          name: "Garlic",
          description: "Fresh organic garlic cloves.",
          imageUrl:
            "https://images.pexels.com/photos/2790304/pexels-photo-1132047.jpeg",
          downloadUrl: "/downloads/garlic.pdf",
        },
        {
          name: "Onion",
          description: "Fresh red onions for all your recipes.",
          imageUrl:
            "https://images.pexels.com/photos/723177/pexels-photo-1132047.jpeg",
          downloadUrl: "/downloads/onion.pdf",
        },
        {
          name: "Tomato",
          description: "Juicy tomatoes perfect for cooking.",
          imageUrl:
            "https://images.pexels.com/photos/1181676/pexels-photo-1132047.jpeg",
          downloadUrl: "/downloads/tomato.pdf",
        },
        {
          name: "Cucumber",
          description: "Fresh cucumbers, perfect for salads.",
           imageUrl: "https://images.pexels.com/photos/974864/pexels-photo-1132047.jpeg",
          downloadUrl: "/downloads/cucumber.pdf",
        },
      ],
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/7956503/pexels-photo-7956503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Powder Form",
      description: "Garlic powder, Banana powder, Guar gum powder, Jackfruit powder",
      link: "/powder-form",
      products: [
        {
          name: "Garlic Powder",
          description: "100% pure garlic powder.",
          imageUrl:
            "https://images.pexels.com/photos/1126597/pexels-photo-7956503.jpeg",
          downloadUrl: "/downloads/garlic-powder.pdf",
        },
        {
          name: "Banana Powder",
          description: "Natural banana powder for smoothies.",
          imageUrl:
            "https://images.pexels.com/photos/5055660/pexels-photo-7956503.jpeg",
          downloadUrl: "/downloads/banana-powder.pdf",
        },
        {
          name: "Guar Gum Powder",
          description: "High-quality guar gum powder for culinary use.",
          imageUrl:
            "https://images.pexels.com/photos/6701762/pexels-photo-7956503.jpeg",
          downloadUrl: "/downloads/guar-gum-powder.pdf",
        },
        {
          name: "Jackfruit Powder",
          description: "Organic jackfruit powder for various recipes.",
          imageUrl:
            "https://images.pexels.com/photos/3461079/pexels-photo-7956503.jpeg",
          downloadUrl: "/downloads/jackfruit-powder.pdf",
        },
      ],
    },
    {
      imageUrl:
        "https://t4.ftcdn.net/jpg/09/11/95/53/360_F_911955321_CXUGBnRFF6oBY3YHldxk5uiT7NAZc5nI.jpg",
      title: "Tea",
      description: "High-quality tea from trusted suppliers",
      link: "/tea",
      products: [
        {
          name: "Green Tea",
          description: "Fresh green tea leaves from the best sources.",
          imageUrl:
            "https://images.pexels.com/photos/1028325/pexels-photo-7956503.jpeg",
          downloadUrl: "/downloads/green-tea.pdf",
        },
        {
          name: "Black Tea",
          description: "A rich and bold black tea for every occasion.",
          imageUrl:
            "https://images.pexels.com/photos/6279076/pexels-photo-7956503.jpeg",
          downloadUrl: "/downloads/black-tea.pdf",
        },
      ],
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/13276484/pexels-photo-13276484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Raw Cotton & Cotton Waste",
      description: "Top-grade cotton for various uses",
      link: "/cotton",
      products: [
        {
          name: "Raw Cotton",
          description: "High-quality raw cotton for textile production.",
          imageUrl:
            "https://images.pexels.com/photos/3791256/pexels-photo-13276484.jpeg",
          downloadUrl: "/downloads/raw-cotton.pdf",
        },
        {
          name: "Cotton Waste",
          description: "Cotton waste for recycling and other uses.",
          imageUrl:
            "https://images.pexels.com/photos/4590725/pexels-photo-13276484.jpeg",
          downloadUrl: "/downloads/cotton-waste.pdf",
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
          downloadUrl: "/downloads/plastic-films.pdf",
        },
        {
          name: "Raw Plastic Materials",
          description: "Raw plastic materials for manufacturing.",
          imageUrl: plasticsheets,
          downloadUrl: "/downloads/raw-plastic-materials.pdf",
        },
        {
          name: "Optical Fibers",
          description: "High-performance optical fibers for telecommunications.",
          imageUrl: plasticsheets,
          downloadUrl: "/downloads/optical-fibers.pdf",
        },
      ],
    },
  ];
  
  export default categories;
  