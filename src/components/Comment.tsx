import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.tsx";
import {useState} from "react";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}


export const Comment = ({content, onDeleteComment}: CommentProps) => {
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} avatar={"Mazor-Eddias"}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eddie Dias</strong>
                            <time title={"7 de maio às 08:54h"} dateTime={"2024-05-07 08:54:30"}>Cerca de 1 hora atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title={"Deletar comentários"}>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}