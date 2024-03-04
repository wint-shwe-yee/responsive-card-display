export type TagType = {
  id : number,
  name : string,
  type : string
}

export type ImageDataType = {
  id : number,
  tags : number[],
  name : string,
  body : string,
  img_url : string
}