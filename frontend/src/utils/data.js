const temp_data = {
    work:[
    {
        id: 1,
        title: "Звездное Небо",
        date: "14/05/2023",
        typeId: [1],
        img:"https://images.unsplash.com/photo-1699933486971-bcbc02b03ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Подводный мир",
        date: "05/05/2022",
        typeId: [2, 3],
        img:"https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "Горы",
        date: "06/09/2023",
        typeId: [2],
        img:"https://images.unsplash.com/photo-1699893062191-6ac866d4bf60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        title: "Поле",
        date: "07/03/2023",
        typeId:[3],
        img:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",    
    },
    {
        id: 5,
        title: "Звездное Небо",
        date: "14/05/2023",
        typeId: [1,3],
        img:"https://images.unsplash.com/photo-1699933486971-bcbc02b03ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 6,
        title: "Подводный мир",
        date: "05/05/2022",
        typeId: [2],
        img:"https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 7,
        title: "Горы",
        date: "06/09/2023",
        typeId:[2],
        img:"https://images.unsplash.com/photo-1699893062191-6ac866d4bf60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 8,
        title: "Поле",
        date: "07/03/2023",
        typeId: [3],
        img:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",    
    }
    ],
    typeOfWork:[
        {
            id: 1,
            type: "Шрифты",
            icon: "https://i.ibb.co/s6fW9SY/Frame-33.png"
        },
        {
            id: 2,
            type: "Илюстрации",
            icon: "https://i.ibb.co/5vSzxds/Frame-34.png",
        },
        {
            id: 3,
            type: "Фотографии",
            icon: "https://i.ibb.co/QKBVQPn/Frame-35.png",
        },
    ],
    students:[
        {
            id: 1,
            name: "Иванов Иван",
            photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            group:"Графический дизайн",
            course: "3 курс",
            email: "ivanov454@gmail.com",
            works:[1,2],
        },
        {
            id: 2,
            name: "Иванов Илья",
            photo: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            group:"Реклама",
            course: "3 курс",
            email: "ivanov32454@gmail.com",
            works:[3,4],
        },
        {
            id: 3,
            name: "Иванова Виктория",
            photo: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            group:"Издательское дело",
            course: "2 курс",
            email: "vika4@gmail.com",
            works:[5],
        },
        {
            id: 4,
            name: "Иванова Виолетта",
            photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            group:"Графический дизайн",
            course: "2 курс",
            email: "ivanova11@gmail.com",
            works:[7],
        }
    ]
}

export default temp_data;
