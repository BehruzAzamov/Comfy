import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <header className=" bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center sm:justify-end">
          {!currentUser ? (
            <>
              <Link className="link link-hover text-xl sm:text-sm" to="/login">
                Sign in / Guest
              </Link>
              <Link
                className="link link-hover text-xl sm:text-sm"
                to="/register"
              >
                Create Account
              </Link>
            </>
          ) : (
            <>
              <p>{`Hello, ${currentUser.displayName}`}</p>
              <button onClick={handleLogout} className="btn btn-sm">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;