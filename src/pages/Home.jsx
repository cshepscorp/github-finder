import UserSearch from '../components/users/UserSearch';
import UserResults from '../components/users/UserResults';

function Home() {
  return (
    <>
      {/* search component will go here */}
      <UserSearch />
      <UserResults />
      {/* <div>{process.env.REACT_APP_GITHUB_TOKEN}</div>
      <div>{process.env.REACT_APP_GITHUB_URL}</div> */}
    </>
  );
}

export default Home;
