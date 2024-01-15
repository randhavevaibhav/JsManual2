export const SidebarMenuList = [
  { id: 1, title: "Home", isOpen: false, path: "/JsManual2" },
  { id: 2, title: "Print Code", isOpen: false, path: "/JsManual2/printcode" },
  {
    id: 3,
    title: "Topics",
    isOpen: false,
    path: "/JsManual2/topics",
    subTopics: [{path: "/JsManual2/Array", title: "Array" },
    {path: "/JsManual2/Promises", title: "Promises in js" },
    {path: "/JsManual2/String", title: "String" },
    {path: "/JsManual2/Object", title: "Object" }
        
    ],
  },
  {
    id: 4,
    title: "Add new concept",
    isOpen: false,
    path: "/JsManual2/addnewconcept",
    
  },
  
];
