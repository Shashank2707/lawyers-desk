import { Briefcase, Scale, Users, FileText } from 'lucide-react';

export const navLinks = [
  { name: 'Practice Areas', href: '#practice-areas' },
  { name: 'Case Studies', href: '#case-studies' }, // <--- ADD THIS LINE
  { name: 'Our Team', href: '#team' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const practiceAreas = [
  { 
    title: 'Litigation & Dispute Resolution', 
    description: 'Aggressive representation for complex civil and commercial conflicts.',
    icon: Briefcase 
  },
  { 
    title: 'Corporate & M&A Law', 
    description: 'Guiding businesses through formations, contracts, mergers, and acquisitions.',
    icon: FileText 
  },
  { 
    title: 'Family & Matrimonial Law', 
    description: 'Compassionate and discrete counsel for divorce, custody, and support matters.',
    icon: Users 
  },
  { 
    title: 'Real Estate & Property', 
    description: 'Securing your interests in residential and commercial property transactions.',
    icon: Scale 
  },
];

// --- New Static Data: Case Studies ---
export const caseStudies = [
    { 
        id: 1, 
        domain: 'Corporate', 
        title: 'Successful Acquisition of Competitor', 
        summary: 'Navigated the complex legal landscape for a mid-market tech firm to successfully acquire its primary competitor, securing 40% market share and achieving regulatory clearance.', 
        outcome: 'Increased Market Share by 40%' 
    },
    { 
        id: 2, 
        domain: 'Litigation', 
        title: 'Favorable Settlement in IP Infringement', 
        summary: 'Represented a client in a high-stakes intellectual property dispute, leading to a confidential but highly favorable settlement and securing all rights to proprietary technology.', 
        outcome: 'Secured Full IP Rights' 
    },
    { 
        id: 3, 
        domain: 'Family Law', 
        title: 'Complex Asset Division Resolution', 
        summary: 'Successfully mediated and resolved a complex matrimonial matter involving multi-jurisdictional assets and business valuations, ensuring a fair and equitable division for the client.', 
        outcome: 'Equitable Financial Resolution' 
    },
    { 
        id: 4, 
        domain: 'Real Estate', 
        title: 'Rezoning and Development Approval', 
        summary: 'Secured critical rezoning and environmental approvals for a major commercial real estate development project, minimizing delays and mitigating potential legal challenges.', 
        outcome: 'Project Approved and Fast-Tracked' 
    }
];

export const teamMembers = [
  { name: 'Adv. D.K Singh', title: 'Member/Former Vice Chairman Bar Council Of Delhi & Supreme Court Advocate', specialty: 'Crimial/Civil Expert', image: '/images/teams/DKSingh.jpeg', bio: 'Founder of D.K Singh & Associates, over 28 years of distinguished legal practice, Adv. D.K. Singh specializes in criminal, civil, and constitutional law. His tenure as the Former Vice-Chairman of the Bar Council of Delhi underscores his deep commitment to the legal profession. He is known for his strategic approach and dedication to ensuring fair representation and justice for his clients.', },
  { name: 'Adv. Thakur Sumit', title: 'Supreme Court Advocate & Panel Counsel Ministry of Environment, Forest & Climate Change', specialty: 'Civil/Corporate & Constitutional Litigation', image: '/images/teams/Sumit.jpeg', bio: 'With 20 years of experience, Senior Advocate Sumit Thakur specializes in navigating complex Constitutional, Corporate, and Civil disputes. As head of the Forest & Environment Panel, he leverages his strategic insight to secure favorable outcomes for individuals and institutions nationwide.', },
  { name: 'Adv. Virender Rajput', title: 'Panel Counsel Of East Delhi Muncipal Corporation From 2022-2023', specialty: 'Civil/Corporate & Constitutional Litigation', image: '/images/teams/Bilendar.jpeg', bio: 'With over five years of hands-on experience, Advocate Virender Rajput leads the legal team at Crown Juris Associates. His tenure as Panel Counsel for the East Delhi Municipal Corporation has equipped him with deep expertise in handling complex municipal cases, ensuring effective and knowledgeable representation for his clients.', },
  { name: 'Adv. Sidharth Rathore', title: `Founder Of Lawyer's Desk & BJP Legal Cell Member`, specialty: 'Criminal/Civil & Metromonial Litigation', image: '/images/teams/Sidharat.jpeg', bio: 'Adv. Sidharat Rathore is a distinguished BJP Legal Cell Member and Partner at Crown Juris Associates, known for his expertise in Criminal, Civil, and Matrimonial Litigation. With a strong record of courtroom success and a client-first approach, he combines legal precision with practical solutions to deliver justice with integrity.', },
  { name: 'Adv. Lakshmi Devradi', title: 'Advocate & Partner of crown Juris Associates', specialty: 'Criminal/Civil & Metromonial Litigation', image: '/images/teams/Laxmi.jpeg', bio: 'Adv. Lakshmi Devradi is a dedicated Advocate and Partner at Crown Juris Associates, specializing in Criminal, Civil, and Matrimonial Litigation. Known for her strategic approach and compassionate advocacy, she ensures every client’s voice is heard and their rights are protected with unwavering commitment.', },
  { name: 'Adv. Gaurav Rathor', title: 'Advocate, Delhi High Court', specialty: 'Criminal/Civil & Metromonial Litigation', image: '/images/teams/Gourav.jpeg', bio: 'Adv. Gaurav Rathor is a skilled Advocate at the Delhi High Court, specializing in Criminal, Civil, and Matrimonial Litigation. Renowned for his sharp legal insight and persuasive courtroom presence, he is committed to delivering justice with precision and professionalism.', },
]