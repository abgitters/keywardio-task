import { lazy } from "react";

const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard"));
const CreateAd = lazy(() => import("../Pages/CreateAd/CreateAd"));
const FillAdd = lazy(() => import("../Pages/CreateAd/FillAdd/FillAdd"));
const SubmitForm = lazy(() => import("../Pages/SubmitForm/SubmitForm"));

export default [
  {
    id: "1",
    label: "DASHBOARD",
    component: <Dashboard />,
    showInMenu: true,
    path: "/",
  },
  {
    id: "2",
    label: "CREATE ADS",
    component: <CreateAd />,
    showInMenu: true,
    path: "/add-type",
  },
  {
    id: 3,
    label: "Text Ad Form",
    component: <FillAdd />,
    showInMenu: false,
    path: "/add-type/fill-text-ad",
  },
  {
    id: 4,
    label: "Media Ad Form",
    component: <FillAdd />,
    showInMenu: false,
    path: "/add-type/fill-media-ad",
  },
  {
    id: 5,
    label: "Submit Media Form",
    component: <SubmitForm />,
    showInMenu: false,
    path: "/add-type/fill-media-ad/submit-form",
  },
  {
    id: 6,
    label: "Submit Text Form",
    component: <SubmitForm />,
    showInMenu: false,
    path: "/add-type/fill-text-ad/submit-form",
  },
];
