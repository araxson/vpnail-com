import type { ServicesGridData } from './services-grid.types'

export const servicesGridData: ServicesGridData = {
  categories: [
    {
      id: "nail-services",
      title: "Nail Services",
      subcategories: [
        {
          name: "Manicures",
          services: [
            {
              id: "manicure",
              title: "Manicure with regular polish",
              description: "Fresh & polished look",
              price: "$25",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=0e19aa9b-86a5-4bd5-804a-26e9dabb3725&type=service"
            },
            {
              id: "shellac-manicure",
              title: "Shellac Manicure",
              description: "Long-lasting shine",
              price: "$35",
              duration: "45 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=96dcf9ac-8f37-4c1d-bd12-7e7caafad618&type=service"
            },
            {
              id: "shellac-gel-top",
              title: "Shellac Manicure with Gel Top",
              description: "Extra strength & protection",
              price: "$40",
              duration: "50 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=0bd9debc-a1f5-4487-bd99-c952afb44201&type=service"
            },
            {
              id: "shellac-gel-overlay",
              title: "Shellac Manicure with Gel Overlay",
              description: "Maximum durability & glamour",
              price: "$45",
              duration: "60 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=379fedbf-35d8-4816-9098-ba8ba0a875e2&type=service"
            }
          ]
        },
        {
          name: "Pedicures",
          services: [
            {
              id: "pedicure",
              title: "Pedicure with regular polish",
              description: "Relaxing foot refresh",
              price: "$40",
              duration: "45 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=35658703-d882-4ca9-b970-e47bd2d187ac&type=service"
            },
            {
              id: "spa-pedicure",
              title: "Spa Pedicure with Hot Stones",
              description: "Ultimate relaxation experience",
              price: "$50",
              duration: "60 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=22ec16a1-b447-4bbe-a33f-a797a9740040&type=service"
            },
            {
              id: "shellac-pedicure",
              title: "Shellac Pedicure",
              description: "Long-lasting beautiful toes",
              price: "$45",
              duration: "50 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=177ec3cb-4941-441f-a651-75c530357458&type=service"
            },
            {
              id: "deluxe-spa-pedicure",
              title: "Deluxe Spa Pedicure",
              description: "The ultimate foot indulgence",
              price: "$55",
              duration: "75 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=267056b5-9fdb-48e0-8c55-28b3c67d25d4&type=service"
            }
          ]
        },
        {
          name: "Nail Extensions",
          services: [
            {
              id: "acrylic-new-set",
              title: "Acrylic New Set",
              description: "Beautiful acrylic extensions",
              price: "$60",
              duration: "90 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/3cf5dc61-a989-46a6-b2ae-f7075266cb4a"
            },
            {
              id: "gel-new-set",
              title: "Gel New Set",
              description: "Stunning gel extensions",
              price: "$60",
              duration: "90 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/3cf5dc61-a989-46a6-b2ae-f7075266cb4a"
            },
            {
              id: "acrylic-refill",
              title: "Acrylic Refill",
              description: "Keep your nails always perfect",
              price: "$45",
              duration: "20 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/cf9f0b27-3b4e-49b0-9f4d-faa1fa7e4183"
            },
            {
              id: "gel-refill",
              title: "Gel Refill",
              description: "Keep your nails always perfect",
              price: "$45",
              duration: "20 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/238fde8d-6edd-486d-9597-a7e6449ad4a8"
            }
          ]
        },
        {
          name: "Add-Ons",
          services: [
            {
              id: "hand-polish-change",
              title: "Hand Polish Change",
              description: "Quick color refresh",
              price: "$15",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/d2716f81-7773-4cee-afb9-faa6d37ba759"
            },
            {
              id: "foot-polish-change",
              title: "Foot Polish Change",
              description: "Quick color refresh",
              price: "$20",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/99698d3a-fc94-430d-8ef3-6a4dee18c3ed"
            },
            {
              id: "hand-shellac-change",
              title: "Hand Shellac Polish Change",
              description: "Long-lasting color switch",
              price: "$30",
              duration: "20 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/13c29f88-b561-4104-bdf4-65366ff9b528"
            },
            {
              id: "foot-shellac-change",
              title: "Foot Shellac Polish Change",
              description: "Long-lasting color switch",
              price: "$35",
              duration: "20 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/473751a4-644d-40ef-ad10-9de8bdd8423d"
            },
            {
              id: "hand-nail-trim-shape",
              title: "Hand Nail Trim & Shape",
              description: "Quick nail maintenance",
              price: "$15",
              duration: "10 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=67a49dc4-0de6-44da-8d1d-cc30b7fda0f4&type=service"
            },
            {
              id: "foot-nail-trim-shape",
              title: "Foot Nail Trim & Shape",
              description: "Toenail care made easy",
              price: "$25",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=1cea68ef-bc0d-4e47-aa39-bf725a438f11&type=service"
            },
            {
              id: "shellac-removal",
              title: "Shellac Removal",
              description: "Gentle, professional removal",
              price: "$15",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=63d78b40-d53d-44fd-9ad2-df431c61423c&type=service"
            },
            {
              id: "acrylic-gel-removal",
              title: "Acrylic/Gel Removal (up)",
              description: "Safe removal service",
              price: "$20+",
              duration: "20 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=87a3bd9a-9435-48e8-a448-1e0a9e13d7fc&type=service"
            },
            {
              id: "paraffin-wax-hands",
              title: "Paraffin Wax Treatment - Hands",
              description: "Deep moisture therapy for hands",
              price: "$15",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=88c89c89-7ffd-4611-84fd-cb903bbc65ea&type=service"
            },
            {
              id: "paraffin-wax-feet",
              title: "Paraffin Wax Treatment - Feet",
              description: "Deep moisture therapy for feet",
              price: "$25",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=62e389f2-7cff-4b50-ae7b-96f55904c7b0&type=service"
            },
            {
              id: "callus-removal",
              title: "Callus Removal",
              description: "Smooth, comfortable feet",
              price: "$10",
              duration: "10 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=29b13cdf-35c9-40c9-aba5-e47c4d42ddca&type=service"
            },
            {
              id: "nail-repair",
              title: "Nail Repair",
              description: "Fix broken nails instantly",
              price: "$5",
              duration: "10 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=69cd19e9-764a-492a-8ff7-f2d86430b10d&type=service"
            },
            {
              id: "french-tip",
              title: "French Tip",
              description: "Timeless elegance",
              price: "$10",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=f3eea388-d341-4603-9ab6-0bdd81fce4ca&type=service"
            },
            {
              id: "chrome-cateye-ombre",
              title: "Chrome, Cateye or Ombre",
              description: "Eye-catching metallic magic",
              price: "$15",
              duration: "10 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=c5d3c7de-4eeb-48e9-87b0-a85d91e06b4c&type=service"
            },
            {
              id: "simple-nail-art",
              title: "Simple Nail Art",
              description: "Cute accent details (2 nails)",
              price: "$10",
              duration: "10 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=6d135edb-ab76-45d6-8e8a-0a5229e529a4&type=service"
            },
            {
              id: "custom-nail-art",
              title: "Custom Nail Art",
              description: "Creative designs (2-4 nails)",
              price: "$15",
              duration: "20 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=b98b98d2-f2f0-4673-a6ac-64bc265cee8a&type=service"
            },
            {
              id: "intricate-nail-art",
              title: "Intricate Nail Art",
              description: "One-of-a-kind masterpieces",
              price: "$By Quote",
              duration: "Varies",
              href: "https://victoriaparknailsspa.setmore.com"
            }
          ]
        },
        {
          name: "Kids' Services",
          services: [
            {
              id: "little-princess-manicure",
              title: "Little Princess Manicure",
              description: "Special treat for ages 8 & under",
              price: "$15",
              duration: "20 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=f107e0d7-a52e-4be7-bb06-1b8727113712&type=service"
            },
            {
              id: "little-princess-pedicure",
              title: "Little Princess Pedicure",
              description: "Bubbly fun for tiny toes",
              price: "$25",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=37a14e1c-a55e-4826-9b1c-3d6f8fb2c984&type=service"
            }
          ]
        }
      ]
    },
    {
      id: "massage-spa",
      title: "Massage & Spa",
      subcategories: [
        {
          name: "Massage Therapy",
          services: [
            {
              id: "relaxation-massage-60",
              title: "1-Hour Relaxation Massage",
              description: "Slow, flowing techniques release desk tension and calm a busy mind in just one hour.",
              price: "$120",
              duration: "60 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=79e22787-9882-4c6e-bbb6-bc86a49dc3f3&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
            },
            {
              id: "hot-stone-massage-60",
              title: "1-Hour Hot Stone Massage",
              description: "Heated basalt stones combine with therapeutic massage to ease muscle tightness and boost circulation.",
              price: "$130",
              duration: "60 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=ab304f4c-87a7-4e47-b08b-ff2670ce1b0e&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
            },
            {
              id: "extended-massage-90",
              title: "90-Minute Extended Massage",
              description: "Extra time allows focused work on stubborn knots, shoulders, and lower back tension.",
              price: "$180",
              duration: "90 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=cad7b49f-9d7d-4e18-a1dc-025ed2b6f89b&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
            },
            {
              id: "hot-stone-massage-90",
              title: "90-Minute Hot Stone Massage",
              description: "Longer hot stone session for full-body relaxation and lingering warmth that lasts for hours.",
              price: "$190",
              duration: "90 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=223b51c2-4e50-4ef9-8309-b1cfb3852e65&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
            },
            {
              id: "ultimate-massage-120",
              title: "2-Hour Ultimate Massage",
              description: "Two luxurious hours tailored to your needs - ideal for total reset days or gifting.",
              price: "$240",
              duration: "120 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=6105a80e-e1ea-47a3-ba15-5b00b565b4d7&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
            },
            {
              id: "ultimate-hot-stone-120",
              title: "2-Hour Ultimate Hot Stone",
              description: "Deep relaxation experience using continuous warm stones and targeted pressure work.",
              price: "$250",
              duration: "120 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=8ce64029-993f-42ab-a744-724385467b3e&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
            }
          ]
        },
        {
          name: "Spa Treatments",
          services: [
            {
              id: "refreshing-facial",
              title: "Refreshing Facial",
              description: "Customized cleanse, exfoliation, mask, and massage to restore glow in just 30 minutes.",
              price: "$45",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com"
            }
          ]
        }
      ]
    },
    {
      id: "waxing",
      title: "Waxing",
      subcategories: [
        {
          name: "Facial Waxing",
          services: [
            {
              id: "eyebrow-shaping",
              title: "Eyebrow Shaping",
              description: "Precision wax and tweezing to design clean, symmetrical brows that frame your face.",
              price: "$15",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=d781203f-7db9-4623-8df3-a27faeaa8ffe&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
            },
            {
              id: "facial-hair-removal",
              title: "Facial Hair Removal",
              description: "Gently remove lip, chin, or cheek fuzz for makeup-ready, photo-smooth skin.",
              price: "$12",
              duration: "10 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=eef37418-d05a-4e81-a3fa-a409b06355e2&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
            },
            {
              id: "complete-facial-waxing",
              title: "Complete Facial Waxing",
              description: "Comprehensive brow, lip, chin, and cheek waxing for an even, velvety complexion.",
              price: "$45",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=b09b3ad6-c492-4d6f-93b2-89c77aa8106f&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
            }
          ]
        },
        {
          name: "Body Waxing",
          services: [
            {
              id: "underarm-waxing",
              title: "Underarm Waxing",
              description: "Fast, gentle waxing that keeps underarms smooth for weeks with minimal redness.",
              price: "$20",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=425908d7-945e-4ae6-aeba-4d836f096fcc&type=service"
            },
            {
              id: "full-arm-waxing",
              title: "Full Arm Waxing",
              description: "Silky arms from shoulder to wrist - perfect before vacations or events.",
              price: "$40",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=a37cc4f0-ec48-4a1d-9315-8cd1292dc1f7&type=service"
            },
            {
              id: "lower-leg-waxing",
              title: "Lower Leg Waxing",
              description: "Knee-down waxing that leaves calves smooth and ready for dresses or shorts.",
              price: "$30",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=1a45a4fc-5a67-4f3c-a918-5a79bbf1a0b8&type=service"
            },
            {
              id: "full-leg-waxing",
              title: "Full Leg Waxing",
              description: "Top-to-toe waxing for long-lasting smoothness and slower regrowth.",
              price: "$50",
              duration: "60 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=043f3b56-dc6e-4d2f-b84f-62201eb48fe3&type=service"
            },
            {
              id: "bikini-line-waxing",
              title: "Bikini Line Waxing",
              description: "Clean up edges outside a swimsuit line for worry-free pool and vacation days.",
              price: "$35",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=4490dba0-ef2f-490d-8ed0-b7c0cfd04a89&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
            },
            {
              id: "brazilian-waxing",
              title: "Brazilian Waxing",
              description: "Thorough service with mindful techniques for smooth, confident results.",
              price: "$60",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=9f75ae91-e66f-4177-9182-d1f8dcce06f1&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
            },
            {
              id: "back-chest-waxing",
              title: "Back or Chest Waxing",
              description: "Removes unwanted hair across the back or chest for a clean, confident finish.",
              price: "$55",
              duration: "40 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=757faa06-320f-4908-84e5-102e1c1d712f&type=service"
            }
          ]
        }
      ]
    }
  ]
} as const
