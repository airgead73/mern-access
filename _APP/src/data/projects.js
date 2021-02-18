const projects = [
  {
    id: "60202b40057de952a16877f7",
    title: "Introduction to Sociology",
    code: "SOC101",
    edition: 2,
    author: "Taylor, Howard",
    notes: "Notes tbd...",
    client: "zovio",
    chapters: [
      {
        id: "chrqtiwe23847t",
        number: 1,
        title: "The Sociological Imagination",
        project: "60202b40057de952a16877f7",
        photos: [
          {
            id: "wkjlbrkjr",
            number: 1,
            chapter: "chrqtiwe23847t",
            project: "60202b40057de952a16877f7",
            caption: "Caption for photo 1.1"
          }
        ]
      },
      {
        id: "c7tiituioiiwe2g544eddf",
        number: 2,
        title: "Research Methods",
        project: "60202b40057de952a16877f7"
      }      
    ],
    tasks: [
      {
        id: "soc_task1",
        title: "First task for SOC101",
        project: "60202b40057de952a16877f7"
      },
      {
        id: "soc_task2",
        title: "Second task for SOC101",
        project: "60202b40057de952a16877f7"
      }      
    ]
  },{
    id: "60202b6f057de952a16877f8",
    title: "Psychology",
    code: "PSY101",
    edition: 4,
    author: "Rathus, Spencer",
    notes: "Notes tbd...",
    client: "cengage",
    chapters: [
      {
        id: "opjwpojfpq093",
        number: 1,
        title: "Introduction",
        project: "60202b6f057de952a16877f8"
      },
      {
        id: "c7tiituioiiwe2g544eddf",
        number: 2,
        title: "History & Methods",
        project: "60202b6f057de952a16877f8"
      }      
    ],  
    tasks: [
      {
        id: "psy_task1",
        title: "First task for PSY101",
        project: "60202b6f057de952a16877f8"
      },
      {
        id: "psy_task2",
        title: "Second task for PSY01",
        project: "60202b6f057de952a16877f8"
      }      
    ]      
  },{
    id: "6020b8bf20e7fa45ea30ee00",
    title: "Chemstry",
    code: "CHEM201",
    edition: 3,
    author: "Curie, Marie",
    notes: "Notes tbd...",
    client: "zovio",
    chapters: [
      {
        id: "opjwpojfpq093",
        number: 1,
        title: "History of Chemistry",
        project: "6020b8bf20e7fa45ea30ee00"
      },
      {
        id: "c7tiituioiiwe2g544eddf",
        number: 2,
        title: "Scientific Method",
        project: "6020b8bf20e7fa45ea30ee00"
      }      
    ],
    tasks: [
      {
        id: "chem_task1",
        title: "First task for CHEM201",
        project: "6020b8bf20e7fa45ea30ee00"
      },
      {
        id: "chem_task2",
        title: "Second task for CHEM201",
        project: "6020b8bf20e7fa45ea30ee00"
      }      
    ]        
  }
];

export default projects;
