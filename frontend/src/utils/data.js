const temp_data = {
    work:[
    {
        id: 1,
        title: "Звездное Небо",
        description: "Осталось придумать название рассказа. Оно должно отражать главную мысль и еще, при этом, быть интересным. К нашей теме отлично подошло бы название «Неземная красота»! Посмотрим, что у нас получилось Неземная красота",
        date: "14/05/2023",
        typeId: [1],
        img:"https://images.unsplash.com/photo-1699933486971-bcbc02b03ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Подводный мир",
        description: "Осталось придумать название рассказа. Оно должно отражать главную мысль и еще, при этом, быть интересным. К нашей теме отлично подошло бы название «Неземная красота»! Посмотрим, что у нас получилось Неземная красота",
        date: "05/05/2022",
        typeId: [2, 3],
        img:"https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "Горы",
        description: "Осталось придумать название рассказа. Оно должно отражать главную мысль и еще, при этом, быть интересным. К нашей теме отлично подошло бы название «Неземная красота»! Посмотрим, что у нас получилось Неземная красота",
        date: "06/09/2023",
        typeId: [2],
        img:"https://images.unsplash.com/photo-1699893062191-6ac866d4bf60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        title: "Пустыня",
        description: "Осталось придумать название рассказа. Оно должно отражать главную мысль и еще, при этом, быть интересным. К нашей теме отлично подошло бы название «Неземная красота»! Посмотрим, что у нас получилось Неземная красота",
        date: "07/03/2023",
        typeId:[3],
        img:"https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    },
    {
        id: 5,
        title: "Закат",
        description: "Осталось придумать название рассказа. Оно должно отражать главную мысль и еще, при этом, быть интересным. К нашей теме отлично подошло бы название «Неземная красота»! Посмотрим, что у нас получилось Неземная красота",
        date: "14/05/2023",
        typeId: [1,3],
        img:"https://images.unsplash.com/photo-1682685797365-41f45b562c0a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 6,
        title: "Гофре",
        description: "Осталось придумать название рассказа. Оно должно отражать главную мысль и еще, при этом, быть интересным. К нашей теме отлично подошло бы название «Неземная красота»! Посмотрим, что у нас получилось Неземная красота",
        date: "05/05/2022",
        typeId: [2],
        img:"https://images.unsplash.com/photo-1701505708176-63194ee8f0e8?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 7,
        title: "Сахара",
        date: "06/09/2023",
        description: "Осталось придумать название рассказа. Оно должно отражать главную мысль и еще, при этом, быть интересным. К нашей теме отлично подошло бы название «Неземная красота»! Посмотрим, что у нас получилось Неземная красота",
        typeId:[2],
        img:"https://images.unsplash.com/photo-1682686580452-37f1892ee5e8?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 8,
        title: "Пустыня",
        description: "Осталось придумать название рассказа. Оно должно отражать главную мысль и еще, при этом, быть интересным. К нашей теме отлично подошло бы название «Неземная красота»! Посмотрим, что у нас получилось Неземная красота",
        date: "07/03/2023",
        typeId: [3],
        img:"https://images.unsplash.com/photo-1682687220509-61b8a906ca19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
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
            works:[5,6],
        },
        {
            id: 4,
            name: "Иванова Виолетта",
            photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            group:"Графический дизайн",
            course: "2 курс",
            email: "ivanova11@gmail.com",
            works:[7,8],
        },
      
    ]
}

export default temp_data;
