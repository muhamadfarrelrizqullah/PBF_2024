import MyProfile from './myprofile';

const MyGallery = () => {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <MyProfile
        name="Maria Skłodowska-Curie"
        imageUrl='https://i.imgur.com/d0eD64Ps.jpeg'
        profession="Fisikawan dan kimiawan"
        awards={[
          "Penghargaan Nobel Fisika",
          "Penghargaan Nobel Kimia",
          "Medali Davy",
          "Medali Matteucci"
        ]}
        discovery="polonium (unsur kimia)"
      />
      <MyProfile
        name="Katsuko Saruhashi"
        imageUrl='https://i.imgur.com/d0eD64Ps.jpeg'
        profession="Ahli Geokimia"
        awards={[
          "Penghargaan Miyake Geokimia",
          "Penghargaan Tanaka"
        ]}
        discovery="sebuah metode untuk mengukur karbon dioksida pada air laut"
      />
    </div>
  );
}

export default MyGallery;