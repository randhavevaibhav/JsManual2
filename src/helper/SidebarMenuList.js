export const SidebarMenuList = [
  { id: 1, title: "Print Code", isOpen: false, path: "/JsManual2/printcode" },
  {
    id: 2,
    title: "Topics",
    isOpen: false,
    path: "/JsManual2/topics",
    //id in subTopics array is must like sub-1 and sub-2
    subTopics: [{ id:"sub-1",path: "/JsManual2/arraymethods", title: "Array" },
    { id:"sub-2",path: "/JsManual2/promises", title: "Promises in js" }
        
    ],
  },
  {
    id: 3,
    title: "Add new concept",
    isOpen: false,
    path: "/JsManual2/addnewconcept",
    
  },
  
];
