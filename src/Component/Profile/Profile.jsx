import { useContext } from "react";
import { authCustomContext } from "../../utilitis/Provider";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const {user} = useContext(authCustomContext);
    console.log(user , 'user form profile')
  return (
    <div>
      <Helmet> <title> Profile | Find Your Dream Home </title> </Helmet>
      <div
        data-aos="fade-up"
        className="card card-side bg-base-100 shadow-xl my-10 "
      >
        <figure>
          <img className="w-[6rem] rounded-md "
            src={user.photoURL}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Name : {user.displayName} </h2>
          <p> Email : {user.email} </p>
          <p> Photo Url : {user.photoURL} </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
