import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; 

const getCurrentDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const currentDate = getCurrentDate();
const hotelName = "Ocean's Pearl Resort";

const addOneDay = (dateString) => {
  const [day, month, year] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + 1);
  return formatDate(date);
};

// Function to format the date as "DD-MM-YYYY"
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const checkoutDate = addOneDay(currentDate);

export const siteConfig = {

  Hotel_Id: 123456,
  Hotel_name: "Hotel Rajdhani",
  hotelname: "Hotel Rajdhani",
  description: "Welcome to Hotel Rajdhani, your perfect retreat in the heart of the city. Tailored for families and travelers alike, our hotel offers comfortable accommodations and contemporary amenities designed to make your stay delightful. Whether you're savoring our signature dishes at the in-house restaurant, unwinding in our cozy rooms, or exploring the vibrant local attractions, Hotel Rajdhani is committed to delivering warm hospitality and exceptional service, ensuring a memorable and relaxing stay for every guest.",
  hotellink: "https://www.hotelrajdhani.com/",
  favicon: "@/app/favicon.ico",
  ownername: "Atul",
  Phone_Number: "9898309244",
  phoneNumber: "9898309244",
  companyname: "Prospera Hospitality Pvt. Ltd.",
  companyweblink: "https://www.prosperaahospitality.com/",
  email: "hotelrajdhani22@gmail.com",
  address: "Godhra Road, Near V.M College, Halol, Gujarat, 389350",
  telephone: ["9898309244", "7285899244"],
  AboutUs: "About Us",
  reception_number: "9898309244",
  Email: "hotelrajdhani22@gmail.com",
  secondary_email: "atulbhai6544@gmail.com",
  Address: "Godhra Road, Near V.M College, Halol, Gujarat, 389350",
  lease_expiry_date: "01-02-2025",


  keywords: [
    "Prospera",
  ],

  navItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "About",
      href: "/",
    },
   
    {
      label: "Rooms",
      href:`/booknow?hotelName=${hotelName}&hotelId=${'123456'}&checkindate=${currentDate}&checkoutdate=${checkoutDate}&adultsSelect=2&childSelect=0&roomsSelect=1`
    },

    {
      label: "Testimonials",
      href: "/",
    },

    {
      label: "Blogs",
      href: "/",
    },
    
    {
      label: "Contact Us",
      href: "/contact",
    },
  ],


  PoliciesItems: [
    {
      label: "Terms & Conditions",
      href: "/policy",
    },
    {
      label: "Privacy Policy",
      href: "/policy",
    },
    {
      label: "Refund Policy",
      href: "/policy",
    },
  ],

  socialItems : [
    { label: "Facebook", href: "https://www.facebook.com/", icon: FaFacebookF },
    { label: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
    { label: "Twitter", href: "https://twitter.com/", icon: FaTwitter },
]
};