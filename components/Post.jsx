import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: black;
  border-bottom-style: solid;
`;

const PostDetails = styled.View`
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const PostDate = styled.Text`
  font-size: 12px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.6)
`;

export const Post = ({title, imageUrl, createdAt}) => {
    return(
        <PostView>
        <PostImage source={{uri: imageUrl}}/>
        <PostDetails>
          <PostTitle>{title}</PostTitle>
          <PostDate>{createdAt}</PostDate>
        </PostDetails>
      </PostView>
    )
}