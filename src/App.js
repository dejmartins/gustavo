function UserProfileCard() {
  return (
    <div className="card">
      <img
        className="profile-image"
        src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&ga=GA1.2.862910268.1661616476"
        alt="avatar"
      />
      <div className="card-name">Mafia Zuri Gustavo</div>
      <div>The first black mafia who survived the 51-marker course</div>
    </div>
  );
}

function App() {
  return (
    <>
      <section className="main-page">
        <UserProfileCard />
      </section>
    </>
  );
}

export default App;
