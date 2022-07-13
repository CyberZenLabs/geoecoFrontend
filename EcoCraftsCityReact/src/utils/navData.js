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
        title: "Предметы интерьера",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Посуда",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Рукоделие",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Товары для здоровья",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Экопродукты (Organic)",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Натуральные масла",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Кедровая продукция",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Пихтовая продукция",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Продукты пчеловодства",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Средства гигиены",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "БАДы, Травы, (Чаи)",
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
        title: "Картины",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Прикладное творчество",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Музыкальные инструменты",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Украшения",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Хозяйственные товары",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Другое",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];
