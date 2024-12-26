import {
  AirCondintioning,
  Freeparking,
  FreeWifi,
  GensetAvailable,
  LongTerm,
  PetFriendly,
  Towels,
  VegetarianMeals,
} from "@/icons/icons";
import { Testimonial, testimonialData } from "./Testimonial";

interface slugDataProps {
  id: string;
  slug: string;
  bannerData: {
    images: string[];
    title: string;
    desc: string[];
  };
  experience: {
    title: string;
    arrImages: string[];
    list: string[];
  };
  sleepingArrangement: {
    title: string;
    data: {
      name: string;
      type1: string;
      type2: string;
    }[];
  };
  amenities: {
    title: string;
    list: {
      icon: React.ReactNode;
      name: string;
    }[];
  };
  gallery: {
    title: string;
    images: {
      src: string;
      title?: string;
      alt?: string;
      link?: {
        href: string;
        label: string;
      };
    }[];
  };
  testimonial: {
    title: string;
    data: testimonialData[];
  };
  bookNow: {
    title: string;
    subTitle?: string;
  };
}

export const SlugData: slugDataProps[] = [
  {
    id: "1",
    slug: "5-bedroom-riverview-villa",
    bannerData: {
      images: [
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/5-bedroom-riverview-villa/asset+2.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/5-bedroom-riverview-villa/asset+3.webp",
      ],
      title: "5 bedroom Riverview Villa",
      desc: [
        "A space is created by the people who occupy it. The riverview villa generously lends itself to the guests for a memorable stay. This two storeyed stately looking villa consists of 4 bedrooms and a spacious family room. The living room on the ground floor is quite roomy along with a gaming room, a kitchen, a dining area and 2 bedrooms.",
        "The panoramic view of the scenic valley is no stranger to the bedrooms and the balcony on the top floor. The fifth bedroom on the top floor is made from glass facades on 3 sides. It gives a 180° view of the trees outside whereas the terrace opens up the world to you. Fill the villa up with iconic anecdotes, laughter and games.",
      ],
    },
    experience: {
      title: "Experience / Activities",
      arrImages: [
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/5-bedroom-riverview-villa/asset+4.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/5-bedroom-riverview-villa/asset+5.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/5-bedroom-riverview-villa/asset+6.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/5-bedroom-riverview-villa/asset+7.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/5-bedroom-riverview-villa/asset+8.webp",
      ],
      list: [
        "Enjoy privacy at the 6000 sq.ft. riverview villa",
        "The mansion provides room for upto 32 guests",
        "5 spacious yet cozy bedrooms for guests of all ages",
        "1 king-size and 1 queen size bed in 3 of the rooms",
        "A glass facade panoramic view bedroom with a queen size bed",
        "A family room with 1 king-size and 2 queen size beds",
        "For large gatherings, the loft area can fit upto 10 guests",
        "Each bedroom has an easy access to the garden/terrace",
        "Comfortable & friendly bedrooms for senior citizens",
        "Delicious home-cooked veg meals prepared by our cook",
        "Enjoy sports like table tennis, badminton and football",
        "Play a variety of indoor games such as Uno, Monopoly, etc.",
      ],
    },
    sleepingArrangement: {
      title: "Sleeping Arrangement",
      data: [
        {
          name: "Bedroom 1",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 2",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 3",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 4",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 5",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Loft",
          type1: "10 Floor",
          type2: "Mattresses",
        },
      ],
    },
    amenities: {
      title: "Amenities",
      list: [
        {
          icon: <AirCondintioning />,
          name: "Air Condintioning",
        },
        {
          icon: <FreeWifi />,
          name: "Free WiFi",
        },
        {
          icon: <PetFriendly />,
          name: "Pet Friendly",
        },
        {
          icon: <VegetarianMeals />,
          name: "Vegetarian Meals (extra charges applicable)",
        },

        {
          icon: <GensetAvailable />,
          name: "Genset Available (extra charges applicable)",
        },
        {
          icon: <Freeparking />,
          name: "Free parking on premises",
        },
        {
          icon: <LongTerm />,
          name: "Long-term stays allowed",
        },
        {
          icon: <Towels />,
          name: "Towels and Toiletries",
        },
      ],
    },
    gallery: {
      title: "Gallery",
      images: [
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
      ],
    },
    testimonial: {
      title: "Testimonials",
      data: Testimonial,
    },
    bookNow: {
      title: "Your Dream 5-Bedroom Villa for an Unforgettable Getaway!",
      subTitle: "Discover Luxery Living",
    },
  },
  {
    id: "2",
    slug: "3-bedroom-riverside-cottage",
    bannerData: {
      images: [
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverside-cottage/asset+2.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverside-cottage/asset+3.webp",
      ],
      title: "3 Bedroom Riverside Cottage",
      desc: [
        "We believe in cherishing every moment as it arrives. This fast paced city life often disconnects us with our present. Sometimes all we need is to log ourselves out of the daily hustle and slow down a little. The Riverside cottage is a homey space for such offline intimate gatherings. Let the ambience dazzle you.",
        "The cottage consists of a living room and 3 cozy rooms. The living room window opens up to the gently flowing Pej river. Savour a cup of tea on the porch or finish that unfinished book. The riverside cottage will assure a relaxing weekend filled with warmth and laughter just like those good ol' days we often miss.",
      ],
    },
    experience: {
      title: "Experience / Activities",
      arrImages: [
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverside-cottage/asset+4.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverside-cottage/asset+5.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverside-cottage/asset+6.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverside-cottage/asset+7.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverside-cottage/asset+8.webp",
      ],
      list: [
        "Enjoy privacy at the 2000 sq.ft. riverside cottage",
        "The cozy cottage provides room for upto 8 guests",
        "3 spacious and homely bedrooms for all guests",
        "1 comfortable queen size bed in all three rooms",
        "A porch that opens up to the serene Pej river",
        "Home-cooked veg meals prepared by our cook",
        "Play outdoor sports in the expansive open lawns",
        "Choose from a variety of indoor games for fun",
      ],
    },
    sleepingArrangement: {
      title: "Sleeping Arrangement",
      data: [
        {
          name: "Bedroom 1",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 2",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 3",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
      ],
    },
    amenities: {
      title: "Amenities",
      list: [
        {
          icon: <AirCondintioning />,
          name: "Air Condintioning",
        },
        {
          icon: <FreeWifi />,
          name: "Free WiFi",
        },
        {
          icon: <PetFriendly />,
          name: "Pet Friendly",
        },
        {
          icon: <VegetarianMeals />,
          name: "Vegetarian Meals (extra charges applicable)",
        },

        {
          icon: <GensetAvailable />,
          name: "Genset Available (extra charges applicable)",
        },
        {
          icon: <Freeparking />,
          name: "Free parking on premises",
        },
        {
          icon: <LongTerm />,
          name: "Long-term stays allowed",
        },
        {
          icon: <Towels />,
          name: "Towels and Toiletries",
        },
      ],
    },
    gallery: {
      title: "Gallery",
      images: [
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
      ],
    },
    testimonial: {
      title: "Testimonials",
      data: Testimonial,
    },
    bookNow: {
      title: `Your Dream 3-Bedroom Riverside Cottage Awaits!"`,
      subTitle: "Serenity by the Water",
    },
  },
  {
    id: "3",
    slug: "3-bedroom-riverview-nest",
    bannerData: {
      images: [
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverview-nest/image1.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverview-nest/image+2.webp",
      ],
      title: "3 Bedroom Riverview Nest",
      desc: [
        " A gorgeous 3-bedroom villa with a shared common pool sits on the shores of River Pej in Karjat. Quality time with your loved ones, river front lunch at the shared common dining, a game room, refreshing pool splash, fruit plantation walks, bonfire nights, etc., to make your stay extra special.",
        "Escape the mundane and experience a peaceful retreat at SaffronStays Riverscape Nest, an enchanting 3-bedroom villa with a shared common pool, just a 2-hour drive from Mumbai. Nestled amidst the verdant greens of Karjat, its breathtaking location on the banks of Pej River makes it one of the best villas near Mumbai.",
      ],
    },
    experience: {
      title: "Experience / Activities",
      arrImages: [
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverview-nest/image+3.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverview-nest/image+4.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverview-nest/image1.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverview-nest/image+5.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/3-bedroom-riverview-nest/image+6.webp",
      ],
      list: [
        "Private villa near Mumbai, perfect for family getaways, group vacations, or solo stays.",
        "1,600 sqft villa, accommodating up to 14 guests.",
        "Enjoy the swimming pool and games like badminton or football on the lawns.",
        "Furry friends can explore the outdoor space and fruit plantations by the river.",
      ],
    },
    sleepingArrangement: {
      title: "Sleeping Arrangement",
      data: [
        {
          name: "Bedroom 1",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 2",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 3",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 4",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 5",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Loft",
          type1: "10 Floor",
          type2: "Mattresses",
        },
      ],
    },
    amenities: {
      title: "Amenities",
      list: [
        {
          icon: <AirCondintioning />,
          name: "Air Condintioning",
        },
        {
          icon: <FreeWifi />,
          name: "Free WiFi",
        },
        {
          icon: <PetFriendly />,
          name: "Pet Friendly",
        },
        {
          icon: <VegetarianMeals />,
          name: "Vegetarian Meals (extra charges applicable)",
        },

        {
          icon: <GensetAvailable />,
          name: "Genset Available (extra charges applicable)",
        },
        {
          icon: <Freeparking />,
          name: "Free parking on premises",
        },
        {
          icon: <LongTerm />,
          name: "Long-term stays allowed",
        },
        {
          icon: <Towels />,
          name: "Towels and Toiletries",
        },
      ],
    },
    gallery: {
      title: "Gallery",
      images: [
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
      ],
    },
    testimonial: {
      title: "Testimonials",
      data: Testimonial,
    },
    bookNow: {
      title: "Experience Ultimate Luxury in Your 3-Bedroom Pool Villa Escape!",
      // subTitle: "Discover Luxery Living",
    },
  },
  {
    id: "4",
    slug: "4.5-bedroom-villa",
    bannerData: {
      images: [
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/4.5-bedroom-villa/image+1.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/4.5-bedroom-villa/image+2.webp",
      ],
      title: "4.5 Bedroom Villa",
      desc: [
        "Exclusive 4.5 Bedroom Villa with verdant lawns, indoor and outdoor games, and bonfire, 5 minutes from Mapro Garden with panoramic views. SaffronStays Breeze Over The Valley is a 4-bedroom exclusive vegetarian-friendly villa in Panchgani just 5 minutes from Mapro Garden. The villa with modern amenities and tastefully decorated rooms is just a 2.5-hour drive away from Pune and is easily accessible from Mumbai.",
        "We encourage you to book all rooms within the property for better experience.",
      ],
    },
    experience: {
      title: "Experience / Activities",
      arrImages: [
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/4.5-bedroom-villa/image+3.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/4.5-bedroom-villa/image+4.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/4.5-bedroom-villa/image+5.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/4.5-bedroom-villa/image+6.webp",
        "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/4.5-bedroom-villa/image+7.webp",
      ],
      list: [
        "Private villa near Pune, ideal for corporate offsites, team meetings, and milestone birthday celebrations.",
        "Verdant lawns, spacious 1,350 sqft floor area, and a relaxing ambiance for up to 16 guests.",
        "Enjoy a variety of activities, including indoor and outdoor games, and a cozy bonfire under the stars.",
        "Set up picnics around the outdoor seating and bonfire on the expansive lawn.",
        "The villa's playground is perfect for children to enjoy the swing and slide.",
        "Visit the Panchgani market (10 minutes away) for unique shopping and seasonal strawberries.",
      ],
    },
    sleepingArrangement: {
      title: "Sleeping Arrangement",
      data: [
        {
          name: "Bedroom 1",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 2",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 3",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 4",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Bedroom 5",
          type1: "1 King Bedroom",
          type2: "1 Queen Bedroom",
        },
        {
          name: "Loft",
          type1: "10 Floor",
          type2: "Mattresses",
        },
      ],
    },
    amenities: {
      title: "Amenities",
      list: [
        {
          icon: <AirCondintioning />,
          name: "Air Condintioning",
        },
        {
          icon: <FreeWifi />,
          name: "Free WiFi",
        },
        {
          icon: <PetFriendly />,
          name: "Pet Friendly",
        },
        {
          icon: <VegetarianMeals />,
          name: "Vegetarian Meals (extra charges applicable)",
        },

        {
          icon: <GensetAvailable />,
          name: "Genset Available (extra charges applicable)",
        },
        {
          icon: <Freeparking />,
          name: "Free parking on premises",
        },
        {
          icon: <LongTerm />,
          name: "Long-term stays allowed",
        },
        {
          icon: <Towels />,
          name: "Towels and Toiletries",
        },
      ],
    },
    gallery: {
      title: "Gallery",
      images: [
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
        {
          src: "/outside.jpeg",
          alt: "Front View",
        },
      ],
    },
    testimonial: {
      title: "Testimonials",
      data: Testimonial,
    },
    bookNow: {
      title:
        "Indulge in Unmatched Luxury with Your 4-Bedroom Pool Villa Getaway!",
      // subTitle: "Discover Luxery Living",
    },
  },
];
