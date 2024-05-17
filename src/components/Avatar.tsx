import styles from './Avatar.module.css'
import {ImgHTMLAttributes} from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
    avatar: string;
}

export const Avatar = ({avatar, hasBorder = true, alt, ...props}: AvatarProps) => {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={`https://github.com/${avatar}.png`}
            alt={alt}
            {...props}
        >

        </img>
    )
}