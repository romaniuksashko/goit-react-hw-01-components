import style from "./FriendListItem.module.css";

function FriendListItem({ friends }) {
  return (friends.map(({avatar, name, isOnline, id}) => {
    return (<li className={style.item} key={id}>
      <span className={style.status}>{isOnline}</span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>);
    })
  );
};

export default FriendListItem;