export const siteConfig = {
  name: "Kushal Chandar",
  title: " Embedded Engineer",
  description: "Portfolio website",
  accentColor: "#1B9AAA",
  social: {
    email: "kushalchandariit@gmail.com",
    linkedin: "https://linkedin.com/in/kushal-chandar",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/kushal-chandar",
  },
  aboutMe:
    "Embedded Engineer with 2+ years of hands-on experience in designing, developing, and debugging firmware for a wide range of microcontrollers, including STM32, Raspberry Pi, NRF, Arduino and ESP platforms. Skilled at programming, problem-solving, collaborating across teams, and delivering solutions from concept to deployment.",
  skills: ["C", "C++", "Python", "Linux", "Git", "RISC-V", "Debugging", "Shell", "VSCode", "CMake", "RTOS", "I2C", "UART", "SPI", "BLE", "DMA", "Timers", "PWM", "ADC", "Interrupts"],
  projects: [
    {
      name: "Scalp Cooling System",
      description:
        "Developed a medical cooling device to reduce chemotherapy-induced hair loss by maintaining scalp temperature and flow control for two patients.",
      link: "https://github.com/Kushal-Chandar/ScalpCoolingDevice",
      skills: ["STM32", "ADC", "RTOS", "UART"],
      image: "cropped-cooling_cap.svg"
    },
    {
      name: "Keto Breath Analyzer",
      description:
        "Created a portable breath analyzer mapping sensor voltages to CO₂ and acetone levels with real-time OLED display.",
      link: "https://github.com/Kushal-Chandar/Ketone-Breath-Analyzer-POC",
      skills: ["ATMEGA328p", "VOC Sensors", "I2C"],
      image: "cropped-keto.svg"
    },
    {
      name: "Smart Spray Scheduler",
      description:
        "Designed a programmable system for controlled gas spraying with cycle automation and Bluetooth-based remote access.",
      link: "https://github.com/Kushal-Chandar/VeraShield-App",
      skills: ["nRF52832", "Bluetooth", "SPI"],
      image: "cropped-spray.svg"

    }
  ],
  experience: [
    {
      company: "IIT Bombay - BETIC Labs",
      title: "Embedded Engineer",
      dateRange: "June 2023 - Present",
      bullets: [
        "Contributed to various medical and embedded projects, taking them from concept design to functional prototype",
        "Applied STM32, Arduino, NRF, Bluetooth, RTOS, and various sensor technologies to build prototypes with real-world clinical and IoT applications.",
        "Collaborated with clients and cross-functional teams (mechanical, industrial, and software) to define timelines and workflow architecture",
      ],
    }
  ],
  education: [
    {
      school: "Osmania University - Hyderabad",
      degree: "Bachelor of Science in Computer Science (Minor in Mathematics and Statistics)",
      dateRange: "2019 - 2023",
      achievements: [
        "Graduated with a CGPA of 8.6",
        "Presented LY Paper at ICAETIS - 2023",
        "Student Co-ordinator | TPO KJSCE",
        "Creative Head, Joint Treasurer | IETE KJSCE",
        "Networking and PR Team Member | Alumini Cell KJSCE"
      ],
    },
  ],
};
