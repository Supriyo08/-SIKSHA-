const bookdata = [
  {
    class: "First year",
    subject: "Mathematics",
    description: "A comprehensive guide to mathematics for Firstyear students.",
    title: "Organizer",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Firstyear",
    subject: "Organizer",
    description: "A comprehensive guide to mathematics for Firstyear students.",
    title: "Organizer",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Firstyear",
    subject: "Organizer",
    title:"Organizer",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Firstyear",
    subject: "Organizer",
    title: "Raindrops",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Firstyear",
    subject: "Organizer",
    title: "Organizer",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "second year",
    subject: "Organizer",
    description: "A comprehensive guide to mathematics for second year students.",
    title: "Organizer",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "second year",
    subject: "Organizer",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    title: "Organizer",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "second year",
    subject: "Organizer",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Class 3",
    subject: "Mathematics",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    description: "A comprehensive guide to mathematics for Class 3 students.",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Class 3",
    subject: "English",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Class 3",
    subject: "Science",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Class 3",
    subject: "Mathematics",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    description: "A comprehensive guide to mathematics for Class 3 students.",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Class 4",
    subject: "English",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Class 4",
    subject: "Science",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Class 4",
    subject: "Mathematics",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    description: "A comprehensive guide to mathematics for Class 4 students.",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Class 5",
    subject: "English",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Class 5",
    subject: "Science",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Class 5",
    subject: "Mathematics",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    description: "A comprehensive guide to mathematics for Class 5 students.",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Class 6",
    subject: "English",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Class 6",
    subject: "Science",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  // Add more entries for different classes and subjects...
  {
    class: "Firstyear2",
    subject: "Mathematics",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    description: "A comprehensive guide to mathematics for Firstyear2 students.",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Firstyear2",
    subject: "Physics",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  {
    class: "Firstyear2",
    subject: "Chemistry",
    image_url: "https://www.shopmarg.com/assets/uploads/products/catalog/BTech-1st.png",
    download_link:
      "https://drive.google.com/file/d/1WzU9CZYkZ7Y_zF4s5ZFLd-GZtrRAHqL_/view",
  },
  // Add more entries for Firstyear2 subjects...
];

export default bookdata;
