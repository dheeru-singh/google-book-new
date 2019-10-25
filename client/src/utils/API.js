import axios from "axios";

export default {
  // Gets Search Book
  getBooks: function(query) {
    return axios.get("/api/books",{params : {q: query}});
  },
  // Save book
  saveBook: function(bookData) {
    return axios.post("/api/savedBooks", bookData);
  },
  // Gets Saved Book
  getSavedBooks: function() {
    return axios.get("/api/savedBooks");
  },
  // Delete Book
  deleteBook: function(id) {
    return axios.delete(`/api/deleteBooks/${id}`);
  },
  
};
