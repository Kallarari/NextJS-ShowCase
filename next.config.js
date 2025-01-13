module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './public/vercel.svg',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        search: "?size=512&id=r9QJ0VFFrn7T&format=png",
      },
      {
        protocol: "https",
        hostname: "mui.com",
        port: "",
        pathname:"/static/logo.png"
      },
      {
        protocol: "https",
        hostname: "static-00.iconduck.com",
        port: "",
        pathname: "/assets.00/ant-design-icon-1024x1023-73enoat8.png",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        port: "",
        pathname: "/v2/resize:fit:318/1*7jRD5QhgARucFKvRHFxpOg.png",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
      },
    ],
  },
};
