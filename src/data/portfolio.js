// Portfolio Data - Muhammad Arapat Rahman

export const personal = {
  name: 'Muhammad Arapat Rahman S.kom',
  nameShort: 'M Arapat Rahman',
  initials: 'MAR',
  titles: ['IT Supervisor', 'System Administrator', 'Web Developer', 'Network Engineer'],
  tagline:
    'Transforming complex technical challenges into elegant solutions. Specialized in system architecture, network infrastructure, and cutting-edge web development with 10+ years of professional experience.',
  phone: '+62 853 7860 1404',
  whatsapp: 'https://wa.me/6285378601404',
  email: 'arafat.forestry@yahoo.com',
  linkedin: 'https://www.linkedin.com/in/muhammad-arapat-rahman-43004714b/',
  github: 'https://github.com',
  location: 'Jambi, Indonesia',
  birthdate: 'Jambi, 20 Dec 1991',
  status: 'Married • Male',
  religion: 'Islam',
  education: 'STIKOM Dinamika Bangsa',
  eduYear: '2010 – 2015',
  eduField: 'Computer Systems',
  available: true,
  cvFile: '/mycv.pdf',
  photo: '/pas_foto.png',
}

export const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Client Satisfaction', value: '100%' },
]

export const expertise = [
  'System Administration & Network Infrastructure',
  'Full-Stack Web Development',
  'CCTV & Security Systems',
  'Database Design & Management',
]

export const approach = [
  'Problem-solving oriented mindset',
  'Detail-oriented & quality focused',
  'Continuous learning & adaptation',
  'Team collaboration & leadership',
]

export const skills = [
  { name: 'Python', icon: 'FaPython', color: 'from-yellow-400 to-yellow-600' },
  { name: 'PHP', icon: 'FaPhp', color: 'from-purple-500 to-purple-700' },
  { name: 'MySQL', icon: 'SiMysql', color: 'from-blue-500 to-blue-700' },
  { name: 'HTML5', icon: 'FaHtml5', color: 'from-orange-500 to-red-600' },
  { name: 'CSS3', icon: 'FaCss3Alt', color: 'from-blue-600 to-cyan-600' },
  { name: 'JavaScript', icon: 'SiJavascript', color: 'from-yellow-300 to-yellow-500' },
  { name: 'React', icon: 'FaReact', color: 'from-cyan-400 to-sky-600' },
  { name: 'Node.js', icon: 'FaNodeJs', color: 'from-green-600 to-emerald-600' },
  { name: 'Networking', icon: 'MdNetworkWifi', color: 'from-teal-500 to-green-600' },
  { name: 'CCTV', icon: 'MdVideocam', color: 'from-red-500 to-pink-600' },
  { name: 'Mikrotik', icon: 'MdRouter', color: 'from-blue-700 to-indigo-700' },
  { name: 'Cisco', icon: 'MdDns', color: 'from-blue-500 to-sky-600' },
  { name: 'Linux', icon: 'FaLinux', color: 'from-gray-600 to-gray-800' },
  { name: 'Photoshop', icon: 'SiAdobephotoshop', color: 'from-blue-400 to-blue-600' },
  { name: 'Premiere', icon: 'SiAdobepremierepro', color: 'from-indigo-500 to-purple-600' },
]

export const additionalSkills = [
  'Tailwind CSS', 'ReactJS', 'Vite', 'Git', 'Windows Server',
  'VPN Configuration', 'Firewall Management', 'System Monitoring',
  'Backup Solutions', 'Technical Documentation', 'Project Management',
]

export const experience = [
  {
    slug: 'it-supervisor-usm',
    period: 'September 2022 – Present',
    role: 'IT Supervisor',
    company: 'PT. Universal Support Mining',
    color: 'from-violet-600 to-indigo-600',
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-500',
    dotColor: 'bg-violet-500',
    responsibilities: [
      'Setup & konfigurasi Mikrotik, Firewall (NAT, routing, bandwidth management)',
      'Maintenance jaringan LAN/WAN & hardware endpoint',
      'Setup Access Point & PTP link menggunakan perangkat Ubiquiti',
      'Support sistem HRIS & fingerprint absensi karyawan',
      'Instalasi CCTV IP Camera & analog (multi-site)',
      'Manajemen Domain & Windows Server',
      'Monitoring & pelaporan aset IT perusahaan',
      'IT support lintas site (multi-lokasi)',
    ],
    overview:
      'As IT Supervisor at PT. Universal Support Mining, I lead the full IT operations across multiple mining sites — from network infrastructure and server management to HRIS support and CCTV security systems. My role is both strategic and hands-on, ensuring seamless technology operations in remote and challenging mining environments.',
    achievements: [
      'Built and deployed an industrial weighing management system used by 50+ operators daily',
      'Reduced network downtime significantly through Mikrotik & firewall infrastructure redesign',
      'Implemented multi-site CCTV monitoring covering all operational areas',
      'Managed Windows Server, Active Directory, and domain across multiple locations',
      'Delivered uninterrupted HRIS & fingerprint system support for HR operations',
    ],
    roleSkills: [
      'Mikrotik', 'Firewall (NAT/Routing)', 'Ubiquiti PTP/AP', 'HRIS Support',
      'CCTV Installation', 'Windows Server', 'Domain Management', 'LAN/WAN',
      'IT Asset Monitoring', 'Multi-site IT Support', 'Bandwidth Management',
    ],
    environment: ['PT. Universal Support Mining', 'Mining Industry', 'Sep 2022 – Present', 'Jambi, Indonesia'],
  },
  {
    slug: 'it-support-thriveni',
    period: 'September 2019 – September 2020',
    role: 'IT Support',
    company: 'PT. Thriveni Mining Group LTD',
    color: 'from-sky-600 to-blue-600',
    accentColor: 'text-sky-400',
    borderColor: 'border-sky-500',
    dotColor: 'bg-sky-500',
    responsibilities: [
      'Konfigurasi Mikrotik & keamanan firewall jaringan',
      'Maintenance jaringan LAN/WAN perusahaan',
      'Konfigurasi wireless & PTP link menggunakan Ubiquiti',
      'Support sistem HRIS & ERP (Tally)',
      'Setup CCTV & sistem fingerprint karyawan',
      'Printer sharing & file server management',
      'Troubleshooting hardware & jaringan',
      'Pengembangan sistem timbangan berbasis web',
    ],
    overview:
      'At PT. Thriveni Mining Group LTD, I handled end-to-end IT support for a large mining workforce — covering network maintenance, ERP/HRIS support, CCTV systems, and hardware troubleshooting. I also contributed to the development of a web-based weighing system used in daily operations.',
    achievements: [
      'Configured and maintained Mikrotik routers with layered firewall security policies',
      'Managed Ubiquiti wireless and PTP links across remote site areas',
      'Provided full support for HRIS & Tally ERP adopted by all departments',
      'Set up CCTV and fingerprint systems across multiple operational zones',
      'Developed a web-based weighing system for operational data capture',
    ],
    roleSkills: [
      'Mikrotik', 'Firewall', 'Ubiquiti PTP/Wireless', 'HRIS Support',
      'ERP (Tally)', 'CCTV Systems', 'Fingerprint System', 'Printer Sharing',
      'File Server', 'Hardware Troubleshooting', 'Web Development (PHP)',
    ],
    environment: ['PT. Thriveni Mining Group LTD', 'Mining Industry', 'Sep 2019 – Sep 2020', 'Jambi, Indonesia'],
  },
  {
    slug: 'it-supervisor-brs',
    period: 'August 2015 – June 2019',
    role: 'IT Supervisor',
    company: 'PT Bangun Rimba Sejahtera (Sinarmas Forestry Group)',
    color: 'from-pink-600 to-rose-600',
    accentColor: 'text-pink-400',
    borderColor: 'border-pink-500',
    dotColor: 'bg-pink-500',
    responsibilities: [
      'Konfigurasi Cisco Router & Switch (VLAN, ACL, Routing Protocols)',
      'Manajemen Active Directory & Windows Server',
      'Setup FTP Server & File Sharing antar departemen',
      'Administrasi sistem email Lotus Notes / IBM Notes',
      'Implementasi VoIP Cisco (CUCM)',
      'Desain topologi jaringan perusahaan',
      'Perencanaan infrastruktur CCTV & keamanan fisik',
      'Pelaporan IT & presentasi manajemen',
    ],
    overview:
      'As IT Supervisor at PT Bangun Rimba Sejahtera (part of Sinarmas Forestry Group), I managed the entire IT infrastructure of a large plantation company — from Cisco enterprise networking and Windows Server to VoIP systems (CUCM), email (Lotus Notes), and security. I led IT planning, reporting, and infrastructure design to support multi-department operations.',
    achievements: [
      'Designed and maintained enterprise network topology using Cisco Router & Switch with VLAN/ACL',
      'Managed Active Directory and Windows Server for all company users and resources',
      'Implemented Cisco CUCM VoIP system for internal communications across departments',
      'Administered IBM Lotus Notes email system for the entire organization',
      'Planned and deployed CCTV infrastructure covering all plantation facilities',
    ],
    roleSkills: [
      'Cisco Router & Switch', 'VLAN / ACL', 'Active Directory', 'Windows Server',
      'FTP Server', 'Lotus Notes / IBM Notes', 'VoIP Cisco (CUCM)',
      'Network Topology Design', 'CCTV Planning', 'IT Reporting',
    ],
    environment: ['PT Bangun Rimba Sejahtera', 'Sinarmas Forestry Group', 'Aug 2015 – Jun 2019', 'Jambi, Indonesia'],
  },
]

export const projects = [
  {
    title: 'Weighing System – Login',
    subtitle: 'Industrial Scale Management Solution',
    description:
      'Secure authentication portal with modern UI/UX design for industrial weighing operations. Features multi-factor authentication, role-based access control, and real-time monitoring.',
    icon: 'Scale',
    color: 'from-purple-600 to-pink-600',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'API Integration'],
    link: 'http://scale.kesug.com/login.php',
    badge: 'Active',
    badgeColor: 'bg-purple-500/20 text-purple-300',
    year: '2023',
  },
  {
    title: 'Weighing System – Dashboard',
    subtitle: 'Real-time Monitoring & Analytics',
    description:
      'Web-based SCADA interface for industrial weighing operations. Integrates real-time data acquisition from scale indicators via RS-232/Modbus RTU protocol. Features automated transaction slip generation, shift-based reporting, and CSV/PDF export with audit trail logging.',
    icon: 'BarChart3',
    color: 'from-blue-600 to-cyan-600',
    tags: ['Real-time', 'Modbus RTU', 'IoT', 'Data Visualization', 'WebSocket'],
    link: 'http://scale.kesug.com',
    badge: 'Live',
    badgeColor: 'bg-green-500/20 text-green-300',
    year: '2023 – Present',
  },
  {
    title: 'PyQt5 Weighing Desktop App',
    subtitle: 'Industrial Scale Indicator Interface – Python GUI',
    description:
      'Desktop application built with Python & PyQt5 for direct serial communication with industrial weighing indicators (e.g. Timbangan Truk/Jembatan Timbang). Implements RS-232 / RS-485 serial protocol for real-time weight data acquisition, with configurable baud rate, parity, and data-bit parameters. Features live weight display, threshold alerting, automated transaction logging to SQLite/MySQL, and printout generation via ESC/POS thermal printer driver.',
    icon: 'Code2',
    color: 'from-emerald-600 to-teal-600',
    tags: ['Python', 'PyQt5', 'PySerial', 'RS-232/RS-485', 'Modbus RTU', 'SQLite', 'ESC/POS'],
    link: '#',
    noLink: true,
    badge: 'Desktop App',
    badgeColor: 'bg-emerald-500/20 text-emerald-300',
    year: '2023',
  },
  {
    title: 'Smart Absensi',
    subtitle: 'Employee Attendance Management System',
    description:
      'Project Overview\nSmart Absensi adalah aplikasi manajemen kehadiran karyawan berbasis web dan mobile yang dirancang untuk membantu perusahaan memantau absensi secara real-time. Sistem mendukung berbagai metode check-in seperti QR Code, PIN, GPS Location, dan Fingerprint, lengkap dengan fitur manajemen shift, laporan kehadiran, izin/cuti, koreksi absensi, serta integrasi API untuk kebutuhan HR dan payroll.\n\nMy Role\n• Full Stack Web Developer\n• UI/UX Designer\n• Database Design & System Architecture\n• REST API Development\n• Deployment & Server Configuration\n\nKey Features\n• Employee Attendance Tracking\n• GPS & Geofencing Validation\n• QR Code & PIN Check-In\n• Shift Management System\n• Leave & Permission Requests\n• Attendance Correction Workflow\n• Analytics & Reporting Dashboard\n• Excel Export & Payroll Integration\n• REST API & Webhook Integration\n• Responsive Web Application\n\nTechnologies\nPHP / Laravel, MySQL, JavaScript, Bootstrap / Tailwind CSS, REST API, Git & GitHub, Linux Server Deployment\n\nProject Impact\nMembantu perusahaan melakukan digitalisasi proses absensi, mengurangi pencatatan manual, meningkatkan akurasi data kehadiran, serta mempercepat proses rekapitulasi untuk kebutuhan HR dan payroll.',
    icon: 'Smartphone',
    color: 'from-orange-600 to-red-600',
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'REST API', 'Tailwind CSS', 'Git', 'Linux'],
    link: 'https://smartabsensi.xyz/',
    badge: 'Active',
    badgeColor: 'bg-orange-500/20 text-orange-300',
    year: '2024',
  },
]

export const miniProjects = [
  {
    title: 'Network Infrastructure',
    description: 'Design and implementation of secure enterprise networks for mining operations',
    icon: 'Network',
    color: 'from-teal-500 to-green-600',
    tags: ['Cisco', 'Mikrotik', 'VPN'],
  },
  {
    title: 'CCTV Security Systems',
    description: 'Enterprise surveillance solutions with remote monitoring capabilities',
    icon: 'Camera',
    color: 'from-red-500 to-pink-600',
    tags: ['Hikvision', 'IP Cameras', 'NVR'],
  },
  {
    title: 'Custom Web Applications',
    description: 'Tailored business solutions for process automation and data management',
    icon: 'Code2',
    color: 'from-orange-500 to-yellow-600',
    tags: ['PHP', 'MySQL', 'JavaScript'],
  },
]
