import React, { useState } from 'react'
import ErrorMessage from "./ErrorMessage";



const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [desc, setDesc] = useState('')
  const [thumbnail, setThumbnail] = useState('')



  const modules = {
    toolbar: [
      [{'header': [1, 2, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'} , {'indent': '+1'}]
      ['link', 'image'], 
      ['clean']
    ]
  }


  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link',  'image'
  ]



  const Post_Categories = ["Agriculture","Business","Education","Arts","Investment", "Uncategorized"]


  return (
    <section className="register">
      <ErrorMessage />
      <div className="form_container">

      <h2>Sign Up</h2>

        <div className="register_form">
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}  autoFocus/>
          <select name="category" value={category} onChange={e =>  setCategory(e.target.value)}>
            {

            }
          </select>
        </div>
      </div>
    </section>
  )
}

export default CreatePost
