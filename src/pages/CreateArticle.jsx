import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";
import {MultiSelect} from "react-multi-select-component";
import {useState} from "react";

const tags = [
    {value: 'technology', label: 'Technology'},
    {value: 'webdev', label: 'Web Development'},
    {value: 'appdev', label: 'App Development'},
];

function CreateArticle() {
    const axiosSecure = useAxiosSecure()
    const [selected, setSelected] = useState([]);
    console.log(selected)
    const tagsList = []
    selected.forEach(tag => tagsList.push(tag));
    const handleArticleSubmit = async (e) => {
        e.preventDefault()
        const articleDetails = {}
        const formData = new FormData(e.target)
        formData.delete('image') // delete the image from the form
        formData.append('published', false)
        formData.append('tags', tagsList)



        try {
            const imageData = new FormData(e.target)
            const url = "https://api.imgbb.com/1/upload?key=fe3ecf7374f6f9b80d54640847212054"
            const result = await axios.post(url, imageData);
            const imgUrl = result.data?.data?.display_url;
            formData.append('image', imgUrl)
        } catch (e) {
            console.error(e)
        }

        formData.forEach((value, key) => {
            articleDetails[key] = value
        })


        try {
            const response = await axiosSecure.post('/articles', articleDetails)
            if (response.data.insertedId) {
                Swal.fire({
                    title: "Good job!",
                    text: "article added successfully",
                    icon: "success"
                })
            }
        } catch (e) {
            Swal.fire({
                title: "Oops...",
                text: "Something went wrong!",
                icon: "error"
            })
        }


    }
    return (
        <div>CreateArticle
            <form onSubmit={handleArticleSubmit}>

                <input type="text" name="title" placeholder="Title"/>
                <br/>
                <input type="file" name="image" accept="image/*" placeholder="Image"/>
                <br/>
                <input type="text" name="publisher" placeholder="Publisher"/>
                <br/>
                <MultiSelect
                    options={tags}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                    hasSelectAll={false}

                />
                <br/>
                <textarea name="description" placeholder="Description"/>
                <br/>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default CreateArticle
