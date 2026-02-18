export const sampleChats = [
    {
      _id: "1",
      name: "Rohit Sharma",
      avatar: ["https://i.pravatar.cc/150?img=1"],
      groupChat: false,
      sameSender: true,
      newMessageCount: 2,
    },
    {
      _id: "2",
      name: "Developers Group",
      avatar: [
        "https://i.pravatar.cc/150?img=2",
        "https://i.pravatar.cc/150?img=3",
        "https://i.pravatar.cc/150?img=4",
      ],
      groupChat: true,
      sameSender: false,
      newMessageCount: 5,
    },
    {
      _id: "3",
      name: "Ankit",
      avatar: ["https://i.pravatar.cc/150?img=5"],
      groupChat: false,
      sameSender: false,
      newMessageCount: 0,
    },
];

export const sampleUsers = [
    {
      _id: "u1",
      name: "Rohit Sharma",
      avatar: ["https://i.pravatar.cc/150?img=1"],
      isFriend: false,
    },
    {
      _id: "u2",
      name: "Ananya Singh",
      avatar: ["https://i.pravatar.cc/150?img=2"],
      isFriend: true,
    },
    {
      _id: "u3",
      name: "Vikram Patel",
      avatar: "",
      isFriend: false,
    },
];

export const sampleNotifications = [
  {
    _id: "n1",
    sender: {
      _id: "u4",
      name: "Aman Verma",
      avatar: "",
    },
    type: "friend_request",
  },
  {
    _id: "n2",
    sender: {
      _id: "u5",
      name: "Priya Mehta",
      avatar: "",
    },
    type: "friend_request",
  },
];

export const sampleOnlineUsers = ["1", "3"];


export const sampleMessages = [
  {
    _id: "m1",
    content: "Hello bro!",
    attachments: [],
    sender: {
      _id: "u1",
      name: "Rohit",
    },
    status: "seen",
    createdAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "m2",
    content: "my photo",
    attachments: [
      {
        public_id: "file1",
        url: "https://i.pravatar.cc/150?img=2",
        name: "photo.jpg",
      },
    ],
    sender: {
      _id: "me",
      name: "Me",
    },
    status: "delivered",
    createdAt: "2024-01-01T10:02:00Z",
  },
];

export const sampleGroups = [
  {
    _id: "g1",
    name: "Developers",
    members: [
      { _id: "u1", name: "Rohit" },
      { _id: "u2", name: "Virat" },
      { _id: "u3", name: "Pandya" },
    ],
    avatar: [
        "https://i.pravatar.cc/150?img=2",
        "https://i.pravatar.cc/150?img=3",
        "https://i.pravatar.cc/150?img=4",
      ],
      groupChat: true,
  },
  {
    _id: "g2",
    name: "Design Team",
    members: [
      { _id: "u3", name: "Priya" },
      { _id: "u4", name: "Neha" },
    ],
    avatar: [
        "https://i.pravatar.cc/150?img=2",
        "https://i.pravatar.cc/150?img=3",
        "https://i.pravatar.cc/150?img=4",
      ],
      groupChat: true,
  },
];
