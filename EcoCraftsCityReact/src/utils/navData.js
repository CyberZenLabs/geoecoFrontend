import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export default [
  {
    title: "Товары для дома",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Мебель",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Другое",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Здоровое Питание",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Масло",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Еда",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Исскусство",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Рисунки",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Книги",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
];
