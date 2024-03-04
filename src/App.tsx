import "./App.css";
import {
  TagType,
  ImageDataType
} from "./types";
import React,
{ ReactElement } from "react";

function App() : ReactElement {
  const tags : TagType[] = [
    {
      "id" : 1,
      "name" : "Brinebeast",
      "type" : "Earth"
    },
    {
      "id" : 2,
      "name" : "Goolu",
      "type" : "Air"
    },
    {
      "id" : 3,
      "name" : "Macaronifeet",
      "type" : "Fire"
    },
    {
      "id" : 4,
      "name" : "Wispclaw",
      "type" : "Water"
    }
  ];

  const imagesData : ImageDataType[] = [
    {
      "id" : 1,
      "tags" : [1, 2, 3],
      "name" : "Saint Mopierre",
      "body" : "Saint Mopierre is a large city, known for being the birthplace of a music genre.",
      "img_url" : "https://picsum.photos/id/11/1000"
    },
    {
      "id" : 2,
      "tags" : [1],
      "name" : "Eulake",
      "body" : "Eulake is a small town situated besides a lake. It is known for its mining heritage.",
      "img_url" : "https://picsum.photos/id/11/1000"
    },
    {
      "id" : 3,
      "tags" : [2, 4],
      "name" : "Prince Loeilles",
      "body" : "Prince Loeilles is a large town, known for the battle of Prince Loeilles.",
      "img_url" : "https://picsum.photos/id/11/1000"
    },
    {
      "id" : 4,
      "tags" : [2, 3, 4],
      "name" : "North Warrines",
      "body" : "North Warrines is a large town, known for being the birthplace of a music genre.",
      "img_url" : "https://picsum.photos/id/11/1000"
    },
    {
      "id" : 5,
      "tags" : [1, 2, 3],
      "name" : "Sainttrois",
      "body" : "Sainttrois is a large town named after Saint trois. It is known for the Sainttrois music festival.",
      "img_url" : "https://picsum.photos/id/11/1000"
    },
    {
      "id" : 6,
      "tags" : [4],
      "name" : "Grandenellakes",
      "body" : "Grandenellakes is a large town situated besides a lake. It is known for its elaborate legends.",
      "img_url" : "https://picsum.photos/id/200/800"
    }
  ];

  const getTagName = (id: number): string | undefined => {
    let tagName = null;
    const tagDetail = tags.find((tag : TagType) => tag.id === id);
    tagName = tagDetail?.name;
    return tagName;
  };

  return (
    <div className="row">
      {
        imagesData.map((image : ImageDataType) => (
          <div className = "column" key={ image.id }>
            <div className = "card">
              <img
                src={image.img_url}
                alt={image.name}
                style={{ "width" : "100%" }} />
              <div className="overlay-text"> {image.name}</div>
              <div className="body-text">
                {image.body}
              </div>
              <div className = "tag-container">
                {
                  image.tags.map((tagId: number) => {
                    const tagName = getTagName(tagId);

                    return !!tagName ? (
                      <div className="tag" key={tagId}>
                        {tagName}
                      </div>
                    ) : null;
                  })
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
