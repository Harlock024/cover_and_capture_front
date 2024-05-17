import React , { Component } from "react";
import CreateAlbumCovers from "./createAlbumCovers";
import Header from "./Header";
import AlbumCoverList from "./AlbumCoverList";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./Login";

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<AlbumCoverList />} />
          <Route
            path="/create"
            element={<CreateAlbumCovers />}
          />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
      </div>

  );
};
export default App

