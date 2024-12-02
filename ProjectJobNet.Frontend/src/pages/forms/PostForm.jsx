import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostForm() {
    const { action, id } = useParams(); // Expecting "create" or "edit"
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        content: ""
      });

      const handleChange = (e) => {
        const value = e.target.value;
        setPost({
          ...post,
          [e.target.name]: value
        });
      };    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            title: post.title,
            content: post.content,
            userId: localStorage.getItem("userId")
          };
        axios.post("https://localhost:6969/api/posts", userData, 
            { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}}).then(() => { 
                localStorage.getItem("userRole") === "User" && navigate("/user/my-blog/");
                localStorage.getItem("userRole") === "Company" && navigate("/company/my-blog/");}
          );  
        }

        if(action === "edit") {
            useEffect(() => {
                axios.get(`https://localhost:6969/api/posts/${id}`)
                .then(response => {
                    setPost(response.data);
                 })
                 .catch(error => {
                     console.error(error);
                 });
             }, []);
        }

        const handleUpdateSubmit = (e) => {
            e.preventDefault();
            const userData = {
                title: post.title,
                content: post.content
              };
            axios.put(`https://localhost:6969/api/posts/${id}`, userData, 
                { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}}).then(
                    navigate(`/blog/${id}`)
              );  
            }

    return (
        <div className="bg-white mx-auto py-4 w-9/12 md:w-8/12 border rounded-3xl shadow">
            <form
                className="md:mx-[3em] mx-[2em] mt-8 space-y-4"
                onSubmit={action == "create" ? handleSubmit : handleUpdateSubmit}>
                <h1 className="font-medium text-xl pb-2">
                    {action === "create" ? "Створення" : "Редагування"} допису
                </h1>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-1">Заголовок допису</label>
                    <input type="text" name="title" value={post.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2" placeholder="Введіть назву допису"  required />    
                </div>
                <div>
                    <label htmlFor="content" className="block mb-2 font-medium text-gray-900">
                        Контент:
                    </label>
                    <textarea
                        name="content"
                        rows="30"
                        value={post.content} onChange={handleChange} 
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500"
                        placeholder="Введіть контент допису..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg w-full sm:w-auto px-10 py-2.5 text-center">
                    {action === "create" ? "Створити" : "Оновити"}
                </button>
            </form>
        </div>
    );
}