import Post from "../Components/Post/Post";

export function Jobpost({ PostData }) {
  return (
    <>
      {PostData.map((data) => (
        <Post
          key={data}
          jobImages={data.Image}
          jobTitle={data.Title}
          jobDescription={data.Description}
          jobUpdated={data.Updated}
        />
      ))}
    </>
  );
}
export function Notifications() {
  return <>Notifications</>;
}
