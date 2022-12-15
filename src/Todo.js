import React ,{useState} from 'react'
import db from './firebase'; 
import {updateDoc, deleteDoc,doc} from 'firebase/firestore';
import {Button ,Modal ,Avatar, ImageListItemBar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
//import styles from './Todo.module.css'
import {DeleteForeverIcon } from '@mui/icons-material';
import { makeStyles } from 'tss-react/mui';


function Todo(props) {
   // const [isShown, setIsShown] = useState(false);
    const [input,setInput] =useState('');
    const [open,setOpen]=useState(false);

  /*const handleClick = event => {
        setIsShown(current => !current);
      };*/

      const useStyles= makeStyles((theme)=>({
        paper:{
         position:'absolute',
         width:400,
         backgroundColor:theme.palette.background.paper,
         border: '2px solid #000',
         boxShadow:theme.shadows[5],
         padding:theme.spacing(2,4,3),
        }
     }))
     const classes = useStyles();

    const updateTodo = async(id ,todo)=>{
        const userDoc = doc(db,"todos",id);
          await updateDoc(userDoc,{todo:todo});
         // db.collection("todos").doc(id).update({todo: "bard"});
         //handleClick();
      }

      const deleteUser = async(id)=>{
        const userDoc =  doc(db ,"todos", id);
        deleteDoc(userDoc);
    
      }
  return (
    <div>
    <>
    <Modal
    open={open}
    onClose={e=>setOpen(false)}
    >
      <div className={classes.paper}>
        <h2>Edit</h2>
        <ListItemText  placeholder={props.todo.todo} value={input} onChange={e=> setInput(e.target.value)}/>
        <Button variant="outlined" onClick={e=> updateTodo()}>Edit</Button>
      </div>
    </Modal>
    <List>
       <ListItem>
          <ListItemAvatar>
            <Avatar>
               <ImageListItemBar></ImageListItemBar>
            </Avatar>
          </ListItemAvatar>
             <ListItemText primary={props.todo} secondary={props.index} />
       </ListItem>
    <DeleteForeverIcon onClick={deleteUser(props.id)}/>
    <Button variant="outlined" onClick={e=> setOpen(true)}>Edit</Button>
    </List>
    </>
   
   {/* in plain css
   <button id ={styles.delete} className={styles.btn}  onClick={()=>{handleClick()}}>Edit</button>
    <button id ={styles.edit} className={styles.btn}  onClick={()=>{deleteUser(props.id)}} >Delete</button>
    {isShown && (
        <div>
          <h2>Edit Todo: </h2>
          <br/>
          <input value={input} onChange={e=> setInput(e.target.value)} placeholder={props.todo} />
          <button className={styles.btn} id={styles.edit} onClick={updateTodo(props.id ,input)}>Edit</button>
          <button className={styles.btn} id={styles.delete} onClick={handleClick()}>cancel</button>
    </div>
      )}*/}
       </div>
  )
}

export default Todo