import { Suspense } from "react";
import dynamic from "next/dynamic";

const CardWithCustomLoading = dynamic(() => import("@/Components/Card"));

export default async function HomePage() {
  const technologies = await new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            name: "Chakra UI",
            description:
              "A simple, modular and accessible component library that gives you the building blocks for React applications.",
            image:
              "https://img.icons8.com/?size=512&id=r9QJ0VFFrn7T&format=png",
          },
          {
            name: "Material UI",
            description:
              "React components for faster and easier web development. Build your own design system or start with Material Design.",
            image: "https://mui.com/static/logo.png",
          },
          {
            name: "Ant Design",
            description:
              "A design system for enterprise-level products. Create an efficient and enjoyable work experience.",
            image:
              "https://static-00.iconduck.com/assets.00/ant-design-icon-1024x1023-73enoat8.png",
          },
          {
            name: "Styled Components",
            description:
              "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.",
            image:
              "https://miro.medium.com/v2/resize:fit:318/1*7jRD5QhgARucFKvRHFxpOg.png",
          },
          {
            name: "Tailwind CSS",
            description:
              "A utility-first CSS framework for building custom designs without leaving your HTML.",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
          },
        ]),
      2000
    )
  );
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2">
      <div className="flex gap-4 py-4 px-2">
        <Suspense fallback={"loading..."}>
          {technologies.map((tech, index) => (
            <CardWithCustomLoading
              key={index}
              description={tech.description}
              image={tech.image}
              name={tech.name}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
