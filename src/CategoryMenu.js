import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

export default function CategoryMenu({
  categories,
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <MenuList>
      {categories.map((category) => (
        <MenuItem
          onClick={() => setSelectedCategory(category)}
          dense
          disableGutters
        >
          <ListItemText
            sx={category === selectedCategory ? { color: "#39B54A" } : {}}
          >
            {category}
          </ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}
