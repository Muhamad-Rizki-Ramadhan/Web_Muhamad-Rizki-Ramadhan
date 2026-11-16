import { useState } from 'react';

const profileImages = import.meta.glob('../assets/images/profile.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const profileImage = Object.values(profileImages)[0];

function ProfilePhoto() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="profile-photo" aria-label="Foto profil Muhamad Rizki">
      {profileImage && !imageFailed ? (
        <img
          src={profileImage}
          alt="Muhamad Rizki Ramadhan Siregar"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="profile-fallback" aria-hidden="true">
          <span>R.</span>
          <small>Foto profil</small>
        </div>
      )}
    </div>
  );
}

export default ProfilePhoto;
