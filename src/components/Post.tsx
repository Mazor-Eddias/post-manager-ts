import styles from './Post.module.css';
import {Comment} from "./Comment.tsx";
import {Avatar} from "./Avatar.tsx";
import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale';
import {ChangeEvent, FormEvent, InvalidEvent, useState} from "react";

interface Author {
    name: string;
    role: string;
    url: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}


export const Post = ({author, content, publishedAt}: PostProps) => {
    const [comments, setComments] = useState([
        'Post muito bacana'
    ]);

    const [newCommentText, setNewCommentText] = useState('');


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });


    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const isNewCommentEmpty = newCommentText.length === 0

    function handleCreateNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }


    function handleEvent(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }

    function handleNeCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('O comentário não pode estar vazio');
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar avatar={author.url}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted}
                      dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        const url = line.content.startsWith('http') ? line.content : '#';
                        return (
                            <p key={line.content}>
                                {url !== '#' ? (
                                    <a href={url}>{line.content}</a>
                                ) : (
                                    <button className={styles.linkButton} onClick={() => alert('Link inválido')}>
                                        {line.content}
                                    </button>
                                )}
                            </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleEvent} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name={"comment"}
                    onChange={handleCreateNewComment}
                    placeholder={"Deixe seu comentário"}
                    value={newCommentText}
                    required
                    onInvalid={handleNeCommentInvalid}
                ></textarea>
                <footer>
                    <button
                        type={"submit"}
                        disabled={isNewCommentEmpty}
                    >
                        Comentar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />)
                })}
            </div>
        </article>
    )
}