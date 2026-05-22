export default function manifest() {
  return {
    name: "Instituto forum de familias atipicas",
    short_name: "Iffa",
    description: "Meu aplicativo web",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait",
    icons: [
      {
        src: "/logoIFFA_2.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logoIFFA_2.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}