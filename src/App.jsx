import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <NoteForm />
        <NoteList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
