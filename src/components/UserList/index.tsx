import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickName: string;
  isBot?: boolean;
}

const UserRow = ({ nickName, isBot }: UserProps) => (
  <User>
    <Avatar className={isBot ? "bot" : ""} />
    <strong>{nickName} </strong>
    {isBot && <span> Bot</span>}
  </User>
);

const UserList = () => {
  return (
    <Container>
      <Role>Available - 1</Role>
      <UserRow nickName="Thiago" />
      <Role>Offline - 18</Role>
      <UserRow nickName="Anonimous" isBot />
      <UserRow nickName="Anonimous Online" isBot />
      <UserRow nickName="Anonimous Anonimous Anonimous" />
      <UserRow nickName="Anonimous Alfa" />
      <UserRow nickName="Anonimous Beta " isBot />
      <UserRow nickName="Anonimous Omega" isBot />
      <UserRow nickName="Anonimous Blue" isBot />
      <UserRow nickName="Anonimous" />
      <UserRow nickName="Anonimous" isBot />
      <UserRow nickName="Anonimous Online" isBot />
      <UserRow nickName="Anonimous Anonimous Anonimous" />
      <UserRow nickName="Anonimous Alfa" />
      <UserRow nickName="Anonimous Beta " isBot />
      <UserRow nickName="Anonimous Omega" isBot />
      <UserRow nickName="Anonimous Blue" isBot />
      <UserRow nickName="Anonimous" />
      <UserRow nickName="Anonimous" isBot />
      <UserRow nickName="Anonimous Online" isBot />
      <UserRow nickName="Anonimous Anonimous Anonimous" />
      <UserRow nickName="Anonimous Alfa" />
      <UserRow nickName="Anonimous Beta " isBot />
      <UserRow nickName="Anonimous Omega" isBot />
      <UserRow nickName="Anonimous Blue" isBot />
      <UserRow nickName="Anonimous" />
    </Container>
  );
};

export default UserList;
