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
      type1?: string;
      type2?: string;
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
        "/im4.webp",
        "/5-bedroom/Outdoor_1.jpg",
      ],
      title: "5BR Riverview Villa",
      desc: [
        "A space is created by the people who occupy it. The riverview villa generously lends itself to the guests for a memorable stay. This two storeyed stately looking villa consists of 4 bedrooms and a spacious family room. The living room on the ground floor is quite roomy along with a gaming room, a kitchen, a dining area and 2 bedrooms.",
        "The panoramic view of the scenic valley is no stranger to the bedrooms and the balcony on the top floor. The fifth bedroom on the top floor is made from glass facades on 3 sides. It gives a 180° view of the trees outside whereas the terrace opens up the world to you. Fill the villa up with iconic anecdotes, laughter and games.",
      ],
    },
    experience: {
      title: "Experience / Activities",
      arrImages: [
        "/5-bedroom/Kamal_Upper Villa Room 2.jpg",
        "/5-bedroom/play_Foot_Ball.webp",
        "/5-bedroom/Kamal_Upper Villa Outdoor.jpg",
        "/5-bedroom/Living_Ground_Floor_2.jpg",
        "/5-bedroom/Kamal_Upper Villa glass.jpg",
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
          type1: "1 King Bed",
          type2: "1 Queen Bed",
        },
        {
          name: "Bedroom 2",
          type1: "1 King Bed",
          type2: "1 Queen Bed",
        },
        {
          name: "Bedroom 3",
          type1: "1 King Bed",
          type2: "1 Queen Bed",
        },
        {
          name: "Bedroom 4",
          type1: "1 King Bed",
          type2: "1 Queen Bed",
        },
        {
          name: "Bedroom 5",
          type1: "1 King Bed",
          type2: "1 Queen Bed",
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
          src: "/5BR_Villa_Cover.jpg",
          alt: "Front View",
        },
        {
          src: "/5-bedroom/Outdoor_1.jpg",
          alt: "Lawn View",
        },
        {
          src: "/5-bedroom/Living First Floor_1.jpg",
          alt: "Living Room First Floor - Overview",
        },
        {
          src: "/5-bedroom/Kamal_Upper Villa-02.jpg",
          alt: "Living Room First Floor - Seating",
        },
        {
          src: "/5-bedroom/xaqfuokxzmfuwwskinq9.webp",
          alt: "Living Room First Floor - Dining",
        },
        {
          src: "/5-bedroom/Kamal_Upper Villa Room 1.jpg",
          alt: "Bedroom 1",
        },
        {
          src: "/5-bedroom/zx35uwztfxh9wgk5hwnr.jfif",
          alt: "Bathroom 1",
        },
        {
          src: "/5-bedroom/Kamal_Upper Villa Room 2.jpg",
          alt: "Bedroom 2",
        },
        {
          src: "/5-bedroom/BR3_1.jpg",
          alt: "Bedroom 3",
        },
        {
          src: "/5-bedroom/Kamal_Lower Villa-09.jpg",
          alt: "Living Room Ground Floor - Seating",
        },
        {
          src: "/5-bedroom/Living_Ground_Floor_2.jpg",
          alt: "Living Room First Floor - Table Tennis",
        },
        {
          src: "/5-bedroom/BR4_1.jpg",
          alt: "Bedroom 4",
        },
        // {
        //   src: "/5-bedroom-riverview-villa/asset+29.webp",
        //   alt: "Bathroom 4",
        // },
        {
          src: "/5-bedroom/BR5_1.jfif",
          alt: "Bedroom 5",
        },
        {
          src: "/5-bedroom/_DSC6076.jpg",
          alt: "Outdoor Seating",
        },
        {
          src: "/5-bedroom/t0bw21u5wjtg9gkft6th.jfif",
          alt: "Indoor Games",
        },
        {
          src: "/5-bedroom/Outdoor_2.jfif",
          alt: "Swing Area",
        },
        {
          src: "/5-bedroom/Outdoor_4.jpg",
          alt: "Garden & River",
        },
      ],
    },
    testimonial: {
      title: "Testimonials",
      data: Testimonial,
    },
    bookNow: {
      title: "Your dream 5-bedroom villa for an unforgettable getaway!",
      subTitle: "Discover Luxury Living",
    },
  },
  {
    id: "2",
    slug: "3-bedroom-riverside-cottage",
    bannerData: {
      images: [
        "/3-bedroom-riverside-cottage/Kamal Photos for Web_Outdoor-16.jpg",
        "/im30.webp",
      ],
      title: "3BR Riverside Cottage",
      desc: [
        "We believe in cherishing every moment as it arrives. This fast paced city life often disconnects us with our present. Sometimes all we need is to log ourselves out of the daily hustle and slow down a little. The Riverside cottage is a homey space for such offline intimate gatherings. Let the ambience dazzle you.",
        "The cottage consists of a living room and 3 cozy rooms. The living room window opens up to the gently flowing Pej river. Savour a cup of tea on the porch or finish that unfinished book. The riverside cottage will assure a relaxing weekend filled with warmth and laughter just like those good ol' days we often miss.",
      ],
    },
    experience: {
      title: "Experience / Activities",
      arrImages: [
        "/3-bedroom-riverside-cottage/Kamal Photos for Web_Room 1-09.jpg",
        "/3-bedroom-riverside-cottage/exp.jpg",
        "/3-bedroom-riverside-cottage/Kamal Photos for Web_Hall Mood.jpg",
        "/3-bedroom-riverside-cottage/Kamal Photos for Web_Room 3-08.jpg",
        "/3-bedroom-riverside-cottage/_DSC6562.jpg",
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
          type1: "1 King Bed",
          type2: "1 Queen Bed",
        },
        {
          name: "Bedroom 2",
          type1: "1 King Bed",
          type2: "1 Queen Bed",
        },
        {
          name: "Bedroom 3",
          type1: "1 King Bed",
          type2: "1 Queen Bed",
        },
        {
          name: "Living Room",
          type1: "Sofa cum bed",
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
          src: "/3-bedroom-riverside-cottage/3 Bedroom Cottage - Cover.jpg",
          alt: "View from the River",
        },
        {
          src: "/im30.webp",
          alt: "Balcony & Garden",
        },
        {
          src: "/3-bedroom-riverside-cottage/Kamal Photos for Web_Outdoor-14.jpg",
          alt: "Balcony Seating",
        },
        {
          src: "/3-bedroom-riverside-cottage/_DSC6694 - Copy.jpg",
          alt: "Living Room - Overview",
        },
        {
          src: "/3-bedroom-riverside-cottage/_DSC6562.jpg",
          alt: "Living Room - Dining",
        },
        {
          src: "/3-bedroom-riverside-cottage/Kamal Photos for Web_Hall-17.jpg",
          alt: "Living Room - Seating",
        },
        {
          src: "/3-bedroom-riverside-cottage/_DSC5636.jpg",
          alt: "Bedroom 1 - Overview",
        },
        {
          src: "/3-bedroom-riverside-cottage/Kamal Photos for Web_Room 1-10.jpg",
          alt: "Bedroom 1 - Close Up",
        },
        {
          src: "/3-bedroom-riverside-cottage/_DSC7832.jpg",
          alt: "Bedroom 1 - Bathroom",
        },
        {
          src: "/3-bedroom-riverside-cottage/Kamal Photos for Web- Room 2.jpg",
          alt: "Bedroom 2 - Overview",
        },
        {
          src: "/3-bedroom-riverside-cottage/Kamal Photos for Web_Room 2-02.jpg",
          alt: "Bedroom 2 - Close Up",
        },
        {
          src: "/3-bedroom-riverside-cottage/_DSC5523.jpg",
          alt: "Bedroom 3 - Overview",
        },
        {
          src: "/3-bedroom-riverside-cottage/_DSC5535.jpg",
          alt: "Bedroom 3 - Close Up",
        },
        {
          src: "/3-bedroom-riverside-cottage/asset+30.webp",
          alt: "Balcony & River",
        },
        {
          src: "/3-bedroom-riverside-cottage/asset+31.webp",
          alt: "Pej River",
        },
      ],
    },
    testimonial: {
      title: "Testimonials",
      data: Testimonial,
    },
    bookNow: {
      title: `Your dream 3-bedroom riverside cottage awaits!`,
      subTitle: "Serenity by water",
    },
  },
  {
    id: "3",
    slug: "3-bedroom-riverview-nest",
    bannerData: {
      images: [
        "/3-bedroom-riverview-nest/_DSC7981.jpg",
        "/3-bedroom-riverview-nest/_DSC7623.jpg",
      ],
      title: "3BR Riverview Nest",
      desc: [
        "A gorgeous 3-bedroom villa with a shared common pool sits on the shores of River Pej in Karjat. Quality time with your loved ones, river front lunch at the shared common dining, a game room, refreshing pool splash, fruit plantation walks, bonfire nights, etc., to make your stay extra special.",
        "Escape the mundane and experience a peaceful retreat at SaffronStays Riverscape Nest, an enchanting 3-bedroom villa with a shared common pool, just a 2-hour drive from Mumbai. Nestled amidst the verdant greens of Karjat, its breathtaking location on the banks of Pej River makes it one of the best villas near Mumbai.",
      ],
    },
    experience: {
      title: "Experience / Activities",
      arrImages: [
        "/3-bedroom-riverview-nest/_DSC7652.jpg",
        "/im14.webp",
        "/3-bedroom-riverview-nest/_DSC7981.jpg",
        "/3-bedroom-riverview-nest/_DSC6896.jpg",
        "/3-bedroom-riverview-nest/_DSC7348.jpg",
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
          type1: "1 King Bed",
        },
        {
          name: "Bedroom 2",
          type1: "1 King Bed",
        },
        {
          name: "Bedroom 3",
          type1: "1 King Bed",
        },
        {
          name: "Living Room",
          type1: "Sofa cum bed",
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
          src: "/3-bedroom-riverview-nest/Group.png",
          alt: "Bedroom 1",
        },
        {
          src: "/3-bedroom-riverview-nest/_DSC6966.jpg",
          alt: "Bedroom 2",
        },
        {
          src: "/3-bedroom-riverview-nest/_DSC6896.jpg",
          alt: "Bedroom 3",
        },
        {
          src: "/3-bedroom-riverview-nest/_DSC7773.jpg",
          alt: "Dining",
        },
        {
          src: "/3-bedroom-riverview-nest/_DSC8137.jpg",
          alt: "Living Room",
        },
        {
          src: "/3-bedroom-riverview-nest/_DSC7348.jpg",
          alt: "Playing Area",
        },
        {
          src:"/3-bedroom-riverview-nest/_DSC7623.jpg",
          alt: "Front View & Garden",
        },
        {
          src: "/3-bedroom-riverview-nest/_DSC8018.jpg",
          alt: "River View & Sitting Area",
        }
      ],
    },
    testimonial: {
      title: "Testimonials",
      data: Testimonial,
    },
    bookNow: {
      title: "Experience ultimate luxury in your 3-bedroom pool villa escape!",
      // subTitle: "Discover Luxery Living",
    },
  },
  {
    id: "4",
    slug: "4_5-bedroom-villa",
    bannerData: {
      images: [
        "/4.5-bedroom-villa/im2.png",
        "/4.5-bedroom-villa/im1.png",
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
        "/im16.webp",
        "/im13.webp",
        "/im9.webp",
        "/4.5-bedroom-villa/im12.png",
        "/4.5-bedroom-villa/_DSC3139.png",
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
          type2: "1 Queen Bed",
        },
        {
          name: "Bedroom 2",
          type2: "1 Queen Bed",
        },
        {
          name: "Bedroom 3",
          type2: "1 Queen Bed",
        },
        {
          name: "Bedroom 4",
          type2: "1 Queen Bed",
        },
        {
          name: "Bedroom 5",
          type2: "Mini queen bed",
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
          src: "/4.5-bedroom-villa/im1.png",
          alt: "Outdoors",
        },
        {
          src: "/4.5-bedroom-villa/_DSC3260.png",
          alt: "Swing Area",
        },
        {
          src: "/4.5-bedroom-villa/_DSC3542.png",
          alt: "Bedroom",
        },
        {
          src: "/4.5-bedroom-villa/_DSC3767.png",
          alt: "Dining",
        },
        {
          src: "/4.5-bedroom-villa/_DSC3393.png",
          alt: "pool",
        },
        {
          src: "/4.5-bedroom-villa/_DSC3139.png",
          alt: "Bonfire Area",
        },
        {
          src: "/4.5-bedroom-villa/_DSC2922.png",
          alt: "Balcony & Garden",
        }
      ],
    },
    testimonial: {
      title: "Testimonials",
      data: Testimonial,
    },
    bookNow: {
      title:
        "Indulge in unmatched luxury with your 4-bedroom pool villa getaway!",
      // subTitle: "Discover Luxery Living",
    },
  },
];
