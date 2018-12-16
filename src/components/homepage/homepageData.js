import React from "react";
import MyLocationOutlinedIcon from "@material-ui/icons/MyLocationOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import DirectionsBoat from "@material-ui/icons/DirectionsBoat";
import LocalShipping from "@material-ui/icons/LocalShipping";
import LocalAtm from "@material-ui/icons/LocalAtm";
import Dvr from "@material-ui/icons/Dvr";

export const stages = [
  {
    id: 1,
    icon: <Dvr fontSize="large" />,
    title1: "Research &",
    title2: "Development",
    message:
      "Scientific experimentation activities attempting to generate new knowledge and develop innovative products"
  },
  {
    id: 2,
    icon: <LocalAtm fontSize="large" />,
    title1: "Market",
    title2: "Validation",
    message:
      "Trials and Proofs-of-Concepts that validate the efficacy, market need or value proposition of your product"
  },
  {
    id: 3,
    icon: <LocalShipping fontSize="large" />,
    title1: "Initial",
    title2: "Commercialisation",
    message:
      "Activities that help you earn your first sales or validate the commercial viability of your business model"
  },
  {
    id: 4,
    icon: <DirectionsBoat fontSize="large" />,
    title1: "Global",
    title2: "Commercialisation",
    message:
      "Activities that help you scale your business model and export your product to international customers"
  }
];

export const process = [
  {
    id: 1,
    icon: <MyLocationOutlinedIcon fontSize="large" />,
    title: "GRANTS STRATEGY",
    message:
      "We find grants that fit your R&D and commercialisation objectives and build a grants strategy to access available funding"
  },
  {
    id: 2,
    icon: <EditOutlinedIcon fontSize="large" />,
    title: "PLANNING & WRITING",
    message:
      "We help you frame your objectives, construct projects that meet the grant program’s guidelines and write a compelling application"
  },
  {
    id: 3,
    icon: <AssignmentOutlinedIcon fontSize="large" />,
    title: "PROCESS MANAGEMENT",
    message:
      "We project manage each grant for you, including compliance and communicating with the government, to ensure a competitive final submission"
  }
];
