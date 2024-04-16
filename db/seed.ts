import { db, Comment } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Comment).values([
    {
      title: "PNUD y la OIT lanzan un proyecto de apoyo a la economía verde",
      img: "/images/noticia2.jpg",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae ex alias in qui harum vel sunt sapiente eius libero iusto illo blanditiis, voluptatibus recusandae reprehenderit sint aliquam! Iusto asperiores atque odit molestiae quo similique aliquam ipsum dolorum explicabo? Neque!",
    },
    {
      title: "Foro de Diversificación Económica de Guinea Ecuatorial",
      img: "/images/noticia1.jpg",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae ex alias in qui harum vel sunt sapiente eius libero iusto illo blanditiis, voluptatibus recusandae reprehenderit sint aliquam! Iusto asperiores atque odit molestiae quo similique aliquam ipsum dolorum explicabo? Neque!",
    },
    {
      title: "Guinea Ecuatorial, una nueva mirada a la sostenibilidad",
      img: "/images/noticia3.jpg",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae ex alias in qui harum vel sunt sapiente eius libero iusto illo blanditiis, voluptatibus recusandae reprehenderit sint aliquam! Iusto asperiores atque odit molestiae quo similique aliquam ipsum dolorum explicabo? Neque!",
    },
  ]);
}
