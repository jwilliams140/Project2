import ESP32 from "../assets/ESP32.jpg";
import Piano from "../assets/piano.jpg";
import Clock from "../assets/esp32clock.jpg";

export const projects = [
  {
    slug: "iot-project",
    title: "Vulnerable Animal Protection System",
    description: "An embedded system project aimed at protecting vulnerable animals from predators",
    image: ESP32,
    tech: ["Arduino IDE", "Wokwi", "ESP32"],
    github: "https://github.com/jebentley90-tech/esp32_security_system_iotproject"
  },

  {
    slug: "iot-project2",
    title: "IoT Piano Implementation",
    description: "A personal embedded system meant to relaxing and improve IoT skills.",
    image: Piano,
    tech: ["Arduino IDE", "Wokwi", "ESP32"],
  },

    {
    slug: "iot-project3",
    title: "IoT Smart Clock",
    description: "This project is about taking a ESP32 embedded system and experimenting with how to make it function as a clock.",
    image: Clock,
    tech: ["Arduino IDE", "Wokwi", "ESP32"],
  }
];
