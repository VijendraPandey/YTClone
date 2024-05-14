import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const commentsData = [
  {
    name: "Vijendra",
    text: "hello my name is vijendra kumar pandey",
    replies: [
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
    ],
  },
  {
    name: "Vijendra",
    text: "hello my name is vijendra kumar pandey",
    replies: [
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [
          {
            name: "Vijendra",
            text: "hello my name is vijendra kumar pandey",
            replies: [
              {
                name: "Vijendra",
                text: "hello my name is vijendra kumar pandey",
                replies: [],
              },
              {
                name: "Vijendra",
                text: "hello my name is vijendra kumar pandey",
                replies: [],
              },
              {
                name: "Vijendra",
                text: "hello my name is vijendra kumar pandey",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [
          {
            name: "Vijendra",
            text: "hello my name is vijendra kumar pandey",
            replies: [
              {
                name: "Vijendra",
                text: "hello my name is vijendra kumar pandey",
                replies: [],
              },
              {
                name: "Vijendra",
                text: "hello my name is vijendra kumar pandey",
                replies: [],
              },
              {
                name: "Vijendra",
                text: "hello my name is vijendra kumar pandey",
                replies: [
                  {
                    name: "Vijendra",
                    text: "hello my name is vijendra kumar pandey",
                    replies: [
                      {
                        name: "Vijendra",
                        text: "hello my name is vijendra kumar pandey",
                        replies: [],
                      },
                      {
                        name: "Vijendra",
                        text: "hello my name is vijendra kumar pandey",
                        replies: [],
                      },
                      {
                        name: "Vijendra",
                        text: "hello my name is vijendra kumar pandey",
                        replies: [
                          {
                            name: "Vijendra",
                            text: "hello my name is vijendra kumar pandey",
                            replies: [
                              {
                                name: "Vijendra",
                                text: "hello my name is vijendra kumar pandey",
                                replies: [],
                              },
                              {
                                name: "Vijendra",
                                text: "hello my name is vijendra kumar pandey",
                                replies: [],
                              },
                              {
                                name: "Vijendra",
                                text: "hello my name is vijendra kumar pandey",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Vijendra",
            text: "hello my name is vijendra kumar pandey",
            replies: [
              {
                name: "Vijendra",
                text: "hello my name is vijendra kumar pandey",
                replies: [],
              },
              {
                name: "Vijendra",
                text: "hello my name is vijendra kumar pandey",
                replies: [],
              },
              {
                name: "Vijendra",
                text: "hello my name is vijendra kumar pandey",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
    ],
  },
  {
    name: "Vijendra",
    text: "hello my name is vijendra kumar pandey",
    replies: [
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
    ],
  },
  {
    name: "Vijendra",
    text: "hello my name is vijendra kumar pandey",
    replies: [
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
    ],
  },
  {
    name: "Vijendra",
    text: "hello my name is vijendra kumar pandey",
    replies: [
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
    ],
  },
  {
    name: "Vijendra",
    text: "hello my name is vijendra kumar pandey",
    replies: [
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
      {
        name: "Vijendra",
        text: "hello my name is vijendra kumar pandey",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-8 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
