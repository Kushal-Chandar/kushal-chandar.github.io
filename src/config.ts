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
      company: "IIT Bombay - BETIC Project",
      title: "Embedded Systems Engineer & Full Stack Developer",
      dateRange: "April 2025 - Present",
      bullets: [
        "Led 3 healthtech devices from concept to working prototypes, and supported 4 more owning software and firmware.",
        "Built VeraShield smart spray scheduler in 10 weeks, owning nRF52832 BLE firmware (SPI, ADC VBAT/slider, PWM motor control, I2C RTC + EEPROM for schedules and user stats) and BLE remote control via a Capacitor BLE app.",
        "Ketone Breath Analyzer built using Arduino, TGS1820 acetone sensor, and SSD1306 OLED UI got funding from TIH.",
        "Built Arduino stepper-motor control for SmearBot and IVD strip reader (DRV8834, NEMA17, optical-switch homing).",
        "Pushed the ScalpCooling device to internal-testing, fixed alarm sync, UART and compressor control in STM32 code.",
        "Built a Raspberry Pi Kivy touchscreen UI for Tracheostomy-Device-UI with demo vitals and buzzer alerts (2 weeks).",
        "Delivered website enhancements, led software support/debugging, and server setup, management and administration.",
        "Participated in DRM, MRM and internal audits to comply with medical device standards ISO 13485 and ISO 9001.",
      ],
    },
    {
      company: "IIT Bombay - BETIC Project",
      title: "Embedded Systems Engineer & Full Stack Developer",
      dateRange: "April 2025 - Present",
      bullets: [
        "Led 3 healthtech devices from concept to working prototypes, and supported 4 more owning software and firmware.",
        "Built VeraShield smart spray scheduler in 10 weeks, owning nRF52832 BLE firmware (SPI, ADC VBAT/slider, PWM motor control, I2C RTC + EEPROM for schedules and user stats) and BLE remote control via a Capacitor BLE app.",
        "Ketone Breath Analyzer built using Arduino, TGS1820 acetone sensor, and SSD1306 OLED UI got funding from TIH.",
        "Built Arduino stepper-motor control for SmearBot and IVD strip reader (DRV8834, NEMA17, optical-switch homing).",
        "Pushed the ScalpCooling device to internal-testing, fixed alarm sync, UART and compressor control in STM32 code.",
        "Built a Raspberry Pi Kivy touchscreen UI for Tracheostomy-Device-UI with demo vitals and buzzer alerts (2 weeks).",
        "Delivered website enhancements, led software support/debugging, and server setup, management and administration.",
        "Participated in DRM, MRM and internal audits to comply with medical device standards ISO 13485 and ISO 9001.",
      ],
    }
  ],
  education: [
    {
      school: "Osmania University - Hyderabad",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2020 - 2023",
      achievements: ["Graduated with a CGPA of 8.74, and a 9 SGPA in finals"],
    },
    {
      school: "Jain Heritage A Cambridge School",
      degree: "12th Standard, C.B.S.E - PCM",
      dateRange: "2018 - 2020",
      achievements: [],
    },
    {
      school: "Mansukhbhai Kothari National School",
      degree: "10th Standard, C.B.S.E",
      dateRange: "2016 - 2018",
      achievements: [],


    },
  ],
};
