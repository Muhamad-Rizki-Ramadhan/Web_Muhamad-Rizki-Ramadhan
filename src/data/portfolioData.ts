export type ProjectCategory = "Cybersecurity" | "Software Development";

export interface ProjectCaseStudy {
  problem: string;
  approach: string;
  takeaways: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  technologies: string[];
  repositoryUrl: string | null;
  demoUrl: string | null;
  caseStudy: ProjectCaseStudy;
}

export interface PortfolioCertificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  pdfPath: string | null;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ContactProfile {
  email: string | null;
  linkedIn: string | null;
  github: string | null;
}

export const portfolioData = {
  name: "Muhamad Rizki Ramadhan Siregar",
  displayName: "Rizki",
  role: "Informatics Student | Aspiring Cybersecurity Analyst",
  description:
    "Saya mahasiswa S1 Informatika di UPN Veteran Jakarta yang tertarik pada cybersecurity, artificial intelligence, dan network security. Saya terus mengembangkan kemampuan untuk memahami sistem dan cara melindunginya.",
  education: {
    institution: "UPN “Veteran” Jakarta",
    program: "Informatika",
    degree: "Bachelor of Informatics",
    gpa: "3.88",
    graduation: "2027",
    coursework: "Cybersecurity, Machine Learning, software development",
  },
  interests: ["Cybersecurity"],
  skillGroups: [
    {
      title: "Security & Networking",
      skills: [
        "Blue Team Defense",
        "Incident Response",
        "Vulnerability Management",
        "Digital Forensics",
        "Cryptography",
        "Web Exploitation (OWASP Top 10)",
        "Volatility",
        "John the Ripper",
        "Kali Linux",
      ],
    },
    {
      title: "Development & Scripting",
      skills: [
        "Python",
        "JavaScript",
        "ReactJS",
        "UI/UX Design",
        "HTML/CSS",
      ],
    },
    {
      title: "AI & Data",
      skills: ["Machine Learning", "Data Analysis"],
    },
  ] satisfies SkillGroup[],
  learningJourney: [
    {
      title: "Dasar-Dasar Cybersecurity",
      detail:
        "Mempelajari fondasi keamanan informasi, sistem operasi Linux, serta pengenalan berbagai jenis ancaman siber.",
    },
    {
      title: "Jaringan Komputer & Kriptografi",
      detail:
        "Mendalami arsitektur protokol jaringan, analisis lalu lintas data, serta penerapan kriptografi untuk mengamankan komunikasi.",
    },
    {
      title: "Bootcamp Full-Stack Web Development (Semester 5)",
      detail:
        "Membangun aplikasi web secara menyeluruh mulai dari perancangan antarmuka frontend, pengembangan API backend, hingga manajemen basis data.",
    },
    {
      title: "Bootcamp Cybersecurity & Web Application Security",
      detail:
        "Berfokus pada analisis kerentanan aplikasi web (OWASP Top 10), teknik pertahanan sistem, dan pengamanan aplikasi web.",
    },
  ],
  contacts: {
    email: "muhamadrizki261004@gmail.com",
    linkedIn: "https://www.linkedin.com/in/muhamad-rizki-ramadhan-3a9725285/",
    github: "https://github.com/Muhamad-Rizki-Ramadhan",
  } satisfies ContactProfile,
} as const;

export const projects: PortfolioProject[] = [
  {
    id: "01",
    title: "Python-Based Hybrid Cryptography & Steganography System",
    category: "Cybersecurity",
    summary:
      "Aplikasi desktop berbasis Python yang menggabungkan enkripsi AES-GCM berbasis kunci chaos (Logistic Map) dengan teknik steganografi gambar LSB untuk mengamankan kerahasiaan file.",
    technologies: ["Python", "AES-GCM", "Chaotic Logistic Map", "LSB Steganography", "Tkinter", "Pillow"],
    repositoryUrl: "https://github.com/Muhamad-Rizki-Ramadhan/Hybrid_Cryptography",
    demoUrl: null,
    caseStudy: {
      problem:
        "Pengiriman file sensitif melalui saluran digital rentan terhadap penyadapan dan deteksi langsung apabila hanya menggunakan satu lapisan enkripsi standar.",
      approach:
        "Merancang skema keamanan berlapis (Hybrid Crypto-Stego Scheme) dengan mengenkripsi plaintext menggunakan AES-GCM, mengacak kunci AES memakai keystream dari persamaan Chaotic Logistic Map, lalu menyisipkan ciphertext ke dalam piksel gambar RGB melalui metode Least Significant Bit (LSB).",
      takeaways:
        "Berhasil mengimplementasikan integrasi kriptografi modern dan steganografi dalam antarmuka GUI Python yang menjaga integritas data sekaligus menyamarkan eksistensi payload di dalam media gambar.",
    },
  },
  {
    id: "02",
    title: "Blue Team Defense & CTF Security Operations",
    category: "Cybersecurity",
    summary:
      "Rangkaian investigasi digital forensics, analisis hash/kredensial, serta simulasi pertahanan Blue Team dalam kompetisi Cyber Challenge ACAD CSIRT 2025, CTF ARA 6.0, dan Permifest 2025.",
    technologies: ["Kali Linux", "Volatility", "John the Ripper", "Digital Forensics", "Incident Response"],
    repositoryUrl: null,
    demoUrl: null,
    caseStudy: {
      problem:
        "Insiden keamanan pada lingkungan sistem membutuhkan kemampuan identifikasi artefak serangan, pemulihan kredensial yang terkompromi, serta mitigasi kerentanan secara cepat dan akurat.",
      approach:
        "Melakukan analisis memori menggunakan Volatility, audit kekuatan kata sandi dengan John the Ripper, serta menyusun modul edukasi incident response dan vulnerability management di KSM Cyber Security UPNVJ.",
      takeaways:
        "Mempertajam metodologi investigasi forensik dan kesiapan operasional Blue Team dalam menangani skenario serangan dunia nyata.",
    },
  },
  {
    id: "03",
    title: "STUIDENT — E-Learning & Scholarship Management Platform",
    category: "Software Development",
    summary:
      "Platform web E-Learning dan manajemen beasiswa terintegrasi, dengan fokus utama pada perancangan antarmuka UI/UX modern dan pengembangan frontend interaktif menggunakan ReactJS.",
    technologies: ["ReactJS", "JavaScript", "UI/UX Design", "Frontend Architecture", "REST API Integration"],
    repositoryUrl: "https://github.com/Panduukece123/Stuident-FE",
    demoUrl: null,
    caseStudy: {
      problem:
        "Mahasiswa membutuhkan platform terpusat yang intuitif untuk mengakses materi pembelajaran daring sekaligus memantau informasi dan progres pendaftaran beasiswa.",
      approach:
        "Merancang sistem desain antarmuka yang bersih dan responsif, lalu mengimplementasikannya ke dalam komponen ReactJS yang modular untuk alur pembelajaran video, kuis, dan pelacakan progres belajar.",
      takeaways:
        "Menciptakan pengalaman pengguna (UX) yang mulus pada alur navigasi kursus dan manajemen dashboard siswa.",
    },
  },
  {
    id: "04",
    title: "CineView — Movie Rating & Community Review App",
    category: "Software Development",
    summary:
      "Aplikasi mobile inovatif yang dirancang sebagai ruang komunitas bagi pengguna untuk memberikan rating, menulis ulasan film, dan menemukan rekomendasi tontonan mingguan.",
    technologies: ["UI/UX Design", "Mobile App Design", "Prototyping", "User Flow"],
    repositoryUrl: "https://github.com/DimasRasyach/CineView",
    demoUrl: null,
    caseStudy: {
      problem:
        "Penonton sering kesulitan menentukan film yang layak ditonton karena informasi ulasan tersebar dan kurang terkurasi berdasarkan preferensi komunitas.",
      approach:
        "Merancang antarmuka aplikasi berfokus pada keterbacaan visual dengan fitur Top Rating Weekly, daftar film trending, detail sinopsis serta pemeran, dan sistem daftar favorit pengguna.",
      takeaways:
        "Menghasilkan alur interaksi yang ringkas bagi pengguna untuk menelusuri katalog film dan membagikan ulasan secara langsung.",
    },
  },
];

export const certificates: PortfolioCertificate[] = [
  {
    id: "certificate-01",
    title: "Mini Capture The Flag (CTF) — Permikomnas Festival 2025",
    issuer: "Permikomnas Wilayah VIII Yogyakarta",
    date: "Februari 2025",
    pdfPath: '/certificates/Muhamad Rizki Ramadhan Siregar_Mini_Ctf.pdf',
  },
  {
    id: "certificate-02",
    title: "Capture The Flag (CTF) ARA 6.0",
    issuer: "HMIT Institut Teknologi Sepuluh Nopember (ITS)",
    date: "Februari 2025",
    pdfPath: '/certificates/Muhammad Rizki Ramadhan Siregar_ara.pdf',
  },
  {
    id: "certificate-03",
    title: "Studi Independen Bersertifikat — Fullstack Web Developer",
    issuer: "PT Nurul Fikri Cipta Inovasi (NF Academy)",
    date: "31 Desember 2025",
    pdfPath: '/certificates/NF.pdf',
  },
];
