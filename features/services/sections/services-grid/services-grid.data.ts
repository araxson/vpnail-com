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
              description: "A standard manicure service that includes nail shaping, cuticle care, hand massage, and application of regular polish in your choice of color.",
              price: "$25",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=0e19aa9b-86a5-4bd5-804a-26e9dabb3725&type=service"
            },
            {
              id: "shellac-manicure",
              title: "Shellac Manicure",
              description: "A manicure service using shellac polish, which is a hybrid gel formula that provides longer wear than regular polish and typically lasts 2-3 weeks.",
              price: "$35",
              duration: "45 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=96dcf9ac-8f37-4c1d-bd12-7e7caafad618&type=service"
            },
            {
              id: "shellac-gel-top",
              title: "Shellac Manicure with Gel Top",
              description: "A shellac manicure with an additional gel top coat layer applied for enhanced durability and extended wear time beyond standard shellac.",
              price: "$40",
              duration: "50 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=0bd9debc-a1f5-4487-bd99-c952afb44201&type=service"
            },
            {
              id: "shellac-gel-overlay",
              title: "Shellac Manicure with Gel Overlay",
              description: "A shellac manicure with a full gel overlay applied over the natural nail to add thickness and strength, providing maximum protection for natural nails.",
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
              description: "A standard pedicure service that includes foot soak, nail trimming and shaping, cuticle care, exfoliation, foot massage, and regular polish application.",
              price: "$40",
              duration: "45 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=35658703-d882-4ca9-b970-e47bd2d187ac&type=service"
            },
            {
              id: "spa-pedicure",
              title: "Spa Pedicure with Hot Stones",
              description: "An enhanced pedicure service that includes all standard pedicure elements plus a hot stone massage treatment applied to the feet and lower legs.",
              price: "$50",
              duration: "60 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=22ec16a1-b447-4bbe-a33f-a797a9740040&type=service"
            },
            {
              id: "shellac-pedicure",
              title: "Shellac Pedicure",
              description: "A pedicure service using shellac polish on the toenails, providing a chip-resistant finish that typically lasts 2-3 weeks longer than regular polish.",
              price: "$45",
              duration: "50 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=177ec3cb-4941-441f-a651-75c530357458&type=service"
            },
            {
              id: "deluxe-spa-pedicure",
              title: "Deluxe Spa Pedicure",
              description: "An extended pedicure service with additional time for thorough exfoliation, extended massage, hot stone treatment, and premium moisturizing products.",
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
              description: "A complete set of acrylic nail extensions applied to natural nails, including nail preparation, tip or form application, acrylic application, shaping, and polish.",
              price: "$60",
              duration: "90 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/3cf5dc61-a989-46a6-b2ae-f7075266cb4a"
            },
            {
              id: "gel-new-set",
              title: "Gel New Set",
              description: "A complete set of gel nail extensions applied to natural nails using hard gel product, including nail preparation, extension application, shaping, and polish.",
              price: "$60",
              duration: "90 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/3cf5dc61-a989-46a6-b2ae-f7075266cb4a"
            },
            {
              id: "acrylic-refill",
              title: "Acrylic Refill",
              description: "Maintenance service for existing acrylic nails that fills in the growth area near the cuticle with fresh acrylic product to maintain the appearance and integrity of the nails.",
              price: "$45",
              duration: "60 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/cf9f0b27-3b4e-49b0-9f4d-faa1fa7e4183"
            },
            {
              id: "gel-refill",
              title: "Gel Refill",
              description: "Maintenance service for existing gel nail extensions that fills in the regrowth area with fresh gel product and includes reshaping and refinishing as needed.",
              price: "$45",
              duration: "60 mins",
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
              description: "Removal of existing regular polish from fingernails and application of new polish color without additional nail care services.",
              price: "$15",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/d2716f81-7773-4cee-afb9-faa6d37ba759"
            },
            {
              id: "foot-polish-change",
              title: "Foot Polish Change",
              description: "Removal of existing regular polish from toenails and application of new polish color without additional pedicure services.",
              price: "$20",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/99698d3a-fc94-430d-8ef3-6a4dee18c3ed"
            },
            {
              id: "hand-shellac-change",
              title: "Hand Shellac Polish Change",
              description: "Removal of existing shellac or gel polish from fingernails and application of new shellac color, including curing under UV/LED lamp.",
              price: "$30",
              duration: "20 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/13c29f88-b561-4104-bdf4-65366ff9b528"
            },
            {
              id: "foot-shellac-change",
              title: "Foot Shellac Polish Change",
              description: "Removal of existing shellac or gel polish from toenails and application of new shellac color, including proper curing under UV/LED lamp.",
              price: "$35",
              duration: "20 mins",
              href: "https://victoriaparknailsspa.setmore.com/services/473751a4-644d-40ef-ad10-9de8bdd8423d"
            },
            {
              id: "hand-nail-trim-shape",
              title: "Hand Nail Trim & Shape",
              description: "Fingernail trimming and shaping service using files and clippers to achieve desired nail length and shape, without polish application.",
              price: "$15",
              duration: "10 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=67a49dc4-0de6-44da-8d1d-cc30b7fda0f4&type=service"
            },
            {
              id: "foot-nail-trim-shape",
              title: "Foot Nail Trim & Shape",
              description: "Toenail trimming and shaping service that includes proper cutting technique and filing to maintain healthy nail shape and prevent ingrown nails.",
              price: "$25",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=1cea68ef-bc0d-4e47-aa39-bf725a438f11&type=service"
            },
            {
              id: "shellac-removal",
              title: "Shellac Removal",
              description: "Safe removal of shellac or gel polish from nails using acetone-based products and proper technique to minimize damage to the natural nail.",
              price: "$15",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=63d78b40-d53d-44fd-9ad2-df431c61423c&type=service"
            },
            {
              id: "acrylic-gel-removal",
              title: "Acrylic/Gel Removal (up)",
              description: "Complete removal of acrylic or hard gel nail extensions using appropriate removal methods, including soaking and careful filing to protect natural nails.",
              price: "$20+",
              duration: "20 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=87a3bd9a-9435-48e8-a448-1e0a9e13d7fc&type=service"
            },
            {
              id: "paraffin-wax-hands",
              title: "Paraffin Wax Treatment - Hands",
              description: "A hand treatment using warm paraffin wax to moisturize and soften skin, which involves dipping hands in melted wax and allowing it to set before removal.",
              price: "$15",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=88c89c89-7ffd-4611-84fd-cb903bbc65ea&type=service"
            },
            {
              id: "paraffin-wax-feet",
              title: "Paraffin Wax Treatment - Feet",
              description: "A foot treatment using warm paraffin wax to deeply moisturize and condition the skin of the feet, helping to soften rough or dry areas.",
              price: "$25",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=62e389f2-7cff-4b50-ae7b-96f55904c7b0&type=service"
            },
            {
              id: "callus-removal",
              title: "Callus Removal",
              description: "Removal of hardened, thickened skin on the feet using professional tools and techniques to reduce calluses and create smoother foot texture.",
              price: "$10",
              duration: "10 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=29b13cdf-35c9-40c9-aba5-e47c4d42ddca&type=service"
            },
            {
              id: "nail-repair",
              title: "Nail Repair",
              description: "Repair service for a single damaged or broken nail using appropriate materials such as silk wrap, fiberglass, or acrylic to restore nail integrity.",
              price: "$5",
              duration: "10 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=69cd19e9-764a-492a-8ff7-f2d86430b10d&type=service"
            },
            {
              id: "french-tip-cat-eye",
              title: "French Tip or Cat Eye",
              description: "Choose from a classic French Tip nail design with white tips, or a Cat Eye specialty nail finish with magnetic striped effect. Both available as add-on finishes.",
              price: "$10",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=f3eea388-d341-4603-9ab6-0bdd81fce4ca&type=service"
            },
            {
              id: "chrome-ombre",
              title: "Chrome or Ombre",
              description: "Choose from a chrome powder finish for a luxurious metallic mirror effect, or an ombre gradient blend for a smooth color transition. Both available as specialty nail finishes.",
              price: "$15",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=c5d3c7de-4eeb-48e9-87b0-a85d91e06b4c&type=service"
            },
            {
              id: "simple-nail-art",
              title: "Simple Nail Art",
              description: "Basic decorative nail art designs applied to two accent nails, including simple patterns, lines, dots, or single-color detail work.",
              price: "$10",
              duration: "10 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=6d135edb-ab76-45d6-8e8a-0a5229e529a4&type=service"
            },
            {
              id: "custom-nail-art",
              title: "Custom Nail Art",
              description: "Custom decorative nail designs applied to 2-4 nails, featuring more detailed patterns, multiple colors, or moderately complex artistic elements.",
              price: "$15",
              duration: "20 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=b98b98d2-f2f0-4673-a6ac-64bc265cee8a&type=service"
            },
            {
              id: "intricate-nail-art",
              title: "Intricate Nail Art",
              description: "Highly detailed nail art with complex designs, multiple techniques, 3D elements, or hand-painted artwork requiring advanced skill and additional time. Pricing varies by design.",
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
              description: "A manicure service designed for children ages 8 and under that includes gentle nail shaping, cuticle care, and polish application with age-appropriate products.",
              price: "$15",
              duration: "20 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=f107e0d7-a52e-4be7-bb06-1b8727113712&type=service"
            },
            {
              id: "little-princess-pedicure",
              title: "Little Princess Pedicure",
              description: "A pedicure service tailored for young children that includes foot soaking, gentle nail care, brief massage, and polish application in a child-friendly manner.",
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
              description: "A 60-minute full-body massage session using various techniques to address muscle tension, promote circulation, and provide general relaxation.",
              price: "$120",
              duration: "60 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=79e22787-9882-4c6e-bbb6-bc86a49dc3f3&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
            },
            {
              id: "hot-stone-massage-60",
              title: "1-Hour Hot Stone Massage",
              description: "A 60-minute massage session that incorporates heated smooth stones placed on the body and used as massage tools to warm muscles and enhance the treatment.",
              price: "$130",
              duration: "60 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=ab304f4c-87a7-4e47-b08b-ff2670ce1b0e&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
            },
            {
              id: "extended-massage-90",
              title: "90-Minute Extended Massage",
              description: "An extended 90-minute massage session providing additional time to address multiple areas of concern and allow for more thorough muscle work and relaxation.",
              price: "$180",
              duration: "90 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=cad7b49f-9d7d-4e18-a1dc-025ed2b6f89b&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
            },
            {
              id: "hot-stone-massage-90",
              title: "90-Minute Hot Stone Massage",
              description: "An extended 90-minute hot stone massage that allows more time for heat therapy and deep muscle work using heated stones throughout the session.",
              price: "$190",
              duration: "90 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=223b51c2-4e50-4ef9-8309-b1cfb3852e65&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
            },
            {
              id: "ultimate-massage-120",
              title: "2-Hour Ultimate Massage",
              description: "A comprehensive 120-minute massage session that provides extensive time to work on the full body with customized techniques based on individual needs and preferences.",
              price: "$240",
              duration: "120 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=6105a80e-e1ea-47a3-ba15-5b00b565b4d7&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
            },
            {
              id: "ultimate-hot-stone-120",
              title: "2-Hour Ultimate Hot Stone",
              description: "A comprehensive 120-minute hot stone massage combining extended hands-on massage with continuous use of heated stones for maximum therapeutic benefit.",
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
              description: "A 30-minute facial treatment that includes cleansing, exfoliation, facial massage, and mask application to refresh and improve the appearance of facial skin.",
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
              description: "Professional eyebrow shaping using wax and tweezing methods to define and clean up the brow area, removing unwanted hair to create desired shape.",
              price: "$15",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=d781203f-7db9-4623-8df3-a27faeaa8ffe&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
            },
            {
              id: "facial-hair-removal",
              title: "Facial Hair Removal",
              description: "Waxing service to remove unwanted hair from specific facial areas including upper lip, chin, or cheeks using appropriate wax products for facial skin.",
              price: "$12",
              duration: "10 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=eef37418-d05a-4e81-a3fa-a409b06355e2&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
            },
            {
              id: "complete-facial-waxing",
              title: "Complete Facial Waxing",
              description: "Comprehensive facial waxing service that includes multiple areas such as eyebrows, upper lip, chin, and cheeks for complete facial hair removal.",
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
              description: "Hair removal service for both underarm areas using professional waxing techniques and appropriate products for sensitive skin areas.",
              price: "$20",
              duration: "15 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=425908d7-945e-4ae6-aeba-4d836f096fcc&type=service"
            },
            {
              id: "full-arm-waxing",
              title: "Full Arm Waxing",
              description: "Complete hair removal for both arms from shoulders to wrists, including both upper arms and forearms using standard waxing methods.",
              price: "$40",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=a37cc4f0-ec48-4a1d-9315-8cd1292dc1f7&type=service"
            },
            {
              id: "lower-leg-waxing",
              title: "Lower Leg Waxing",
              description: "Hair removal service for both lower legs from knees to ankles, covering the calf and shin areas using professional waxing products.",
              price: "$30",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=1a45a4fc-5a67-4f3c-a918-5a79bbf1a0b8&type=service"
            },
            {
              id: "full-leg-waxing",
              title: "Full Leg Waxing",
              description: "Complete hair removal service for both legs from thighs to ankles, including upper legs, lower legs, knees, and feet using standard waxing techniques.",
              price: "$50",
              duration: "60 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=043f3b56-dc6e-4d2f-b84f-62201eb48fe3&type=service"
            },
            {
              id: "bikini-line-waxing",
              title: "Bikini Line Waxing",
              description: "Hair removal along the bikini line that removes hair visible outside of standard swimwear or underwear, covering the outer edges of the bikini area.",
              price: "$35",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=4490dba0-ef2f-490d-8ed0-b7c0cfd04a89&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
            },
            {
              id: "brazilian-waxing",
              title: "Brazilian Waxing",
              description: "Comprehensive hair removal service for the entire bikini area including front, back, and all hair in the intimate region using specialized waxing techniques.",
              price: "$60",
              duration: "30 mins",
              href: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=9f75ae91-e66f-4177-9182-d1f8dcce06f1&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
            },
            {
              id: "back-chest-waxing",
              title: "Back or Chest Waxing",
              description: "Hair removal service for either the full back area or full chest area, removing unwanted hair from the selected large body surface using appropriate waxing methods.",
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
