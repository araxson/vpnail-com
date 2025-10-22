import type { TeamMember } from './team.types'

export const teamData = {
  title: 'Meet Our Expert Professionals',
  description: 'Our skilled team of nail technicians and beauty professionals are dedicated to providing you with exceptional service.',
  members: [
    {
      id: 'desanna',
      name: 'Desanna',
      position: 'Salon Manager & Senior Nail Technician',
      bio: 'With over 15 years of experience in the beauty industry, Desanna leads our team with passion and expertise. She specializes in intricate nail art and advanced gel techniques. With a proven track record in Calgary salons, she ensures client satisfaction and stays current with industry trends.',
      image: '/avatar-placeholder.webp',
      specialties: [
        'Advanced Nail Art',
        'Gel Extensions',
        'Nail Health Consultation',
        'Team Leadership',
        'Manicures & Pedicures',
      ],
      experience: '15+ years',
      certifications: [
        'Certified Nail Technician (CNA)',
        'Advanced Gel Certification',
        'Nail Art Specialist',
      ],
      bookingUrl: 'https://victoriaparknailsspa.setmore.com/team/cyenzUfc96WJtwAUlopx7DhYQ83kffxi',
    },
    {
      id: 'evon',
      name: 'Evon',
      position: 'Senior Nail Technician',
      bio: 'Evon brings artistic flair and technical precision to every service. With 18+ years of extensive experience in Calgary salons, she is known for her gentle touch and attention to detail, creating beautiful, long-lasting results. She focuses on client satisfaction while keeping up with the latest industry trends.',
      image: '/avatar-placeholder.webp',
      specialties: [
        'Manicures',
        'French Manicures',
        'Pedicures',
        'Cuticle Care',
        'Shellac Applications',
      ],
      experience: '18+ years',
      certifications: [
        'Certified Nail Technician',
        'Pedicure Specialist',
        'Advanced Nail Art Certification'
      ],
      bookingUrl: 'https://victoriaparknailsspa.setmore.com/team/cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne',
    },
    {
      id: 'samie',
      name: 'Samie',
      position: 'Nail Artist & Technician',
      bio: 'Samie is our creative nail artist who turns your nail dreams into reality. Her innovative designs and artistic vision make every set of nails a masterpiece. With 7+ years in Calgary\'s beauty industry, she\'s dedicated to client satisfaction and continuously updates her skills with the latest trends.',
      image: '/avatar-placeholder.webp',
      specialties: [
        '3D Nail Art',
        'Custom Designs',
        'Seasonal Nail Art',
        'Acrylic Extensions',
        'Gel and Shellac Applications',
      ],
      experience: '7+ years',
      certifications: [
        'Nail Art & Nail Technology Certification from the international ibi institution',
        'Acrylic Extension Specialist',
      ],
      bookingUrl: 'https://victoriaparknailsspa.setmore.com/team/cNsVJHwzW7yBam6mFFdWrlsMAGehj4Om',
    },
    {
      id: 'rita',
      name: 'Rita',
      position: 'Nail Technician',
      bio: 'Rita brings creativity and precision to every nail service. With 5+ years of experience, she has developed a loyal clientele who appreciate her attention to detail and friendly approach. She excels in various nail techniques and stays updated with the latest trends in the industry.',
      image: '/avatar-placeholder.webp',
      specialties: [
        'Gel Nails',
        'Nail Extensions',
        'Creative Nail Art',
        'Manicures',
        'Pedicures',
      ],
      experience: '5+ years',
      certifications: [
        'Certified Nail Technician',
        'Advanced Nail Art Specialist',
      ],
      bookingUrl: 'https://victoriaparknailsspa.setmore.com/team/r360e1663875729418',
    },
  ] as TeamMember[],
} as const
