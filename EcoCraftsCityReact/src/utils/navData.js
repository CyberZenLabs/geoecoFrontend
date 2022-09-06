import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export default [
  {
    title: "Household products",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Furniture",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Interior items",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Dishes",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Handicraft",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Health products",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Ecological products",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Natural oils",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Cedar products",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Fir products",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Bee products",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Hygiene products",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "BAA, herbs, teas",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Art",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Paintings",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Applied arts",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Musical instruments",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Jewelry",
        path: "/overview/users",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Other",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];
