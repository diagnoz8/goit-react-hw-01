export default function Profile(props) {
    const { name, tag, location, image, stats } = props;
    const { followers, views, likes } = stats;
    return (
        <div>
            <div>
                <img src={image} alt="user avatar" />
                <p>{name}</p>
                <p>"@"{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                <li><span>Followers</span><span>{followers}</span></li>
                <li><span>Views</span><span>{views}</span></li>
                <li><span>Likes</span><span>{likes}</span></li>
            </ul>
        </div>
    )
}