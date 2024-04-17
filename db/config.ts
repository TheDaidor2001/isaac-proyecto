import { defineDb, defineTable, column } from "astro:db";

const Comment = defineTable({
  columns: {
    title: column.text(),
    body: column.text(),
    img: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Comment },
});
