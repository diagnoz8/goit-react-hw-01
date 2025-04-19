import css from "./Profile.module.css"
import clsx from "clsx";
export default function Profile(props) {
    const { name, tag, location, image, stats } = props;
    const { followers, views, likes } = stats;
    return (
        <div className={clsx(css.container)}>
            <div>
                <img src={image} alt="user avatar" className={clsx(css.image)} />
                <p className={clsx(css.name)}>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul className={clsx(css.stats)}>
                <li className={clsx(css.stat)}><span>Followers</span><span>{followers}</span></li>
                <li className={clsx(css.stat)}><span>Views</span><span>{views}</span></li>
                <li className={clsx(css.stat)}><span>Likes</span><span>{likes}</span></li>
            </ul>
        </div>
    )
}