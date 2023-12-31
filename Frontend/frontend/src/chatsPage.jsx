import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  const projectId = import.meta.env.VITE_REACT_APP_PROJECT_ID;

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={projectId}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
