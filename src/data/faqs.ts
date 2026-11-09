export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  actionType?: "contact" | "whatsapp" | "call";
}

export const colivingFaqs: FaqItem[] = [
  {
    id: 1,
    question: "Is there a lock-in period?",
    answer: "No.",
  },
  {
    id: 2,
    question: "Is there a notice period?",
    answer: "Yes. A notice period of 30 days must be served.",
  },
  {
    id: 3,
    question: "What if I don't serve my notice period?",
    answer: "Your security deposit will not be refunded.",
  },
  {
    id: 4,
    question: "Is there a security deposit?",
    answer: "Yes. Equal to one month's rent.",
  },
  {
    id: 5,
    question: "Will my security deposit be adjusted in the last month's rent?",
    answer: "No. The deposit is not adjusted in the last month's rent.",
  },
  {
    id: 6,
    question: "Are there any move-out charges?",
    answer: "Yes. ₹1,000. If you have stayed for more than 6 months, exit charges are waived off.",
  },
  {
    id: 7,
    question: "Are there any other hidden charges?",
    answer: "No.",
  },
  {
    id: 8,
    question: "Are there any maintenance charges or water bill charges?",
    answer: "No.",
  },
  {
    id: 9,
    question: "When will I get my security deposit back?",
    answer: "Within 7 working days.",
  },
  {
    id: 10,
    question: "What amenities are included in rent?",
    answer: "Wi-Fi, cleaning and food are included in rent.",
  },
  {
    id: 11,
    question: "Why is electricity not included?",
    answer:
      "Because we provide heavy appliances such as AC, geysers, induction, fridge, microwave, etc. These appliances are provided in every room or at least on every floor. As such, we cannot take the hit of the electricity cost.",
  },
  {
    id: 12,
    question: "What are the rates per unit for electricity?",
    answer: "₹11 per unit or as per government slabs.",
  },
  {
    id: 13,
    question: "What is included and excluded in housekeeping?",
    answer:
      "Brooming, mopping and dusting are included. Washrooms are cleaned twice a week. Utensil washing is not included.",
  },
  {
    id: 14,
    question: "Is there any specific timing for housekeeping? Should I be present?",
    answer:
      'Housekeeping is mostly done between 12 PM and 6 PM. If you are not present, you can hang the "Clean My Room" tag on the door handle. If staff sees the tag, they will clean your room using the spare key.',
  },
  {
    id: 15,
    question: "What about my personal belongings in my absence?",
    answer:
      "We do not take accountability for personal belongings. If you want your room to be cleaned in your absence, you must keep your valuables locked in your wardrobe.",
  },
  {
    id: 16,
    question: "What does the food package include?",
    answer:
      "Mostly breakfast and dinner. Get in touch with our representative to understand more about the food package.",
    actionType: "whatsapp",
  },
  {
    id: 17,
    question: "Is it mandatory to opt for food?",
    answer: "No. Food is optional.",
  },
  {
    id: 18,
    question: "How much would the rent be if I don't take food?",
    answer: "Kindly get in touch with our representative for the same.",
    actionType: "whatsapp",
  },
  {
    id: 19,
    question: "Can I cook my own food?",
    answer: "Yes. There are inductions and microwaves in every kitchen.",
  },
  {
    id: 20,
    question: "Will utensils be provided?",
    answer: "No. Utensils are personal utilities and shall be purchased by the tenant.",
  },
  {
    id: 21,
    question: "Are there any specific hours when I can cook?",
    answer: "No.",
  },
  {
    id: 22,
    question: "How can I check the availability of the property?",
    answer:
      "You can call us or message us on WhatsApp. Our on-ground team will assist you immediately.",
    actionType: "contact",
  },
  {
    id: 23,
    question: "Can I serve the notice period mid-month?",
    answer:
      "No. The notice period must be served by the 5th of the month at the latest, with the vacating date still being the last date of the month.",
  },
  {
    id: 24,
    question: "Can students stay in Co-Living properties?",
    answer: "Yes. But they cannot share a room with working professionals.",
  },
  {
    id: 25,
    question: "Can working professional students stay in Student Accommodation?",
    answer: "No.",
  },
  {
    id: 26,
    question: "Are there any restrictions?",
    answer: "No.",
  },
  {
    id: 27,
    question: "Can I invite my friends over to my room?",
    answer:
      "Yes, if you are staying in a single-sharing room. If you are staying in a twin-sharing room, inviting a friend depends on compatibility with your room partner.",
  },
  {
    id: 28,
    question: "Are there kitchens with every room?",
    answer:
      "Some properties have 1RK units with attached kitchens. Most properties have common kitchens on every floor.",
  },
  {
    id: 29,
    question: "Does every room have an attached washroom?",
    answer: "Yes. With a geyser and WC.",
  },
  {
    id: 30,
    question: "Who will I be sharing my room with?",
    answer: "Essentially, a working professional.",
  },
  {
    id: 31,
    question: "Do I get to choose my roommate?",
    answer:
      "Based on availability, you can choose the room. We will let you know the details of the person currently staying there.",
  },
  {
    id: 32,
    question: "Who do I reach out to for issue resolution?",
    answer:
      "You will be provided with a dedicated helpline contact upon move-in. You can message your issue anytime.",
    actionType: "contact",
  },
  {
    id: 33,
    question: "How long does it take to resolve an issue?",
    answer:
      "It depends on the urgency. Once you message on the helpline, you will be immediately assigned a TAT for that issue.",
  },
  {
    id: 34,
    question: "Will I be charged for issue resolution?",
    answer:
      "No. Except for a few issues, you will not be charged for anything. For example, if you lose a key, a duplicate key will be charged for. If you willingly damage something in the room, you will be charged for the same.",
  },
  {
    id: 35,
    question: "Can I pay via credit card?",
    answer: "Yes.",
  },
  {
    id: 36,
    question: "Can I pay via cash?",
    answer: "No.",
  },
];

export const studentHousingFaqs: FaqItem[] = [
  {
    id: 1,
    question: "Is there a lock-in period?",
    answer: "Yes. There is an annual lock-in period.",
  },
  {
    id: 2,
    question: "Can I pay my rent monthly?",
    answer: "No. You can pay an annual fee or a semi-annual fee.",
  },
  {
    id: 3,
    question: "If I am paying a semi-annual fee, does it mean I can stay for 6 months?",
    answer:
      "No. The semi-annual fee is only a payment schedule. You have to complete your lock-in period.",
  },
  {
    id: 4,
    question: "What if I don't serve my lock-in period?",
    answer: "Your security deposit will not be refunded.",
  },
  {
    id: 5,
    question: "Is there a security deposit?",
    answer: "Yes. Get in touch with our representative for further details on the security deposit.",
    actionType: "whatsapp",
  },
  {
    id: 6,
    question: "Will my security deposit be adjusted in the second instalment?",
    answer: "No. It shall be refunded within 20 days of exit.",
  },
  {
    id: 7,
    question: "Are there any move-out charges?",
    answer: "Yes. ₹5,000.",
  },
  {
    id: 8,
    question: "Are there any agreement charges?",
    answer: "Yes. Between ₹800 and ₹1,600.",
  },
  {
    id: 9,
    question: "Are there any maintenance charges or water bill charges?",
    answer: "No.",
  },
  {
    id: 10,
    question: "When will I get my security deposit back?",
    answer: "Within 20 working days.",
  },
  {
    id: 11,
    question: "What amenities are included in rent?",
    answer:
      "Wi-Fi, cleaning and food are included in rent. In some properties, electricity is also included. Get in touch with our representative for further details.",
    actionType: "whatsapp",
  },
  {
    id: 12,
    question: "Why is electricity not included?",
    answer:
      "Because we provide heavy appliances such as AC, geysers, induction, fridge, microwave, etc. These appliances are provided in every room or at least on every floor. As such, we cannot take the hit of the electricity cost.",
  },
  {
    id: 13,
    question: "What are the rates per unit for electricity?",
    answer: "As per government slabs.",
  },
  {
    id: 14,
    question: "What is included and excluded in housekeeping?",
    answer:
      "Brooming, mopping and dusting are included. Washrooms are cleaned twice a week. Utensil washing is not included.",
  },
  {
    id: 15,
    question: "Is there any specific timing for housekeeping? Should I be present?",
    answer:
      'Housekeeping is mostly done between 12 PM and 6 PM. If you are not present, you can hang the "Clean My Room" tag on the door handle. If staff sees the tag, they will clean your room using the spare key.',
  },
  {
    id: 16,
    question: "What about my personal belongings in my absence?",
    answer:
      "We do not take accountability for personal belongings. If you want your room to be cleaned in your absence, you must keep your valuables locked in your wardrobe.",
  },
  {
    id: 17,
    question: "What does the food package include?",
    answer: "Get in touch with our representative to understand more about the food package.",
    actionType: "whatsapp",
  },
  {
    id: 18,
    question: "Can I cook my own food?",
    answer: "Yes. There are inductions and microwaves in every kitchen.",
  },
  {
    id: 19,
    question: "Will utensils be provided?",
    answer: "Yes. Basic utensils are provided.",
  },
  {
    id: 20,
    question: "Are there any specific hours when I can cook?",
    answer: "No.",
  },
  {
    id: 21,
    question: "How can I check the availability of the property?",
    answer:
      "You can call us or message us on WhatsApp. Our on-ground host will assist you immediately.",
    actionType: "contact",
  },
  {
    id: 22,
    question: "Can students stay in Co-Living properties?",
    answer: "Yes. But they cannot share a room with working professionals.",
  },
  {
    id: 23,
    question: "Can working professional students stay in Student Accommodation?",
    answer: "No.",
  },
  {
    id: 24,
    question: "Are there any restrictions?",
    answer: "Yes. Visitors of opposite genders are not allowed.",
  },
  {
    id: 25,
    question: "Can I invite my friends over to my room?",
    answer:
      "Yes, if you are staying in a single-sharing room. If you are staying in a twin-sharing room, inviting a friend depends on compatibility with your room partner.",
  },
  {
    id: 26,
    question: "Does every room have an attached washroom?",
    answer: "Yes. With a geyser and WC.",
  },
  {
    id: 27,
    question: "Who will I be sharing my room with?",
    answer: "Essentially, a fellow student.",
  },
  {
    id: 28,
    question: "Do I get to choose my roommate?",
    answer:
      "Based on availability, you can choose the room. We will let you know the details of the person currently staying there.",
  },
  {
    id: 29,
    question: "Who do I reach out to for issue resolution?",
    answer:
      "You will be provided with a dedicated helpline contact upon move-in. You can message your issue anytime.",
    actionType: "contact",
  },
  {
    id: 30,
    question: "How long does it take to resolve an issue?",
    answer:
      "It depends on the urgency. Once you message on the helpline, you will be immediately assigned a TAT for that issue.",
  },
  {
    id: 31,
    question: "Will I be charged for issue resolution?",
    answer:
      "No. Except for a few issues, you will not be charged for anything. For example, if you lose a key, a duplicate key will be charged for. If you willingly damage something in the room, you will be charged for the same.",
  },
  {
    id: 32,
    question: "Can I pay via credit card?",
    answer: "Yes.",
  },
  {
    id: 33,
    question: "Can I pay via cash?",
    answer: "No.",
  },
];
