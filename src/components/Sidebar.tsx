import styles from './Sidebar.module.css'
import {PencilLine} from "phosphor-react";
import {Avatar} from "./Avatar.tsx";

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1543013309-0d1f4edeb868?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Background user"
            />
            <div className={styles.profile}>
                <Avatar avatar={"Mazor-Eddias"}/>
                <strong>Eddie Dias</strong>
                <span>Full Stack Developer</span>
            </div>
            <footer>
                <a href="/edit-profile">
                    <PencilLine size={20}/> Edit Profile
                </a>
            </footer>
        </aside>
    )
}