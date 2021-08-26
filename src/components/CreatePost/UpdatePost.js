import { Grid,Button, TextField,makeStyles } from '@material-ui/core'
import {  EditorState,convertToRaw, ContentState, convertFromHTML } from 'draft-js'
import React, { useState,useEffect } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import {useHistory} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { updatePost } from '../../actions';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    detailsStyles : {
        marginTop : "2.5rem",
        justifyContent : "space-between",
        [theme.breakpoints.down("xs")]: {
          justifyContent : "center"
        }
    }
}))

const UpdatePost = ({update = false}) => {

    const params = useParams()
    const blog = useSelector( state => state.posts.filter(b => parseInt(b.id) === parseInt(params.id))[0] )
    const styles = useStyles()


    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(
            ContentState.createFromBlockArray(
                convertFromHTML(blog.text)
            )
        )
    )
    const [title, setTitle] = useState(blog.title)
    const [description, setDescription] = useState(blog.description)
    const [srcImage, setSrcImage] = useState(blog.srcImage)
    
    const dispatch = useDispatch()
    const history = useHistory()

    const sendBlog = () => {
            const newBlog = {
                ...blog,
                title,
                description,
                srcImage,
                id : params.id,
                text : draftToHtml(convertToRaw(editorState.getCurrentContent())),
                date : new Intl.DateTimeFormat("tr",{day : "numeric" , month : "long", year : "numeric"}).format(new Date()),
            }
    
            dispatch(updatePost(params.id,newBlog))
    
            history.replace("/")

        
    }
    


    return (
        <Grid container justify="center" style={{minHeight: 400}}>
            <Grid item container xs={8} className={styles.detailsStyles} >
                <Grid container item xs={8} sm={3}>
                    <TextField placeholder="Başlık" label="Başlık" onChange={e => setTitle(e.target.value)} value={title} />
                </Grid>
                <Grid container item xs={8} sm={3}>
                    <TextField placeholder="Açıklama" label="Açıklama" onChange={e => setDescription(e.target.value)} value={description} />
                </Grid>
                <Grid container item xs={8} sm={3}>
                    <TextField placeholder="Başlık Resmi" label="Başlık Resmi" type="url" onChange={e => setSrcImage(e.target.value)} value={srcImage} />
                </Grid>
            </Grid>
            <Grid item xs={8} style={{minHeight: 400,margin : "2.5rem 0 0 0",border : ".5rem solid black",borderRadius : "1rem"}} >
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={setEditorState}
                defaultContentState={editorState}
            />
            </Grid>
            {/* <textarea disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} /> */}
            <Grid item container xs={8} style={{margin : "1.5rem 0"}} justify="flex-end">
                <Button variant="contained" color="primary" onClick={sendBlog}>Gönder</Button>
            </Grid>

        </Grid>
    )
}

export default UpdatePost
