export const siteConfig = {
  name: "Kushal Chandar",
  title: " Embedded Engineer",
  description: "Kushal Chandar - Portfolio",
  accentColor: "#1B9AAA",
  social: {
    email: "kushalchandariit@gmail.com",
    linkedin: "https://linkedin.com/in/kushal-chandar",
    // twitter: "https://x.com/kushal-chandar",
    github: "https://github.com/kushal-chandar",
  },
  aboutMe:
    "I build performance-critical software that ships all the way from firmware to UI. I’ve worked across embedded systems (BLE, sensors, motor control on nRF52/STM32) and full-stack products (React + FastAPI + GCP), with a bias for low-latency, reliable systems. Strong at turning messy problems into shipped systems, collaborating across teams, and taking work from concept to deployment. C++ is my happy place, Rust is next, and I spend free time on open source, gaming, and obsessively tuning my system for performance.",
  skills: ["C", "C++", "Python", "Linux", "Git", "Shell", "VSCode", "CMake", "STM32", "nRF52", "Bluetooth", "React", "FastAPI", "GCP", "SQL", "Docker", "Embedded Systems"],
  projects: [
    {
      name: "Scalp Cooling System",
      description:
        "Developed a medical cooling device to reduce chemotherapy-induced hair loss by maintaining scalp temperature and flow control for two patients.",
      link: "https://github.com/Kushal-Chandar/ScalpCoolingDevice",
      skills: ["STM32", "ADC", "RTOS", "UART"],
      image: "cropped-cooling_cap.svg",
      category: "work-sample"
    },
    {
      name: "Keto Breath Analyzer",
      description:
        "Created a portable breath analyzer mapping sensor voltages to CO₂ and acetone levels with real-time OLED display.",
      link: "https://github.com/Kushal-Chandar/Ketone-Breath-Analyzer-POC",
      skills: ["ATMEGA328p", "VOC Sensors", "I2C"],
      image: "cropped-keto.svg",
      category: "personal-project"
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
      company: "Loop AI - Delivery Intelligence Platform",
      title: "Full Stack Engineer",
      dateRange: "August 2023 - April 2024",
      bullets: [
        "Worked on R365 accounting software integration which is used by 10% of clientele. Released product features that improved user experience. Fixed critical workflows that reduced customer onboardings failures from 70% to 30%.",
        "Built a system to generate dynamic notifications with yaml files, which is used by customer success team to prototype and create emails without taking up additional engineering bandwidth, offloading 0.5 - 1 day effort per notification.",
        "Improved deployment workflows, engineering on-call processes, and code quality by using github actions, advocating for SOPs and documentation, adding graphana alerts, and adding unit tests across the code base.",
        "Created new on-call processes and trained team members around them improving the overall on-call efficiency, which lead to an overall better on-call experience and created additional bandwidth.",
        "Built end to end products, overhauled existing product pages and rewritten core apis using both frontend libraries (React and MUI), as well as backend technologies (Python, FastAPI, dbt, and Google Cloud Platform).",
        "In summary, as a core team member, developed customer-facing solutions which lead to closure of sales and my problem-solving skills proved vital in resolving critical issues and client concerns significantly benefiting the overall product."
      ],
    },
    {
      company: "Astrome Technologies",
      title: "Embedded Systems Intern (PPO secured)",
      dateRange: "Jan 2023 - April 2023",
      bullets: [
        "Built a mechanical positioning control loop that aimed a device at a geostationary satellite using astronomical coordinate systems such as ECEF, LLA, and AER to translate the satellite’s position to azimuth and elevation.",
        "Worked on building numerous functionalities in the STM32 to control stepper motors, retrieving precise data from the IMU with Kalman filter, and fixing bugs in the overall code base and improving the build system.",
        "Performed data-analysis on IMU data with NumPy, Pandas, Matplotlib, PySerial to test for accuracy on a regular basis. In summary, implemented a design to 70% completion before tenure of 3 months came to an end.",
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
