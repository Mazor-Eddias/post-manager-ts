import './styles.module.css'
import './global.css'
import {Header} from "./components/Header.tsx";
import styles from './App.module.css'
import {Sidebar} from "./components/Sidebar.tsx";
import {Post} from "./components/Post.tsx";

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface Author {
    url: string;
    name: string;
    role: string;
}

interface PostData {
    id: number;
    author: Author;
    content: Content[];
    publishedAt: Date;
}

const posts: PostData[] = [
    {
        id: 1,
        author: {
            url: "Mazor-Eddias",
            name: "Eddie Dias",
            role: "Software Developer"
        },
        content: [
            {type: 'paragraph', content: 'Hello world'},
            {type: 'paragraph', content: 'text test'},
            {type: 'link', content: '👉 jane.design/doctorcare'},
        ],
        publishedAt: new Date('2024-05-07 13:15')
    },
    {
        id: 2,
        author: {
            url: "Mazor-Eddias",
            name: "Naipes",
            role: "Software Developer"
        },
        content: [
            {type: 'paragraph', content: 'Hello world'},
            {type: 'paragraph', content: 'text test'},
            {type: 'link', content: '👉 jane.design/doctorcare'},
        ],
        publishedAt: new Date('2024-05-06 13:15')
    },
]

function App() {

  return (
    <>
        <Header/>
        <div className={styles.wrapper}>
            <Sidebar/>
            <main>
                {
                    posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })
                }
            </main>

        </div>
    </>
  )
}

export default App
